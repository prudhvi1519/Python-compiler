from django.shortcuts import render
import traceback
from django.http import HttpResponse
from io import StringIO
from contextlib import redirect_stdout, redirect_stderr
import sys
import io

def execute_code(code, user_input):
    try:
        output_buffer = StringIO()
        input_buffer = StringIO(user_input)

        with redirect_stdout(output_buffer), redirect_stderr(output_buffer):
            import builtins
            original_input = builtins.input
            builtins.input = lambda prompt='': input_buffer.readline().strip()
            
            exec(code)
            
            builtins.input = original_input

        output = output_buffer.getvalue()
    except Exception as e:
        output = f"Error: {str(e)}\n{traceback.format_exc()}"
    return output

def index(request):
    return render(request, 'index.html')

def runcode(request):
    if request.method == 'POST':
        code = request.POST.get('codearea')
        user_input = request.POST.get('userinput', '')
        output = execute_code(code, user_input)
        return render(request, 'index.html', {'code': code, 'output': output, 'userinput': user_input})
    return render(request, 'index.html')
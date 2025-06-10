# Python Compiler

An interactive Python code editor and compiler built with Django and CodeMirror.  
**Users can write Python code, provide input, run the code, and see the output in a clean and user-friendly interface.**

---

## 🛠️ Technologies Used

- **Django**: Python web framework powering the backend.
- **CodeMirror**: A versatile code editor implemented in JavaScript for syntax highlighting and code editing.
- **HTML/CSS/JavaScript**: Frontend for layout, styling, and interactivity.
- **Bootstrap**: For responsive design.
- **Python**: The language being compiled and executed.

---

## 🎮 Features

- **Code Editor:** Syntax-highlighted Python code editor with line numbers and indentation support.
- **User Input:** Ability to provide custom input for the Python program.
- **Run Code:** Execute Python code on the server and display output.
- **Output Display:** Shows output or errors with styled text area.
- **Responsive Layout:** Works well on desktop and mobile devices.

---

## 💻 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/prudhvi1519/Python-compiler.git
   ```

3. Navigate to the project directory:  
   ```bash
   cd "Python Compiler"
   ```

5. Create and activate a virtual environment (recommended):  
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

6. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
   > (If you don't have requirements.txt, install Django manually: `pip install django`)

8. Run migrations:
   ```bash
   python manage.py migrate
   ```

9. Run the development server:
   ```bash
   python manage.py runserver
   ```

10. Open your browser and go to:
    ```bash
    http://127.0.0.1:8000/
    ```

---

## 🤖 How It Works

- **Frontend:** Uses CodeMirror as the code editor with Python syntax highlighting.
- **Backend:** Django receives the submitted code and user input, executes the code securely on the server.
- **Output Handling:** The program output or error messages are sent back and displayed in the output textarea.
- **Form Submission:** Uses POST requests with CSRF protection to run the code safely.

---

## 👥 Contributing

1. Fork the repository.

2. Clone your fork.

3. Create a new branch (`git checkout -b feature-name`).

4. Make your changes and commit (`git commit -m "Add new feature"`).

5. Push to your branch (`git push origin feature-name`).

6. Create a pull request on GitHub.

---

## 📜 License
This project is open-source and available under the **MIT License**.

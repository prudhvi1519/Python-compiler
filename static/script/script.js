var codeEditor = CodeMirror.fromTextArea(document.getElementById("codearea"), {
    mode: "python",
    lineNumbers: true,
    indentUnit: 4,
    extraKeys: { Tab: "indentMore", "Shift-Tab": "indentLess" },
});
codeEditor.setSize("100%", "100%");

window.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById("output");

    if (output.value.trim() !== "") {
        output.classList.add("output-active");
    }

    // Add green shadow when focused
    output.addEventListener("focus", function () {
        if (output.value.trim() !== "") {
            output.classList.add("output-active");
        }
    });

    // Remove green shadow when clicking anywhere outside
    document.addEventListener("click", function (e) {
        if (e.target !== output) {
            output.classList.remove("output-active");
        }
    });
});

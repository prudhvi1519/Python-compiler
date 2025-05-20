var codeEditor = CodeMirror.fromTextArea(document.getElementById("codearea"), {
    lineNumbers: true,
    mode: "python",
    theme: "default",
    indentUnit: 4,
    indentWithTabs: false,
    autofocus: true,
    extraKeys: { Tab: "indentMore", "Shift-Tab": "indentLess" }
});

codeEditor.setSize("100%", "100%");

// No need to set default value here anymore because Django sets it on page load

document.querySelector('form').addEventListener('submit', function() {
    codeEditor.save();  // sync editor content to textarea before submit
});

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

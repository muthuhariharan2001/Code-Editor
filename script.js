function run() {
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
}

function insertTextAtCursor(textArea, text) {
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    textArea.value = textArea.value.substring(0, startPos) + text + textArea.value.substring(endPos);
    textArea.selectionStart = textArea.selectionEnd = startPos + text.length / 2;
}

document.getElementById('html-code').addEventListener('keyup', function (event) {
    if (event.key === '<') {
        insertTextAtCursor(this, '>');
    } else if (event.key === '/') {
        const value = this.value;
        const lastIndex = value.lastIndexOf('<');
        if (lastIndex !== -1 && value[lastIndex + 1] !== '/') {
            const tagName = value.substring(lastIndex + 1, value.length);
            if (!tagName.includes(' ')) {
                insertTextAtCursor(this, `</${tagName}>`);
            }
        }
    }
});

document.getElementById('css-code').addEventListener('keyup', function (event) {
    if (event.key === '{') {
        insertTextAtCursor(this, '}');
    }
});


function toggleAlignment() {
  const container = document.querySelector(".container");
  if (container.classList.contains("portrait")) {
    container.classList.remove("portrait");
    container.classList.add("landscape");
  } else {
    container.classList.remove("landscape");
    container.classList.add("portrait");
  }
}

function run() {
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");
    let output = document.getElementById("output");

    // Save code to local storage
    localStorage.setItem('htmlCode', htmlCode.value);
    localStorage.setItem('cssCode', cssCode.value);
    localStorage.setItem('jsCode', jsCode.value);

    // Retrieve code from local storage
    let savedHtml = localStorage.getItem('htmlCode') || '';
    let savedCss = localStorage.getItem('cssCode') || '';
    let savedJs = localStorage.getItem('jsCode') || '';

    // Display output
    output.contentDocument.body.innerHTML = savedHtml + "<style>" + savedCss + "</style>";
    output.contentWindow.eval(savedJs);
}

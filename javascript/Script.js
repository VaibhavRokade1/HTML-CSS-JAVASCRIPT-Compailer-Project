function compileCode() {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
  const jsCode = `<script>${document.getElementById("jsCode").value}<\/script>`;

  const output = document.getElementById("output");
  output.contentDocument.open();
  output.contentDocument.write(htmlCode + cssCode + jsCode);
  output.contentDocument.close();
}

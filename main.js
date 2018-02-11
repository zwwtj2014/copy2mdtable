/**
 * whereToPaste: HTMLElement:
 *  @example `whereToPaste = document.getElementById("new_comment_field");`
 */
function copyhtml2md(whereToPaste) {
  if (whereToPaste == null) {
    throw new Error(whereToPaste + " must be non-null.");
  }

  function html2md(html) {}
  function pasteClipboardData(md) {}

  ["paste", "cut"].forEach(eName => {
    whereToPaste.addEventListener(
      eName,
      function(e) {
        e = e || window.event;
        var clipboardData = e.clipboardData || window.clipboardData;
        if (clipboardData.types.indexOf("text/html") > -1) {
          var html = clipboardData.getData("text/html");
          pasteClipboardData(html2md(html));
          e.preventDefault();
        }
      },
      false
    );
  });
}

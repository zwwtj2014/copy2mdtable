/**
 * whereToPaste: HTMLElement:
 *  @example `whereToPaste = document.getElementById("new_comment_field");`
 */
function copyhtml2md(whereToPaste) {
  if (whereToPaste == null) {
    throw new Error(whereToPaste + " must be non-null.");
  }

  function html2md(html) {
    let mdStr = "";
    let removeStyleHtml = html.replace(/style=\".*?\"/ig, "");

    let parser = new DOMParser();
    const doc = parser.parseFromString(removeStyleHtml, "text/html");
    // thead
    const thead = (doc.getElementsByTagName("thead") || [])[0];
    if (thead) {
      const theadTds = thead.getElementsByTagName('td');
      (theadTds || []).reduce();
    }

    // tbody
    let tbody = doc.getElementsByTagName("tbody");


  }

  function pasteClipboardData(md) {}

  whereToPaste.addEventListener(
    "paste",
    function (e) {
      e = e || window.event;
      let clipboardData = e.clipboardData || window.clipboardData;
      if (clipboardData.types.indexOf("text/html") > -1) {
        let html = clipboardData.getData("text/html");
        let
          pasteClipboardData(html2md(html));
        e.preventDefault();
      }
    },
    false
  );
}
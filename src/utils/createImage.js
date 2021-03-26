import domtoimage from "dom-to-image";

const b64toBlob = (
  b64Data,
  contentType = "image/png",
  sliceSize = 512
) => {
  var startIndex = b64Data.indexOf("base64,") + 7;
  var b64 = b64Data.substr(startIndex);
  const byteCharacters = window.atob(b64);
  const byteArrays = [];

  for (
    let offset = 0;
    offset < byteCharacters.length;
    offset += sliceSize
  ) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export async function Export() {
  let node = document.querySelector(".primary-background");
  let CodeWidth = node.clientWidth;
  let DivPrism = node.childNodes;
  let widthPrism = DivPrism[1];

  //Get computed style for operation mathematics with width and padding
  let cssPB = getComputedStyle(node, null);

  let watermark = document.querySelector(".watermark").style;
  watermark.paddingRight = "10px";
  watermark.right = "revert";
  watermark.left = `${cssPB.getPropertyValue("padding")}`;

  //options for dom-to-image
  let options = {
    quality: 1.0,
    style: {
      margin: "auto",
    },
    filter: (node) => node.className !== "line-numbers-rows",
    width: (() => {
      if (CodeWidth < 576) {
        [...document.querySelectorAll(".prism-live")].forEach((e) => {
          e.style.width = `${
            650 - parseInt(cssPB.getPropertyValue("padding")) * 2
          }px`;
          e.style.overflow = "none ";
        });

        watermark.width = `${
          650 - parseInt(cssPB.getPropertyValue("padding")) * 2
        }px`;

        node.style.overflow = "hidden";

        return 650;
      } else {
        [...document.querySelectorAll(".prism-live")].forEach((e) => {
          e.style.width = `${widthPrism.offsetWidth}px`;
          e.style.overflow = "none ";
        });
        watermark.width = `${
          node.offsetWidth -
          parseInt(cssPB.getPropertyValue("padding")) * 2
        }px`;
        return node.offsetWidth;
      }
    })(),
  };

  try {
    let res = await domtoimage.toPng(node, options);
    
    const ok = true;
    const mblob = b64toBlob(res);
    const blobUrl = URL.createObjectURL(mblob);

    /*Reset styles*/
    watermark.width = "auto";
    watermark.paddingRight = "0";
    watermark.right = "45px";
    watermark.left = "revert";
    [...document.querySelectorAll(".prism-live")].forEach((e) => {
      e.style.width = "100%";
      e.style.overflow = "none";
     
    });

    return {ok, blobUrl };
  } catch (error) {
    console.error("oops, something went wrong!", error);
  }
}

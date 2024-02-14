var iphoneImage = document.getElementById("frame");

setInterval(() => {
  if (iphoneImage.src.indexOf("/screenshot2-2x.png") !== -1) {
    iphoneImage.src = "./a.jpg";
  } else if (iphoneImage.src.indexOf("/a.jpg") !== -1) {
    iphoneImage.src = "./b.jpg";
  } else if (iphoneImage.src.indexOf("/b.jpg") !== -1) {
    iphoneImage.src = "./c.jpg";
  } else if (iphoneImage.src.indexOf("/c.jpg") !== -1) {
    iphoneImage.src = "./d.jpg";
  } else if (iphoneImage.src.indexOf("/d.jpg") !== -1) {
    iphoneImage.src = "./f.jpg";
  } else if (iphoneImage.src.indexOf("/f.jpg") !== -1) {
    iphoneImage.src = "./g.jpg";
  } else {
    iphoneImage.src = "./screenshot2-2x.png";
  }
}, 2000);

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("html").classList.add("webp");
    } else {
      document.querySelector("html").classList.add("no-webp");
    }
  });
}

const playBtn = document.querySelector(".video-play");
const	video = document.querySelector(".video");
	playBtn.addEventListener('click', function() {
		video.play();
		video.setAttribute('controls', "controls");
		playBtn.style.display="none";
	});
	video.addEventListener('ended', function() {
		this.src = this.src;
		playBtn.style.display = "block";
		video.removeAttribute('controls');
	});
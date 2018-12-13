function imagesFadeGallery () {
  let current = 0,
    container = document.querySelector(".promo__gallery"),
    slides = container.getElementsByTagName("img");

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
  }, 7000);
}

$(document).ready(imagesFadeGallery);
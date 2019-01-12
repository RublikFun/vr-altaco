import AOS from "libs/aos/aos";

$(window).on("load", function() {
  AOS.init({
    offset: 10,
    duration: 400,
    easing: "ease",
    delay: 100,
    disable: "mobile",
    once: true
  });
});
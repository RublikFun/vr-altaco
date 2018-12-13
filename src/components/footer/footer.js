function scrollTop () {
  const link = $(".footer__scrolltop");

  const scroll = function (e) {
    e.preventDefault();
    $("html, body").animate({ 
      scrollTop: 0 
    }, 800);
  };

  link.on('click', scroll)
}

$(document).ready(scrollTop);
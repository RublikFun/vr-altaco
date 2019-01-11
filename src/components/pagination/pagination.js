function pagination () {
  $(document).ready(function () {
    $('.pagination__elem > a').bind('click', function (e) {
      e.preventDefault();

      var target = $(this).attr("href"); 
      
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 600, function () {
        location.hash = target; 
      });

      return false;
    });
  });

  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    
    $('section').each(function (i) {
      if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
        $('.pagination a.active').removeClass('active');
        $('.pagination a').eq(i).addClass('active');
      }
    });
  }).scroll();
}

$(document).ready(pagination);
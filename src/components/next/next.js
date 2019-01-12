function next () {
  const elem = $('a.next');
  let nextSection = '';
  
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function (i) {
      if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
        nextSection = '#' + $(this).next('section').attr('id');

        if ($(this).attr('id') == 'about') {
          elem.stop().fadeOut('fast');
        } else {
          elem.stop().fadeIn('fast').attr('href', nextSection);
        }        
      }      
    });
  }).scroll();
}

$(document).ready(next);


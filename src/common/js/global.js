$('a[data-scroll]').on('click', function (event) {
  let target = $(this.getAttribute('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top + 2
    }, 1000);
  }
});

window.projectHover = function (wrapper, elem) {
  const parent = $(wrapper);

  const show = function () {
    const a = $(this).find(elem);

    a.addClass('active');
  };
  const hide = function () {
    const a = $(this).find(elem);

    a.removeClass('active');
  };

  parent.mouseover(show);
  parent.mouseleave(hide);
};

$(document).ready(function () {
  projectHover('.samples__item', '.sample');
});


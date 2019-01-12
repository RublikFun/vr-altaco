function sideMenu() {
  const 
    wrap = $('.side-menu'),
    burger = wrap.find('.side-menu__burger'),
    menu = wrap.find('.side-menu__nav');

  const showHide = function() {
    menu.stop().slideToggle('fast');
    wrap.toggleClass("side-menu_active");
  };

  burger.click(showHide); 
}

$(document).ready(sideMenu);
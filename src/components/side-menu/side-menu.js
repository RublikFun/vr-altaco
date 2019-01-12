function sideMenu() {
  const 
    wrap = $('.side-menu'),
    burger = wrap.find('.side-menu__burger'),
    menu = wrap.find('.side-menu__nav');

  const showHide = function() {
    menu.stop().slideToggle('fast');
  };

  burger.click(showHide); 
}

$(document).ready(sideMenu);
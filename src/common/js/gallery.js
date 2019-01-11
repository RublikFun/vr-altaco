window.initGlobalFancybox = function () {
  $('[data-fancybox]').fancybox({  
    buttons: [    
      'close',
    ],
    thumbs : {
      autoStart : false
    },    
    hideScrollbar: false,
    baseClass: 'fancy-altaco',
    infobar: false,
    animationEffect: "fade",
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
      "</button>",

      // Arrows
      arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<svg data-name="prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg>' +
      "</button>",

      arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<svg data-name="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823"><path d="M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"/></svg>' +
      "</button>",
    },
    baseTpl:
    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +    
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-stage">'+
          '<div class="fancybox-navigation">{{arrows}}</div>' +
          '<div class="fancybox-caption"></div>' +
        '</div>' +
      "</div>" +
    "</div>",  
  });
};

$(document).ready(initGlobalFancybox);

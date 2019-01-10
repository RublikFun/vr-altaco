const
  $slider = $('.gallery__slider'),
  $owlNav = $('.gallery__nav');

window.addEventListener('load', function () {
  $slider
    .owlCarousel({
      items: 1,
      dots: 1,
      nav: 1,
      smartSpeed: 1000,
      navElement: 'div',
      navText: ['<svg data-name="prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg>', '<svg data-name="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823"><path d="M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"/></svg>'],
      navContainer: $owlNav,
      mouseDrag: 0,
      loop: 1,
    });
});

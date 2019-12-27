$(function() {

  //Запуск карусели для планшета и мобильной версии
  if (window.innerWidth < 768) {
    console.log('карусель');
    var caruseladvantageslist = document.querySelector('.advantages__list')
    if (caruseladvantageslist) {
      // caruseladvantageslist.classList.add('carousel');
      console.log('карусель1');
    }
  }

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    autoWidth: true,
    center: true,
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
      },
      577: {
        autoplay:false,
      },
      991: {
        items: 2,
      }
    }
  });

});


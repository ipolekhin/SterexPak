$(function() {

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

  //Показать весь текст скрыть
  if (window.innerWidth < 576) {
    var mobileAboutText = document.querySelectorAll('.about__text p');
    var showAllText = document.querySelector('.show-all-text');

    if (mobileAboutText && showAllText) {

      //функция - скрыть все параграфы начиная со первого i - итыый параграф
      var listAboutText = function (display) {
        for (var i = 0; i < mobileAboutText.length; i++) {
          if (i > 0) {
            mobileAboutText[i].style.display = display;
          }
        }
      };


      listAboutText('none');

      //событие клик, показать скрыть параграфы
      showAllText.addEventListener('click', function (e) {
        e.preventDefault();
        if (showAllText.classList.contains('show')) {
          showAllText.classList.remove('show');

          listAboutText('none');
        } else {
          showAllText.classList.add('show');

          listAboutText('block');
        }
      });
    }
  }

  $('.show-all-courses').click(function (e) {
    e.preventDefault();
    $(this).siblings('.courses-item').toggleClass('show');
    $(this).toggleClass('show');
    if ($(this).hasClass('show')) {
      $(this).text('Скрыть курсы');
    } else {
      $(this).text('Посмтреть все курсы');
    }
  });

});


var typed = new Typed('.type', {
  strings: ['Devoloper', 'Profesional Coder', 'Designer', 'Profesional Coder'],
  typeSpeed: 10,
  backSpeed: 10,
  startDelay: 100,
  loop: true,
  shuffle: true,
  smartBackspace: true,
  backDelay: 700,
});
// portfolio mixitup
var mixer = mixitup('.cont');

// scroll back to top
$('body').materialScrollTop();

// smoot scroll
$('a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 0
      }, 1000);
      return false;
    }
  }
});


// scroll menu fixed

$(function () {
  $(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 100) {
      $('.menu').addClass('menu_fixed')
    }
    else {
      $('.menu').removeClass('menu_fixed')
    }
  });
});


$(function () {
  // Banner slider start
  $('.test_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    fade:true,
    nextArrow:'<i class="fas fa-arrow-right next_arrow"></i>',
    prevArrow:'<i class="fas fa-arrow-left prev_arrow "></i>'
  });
})

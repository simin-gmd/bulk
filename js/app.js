"use strict";

/*
* اپ دش v1.0.0 (https://themeforest.net/user/themetags)
* Copyright 2020 Themetags
* Licensed under ThemeForest License
*/
// TABLE OF CONTENTS
//  1. preloader
//  2. page scrolling feature - requires jQuery Easing plugin
//  3. fixed navbar
//  4. back to top
//  5. counter up js
//  6. Screenshots slider
//  7. our clients logo carousel
//  8. client carousel two
//  9. magnify popup video
// 10. client-testimonial one item carousel
// 11. monthly and yearly pricing switch
// 12. coming soon count
jQuery(function ($) {
  'use strict'; // 1. preloader

  $(window).ready(function () {
    /* preloader */
    $('#preloader').delay(200).fadeOut('fade');
    /* for show if you have question */
    const scrollMas = $('#whatsappmsg')
    const whatsappcall = $('#whatsappcall')
    const balecall = $('#balecall')
    const eitacall = $('#eitacall')

    setTimeout(() => {
      scrollMas[0].style.opacity = "1";
      scrollMas[0].style.right = "30px";
      setTimeout(() => {
        scrollMas[0].style.opacity = "0";
        scrollMas[0].style.right = "-100px";

      }, 7000);
      whatsappcall[0].style.bottom = "138px"
      balecall[0].style.bottom = "70px"
      eitacall[0].style.bottom = "10px"
    }, 9000);
  }); // 2. page scrolling feature - requires jQuery Easing plugin

  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
      }, 900, 'easeInOutExpo');
      event.preventDefault();
    });
  }); // 3. fixed navbar

  $(window).on('scroll', function () {
    // checks if window is scrolled more than 2px, adds/removes nav-active
    const navbar = document.querySelector('.fixed-top');
    if ($(this).scrollTop() > 2) {
      navbar.classList.add('nav-active');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('nav-active');
      navbar.classList.add('bg-transparent');
    } // checks if window is scrolled more than 500px, adds/removes top to target class

    const robika = $('.robika');
    const bale = $('.bale');
    const eita = $('.eita');
    const soroush = $('.soroush');
    const telegram = $('.telegram');
    const whatsapp = $('.whatsapp');

    // console.log(bale[0]);
    // console.log(telegram);
    // console.log(whatsapp);

    if ($(this).scrollTop() > 10) {
      robika[0].classList.remove('animate__fadeInDown');
      robika[0].classList.add('animate__fadeOutUp');

      eita[0].classList.remove('animate__fadeInLeft');
      eita[0].classList.add('animate__fadeOutLeft');

      soroush[0].classList.remove('animate__fadeInBottomLeft');
      soroush[0].classList.add('animate__fadeOutBottomLeft');

      telegram[0].classList.remove('animate__fadeInTopRight');
      telegram[0].classList.add('animate__fadeOutTopRight');

      whatsapp[0].classList.remove('animate__fadeInRight');
      whatsapp[0].classList.add('animate__fadeOutRight');

      bale[0].classList.remove('animate__fadeInUp');
      bale[0].classList.add('animate__fadeOutDown');
    } else {
      robika[0].classList.add('animate__fadeInDown');
      robika[0].classList.remove('animate__fadeOutUp');

      eita[0].classList.add('animate__fadeInLeft');
      eita[0].classList.remove('animate__fadeOutLeft');

      soroush[0].classList.remove('animate__fadeOutBottomLeft');
      soroush[0].classList.add('animate__fadeInBottomLeft');

      telegram[0].classList.remove('animate__fadeOutTopRight');
      telegram[0].classList.add('animate__fadeInTopRight');

      whatsapp[0].classList.remove('animate__fadeOutRight');
      whatsapp[0].classList.add('animate__fadeInRight');

      bale[0].classList.remove('animate__fadeOutDown');
      bale[0].classList.add('animate__fadeInUp');

    }


    //checks if window is scrolled more than 1000px, adds/removes top to target class
    // const scrollMas = $('#whatsappmsg')

    // if ($(this).scrollTop() > 0) {
    // console.log(scrollMas[0]);

    // scrollMas[0].classList.add('opacity');
    // scrollMas[0].style.opacity = "1";
    // setTimeout(() => {
    //   scrollMas[0].style.opacity = "0";
    // }, 5000);
    // }
  });
  // 4. back to top

  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target'); // animate

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });
  } // 5. counter up js


  $('.count-number').rCounter(); // 6. Screenshots slider

  $('.screen-carousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1200: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  }); // 7. our clients logo carousel

  $('.client-testimonial-2').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    autoplayTimeout: 4500,
    slideTransition: 'linear',
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });

  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 8. client carousel two

  $('.clients-carousel-2').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    autoplayTimeout: 4500,
    slideTransition: 'linear',
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 9. magnify popup video

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  }); // 10. client-testimonial one item carousel

  $('.client-testimonial-1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1
  }); // 11. monthly and yearly pricing switch

  $("#js-contcheckbox").change(function () {
    if (this.checked) {
      $('.monthly-price').css('display', 'none');
      $('.yearly-price').css('display', 'block');
      $('.afterinput').addClass('text-success');
      $('.beforeinput').removeClass('text-success');
    } else {
      $('.monthly-price').css('display', 'block');
      $('.yearly-price').css('display', 'none');
      $('.afterinput').removeClass('text-success');
      $('.beforeinput').addClass('text-success');
    }
  }); // 12. coming soon count

  $('#clock').countdown('2022/01/30', function (event) {
    $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">روز</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">ساعت</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">دقیقه</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">ثانیه</h5>' + '</div>' + '</div>'));
  }); // 13. Get a quote

  if ($("#getQuoteFrm").length) {
    $("#getQuoteFrm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        submitMSG(false, '.sign-up-form-wrap');
      } else {
        // everything looks good!
        event.preventDefault();
        submitGetQuoteForm();
      }
    });
  }

  function submitGetQuoteForm() {
    // Initiate Variables With Form Content
    var name = $('#getQuoteFrm input[name="name"]').val();
    var email = $('#getQuoteFrm input[name="email"]').val();
    var message = $('#getQuoteFrm textarea[name="message"]').val();

    if (!$('#getQuoteFrm #exampleCheck1').is(":checked")) {
      submitMSG(false, '.sign-up-form-wrap');
      return;
    }

    $.ajax({
      type: "POST",
      url: "libs/quote-form-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function success(text) {
        if (text == "success") {
          quoteFormSuccess();
        } else {
          submitMSG(false, '.sign-up-form-wrap');
        }
      }
    });
  }

  function quoteFormSuccess() {
    $("#getQuoteFrm")[0].reset();
    submitMSG(true, '.sign-up-form-wrap');
  } // 14. contact form


  if ($("#contactForm").length) {
    $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        submitMSG(false, '#contact');
      } else {
        // everything looks good!
        event.preventDefault();
        submitContactForm();
      }
    });
  }

  function submitContactForm() {
    // Initiate Variables With Form Content
    var name = $('#contactForm input[name="name"]').val();
    var email = $('#contactForm input[name="email"]').val();
    var message = $('#contactForm textarea[name="message"]').val();
    $.ajax({
      type: "POST",
      url: "libs/contact-form-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function success(text) {
        if (text == "success") {
          formSuccess();
        } else {
          submitMSG(false, '#contact');
        }
      }
    });
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, '#contact');
  }

  function submitMSG(valid, parentSelector) {
    if (valid) {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-danger').addClass('alert-success').text('پیام شما با موفقیت ارسال شد.');
    } else {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-success').addClass('alert-danger').text('خطایی در فرم یافت شد لطفا دوباره بررسی کنید');
    }
  }

  $(".navbar-collapse ul li a").on("click", function (e) {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar-collapse").removeClass("show");
      }
    });
  });
}); // JQuery end

const buyPlanBtn = document.querySelectorAll(".buy-now")
const cartboxAnimation = document.querySelectorAll(".cartbox-animate")
const modal = document.querySelector(".modal-box")
const buyPage = document.querySelector(".buy-page")
const notNums = document.querySelectorAll(".not-num")
const notTexts = document.querySelectorAll(".not-text")
const phoneInput = document.querySelector("#phone-input")
const closeBuyPage = document.querySelector("#close-buy__page")
const features = document.querySelector('#features')
const price = document.querySelector('#pricing')
const featureClick = document.querySelector('[data-scroll=feature]')
const priceClick = document.querySelector('[data-scroll=price]')
// priceClick.addEventListener('click', offsetTopP)
// function offsetTopP() {
//   window.scrollTo(0, price.offsetTop - 50)
// }

// featureClick.addEventListener('click', offsetTopF)
// function offsetTopF() {
//   window.scrollTo(0, features.offsetTop)
// }

// closeBuyPage.addEventListener("click" , e => {
//   buyPage.classList.remove("active")
// })

notNums.forEach(num => {
  num.addEventListener("keypress", e => formValidation(e, "no-number"))
})

notTexts.forEach(text => {
  text.addEventListener("keypress", e => formValidation(e, "no-text"))
})

// phoneInput.addEventListener("keyup" , e => validationPhoneNum(e))

function validationPhoneNum(e) {
  if (phoneInput.value.startsWith("09")) {
    return
  }
  else {
    console.log("اشتباهه")
  }
}

function formValidation(target, status) {
  if (status === "no-number") {
    if (isNaN(target.key)) {
      return
    }
    else {
      target.preventDefault()
    }
  }
  else if (status === "no-text") {
    if (!isNaN(target.key)) {
      return
    }
    else {
      target.preventDefault()
    }
  }
}

cartboxAnimation.forEach(cart => {
  cart.addEventListener("click", e => {
    if (e.target.className.includes("cartbox-animate "))
      cartboxActive(e.target)
    else if (e.target.className.includes("cartbox__text"))
      cartboxActive(e.target.parentElement)
    else if (e.target.nodeName === "SPAN")
      cartboxActive(e.target.parentElement.parentElement)
    else if (e.target.nodeName === "I")
      cartboxActive(e.target.parentElement.parentElement.parentElement)
    else if (e.target.nodeName === "P")
      cartboxActive(e.target.parentElement.parentElement.parentElement)
    else
      cartboxActive(e.target.parentElement.parentElement)
  })
})

function cartboxActive(target) {

  if (target.querySelector(".fa-angle-up")) {
    //close
    const content = target.querySelector(".cartbox-animate__content")
    const iconAngle = target.querySelector(".fa")
    content.classList.remove("active")
    iconAngle.classList.add("fa-angle-down")
    iconAngle.classList.remove("fa-angle-up")
  }
  else {
    //open
    cartboxAnimation.forEach(cart => {
      cart.querySelector(".cartbox-animate__content").classList.remove("active")
      cart.querySelector(".fa").classList.remove("fa-angle-up")
      cart.querySelector(".fa").classList.add("fa-angle-down")
    })
    const content = target.querySelector(".cartbox-animate__content")
    const iconAngle = target.querySelector(".fa")
    content.classList.add("active")
    iconAngle.classList.remove("fa-angle-down")
    iconAngle.classList.add("fa-angle-up")
  }
}

buyPlanBtn.forEach(btn => {
  btn.addEventListener("click", e => showBuyForm(e))
})

function showBuyForm(e) {
  buyPage.classList.add("active")
}

//carousel contact us
var swiper = new Swiper(".mySwiper2", {
  loop: false,
  centeredSlides: true,
  simulateTouch: true,
  speed: 7000,
  waitForTransition: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
      speed: 7000,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 0,
  },
});


// Price filter Section
let pricefilterBtn = document.querySelector('.el-switch-style')
// console.log(pricefilterBtn);
let oneyearView = document.querySelector('.oneyear')
let sixmonthView = document.querySelector('.sixmonth')
// pricefilterBtn.addEventListener('click', filterPrice)
function filterPrice() {
  oneyearView.classList.toggle('d-none')
  sixmonthView.classList.toggle('d-none')
}
// pricefilterBtn = Array.from(pricefilterBtn)
// if (pricefilterBtn.checked == true) {
//   console.log(pricefilterBtn);
// }
// else {
//   oneyearView.classList.add('d-none')
//       sixmonthView.classList.remove('d-none')
// }
// function filterPrice(data) {
//   if (data.getAttribute('data-filter') == 'oneyear') {
//     pricefilterBtn.forEach(el => {
//       el.classList.toggle('active')
//       oneyearView.classList.remove('d-none')
//       sixmonthView.classList.add('d-none')
//     })
//   }
//   else {
//     pricefilterBtn.forEach(el => {
//       el.classList.toggle('active')
//       oneyearView.classList.add('d-none')
//       sixmonthView.classList.remove('d-none')

//     })
//   }

// }

/* slider */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



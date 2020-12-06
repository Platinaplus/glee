//SLIDER TOP HOMEPAGE---------------------------------

$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 3000,
  });

  //FILTER PRODUCTS HOMEPAGE----------------------------

  if ($(".new-design__cards").length) {
    var mix1 = mixitup(".new-design__cards", {
      selectors: {
        control: ".new-design__control",
      },
      callbacks: {
        onMixStart: function (state, futureState) {
          $(".new-design__control").removeClass("on");
          $(event.target).addClass("on");
        },
      },
    });
  }

  if ($(".products__cards").length) {
    var mix2 = mixitup(".products__cards", {
      selectors: {
        control: ".products__control",
      },
      callbacks: {
        onMixStart: function (state, futureState) {
          $(".products__control").removeClass("on");
          $(event.target).addClass("on");
        },
      },
    });
  }

  // RANGE PRICE-----------------------------------------
  $(".filter__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onChange: function (data) {
      $(".filter__from").text(data.from);
      $(".filter__to").text(data.to);
    },
    onStart: function (data) {
      $(".filter__from").text(data.from);
      $(".filter__to").text(data.to);
    }
  });
  
  // RAITING

  $(".filter-recent__stars").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,

  });

  $(".products__stars, .details__stars").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px"

  });

  $('.buttons__view').on('click', function () {
    $('.buttons__view').removeClass('buttons__view--active');
    $(this).addClass('buttons__view--active');
  });
  
  $('.products__button').on('click', function () {
    $(this).toggleClass('products__button--active');
  });

  $('.buttons__view--list').on('click', function () {
    $('.catalog__inner').addClass('catalog__inner--list')
    $('.products__card').addClass('products__card--list')
    $('.catalog__products').addClass('catalog__products--list')
  });

  $('.buttons__view--grid').on('click', function () {
    $('.catalog__inner').removeClass('catalog__inner--list')
    $('.products__card').removeClass('products__card--list')
    $('.catalog__products').removeClass('catalog__products--list')
  });


  //GOODS IN CART AND IN WISHLIST

  const addTo = function (selector) {
    let value = $(selector).attr('data-value');
    value++;
    $(selector).attr('data-value', value).text(value)
  };

  const anime = function(selector, modalSelector, text) {
    $(selector)
    .clone()
    .css({
      'position': 'absolute',
      'z-index': '999'
    })
    .appendTo($(selector).parent())
    .animate({
      top: '-500px',
      left: '500px',
      opacity:0
    },2000, function() {
      $(this).remove();})
      $(modalSelector).html(text + '<span>+</span>').show(1500).hide(600)
      // .animate({
      //   opacity:'1'
      // });
      $(modalSelector +' span').on('click', function () {
        $(modalSelector).hide(300);
      });
      // setInterval(function() {
      //   $(modalSelector).hide()
      // }, 3500);
    
  };

  $('.products__button--cart, .products__icon--cart').on('click', function (e) {
    e.preventDefault();
    addTo('.user-nav__num--cart');
    anime('.products__icon--cart', '.user-nav__modal', 'Added to cart !');
  });

  $('.products__button--love, .products__icon--love').on('click', function (e) {
    e.preventDefault();
    addTo('.user-nav__num--love');
    anime('.products__icon--love', '.user-nav__modal', 'Added to wishlist !');
  });

  // SLIDER PRODUCT DETAILS

  $('.details__thumbs').slick({
    asNavFor: '.details__big-photos',
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1,
    vertical:true,
    draggable: false
  });
  $('.details__big-photos').slick({
    asNavFor: '.details__thumbs',
    draggable: false,
    arrows:false,
    fade:true
  });

  // FORM STYLER

  $('.details__input').styler();

  //SLIDER RELATED PRODUCTS

  $('.related__slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    appendArrows: $('.related__nav'),
    prevArrow: '<button type="button"class="related__btn related__prev"></button>',
    nextArrow: '<button type="button"class="related__btn related__next related__btn--active"></button>',
  });

// TABS

$('.details__link').on ('click', function(e) {
  e.preventDefault();
  $('.details__link').removeClass('details__link--active');
  $(this).addClass('details__link--active');
  $('.details__review').removeClass('details__review--active');
  $($(this).attr('href')).addClass('details__review--active');

});



 

});



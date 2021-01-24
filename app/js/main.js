//SLIDER TOP HOMEPAGE---------------------------------

$(function () {

  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.864604567332368, lng: -95.40770262397278 },
    zoom: 8,
  });
}

//HEADER ADAPTIVE MAIN MENU

$('.user-nav__layout--3').on('click', function() {
  $('.menu').toggleClass('show')
});


//HEADER DROPDOWN MENU


let timer;

$(".menu__item--plus, .menu__dropdown").hover( function() {
  clearTimeout(timer);
  $(this).addClass( "drop" );
}, function(){
  timer = setTimeout(function() {
    $('.menu__item--plus').removeClass( "drop" );
  }, 500)
  
});



  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 3000,
  });

  //SEARCH-----------------------------------
  let flag = false;
  $(".user-nav__layout--1").on('click', function() {
    flag = !flag;
    if (flag){
      $('.user-nav__layout-search').addClass('search-show')
    } else {
      $('.user-nav__layout-search').removeClass('search-show')
    }
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

  $('.products__button--cart, .products__icon--cart').on('click', function (e) {
    e.preventDefault();
    addTo('.user-nav__num--cart');
    Swal.fire(
      '',
      'Added to cart!',
      'success'
    )
  });

  $('.products__button--love, .products__icon--love').on('click', function (e) {
    e.preventDefault();
    addTo('.user-nav__num--love');
    Swal.fire(
      '',
      'Added to wishlist!',
      'success'
    )
  });

  // SWEETALERTS

  $('.user-nav__layout--3').on('click', function () {
    Swal.fire(
      'This is demo',
      'The options button!',
      'success'
    )
  });

  // SLIDER PRODUCT DETAILS

  $('.details__thumbs').slick({
    asNavFor: '.details__big-photos',
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1,
    vertical:true,
    draggable: false,

  });
  $('.details__big-photos').slick({
    asNavFor: '.details__thumbs',
    draggable: false,
    arrows:false,
    fade:true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          draggable: true
        }
      }]
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
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow:2,
          slidesToScroll:1
        }
      }]
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



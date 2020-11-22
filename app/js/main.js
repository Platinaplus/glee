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

  var mix1 = mixitup(".new-design__cards", {
    selectors: {
      control: ".new-design__menu-item",
    },
    callbacks: {
      onMixStart: function (state, futureState) {
        $(".new-design__menu-item").removeClass("on");
        $(event.target).addClass("on");
      },
    },
  });

  var mix2 = mixitup(".products__cards", {
    selectors: {
      control: ".products__menu-item",
    },
    callbacks: {
      onMixStart: function (state, futureState) {
        $(".products__menu-item").removeClass("on");
        $(event.target).addClass("on");
      },
    },
  });
});

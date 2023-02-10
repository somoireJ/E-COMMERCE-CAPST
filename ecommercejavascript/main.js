//The code will select all elements with the class "slider-one" that have not been initialized with the Slick slider library, and then apply the Slick slider library to them. This allows for the elements to become "slider" elements and be able to be moved and interacted with.
$(".slider-one")
  .not(".slick-initialized")
  .slick({

    prevArrow: ".site-slider.prev",
    nextArrow: ".site-slider.next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  });

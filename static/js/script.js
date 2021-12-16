//Hide Loading Box (Preloader)
let loader = document.querySelector('.preloader');
setTimeout(() => {
  loader.style.display = "none";
}, 600);


(function($) {
  "use strict";

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function() {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   When Screen is Resized, do
   ========================================================================== */



$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.scroll-top').fadeIn(200);
    } else {
      $('.scroll-top').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.scroll-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 100);
  })
});

});


$('.menu__toggle').click(function(){
  $('.menu__nav').toggleClass('menu__nav--active');
  $(this).toggleClass('menu__toggle--active');
  
});
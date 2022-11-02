
// (function($) {
//     "use strict"; // Start of use strict
  
//     // Smooth scrolling using jQuery easing
//     $('.js-scroll)').click(function() {
//       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: (target.offset().top - 72)
//           }, 1000, "easeInOutExpo");
//           return false;
//         }
//       }
//     });
  
//     // Closes responsive menu when a scroll trigger link is clicked
//     $('.js-scroll').click(function() {
//       $('.navbar-collapse').collapse('hide');
//     });
  
//     // Activate scrollspy to add active class to navbar items on scroll
//     $('body').scrollspy({
//     target: '#mainNav',
//       offset: 75
//     });
  
//   var navbarCollapse = function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-scrolled");
//     } else {
//       $("#mainNav").removeClass("navbar-scrolled");
//     }
//   };
//     // Collapse now if page is not at top
//     navbarCollapse();
    
//     $(window).scroll(navbarCollapse);
  
//     $('.photos').magnificPopup({
//       delegate: 'a',
//       type: 'image',
//       tLoading: 'Loading image #%curr%...',
//       mainClass: 'mfp-img-mobile',
//       gallery: {
//         enabled: true,
//         navigateByImgClick: true,
//         preload: [0, 1]
//       },
//       image: {
//         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//       }
//     });
  
//   })(jQuery); // End of use strict



let header = document.querySelector(".js-header"),
    headerH = document.querySelector(".js-header").clientHeight;



document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add("fixed");
        document.body.style.paddingTop = headerH + 'px';
    } else{
        header.classList.remove('fixed')
        document.body.removeAttribute("style");
    }
}

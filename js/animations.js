/* ------------------------------ Sticky Navbar ----------------------------- */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// // Sticky navbar
// $(document).ready(function() {
//     // console.log(scrollTop);
//     $(window).scroll(function () {   
//       if ($(window).scrollTop() > 744) {
//         $('.navbar').addClass('navbar-default navbar-fixed-top');
//       }
  
//       if ($(window).scrollTop() < 745) {
//         $('.navbar').removeClass('navbar-default navbar-fixed-top');
//       }
//     });
//   });




/* ------------------------- Smooth Scroll Animation ------------------------ */
function scrollAnimate(classLiteral) {
    $(classLiteral).on('click', function(e) {

        console.log(classLiteral);

        e.preventDefault();
    
        var hash = this.hash;
    
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {
            window.location.hash = hash;
        });
      });
}
// Call the function for buttons
scrollAnimate(".navbar ul li a[href^='#']");
scrollAnimate("#section-cover a[href^='#']");
scrollAnimate("#footer .scroll-to-top-button a[href^='#']");



/* ------------------ Waypoint triggered element animations ----------------- */
$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animate__animated animate__fadeInUp');
}, {
    offset: '80%'
});


$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animate__animated animate__fadeInLeft');
}, {
    offset: '80%'
});


$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animate__animated animate__fadeInRight');
}, {
    offset: '80%'
});






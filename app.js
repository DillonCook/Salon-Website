// Scroll down to next section on arrow click
$('.first-arrow').click(() => {
    $('html, body').animate({
        scrollTop: $('.section-2').offset().top
    }, 400);
});

// Scroll up to menu
$('.fa-angle-double-up').click(() => {
    $('html, body').animate({
        scrollTop: $('#top').offset().top
    }, 500);
    
});

// Parallax header image
$(window).scroll(() => {
  let verticalScroll = $(this).scrollTop();
  
  $('.katie-profile').css({
    'transform': 'translate(0px, ' + verticalScroll / 7.5 +'%)'
  });

});


// Vanilla Javascript - Sticky Nav
window.onscroll = function() {
  stickyNav()
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
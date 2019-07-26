// Scroll down to next section on arrow click
$('.fa-angle-double-down').click(() => {
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


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("toggle");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } 
}
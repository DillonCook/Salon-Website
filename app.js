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
    'transform': 'translate(0px, ' + verticalScroll / 8.5 +'%)'
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

// ======================================== Menu toggle ================================
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav');

toggle.addEventListener('click', () => {
if (menu.classList[1] == "menu-show") {
  menu.classList.remove('menu-show');
  menu.classList.add('menu-hide');
} else if (menu.classList[1] == "menu-hide") {
  menu.classList.remove('menu-hide');
  menu.classList.add('menu-show');
}
})

//Smooth Scroll down on menu click

$('#nav-home').click(() => {
  $('html, body').animate({
      scrollTop: $('#top').offset().top
  }, 500);
});

$('#nav-pricing').click(() => {
  $('html, body').animate({
      scrollTop: $('#pricing').offset().top
  }, 500);
});

$('#nav-reviews').click(() => {
  $('html, body').animate({
      scrollTop: $('#reviews').offset().top
  }, 500);
});

$('#nav-contact').click(() => {
  $('html, body').animate({
      scrollTop: $('#hours').offset().top
  }, 500);
});
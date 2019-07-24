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
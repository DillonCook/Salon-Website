// Scroll down to next section on arrow click
$('.fa-angle-double-down').click(() => {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 400);
    
});
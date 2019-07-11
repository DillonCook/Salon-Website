// Scroll down on arrow down click
$('.fa-angle-double-down').click(() => {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 400);
});
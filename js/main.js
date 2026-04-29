;
$(document).ready(function(){
    $('.sidenav').sidenav();
});
document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(1700).fadeOut('slow');

    // Shrink navbar on scroll
    window.addEventListener('scroll', function(){
        var nav = document.getElementById('navbar');
        if (window.scrollY > 60) {
            nav.style.background = 'rgba(15, 23, 42, 1)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.97)';
        }
    });
});


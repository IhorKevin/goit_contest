$(document).ready(function() {

    $('.header').on('click', smoothScroll);
    $('.intro__wrap').on('click', smoothScroll);

    function smoothScroll(e) {
        var target = e.target;
        console.log(target);


        while (target != this) {
            if(target.nodeName == 'A') {
                scrollToHash(target);
                return false;
            }
            target = target.parentNode;
        }
    }

    function scrollToHash(a) {
        var hash = $(a).attr('href');

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 500);
    }
});


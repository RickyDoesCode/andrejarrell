(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#sideNav'
    });

})(jQuery);


const gitalk = new Gitalk({
    clientID: '3d203b790df8ffae149c',
    clientSecret: '5978c49eb122c9d8b44574d4a4d7bc0b90e1de96',
    repo: 'Website',
    owner: 'andrejarrell',
    admin: ['andrejarrell'],
    id: 'gitalk',
    distractionFreeMode: false
});

gitalk.render('gitalk-container')
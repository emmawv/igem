$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $hero = $(".hero");
        $nav.toggleClass('sticky', $(this).scrollTop() > $nav.height() + $hero.height());
    });
});
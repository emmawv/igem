$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $hero = $(".hero");
        $nav.toggleClass('sticky', $(this).scrollTop() > $hero.height());
    });
});
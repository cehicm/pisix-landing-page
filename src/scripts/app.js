(function () {

    const searchIcon = $(".nav__search__icon");
    const searchInput = $('.nav__search__input');
    const closeButton = $('.nav__search__input__close');
    const menuIcon = $(".nav__menu__icon");

    $(menuIcon).on("click", function () {
        menuIcon.nextAll().slideToggle("slow");
    });

    $(searchIcon).on("click", function () {
        $(searchIcon).slideToggle("slow");
        $(searchInput).slideToggle("slow");
        $(closeButton).slideToggle("slow");
    });

    $(closeButton).on("click", function () {
        $(searchIcon).slideToggle("slow");
        $(searchInput).slideToggle("slow");
        $(closeButton).slideToggle("slow");

    });

})(jQuery);
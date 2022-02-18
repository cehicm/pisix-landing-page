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

// Filter images
(function () {
    const $galleryImgs = $('#gallery img');
    const $filterButtons = $('.filter__buttons');
    const taggedImage = {};

    $galleryImgs.each(function () {
        const img = this;
        const tags = $(this).data('tags');

        if (tags) {
            tags.split(',').forEach(function (tagName) {
                if (taggedImage[tagName] == null) {
                    taggedImage[tagName] = [];
                }
                taggedImage[tagName].push(img);
            })
        }
    })

    $('<button/>', {
        text: 'Show All',
        class: 'filter__button filter__button--active',
        click: function () {
            $(this)
                .addClass('filter__button--active')
                .siblings()
                .removeClass('filter__button--active');
            $galleryImgs.show();
        }
    }).appendTo($filterButtons);

    $.each(taggedImage, function (tagName) {
        const $n = $(taggedImage[tagName]).length;
        $('<button/>', {
            text: tagName,
            class: 'filter__button',
            click: function () {
                $(this)
                    .addClass('filter__button--active')
                    .siblings()
                    .removeClass('filter__button--active');
                $galleryImgs
                    .hide()
                    .filter(taggedImage[tagName])
                    .show();
            }
        }).appendTo($filterButtons);
    });
}())
import $ from "jquery";
import slick from "slick-carousel";

//Navigation open search
(function () {
	const searchIcon = $(".nav__search__icon");
	const searchInput = $(".nav__search__input");
	const closeButton = $(".nav__search__input__close");
	const menuIcon = $(".nav__menu__icon");

	$(menuIcon).on("click", function () {
		menuIcon.nextAll().slideToggle("slow");
	});

	$(searchIcon).on("click", function () {
		$(searchIcon).slideToggle("fast");
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
	const $galleryImgs = $("#filter__gallery img");
	const $filterButtons = $(".filter__buttons");
	const taggedImage = {};

	$galleryImgs.each(function () {
		const img = this;
		const tags = $(this).data("tags");

		if (tags) {
			tags.split(",").forEach(function (tagName) {
				if (taggedImage[tagName] == null) {
					taggedImage[tagName] = [];
				}
				taggedImage[tagName].push(img);
			});
		}
	});

	$("<button/>", {
		text: "Show All",
		class: "filter__button filter__button--active",
		click: function () {
			$(this)
				.addClass("filter__button--active")
				.siblings()
				.removeClass("filter__button--active");
			$galleryImgs.show();
		},
	}).appendTo($filterButtons);

	$.each(taggedImage, function (tagName) {
		const $n = $(taggedImage[tagName]).length;
		$("<button/>", {
			text: tagName,
			class: "filter__button",
			click: function () {
				$(this)
					.addClass("filter__button--active")
					.siblings()
					.removeClass("filter__button--active");
				$galleryImgs.hide().filter(taggedImage[tagName]).show();
			},
		}).appendTo($filterButtons);
	});
})();

// Team Slick Carousel
(function () {
	const slickWrapper = $(".slick-slider-wrapper");

	$(slickWrapper).slick({
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
})(jQuery);

// Testimonials Slick Carousel
(function () {
	const customerSlickWrapper = $(".customer");

	$(customerSlickWrapper).slick({
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: `<svg class="arrow arrow--next" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M15.7501 7.27417L0.750099 7.27417" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path opacity="0.4" d="M9.6998 13.2988C9.6998 13.2988 15.7498 10.0378 15.7498 7.27576C15.7498 4.51176 9.6998 1.24976 9.6998 1.24976" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
		prevArrow: `<svg class="arrow arrow--prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.2499 12.2742L19.2499 12.2742" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M10.3002 18.2988C10.3002 18.2988 4.2502 15.0378 4.2502 12.2758C4.2502 9.51176 10.3002 6.24976 10.3002 6.24976" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
		dots: false,
		autoplay: true,
	});
})(jQuery);

//Newsletter subscribe
(function () {
	$("#subscribe-btn").on("click", function () {
		let $this = $(this),
			$inputMessage = $this.siblings(".input-message"),
			$inputEmail = $this.siblings(".input-email"),
			$wrapper = $this.closest(".newsletter__subscribe");

		const errorMessages = {
			emptyField: "This field can't be empty!",
			invalidEmail: "Please enter a valid email",
			success: "Thank you for subscribing!",
		};

		const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		let isValid = $inputEmail.val().match(emailRegex);

		if ($inputEmail.val() === "") {
			$inputMessage.remove();
			$inputEmail.addClass("input-border-error");
			$wrapper.append(
				`<p class="input-message error"> ${errorMessages.emptyField}</p>`
			);
		} else if ($inputEmail.val() === "" || isValid === null) {
			$inputMessage.remove();
			$inputEmail.addClass("input-border-error");
			$wrapper.append(
				`<p class="input-message error"> ${errorMessages.invalidEmail}</p>`
			);
		} else {
			$inputMessage.remove();
			$this.addClass("input-btn--clicked");
			$inputEmail.removeClass("input-border-error");
			$wrapper.append(
				`<p class="input-message success"> ${errorMessages.success}</p>`
			);
		}
	});
})(jQuery);

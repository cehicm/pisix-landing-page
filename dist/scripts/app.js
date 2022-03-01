"use strict";var _jquery=_interopRequireDefault(require("jquery")),_slickCarousel=_interopRequireDefault(require("slick-carousel"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=(0,_jquery.default)(".nav__search__icon"),t=(0,_jquery.default)(".nav__search__input"),r=(0,_jquery.default)(".nav__search__input__close"),s=(0,_jquery.default)(".nav__menu__icon");(0,_jquery.default)(s).on("click",(function(){s.nextAll().slideToggle("fast")})),(0,_jquery.default)(e).on("click",(function(){(0,_jquery.default)(e).slideToggle("fast"),(0,_jquery.default)(t).slideToggle("fast"),(0,_jquery.default)(r).slideToggle("fast"),(0,_jquery.default)(".nav__search").addClass("nav__search--open")})),(0,_jquery.default)(r).on("click",(function(){(0,_jquery.default)(e).slideToggle("fast"),(0,_jquery.default)(t).slideToggle("fast"),(0,_jquery.default)(r).slideToggle("fast"),(0,_jquery.default)(".nav__search").removeClass("nav__search--open")}))}(jQuery),function(){var e=(0,_jquery.default)("#filter__gallery img"),t=(0,_jquery.default)(".filter__buttons"),r={};e.each((function(){var e=this,t=(0,_jquery.default)(this).data("tags");t&&t.split(",").forEach((function(t){null==r[t]&&(r[t]=[]),r[t].push(e)}))})),(0,_jquery.default)("<button/>",{text:"All",class:"filter__button filter__button--active",click:function(){(0,_jquery.default)(this).addClass("filter__button--active").siblings().removeClass("filter__button--active"),e.show()}}).appendTo(t),_jquery.default.each(r,(function(s){(0,_jquery.default)(r[s]).length;(0,_jquery.default)("<button/>",{text:s,class:"filter__button",click:function(){(0,_jquery.default)(this).addClass("filter__button--active").siblings().removeClass("filter__button--active"),e.hide().filter(r[s]).show()}}).appendTo(t)}))}(),function(){var e=(0,_jquery.default)(".slick-slider-wrapper");(0,_jquery.default)(e).slick({infinite:!0,speed:600,slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})}(jQuery),function(){var e=(0,_jquery.default)(".customer");(0,_jquery.default)(e).slick({infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1,arrows:!0,nextArrow:'<svg class="arrow arrow--next" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path opacity="0.4" d="M15.7501 7.27417L0.750099 7.27417" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path opacity="0.4" d="M9.6998 13.2988C9.6998 13.2988 15.7498 10.0378 15.7498 7.27576C15.7498 4.51176 9.6998 1.24976 9.6998 1.24976" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>',prevArrow:'<svg class="arrow arrow--prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M4.2499 12.2742L19.2499 12.2742" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M10.3002 18.2988C10.3002 18.2988 4.2502 15.0378 4.2502 12.2758C4.2502 9.51176 10.3002 6.24976 10.3002 6.24976" stroke="#00BFC4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>',dots:!1,autoplay:!0})}(jQuery),jQuery,(0,_jquery.default)("#subscribe-btn").on("click",(function(){var e=(0,_jquery.default)(this),t=e.siblings(".input-message"),r=e.siblings(".input-email"),s=e.closest(".newsletter__subscribe"),a="This field can't be empty!",l="Please enter a valid email",i="Thank you for subscribing!",n=r.val().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);""===r.val()?(t.remove(),r.addClass("input-border-error"),s.append('<p class="input-message error"> '.concat(a,"</p>"))):""===r.val()||null===n?(t.remove(),r.addClass("input-border-error"),s.append('<p class="input-message error"> '.concat(l,"</p>"))):(t.remove(),e.addClass("input-btn--clicked"),r.removeClass("input-border-error"),s.append('<p class="input-message success"> '.concat(i,"</p>")))}));
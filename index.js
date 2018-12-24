'use strict';

function showPortfolio() {
	$('.js-portfolio').on('click', event => {
    	$([document.documentElement, document.body]).animate({
    		scrollTop: $('.projects').offset().top -80
    	}, 1000);
    });
}

function showAbout() {
	$('.js-about').on('click', event => {
		$([document.documentElement, document.body]).animate({
    		scrollTop: $('.about-me').offset().top -80
    	}, 1000);
    });
}

function showContact() {
	$('.js-contact').on('click', event => {
		$([document.documentElement, document.body]).animate({
    		scrollTop: $('.contact').offset().top -80
    	}, 1000);
    });
}

function handleNameClick() {
	$('.js-name').on('click', event => {
		$([document.documentElement, document.body]).animate({
    		scrollTop: $('body').offset().top -80
    	}, 1000);
    });
}

function init () {
	$(showPortfolio);
	$(showAbout);
	$(showContact);
	$(handleNameClick);
}

$(init)
'use strict';

function clearOtherTabs () {
	$('.js-contact').css('text-decoration', 'none');
	$('.js-about').css('text-decoration', 'none');
	$('.js-portfolio').css('text-decoration', 'none');
	$('.about-me').prop('hidden', true);
	$('.contact').prop('hidden', true);
    $('.projects').prop('hidden', true);
}

function showPortfolio() {
	$('.js-portfolio').on('click', event => {
		clearOtherTabs()
    	$('.projects').prop('hidden', false);
    	$('.js-portfolio').css('text-decoration', 'underline')
    });
}

function showAbout() {
	$('.js-about').on('click', event => {
		clearOtherTabs();
		$('.about-me').prop('hidden', false);
    	$('.js-about').css('text-decoration', 'underline')
    });
}

function showContact() {
	$('.js-contact').on('click', event => {
		clearOtherTabs();
		$('.contact').prop('hidden', false);
    	$('.js-contact').css('text-decoration', 'underline')
    });
}

function handleNameClick() {
	$('.js-name').on('click', event => {
		clearOtherTabs();
		$('.about-me').prop('hidden', false);
    });
}

function init () {
	$(showPortfolio);
	$(showAbout);
	$(showContact);
	$(handleNameClick);
}

$(init)
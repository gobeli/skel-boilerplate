/* skel-baseline v3.0.1 | (c) n33 | skel.io | MIT licensed */
import skel from './skel.min';
import './helpers';
import '../style/main.scss';


(function() {
	var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

	// Vars.
	const	$body = document.querySelector('body');
	const	$nav = document.querySelector('#nav');
	const $navToggle = document.querySelector('a[href="#nav"]');
	const $navClose = document.querySelector('a.close');
	
	// Breakpoints.
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.classList.add('is-loading');

	window.addEventListener('load', function() {
		$body.classList.remove('is-loading');
	});

	// Nav.

	// Event: Prevent clicks/taps inside the nav from bubbling.
	addEventsListener($nav, 'click touchend', function(event) {
		event.stopPropagation();
	});
	
	addEventsListener($body, 'click touchend', function(event) {
		$nav.classList.remove('visible');
	});

	$navToggle.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$nav.classList.toggle('visible');
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode == 27)
			$nav.classList.remove('visible');
	});

	$navClose.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$nav.classList.remove('visible');
	});

})();

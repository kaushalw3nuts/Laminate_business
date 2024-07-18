"use strict";
// Lenis Start (By Mit) 

const lenisScroll = new Lenis({
    lerp: 0.1
})

lenisScroll.on('scroll', (e) => {});

lenisScroll.on('scroll', ScrollTrigger.update);

function raf(time) {
    lenisScroll.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf)

gsap.ticker.add((time)=>{
	lenisScroll.raf(time * 1000);
});
  
gsap.ticker.lagSmoothing(0);

// Lenis End (By Mit)


// View port Height Generate Start

function bluesticky()
{
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// View port Height Generate End

jQuery(window).on('load' ,function() {
	bluesticky();
	jQuery('body').addClass('load-content');
});
jQuery(window).resize(function() {
	bluesticky();
});


jQuery(document).ready(function(){
	
	/*Mobile Menu Start  by Mit*/
	jQuery(".hamburger_btn").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		jQuery('.navigation_main').toggleClass('show');
		jQuery('body').toggleClass('open_menu');
		if(jQuery('body').hasClass('open_menu')){
            lenisScroll.stop();
        }
        else{
            lenisScroll.start();

        }
	});
	/*Mobile Menu End  by Mit*/
	gsap.registerPlugin(ScrollTrigger);
	// SplitText Animation Start by Mit
	const animEls = document.querySelectorAll(".split_word");
    animEls.forEach((el) => {
        var splitEl = new SplitText(el, { 
			type: "words , chars", 
			linesClass: "line" 
		});
        var splitTl = gsap.timeline({
			scrollTrigger: { 
				trigger: el, 
				start: "top 100%"
			} 
		});
        splitTl.from(splitEl.chars, { 
			duration: 0.3, 
			yPercent: '100', 
			stagger: 0.04, 
			scrub: 3 
		});
    });
	// SplitText Animation Start by Mit

	// Home Banner Animation Start by Mit
	gsap.registerPlugin(ScrollTrigger);

	let sections = gsap.utils.toArray(".scroll_ani_img");

	gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: "none",
	scrollTrigger: {
		trigger: ".home_hori_pin",
		pin: '.home_hori_wrap',
		scrub: true,
		snap: 1 / (sections.length - 1),
		end: () => "+=" + document.querySelector(".home_hori_pin").offsetWidth,
		invalidateOnRefresh: true
	}
	});
	// Home Banner Animation End by Mit
	
	
});

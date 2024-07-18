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
});
jQuery(window).resize(function() {
	bluesticky();
});


jQuery(document).ready(function(){
	
	// product_listing_page section 1 aimation: Start (By Kaushal)

	$(".kv-ttl-line").addClass("start");

    setTimeout(function() {
        $(".kv-spacer").addClass("active");
		$(".kv-img").addClass("active");
    }, 1200);

	// product_listing_page section 1 aimation: End (By Kaushal)
});

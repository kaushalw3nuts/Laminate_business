"use strict";
// Lenis Start (By Mit) 
// Scroll Animation Start
const locoscrolls = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	scrollFromAnywhere: false,
	multiplier: 1,
	getDirection: true,
	reloadOnContextChange: true,
	touchMultiplier: 3,
	smoothMobile: 0,
	smartphone: {
	  smooth: !0,
	  breakpoint: 766
	},
	tablet: {
	  smooth: !0,
	  breakpoint: 1010
	},
  });

  locoscrolls.on("scroll", ScrollTrigger.update);

// --------------------------------------------------------------------------
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
	return arguments.length ? locoscrolls.scrollTo(value, {duration: 0, disableLerp: true}) : locoscrolls.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
	return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoscrolls.update());
ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });
// --- SETUP END ---
// --------------------------------------------------------------------------
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
	
	// product_listing_page section 1 aimation: Start (By Kaushal)

	$(".kv-ttl-line").addClass("start");

    setTimeout(function() {
        $(".kv-spacer").addClass("active");
		$(".kv-img").addClass("active");
    }, 1200);

	// product_listing_page section 1 aimation: End (By Kaushal)

	/*Mobile Menu Start  by Mit*/
	jQuery(".hamburger_btn").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		jQuery('.navigation_main').toggleClass('show');
		jQuery('body').toggleClass('open_menu');
		if(jQuery('body').hasClass('open_menu')){
            locoscrolls.stop();
        }
        else{
            locoscrolls.start();

        }
	});
	/*Mobile Menu End  by Mit*/

	// SplitText Animation Start by Mit
	// let windowWidth = window.outerWidth;
	jQuery(".split_word").each(function (index) {
		let myText = jQuery(this);
		let mySplitText;
		function createSplits() {
			mySplitText = new SplitText(myText, {
			type: "words , chars ",
			wordsClass: "split-words",
			charsClass: "chars-words"
			});
		}
		createSplits();
		// jQuery(window).resize(function () {
		// 	if (window.outerWidth !== windowWidth) {
		// 		mySplitText.revert();
		// 			location.reload();
		// 	}
		// 	windowWidth = window.outerWidth;
		// });
    });


    jQuery(".split_word").each(function (index) {
        let triggerElement = jQuery(this);
        let targetElement = jQuery(this).find(".chars-words");


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "restart none none none",
            }
        });
        tl.from(targetElement, {
            duration: 0.25,
            y: "100%",
            // rotationX: -90,
            opacity: 1,
            ease: "power2.inOut",
            stagger: {
                amount: 0.5,
                from: "0"
            }
        });
    });
	// SplitText Animation End by Mit

	// Home Banner Animation Start by Mit
	gsap.registerPlugin(ScrollTrigger);

	const sections = gsap.utils.toArray(".scroll_ani_img");
	let maxWidth = 0;
	
	const getMaxWidth = () => {
	  maxWidth = 0;
	  sections.forEach((section) => {
		maxWidth += section.offsetWidth;
	  });
	};
	getMaxWidth();
	ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
	
	gsap.to(sections, {
	  x: () => `-${maxWidth - window.innerWidth}`,
	  ease: "none",
	  scrollTrigger: {
		trigger: ".home_hori_pin",
		pin: true,
		scrub: 1,
		end: () => `+=${maxWidth}`,
		invalidateOnRefresh: true
	  }
	});
	


	// Home Banner Animation End by Mit
	
	
});
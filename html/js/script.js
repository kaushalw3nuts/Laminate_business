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

		var bar = new ProgressBar.Line(loading_text, {
			strokeWidth: 0,
			duration: 1600,
			trailWidth: 0,
			text: {
				style: {
					//position:'absolute',
					//left:'50%',
					//top:'50%',
					//margin:'0',
					//transform:'translate(-50%,-50%)',
					'font-family':'Cabinet Grotesk',
					'font-size':'clamp(40px, 4.4270833333vw, 85px)',
					color:'#6A6A6A',
				},
				autoStyleContainer: false
			},
			step: function(state, bar) {
				var value = Math.round(bar.value() * 100);
				bar.setText(value);
				//$('.kv-spacer').css('padding-top', value/2.5 + 'vh');
			}
		});
		
        $(".kv-spacer").addClass("active posset");

		bar.animate(1.0, function () {			  
			setTimeout(function() {
				$(".kv-spacer").addClass("end");
				$(".kv-img").addClass("active");
				locoscrolls.start();
			}, 400);
		}); 
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

	/*Mouse with Image Start by Mit*/
	if(jQuery('.about_dtl_list').length > 0){


		let menuItem = document.querySelectorAll(".dtl_list_txt");
			let menuImageBox = document.querySelectorAll(".img_on_hover");
		
			// adding eventListeners to all the menuItems.
			for (let i = 0; i < jQuery('.dtl_list_txt').length; i++) {
			//   image reveal animation
			const animation = gsap.to(menuImageBox[i], {
				opacity: 1,
				visibility:'visible',
				duration: 0.2,
				scale: 1,
				ease: "ease-in-out",
				// left: 0,
			});
		
			menuItem[i].addEventListener("mouseenter", () => animation.play());
			menuItem[i].addEventListener("mouseleave", () => animation.reverse());
		
			//   initialization
			animation.reverse();
			}
			let menuItemx = document.querySelectorAll(".dtl_list_txt").clientHeight;
			//   to move image along with cursor
			function moveText(e) {
			gsap.to(document.querySelectorAll(".img_on_hover"), {
				css: {
				left: e.pageX - 50,
				top: e.menuItemx,
				},
				duration: 0.3,
			});
			}
		
			menuItem.forEach((el) => {
			el.addEventListener("mousemove", moveText);
			});
		}
	/*Mouse with Image End by Mit*/

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

	/*
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
	
	let scrollTween = gsap.to(sections, {
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

	let allImgs = document.querySelectorAll(".img_mian_hori");
	allImgs.forEach((img, i) => {
		// the intended parallax animation
		gsap.fromTo(img, {
		  scale: 1.5
		}, {
			scale: 1,
		  scrollTrigger: {
			trigger: img.parentNode, //.panel-wide
			containerAnimation: scrollTween,
			start: "left right",
			end: "right left",
			scrub: true,
			invalidateOnRefresh: true,
			onRefresh: self => {
			  if (self.start < 0) {
				self.animation.progress(gsap.utils.mapRange(self.start, self.end, 0, 1, 0));
			  }
			},
			id: "id-two"
		  },
		});
	  });
	*/

	// Home Banner Animation End by Mit
	gsap.registerPlugin(ScrollTrigger);

	const sections = gsap.utils.toArray(".scroll_ani_img");
	let maxWidth = 0;
	console.log();

	const getMaxWidth = () => {
	maxWidth = 0;
	sections.forEach((section) => {
		maxWidth += section.offsetWidth;
	});
	};
	getMaxWidth();
	ScrollTrigger.addEventListener("refreshInit", getMaxWidth);


	ScrollTrigger.defaults({
	// Defaults are used by all ScrollTriggers
	toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
	markers: true // Easaly remove markers for production 
	});

	

	// const timelineHeader = gsap.timeline({
	// 	x:() => `-${maxWidth - window.innerWidth}`,
	// scrollTrigger: {
	// 	id: "ZOOM", // Custom label to the marker
	// 	trigger: ".home_hori_track", // What element triggers the scroll
	// 	scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
	// 	// start: "top top", // Start at top of Trigger and at the top of the viewport
	// 	end: `+=${maxWidth}`, // The element is 500px hight and end 50px from the top of the viewport
	// 	pin: true, // Pin the element true or false
	// 	invalidateOnRefresh: true,
	// }
	// });
	// gsap.set(".main_hori_img", { scale: 1.3 });

	gsap.to(sections, {
		x: () => `-${maxWidth - window.innerWidth}`,
		ease: "none",
		scrollTrigger: {
		  trigger: ".home_hori_track",
		  pin: true,
		  scrub: 1,
		  end: () => `+=${maxWidth}`,
		  invalidateOnRefresh: true
		}
	  });



	// timelineHeader
	// .to(".main_hori_img",{ scale: 1.3, x:'0', duration: 0},0.1)
	// .to(".main_hori_img",{scale: 1.15, x:'-50%', duration: 0.5},0.3) 
	// .to(".main_hori_img",{scale: 1,x:'-100%',  duration: 1})
	// .to(".crafting_wrap",{x:'-100%'},"sameTime");
	
});
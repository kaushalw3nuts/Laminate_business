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

gsap.registerPlugin(ScrollTrigger, SplitText);

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
	if(jQuery('.kv-ttl-line').length > 0){
		$(".kv-ttl-line").addClass("start");
		setTimeout(function() {
			let bar = new ProgressBar.Line(loading_text, {
				strokeWidth: 0,
				duration: 1600,
				trailWidth: 0,
				text: {
					style: {
						'font-family':'Cabinet Grotesk',
						'font-size':'clamp(40px, 4.4270833333vw, 85px)',
						color:'#6A6A6A',
					},
					autoStyleContainer: false
				},
				step: function(state, bar) {
					let value = Math.round(bar.value() * 100);
					bar.setText(value);
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
	}
	// product_listing_page section 1 aimation: End (By Kaushal)

	// product_listing_page section 2 aimation: Start (By Kaushal)

	// On page load set image to first collection item image
	$(".image-sticky").attr("src", $(".our-works-item").eq(0).find(".works-img").attr("src"));

	function updateImages(currentItem) {
		$(".our-works-item").removeClass("active");
		currentItem.addClass("active");
		let imageSrc = currentItem.find(".works-img").attr("src");
		$(".image-sticky").attr("src", imageSrc);
	};

	$(".our-works-item").each(function (index) {
		let triggerElement = $(this);
		let tl = gsap.timeline ({
			scrollTrigger: {
				trigger: triggerElement,
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					updateImages(triggerElement);
				},
				onEnterBack: () => {
					updateImages(triggerElement);
				}
			},
		})
	});

	function stickyImgFun(){
		gsap.to(".our-works", 
		{
			scrollTrigger: {
				trigger: ".container-draggable",
				pin: true,
				start: 'top 20%',
				end: "bottom 40%", 
			}
		});
	} 

	setTimeout(() => {
		stickyImgFun()
	}, 2000)	

	// product_listing_page section 2 aimation: End (By Kaushal)

	// product_detail_page section 1 Slider: Start (By Kaushal)

	let productDetail = new Swiper(".product_detail_thumb", {
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	let productDetail2 = new Swiper(".product_detail_slider", {
		loop: false,
		effect: "fade",
		speed: 1000,
		thumbs: {
		  	swiper: productDetail,
		},
	});

	// product_detail_page section 1 Slider: End (By Kaushal)

	// product_detail_page section 3 Slider: End (By Kaushal)

	var similarSlider = new Swiper(".similar_slider", {
        slidesPerView: 5,
        spaceBetween: 68,
		navigation: {
			nextEl: ".similar-button-next",
			prevEl: ".similar-button-prev",
		},
    });

	// product_detail_page section 3 Slider: End (By Kaushal)

	// niceselect: Start (By Kaushal)

	$('select').niceSelect();
	
	// niceselect: End (By Kaushal)

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
            duration: 0.6,
            y: "100%",
            opacity: 1,
            ease: "power2.inOut",
            stagger: {
                amount: 2,
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
	// markers: true // Easaly remove markers for production 
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



	// Home page Manufacturer text Animation Start by Mit

	const splitmanufacturer = new SplitText(".line_animation_wrap", { type: "lines ,words", wordsClass: "split-words", linesClass: "line-txt", });

	gsap.set('.line_animation_wrap .split-words', { yPercent: 100 });
	splitmanufacturer.lines.forEach((target) => {
		gsap.to('.line_animation_wrap .split-words', {
			yPercent: 0,
			ease: "none",
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.line_animation_wrap .split-words',
				scrub: 1,
				start: "-80% 90%",
				end: "bottom 90%"
			}
		});
	});

	// Home page Manufacturer text Animation End by Mit

	// Section Parallax Animation Start by Mit
	const sectionParallax = document.querySelector('.manufacturer_inner');
	gsap.to(sectionParallax, {
		yPercent: -10,
		ease: "none",
		autoAlpha: 1,
		scrollTrigger: {
			// markers:true,
			trigger: '.manufacturer_sec',
			scrub: 1,
			start: "top center",
			end: "80% center"
		}
	});
	// Section Parallax Animation End by Mit

	// Section Image with text Horizontal Animation Start by Mit
	if(jQuery('.side_scroll_img_pin').length > 0){
		const tracks = document.querySelectorAll(".side_scroll_img_pin");

		tracks.forEach((track, i) => {
			let sectionsImage = gsap.utils.toArray(".side_scroll_img_box");
			let allImgs = track.querySelectorAll(".side_scroll_img_title");
			
			let scrollTweenImage = gsap.to(sectionsImage, {
				xPercent: -100 * (sectionsImage.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: ".side_scroll_img_pin",
					pin: true,
					scrub: 1,
					end: () => "+=" + (track.scrollWidth - window.innerWidth)
				}
			});
			
			allImgs.forEach((txtPara, i) => {
					gsap.fromTo(txtPara, {
					x: "10vw"
					}, {
					x: "-10vw",
					scrollTrigger: {
						trigger: txtPara.parentNode,
						containerAnimation: scrollTweenImage,
						start: "left center",
						end: "right left",
						scrub: true,
						invalidateOnRefresh: true,
					},
					});
				});
			});
		}

		// Section Image with text Horizontal Animation End by Mit
		// Section Text color change Horizontal Animation Start by Mit
		if(jQuery('.black_white_text_separate').length > 0){

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".black_white_text_separate_pin",
					// start: "top center",
					scrub: true,
					// pin: ".purple",
					pin: true,
					end: () => `+=${$(".black_white_text_separate_pin").height()}`,
				}
			})
			.fromTo(".black_bgover",{ width: '0vw',ease: "none"}, {width: '100vw',ease: "none" })
		}

		// Section Text color change Horizontal Animation End by Mit
		// Selected Section mouse hover Effect Start by Mit
			if(jQuery('.side_scroll_img_sec').length > 0){
				document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
					t.style.left = n.clientX + "px", 
					t.style.top = n.clientY + "px", 
					e.style.left = n.clientX + "px", 
					e.style.top = n.clientY + "px"
				});
				var t = document.getElementById("cursor"),
					e = document.getElementById("cursor2");
				function n(t) {
					e.classList.add("hover")
				}
				function s(t) {
					e.classList.remove("hover")
				}
				s();
				for (var r = document.querySelectorAll(".side_scroll_img_box"), a = r.length - 1; a >= 0; a--) {
					o(r[a])
				}
				function o(t) {
					t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
				}
			
				$('.side_scroll_img_pin').on('mouseover', function(event) {				
					$('.mouse_hover').addClass('hover_img');
					
				});				
				$('.side_scroll_img_pin').on('mouseout', function(event) {			
					$('.mouse_hover').removeClass('hover_img');
				});	
	
				$('.side_scroll_img_pin .side_scroll_img_box').on('mouseover', function(event) {				
					jQuery('.mouse_hover .image_data_hover img').attr('src',jQuery(this).attr('data-img-hover'))
					
				});				
				$('.side_scroll_img_pin .side_scroll_img_box').on('mouseout', function(event) {			
					$('.mouse_hover').removeClass('hover_img');
				});	
			}
		
					
			
		// Selected Section mouse hover Effect End by Mit
	
});




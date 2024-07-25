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

	let similarSlider = new Swiper(".similar_slider", {
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

	// product_detail_page section 4 Slider: Start (By Kaushal)

	$(function() {
		if ($(".product-peculiarities__list").length && window.matchMedia("(min-width:768px)").matches) {
			let prPeculiaritiesItems = $(".product-peculiarities__list").html(),
				prPeculiaritiesItemsLength = $(".product-peculiarities__item").length,
				prPeculiaritiesDopContaner = $('<div class="product-peculiarities__preview-list-wr"><div class="product-peculiarities__preview-list-box"><div class="product-peculiarities__preview-list"></div></div><div class="product-peculiarities__preview-list-box"><div class="product-peculiarities__preview-list2"></div></div></div>'),
				sliderControls = $('<div class="product-peculiarities__slide-controls"><button class="product-peculiarities__slide-prev js-aware-btn"><i><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99885 1L1 6L5.99885 11M15 5.99986H1.13994" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button><button class="product-peculiarities__slide-next js-aware-btn"><i><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0012 1L15 6L10.0012 11M1 5.99986H14.8601" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button></div>'),
        		slideLength = $(".product-peculiarities__item").length;
			prPeculiaritiesDopContaner.appendTo(".product-peculiarities__body");

			if (prPeculiaritiesItemsLength > 1) {
				$(".product-peculiarities__preview-list").html(prPeculiaritiesItems);
			}
		
			if (prPeculiaritiesItemsLength > 2) {
				$(".product-peculiarities__preview-list2").html(prPeculiaritiesItems);
			}

			var sliderPeculiarities = tns({
				container: ".product-peculiarities__list",
				nav: false,
				controls: false,
				gutter: 0,
				items: 1,
				autoplay: 0,
				axis: "horizontal",
				mouseDrag: false,
				mode: "gallery",
				animateIn: "slideIn",
				animateOut: "slideOut",
				speed: 800,
				onInit: function onInit() {
					$(".product-peculiarities__counter").addClass("fadeIn");
				},
			});

			if (prPeculiaritiesItemsLength > 1) {
				var sliderPeculiaritiesPreview = tns({
					container: ".product-peculiarities__preview-list",
					nav: false,
					startIndex: 1,
					controls: false,
					controlsPosition: true,
					gutter: 0,
					items: 1,
					autoplay: 0,
					axis: "horizontal",
					mouseDrag: false,
					mode: "gallery",
					animateIn: "slideIn",
					animateOut: "slideOut",
					speed: 800,
				});
			}

			if (prPeculiaritiesItemsLength > 2) {
				var sliderPeculiaritiesPreview2 = tns({
					container: ".product-peculiarities__preview-list2",
					nav: false,
					startIndex: 2,
					controls: false,
					controlsPosition: true,
					gutter: 0,
					items: 1,
					autoplay: 0,
					axis: "horizontal",
					mouseDrag: false,
					mode: "gallery",
					animateIn: "slideIn",
					animateOut: "slideOut",
					speed: 800,
					onInit: function onInit() {
						$(".product-peculiarities__counter").addClass("fadeIn");
					},
				});
			}

			sliderControls.appendTo(".product-peculiarities__list-wr");
			$(".product-peculiarities__slide-next").on("click", function (e) {
				e.preventDefault();

				if (prPeculiaritiesItemsLength > 1) {
					sliderPeculiaritiesPreview.goTo("next");
				}

				if (prPeculiaritiesItemsLength > 2) {
					sliderPeculiaritiesPreview2.goTo("next");
				}

				setTimeout(function () {
					sliderPeculiarities.goTo("next");
				}, 100);
			});
			$(".product-peculiarities__slide-prev").on("click", function (e) {
				e.preventDefault();

				if (prPeculiaritiesItemsLength > 1) {
					sliderPeculiaritiesPreview.goTo("prev");
				}

				if (prPeculiaritiesItemsLength > 2) {
					sliderPeculiaritiesPreview2.goTo("prev");
				}

				sliderPeculiarities.goTo("prev");
			});
			sliderPeculiarities.events.on("transitionStart", function () {
				var info = sliderPeculiarities.getInfo(),
				count = info.displayIndex < 10 ? "0" + info.displayIndex : info.displayIndex,
				countContainer = $(".product-peculiarities__counter .product-peculiarities__count-active");
				$(".product-peculiarities__counter").removeClass("fadeIn");
				$(".product-peculiarities__counter").addClass("fadeOut");
				setTimeout(function () {
					countContainer.text(count);
					$(".product-peculiarities__counter").removeClass("fadeOut");
				}, 200);
				setTimeout(function () {
					$(".product-peculiarities__counter").addClass("fadeIn");
				}, 400);
			});
			$(document).on("click",".product-peculiarities__preview-list-wr .product-peculiarities-thumbs", function (e) {
				var nextSlider = $(this).closest(".product-peculiarities__item").index() % slideLength,
					nextSlider2 = ($(this).closest(".product-peculiarities__item").index() + 1) % slideLength,
					nextSlider3 = ($(this).closest(".product-peculiarities__item").index() + 2) % slideLength;
				sliderPeculiarities.goTo(nextSlider);
		
				if (prPeculiaritiesItemsLength > 1) {
					sliderPeculiaritiesPreview.goTo(nextSlider2);
				}
		
				if (prPeculiaritiesItemsLength > 2) {
					sliderPeculiaritiesPreview2.goTo(nextSlider3);
				}
			});
		} else if ($(".product-peculiarities__list").length && window.matchMedia("(max-width:767px)").matches) {
			var swiper = new Swiper('.product-peculiarities__list', {
				slidesPerView: 1,
				draggable: true,
	 	        freeMode: true,
				loop: true,
				// navigation: {
				// 	nextEl: '.swiper-button-next',
				// 	prevEl: '.swiper-button-prev',
				// },
			});
		}
	});

	// product_detail_page section 4 Slider: End (By Kaushal)

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

		// about page animation js by hdj

		let t2 = gsap.timeline({scrollTrigger:{
			trigger:".journy_scroll_pin",
			// markers:true,
			start:"top left",
			end:"40% left",
			scrub: 0.5,
			pin:true
		}});

		t2
		.to(".journy_scroll",{
			x:'-100%'
		});
		
		var t1 = gsap.timeline({scrollTrigger:{
			trigger:".how_do_img",
			// markers:true,
			start:"top top",
			end:"5000px top",
			scrub: 0.5,
			pin:true,
			// toggleClass: {targets: ".how_scroll", className: "active"}
		}});
		t1
		.to("#scroll_2",{
			y:'0',
		})
		.to("#scroll_3",{
			y:'0'
		})
		.to("#scroll_4",{
			y:'0'
		})
		.to("#scroll_5",{
			y:'0'
		});

		// let t2 = gsap.timeline({scrollTrigger:{
		// 	trigger:".contain_wapper .journy_sec",
		// 	// markers:true,
		// 	start:"22% left",
		// 	end:"40% left",
		// 	scrub: 0.5,
		// 	pin:true
		// }});
		
		
	// about page animation js by hdj
	
	let whoWeAreBoxLenght = jQuery(".how_do_img .how_scroll").length;
	if(whoWeAreBoxLenght){
		for (let index = 0; index < whoWeAreBoxLenght; index++) {
			jQuery(".how_do_img .round_dots ul").append("<li><span></span></li>");
		}
	}
});




"use strict";
// Lenis Start (By Mit) 
// // Scroll Animation Start
gsap.config({ nullTargetWarn: false });

const locoscrolls = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    direction: 'vertical', // 'vertical' or 'horizontal'
    smooth: true,
});

// Scroll Trigger for Lenis
locoscrolls.on('scroll', ScrollTrigger.update);

// Update ScrollTrigger on Lenis scroll
gsap.ticker.add((time) => {
    locoscrolls.raf(time * 1000);
});


gsap.registerPlugin(ScrollTrigger, SplitText);

function onRaf(time) {
	locoscrolls.raf(time);
	requestAnimationFrame(onRaf);
}

requestAnimationFrame(onRaf);

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
	setTimeout(() => {
		jQuery('body').addClass('load-content-delay');
	}, 500);
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
		let triggerElementText = jQuery(this);
		let targetElementText = jQuery(this).find(".chars-words");


		let tltext = gsap.timeline({
			scrollTrigger: {
				trigger: triggerElementText,
				start: "top 85%",
				end: "bottom top",
				toggleActions: "play none none none",
				// markers:true,
			}
		});
		// console.log(jQuery(targetElementText).length);
		
		tltext.from(targetElementText, {
			duration: 0.6,
			// duration: 1,
			y: "100%",
			opacity: 1,
			ease: "power2.inOut",
			stagger: {
				// amount: 2,
				amount: jQuery(targetElementText).length * 0.05714,
				// amount: 2 / jQuery(targetElement).length,
				// stagger: 0.08,
				from: "0"
			}
		});
	});
});
jQuery(window).resize(function() {
	bluesticky();
	getRotedImage();
	getSimpleImage();
});

// wow js (By Kaushal)

new WOW().init();

// wow js (By Kaushal)

jQuery(document).ready(function(){
	
	// product_listing_page section 1 aimation: Start (By Kaushal)

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

	// product_listing_page section 1 aimation: End (By Kaushal)

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
		navigation: {
			nextEl: ".similar-button-next",
			prevEl: ".similar-button-prev",
		},
		breakpoints: {
			0: {
			  	slidesPerView: 2,
			  	spaceBetween: 15,
			},
			768: {
			  	slidesPerView: 3,
			  	spaceBetween: 25,
			},
			992: {
			  	slidesPerView: 4,
			  	spaceBetween: 30,
			},
			1231: {
				slidesPerView: 4,
				spaceBetween: 42,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 68,
			},
		},
    });

	// product_detail_page section 3 Slider: End (By Kaushal)

	// niceselect: Start (By Kaushal)

	$('select:not(.basic-multiple-dropdown)').niceSelect();
	
	// niceselect: End (By Kaushal)

	// select2: Start (By Kaushal)

	$('.basic-multiple-dropdown').select2();
	
	// select2: End (By Kaushal)

	// product_detail_page section 4 Slider: Start (By Kaushal)

	$(function() {
		if ($('.product-peculiarities__list').length && window.matchMedia('(min-width:768px)').matches) {
			var prPeculiaritiesItems = $(".product-peculiarities__list").html(),
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
			$(".product-peculiarities__list").slick({
				slidesToShow: 1,
				dots: false,
				swipe: true,
				draggable: true,
				arrows: true,
				infinite: true,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				prevArrow: $('.prev-arrow'),
    			nextArrow: $('.next-arrow')
			});
		}
	});

	// product_detail_page section 4 Slider: End (By Kaushal)

	// Footer animation: Start (By Kaushal)

	const footerSvgHandler = () => {
		gsap.fromTo('.footer-top-grid .footer-top-grid-title svg', {
			scale: 80,
		},
		{
			scale: 1, 
			scrollTrigger: {
				trigger: "footer",
				start: "top top",
				end: `+=${$('#footer').outerHeight() * 2}`,
				scrub: 0.01,
				pin: true,
				invalidateOnRefresh: true,
			}
		}
		)
	}

	const isDesktopFtr = window.matchMedia("(min-width: 1230px)").matches;

	if (isDesktopFtr) {
		setTimeout(() => {
			footerSvgHandler()
		},2000);
	};

	// Footer animation: End (By Kaushal)

	/*Mobile Menu Start  by Mit*/
	jQuery(".hamburger_btn").click(function() {
		'use strict';
		jQuery(this).toggleClass('active');
		
		if (jQuery('body').hasClass('open_menu')) {
			// First remove 'loaded_wrap', then 'open_menu'
			jQuery('body').removeClass('loaded_wrap');
			// jQuery('.navigation_main').removeClass('show');
			locoscrolls.start();
			setTimeout(() => {
				jQuery('body').removeClass('open_menu');
			}, 500);
		} else {
			// First add 'open_menu', then 'loaded_wrap'
			jQuery('body').addClass('open_menu');
			// jQuery('.navigation_main').addClass('show');
			locoscrolls.stop();
			setTimeout(() => {
				jQuery('body').addClass('loaded_wrap');
			}, 500);
		}
	});

	jQuery(".catalogues_box").click(function() {
		jQuery(".hamburger_btn").removeClass('active');
        if (jQuery('body').hasClass('open_menu')) {
            jQuery('body').removeClass('loaded_wrap');
            setTimeout(() => {
                jQuery('body').removeClass('open_menu');
            }, 500);
        }
		locoscrolls.start();
    });
		
	jQuery('.navigation_bar .left_part ul li[data-menu-list] a').on('mouseenter', function() {
		jQuery(this).addClass("highlight");
		if(jQuery(this).parents('li[data-menu-list]')) {
			jQuery('.data_hover_menu').hide();
			jQuery('.data_hover_menu[data-menu-block='+jQuery(this).parent().attr('data-menu-list')+']').fadeIn(600);
		}
	});

	jQuery(".text_with_img_ani").each(function() {
		let $boxWrap = jQuery(this);
		$boxWrap.mousemove(function(e) {
			// parallaxIt(e, $boxWrap.find(".text_mouse_ani"), -30);
			parallaxIt(e, $boxWrap.find(".img_mouse_ani"), -50);
		});
	});
	
	function parallaxIt(e, target, movement) {
		let $this = jQuery(target).parent();
		let relX = e.pageX - $this.offset().left;
		let relY = e.pageY - $this.offset().top;
	
		TweenMax.to(target, 1, {
			x: (relX - $this.width() / 2) / $this.width() * movement,
			y: (relY - $this.height() / 2) / $this.height() * movement
		});
	}
	
	/*Mobile Menu End  by Mit*/

	/*Mouse with Image Start by Mit*/
	if(jQuery('.about_dtl_list').length > 0){


		let menuItem = document.querySelectorAll(".dtl_list_txt");
			let menuImageBox = document.querySelectorAll(".img_on_hover");
		
			for (let i = 0; i < jQuery('.dtl_list_txt').length; i++) {
			const animation = gsap.to(menuImageBox[i], {
				opacity: 1,
				visibility:'visible',
				duration: 0.2,
				scale: 1,
				ease: "ease-in-out",
			});
		
			menuItem[i].addEventListener("mouseenter", () => animation.play());
			menuItem[i].addEventListener("mouseleave", () => animation.reverse());
			animation.reverse();
			}
			let menuItemx = document.querySelectorAll(".dtl_list_txt").clientHeight;
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
	setTimeout(() => {
		
		
	}, 800);

	// const childSplit = new SplitText(".split_word", {
	// 	type: "words , chars",
	// 	linesClass: "split-child",
	// 	charsClass: "chars-words"
	//   });
	//   const parentSplit = new SplitText(".split_word", {
	// 	// type: "words",
	// 	linesClass: "split-parent"
	//   });
	  
	//   gsap.from(childSplit.chars, {
	// 	duration: 1,
	// 	yPercent: 100,
	// 	ease: "power4.inOut",
	// 	stagger: 0.08,
	// 	// repeat: -1,
	// 	// yoyo:true,
	// 	// repeatDeay:1,
	// 	scrollTrigger: {
	// 	//   trigger: '.text',
	// 	  markers: true,
	// 	  start: 'top center',
	// 	}
	//   });
	// SplitText Animation End by Mit

	// Home Banner Animation Start by Mit

	gsap.registerPlugin(ScrollTrigger);
	if(jQuery('.home_hori_track').length > 0 && jQuery(window).width() > 991){
		const sectionsPan = gsap.utils.toArray(".scroll_ani_img");
		let maxWidth = 0;

		const getMaxWidth = () => {
		maxWidth = 0;
		sectionsPan.forEach((section) => {
			maxWidth += section.offsetWidth;
		});
		};
		getMaxWidth();
		ScrollTrigger.addEventListener("refreshInit", getMaxWidth);


		// let sectionsPan = gsap.utils.toArray(".scroll_ani_img");

		const featureTimeLine = gsap.timeline()
		featureTimeLine.to('.shap_white_ani', {
		width: 0,
		duration: 2,
		stagger: 0.5,
		scrollTrigger: {
			scrub: true,
			start: `${jQuery('.home_hori_wrap').offset().top} ${jQuery('.home_hori_wrap').offset().top}`,
			end: `${jQuery('.main_hori_img ').height() + jQuery('.main_hori_img').offset().top} bottom `,
			invalidateOnRefresh: true
		}
		})

		

		let scrollTweenSection = gsap.to(sectionsPan, {
			x: () => `-${maxWidth - window.innerWidth}`,
			ease: "none", // <-- IMPORTANT!
			scrollTrigger: {
				trigger: ".home_hori_track",
				pin: true,
				scrub: 1,
				end: () => `+=${maxWidth}`,
				invalidateOnRefresh: true
			}
		});
		gsap.set(".about_dtl_list_block", {y: (jQuery('.about_dtl_list_block').outerHeight() - jQuery('.about_dtl_list_block').css('padding-top').replace('px', '') - (jQuery('.about_dtl_list_block').css('padding-bottom').replace('px', '') / 2) - jQuery('.about_dtl_title').outerHeight())});
		
		gsap.set(".main_hori_img .img_mian_hori", {scale:1.3});
		gsap.set(".crafting_blk", {xPercent:0});
		gsap.to(".main_hori_img .img_mian_hori", {
			scale: 1,
			ease: "none",
			scrollTrigger: {
				trigger: ".main_hori_img .img_mian_hori",
				containerAnimation: scrollTweenSection,
				start: "left center",
				end: "right left",
				scrub: true,
			}
		});
		gsap.to(".crafting_blk", {
			xPercent: -15,
			ease: "none",
			scrollTrigger: {
				trigger: ".crafting_blk",
				containerAnimation: scrollTweenSection,
				start: "left right",
				end: "right center",
				scrub: true,
			}
		}, "<");


		gsap.to(".pintxt , .black_white_text_bottom", {
			x:document.querySelector('.black_white_text.scroll_ani_img').offsetWidth,
			ease: "none",
			scrollTrigger: {
				trigger: ".black_white_text_pin",
				containerAnimation: scrollTweenSection,
				start: "left left",
				end: "right left",
				pin: ".black_white_text_pin",
				scrub: true,
				pinType: "transform",
			}
		}, "<");
		gsap.to(".black_white_text_pin .center_text_img[data-outer-image]", {
			x:document.querySelector('.black_white_text.scroll_ani_img').offsetWidth - 50,
			ease: "none",
			scrollTrigger: {
				trigger: ".black_white_text_pin",
				containerAnimation: scrollTweenSection,
				start: "left left",
				end: "right left",
				pin: ".black_white_text_pin",
				scrub: true,
				pinType: "transform",
			}
		}, "<");
		gsap.to(".about_dtl_block", {
			x: document.querySelector('.about_dtl_wrp_blank.scroll_ani_img').offsetWidth,
			ease: "none",
			scrollTrigger: {
				trigger: ".about_dtl_block_pin",
				containerAnimation: scrollTweenSection,
				start: "left left",
				end: "right left",
				pin: ".about_dtl_block_pin",
				scrub: true,
				pinType: "transform",
				// markers:true,
			}
		}, "<");
		// console.log(document.documentElement.clientHeight,);
		
		let about_dtl_right = gsap.to(".about_dtl_right", {
			y: -(document.querySelector('.about_dtl_right').offsetHeight - document.documentElement.clientHeight),
			ease: "none",
			scrollTrigger: {
				trigger: ".about_dtl_block_pin",
				containerAnimation: scrollTweenSection,
				start: "left left",
				// start: "40% left",
				end: "right left",
				pin: ".about_dtl_block_pin",
				scrub: true,
				pinType: "transform",
				// markers:true,
			}
		}, "<");

		gsap.to(".about_dtl_list_block", {
			y: 0,
			ease: "none",
			scrollTrigger: {
				trigger: ".about_dtl_block_pin",
				containerAnimation: scrollTweenSection,
				// start: "left left",
				start: "40% left",
				end: "right left",
				pin: ".about_dtl_block_pin",
				scrub: true,
				pinType: "transform",
				// markers:true,
			}
		}, "<");
		let objActImg = {
			'about_dtl_right': {
				'start': 'left left',
				'end': 'right left',
				'item': [{
					'class': 'dtl_list_img1',
					'duration': '0.5',
					'yPercentFrom': '10',
					'yPercent': '-16'
				}, {
					'class': 'dtl_list_img3',
					'duration': '1',
					'yPercentFrom': '20',
					'yPercent': '-30'
				}, {
					'class': 'dtl_list_img4',
					'duration': '0.5',
					'yPercentFrom': '10',
					'yPercent': '-60'
				}, {
					'class': 'dtl_list_img5',
					'duration': '0.5',
					'yPercentFrom': '20',
					'yPercent': '-20'
				}, {
					'class': 'dtl_list_img6',
					'duration': '0.5',
					'yPercentFrom': '10',
					'yPercent': '-80'
				}, {
					'class': 'dtl_list_img7',
					'duration': '0.5',
					'yPercentFrom': '80',
					'yPercent': '-40'
				}, {
					'class': 'dtl_list_img8',
					'duration': '0.5',
					'yPercentFrom': '40',
					'yPercent': '-20'
				}]
			}
		};
		actionBlockImg();
		function actionBlockImg() {
			var e = {};
			$.each(objActImg, function(t, n) {
				
				e[t] = [];
				$.each(n['item'], function(c, s) {
					
					e[t][c] = gsap.timeline({
						scrollTrigger: {
							// trigger: '.' + t,
							trigger: ".about_dtl_block_pin",
							start: n['start'],
							end: n['end'],
							scrub: 1,
							pin: !1,
							// markers: !1,
							containerAnimation: scrollTweenSection,
							// markers:true,
						}
					});
					e[t][c].from('.' + t + ' .' + s['class'], {
						yPercent: s['yPercentFrom'],
						// duration: s['duration']
					}).to('.' + t + ' .' + s['class'], {
						yPercent: s['yPercent'],
						// duration: s['duration']
					})
				})
			})
		};
	}
	if(jQuery('.home_hori_track').length > 0 && jQuery(window).width() <= 991){
		const featureTimeLine = gsap.timeline()
			featureTimeLine.to('.shap_white_ani', {
			width: 0,
			duration: 2,
			stagger: 0.5,
			scrollTrigger: {
				scrub: true,
				start: `${jQuery('.home_hori_wrap').offset().top} ${jQuery('.home_hori_wrap').offset().top}`,
				end: `${jQuery('.main_hori_img ').height() + jQuery('.main_hori_img').offset().top} bottom `,
				invalidateOnRefresh: true
			}
		});
		gsap.timeline().fromTo('.crafting_wrap_inner', {
			y: (jQuery('.crafting_blk .crafting_img_wrap .img_box_crafting').outerHeight() / 2),
		}, {
			y: -(jQuery('.crafting_blk .crafting_img_wrap .img_box_crafting').outerHeight() / 4),
			duration: 2,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".crafting_wrap",
				scrub: true,
				start: 'top bottom',
				end: 'bottom center',
				invalidateOnRefresh: true
			}
		});
		
		
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".black_white_text_hori",
				scrub: true,
				pin: true,
				end: () => `+=${$(".black_white_text_hori").height()}`,
			}
		})
		.fromTo(".black_white_text_hori .blackbgwrap",{ x: '0',ease: "none"}, {x: '-50%',ease: "none" })
		.fromTo(".black_white_text_hori .center_text_img ",{ margin: '0',ease: "none"}, {margin: '0 0 0 -2%',ease: "none" }, 0)

		const tlkist = gsap.timeline({
			scrollTrigger: {
				trigger: ".about_dtl_block",
				scrub: true,
				pin: true,
				end: () => `+=${$(".about_dtl_left").height()}`,
			}
		})
		// .fromTo(".about_dtl_list_block",{ x: '0',ease: "none"}, {x: '-50%',ease: "none" })
		// .fromTo(".black_white_text_hori .center_text_img ",{ margin: '0',ease: "none"}, {margin: '0 0 0 -2%',ease: "none" }, 0)

		.fromTo(".about_dtl_list_block", {y: (jQuery('.about_dtl_list_block').outerHeight() - jQuery('.about_dtl_list_block').css('padding-top').replace('px', '') - (jQuery('.about_dtl_list_block').css('padding-bottom').replace('px', '') / 2) - jQuery('.about_dtl_title').outerHeight())}, {y: '0',ease: "none" });

	}
	
	// Home Banner Animation End by Mit

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
			trigger: '.manufacturer_sec',
			scrub: true,
			start: "top center",
			end: "80% center"
		}
	});
	// Section Parallax Animation End by Mit

	// Section Image with text Horizontal Animation Start by Mit
	if(jQuery('.side_scroll_img_pin').length > 0  && jQuery(window).width() > 991){
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
					scrub: true,
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
		if(jQuery('.side_scroll_img_pin').length > 0  && jQuery(window).width() <= 991){
			console.clear();

			gsap.registerPlugin(ScrollTrigger);

			var panels_class = ".side_scroll_img_box";

			gsap.set('.first', {autoAlpha:1});

			var panels = gsap.utils.toArray(panels_class);

			panels.forEach((panel, i) => {

			// Last element
			if ( i == ($(panels_class).length - 1) ) {
				console.log(panel);
				ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				end: "bottom bottom",
				pin: true,
				pinSpacing: false,
				//markers: true,
				});

				return;
			}

			ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				end: "bottom top",
				pin: true,
				pinSpacing: false,
				//markers: true
			});

			});



		}

		// Section Image with text Horizontal Animation End by Mit
		// Section Text color change Horizontal Animation Start by Mit
		if(jQuery('.black_white_text_separate').length > 0){

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".black_white_text_separate_pin",
					scrub: true,
					pin: true,
					end: () => `+=${$(".black_white_text_separate_pin").height()}`,
				}
			})
			.fromTo(".black_white_text_separate .black_bgover",{ width: '0vw',ease: "none"}, {width: '100vw',ease: "none" })
			.fromTo(".black_white_text_separate .center_text_img ",{ margin: '0',ease: "none"}, {margin: '0 0 0 -2%',ease: "none" }, 0)
			getRotedImage();
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
				
				// locoscrolls.on('scroll', (instance) => {
				// 	$('.side_scroll_img_pin .side_scroll_img_box').on('mouseover', function(event) {				
				// 		jQuery('.mouse_hover .image_data_hover img').attr('src',jQuery(this).attr('data-img-hover'))
						
				// 	});				
				// 	$('.side_scroll_img_pin .side_scroll_img_box').on('mouseout', function(event) {			
				// 		$('.mouse_hover').removeClass('hover_img');
				// 	});	
				// });

				$('.side_scroll_img_pin .side_scroll_img_box').on('mouseover', function(event) {				
					jQuery('.mouse_hover .image_data_hover img').attr('src',jQuery(this).attr('data-img-hover'))
					
				});				
				$('.side_scroll_img_pin .side_scroll_img_box').on('mouseout', function(event) {			
					$('.mouse_hover').removeClass('hover_img');
				});	
			}
		
					
			
		// Selected Section mouse hover Effect End by Mit

		// Borser Section Start By Mit
		
		if(jQuery('.broser_box').length > 1){
			let get_window_height = jQuery(window).height();
			var projectoffset = jQuery('.broser_box:first-child .broser_dtl').offset().top + get_window_height;
			var projectoffsetBottom = jQuery('.broser_box:last-child .broser_dtl').offset().top;
			jQuery(window).on( "scroll", function() {
					if (jQuery(window).scrollTop() >= projectoffset) {
						
						jQuery(".broser_wrap").addClass("project1");
					}else {
						jQuery(".broser_wrap").removeClass("project1");
					}
					if ((jQuery(window).scrollTop() - jQuery('.broser_box:last-child .broser_dtl').outerHeight()) >= projectoffsetBottom) {
						
						jQuery(".broser_wrap").addClass("project2");
					}else {
						jQuery(".broser_wrap").removeClass("project2");
					}

					
				});
		}


		// Borser Section End By Mit
		

		// Galley script Start by mit
		var swiper_main = new Swiper(".gallery_thumb", {
			slidesPerView: 3,
			spaceBetween: 30,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			loop: true,
			navigation: {
				nextEl: ".right_arrow_gallery_slider a",
				prevEl: ".left_arrow_gallery_slider a",
			  },
			  allowTouchMove: false,
		});
		var swiper2 = new Swiper(".gallery_slider_main", {
			loop: true,
			spaceBetween: 0,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			navigation: {
			  nextEl: ".right_arrow_gallery_slider a",
			  prevEl: ".left_arrow_gallery_slider a",
			},
		  });
		// Galley script End by mit
		
		// Select the container and the sections
			const journyScrollin = document.querySelector(".journy_scroll_pin");
			const journyScroll = gsap.utils.toArray(".journy_scroll .journy_grp");

			// Create a horizontal scroll animation
			let scrollTween = gsap.to(journyScroll, {
			xPercent: -100 * (journyScroll.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".journy_scroll_pin",
				pin: true,
				scrub: true,
				end: `+=${$('.journy_scroll').outerWidth()}`,
				// markers: true, // Uncomment for debugging
			}
			});

			// Loop through each journey group and create stagger animations
			journyScroll.forEach((journy_scroll) => {
			// Select the individual journey group elements
			let journy_grp = journy_scroll.querySelectorAll(".journy_grp");
			
			// Skip if there are no items to animate
			if (journy_grp.length === 0.01) return;
			
			// Create stagger animations for each journey group
			gsap.from(journy_grp, {
				y: -130,
				opacity: 0,
				duration: 2,
				ease: "elastic",
				stagger: 0.1,
				scrollTrigger: {
				trigger: journy_scroll, // Corrected to use journy_scroll
				containerAnimation: scrollTween,
				start: "left 60%",
				toggleClass: 'active', // Toggle the 'active' class
				}

			});
			});

			
			
			var t1 = gsap.timeline({
				scrollTrigger: {
				  trigger: ".scroller_pin_wrap_ani",
				  start: "top top",
				  end: `${$('.scroller_pin_wrap_ani').innerHeight() * 2}px top`,
				  scrub: 2,
				  pin: true,
				}
			  });
			  
			  // Select all .how_scroll elements
			  const howScrolls = document.querySelectorAll(".scroller_ani");
			  
			  // Loop through each .how_scroll element and add to the timeline
			  howScrolls.forEach((scrollElement, index) => {
				t1.to(scrollElement, {
				  y: '0',
				  duration: 1, // Adjust the duration as needed
				  onStart: function() {
					console.log(`Animating scroll element ${index + 1}`);
				  }
				});
			  });
  


		
	// about page animation js by hdj
	
	let whoWeAreBoxLenght = jQuery(".how_do_img .how_scroll").length;
	if(whoWeAreBoxLenght){
		for (let index = 0; index < whoWeAreBoxLenght; index++) {
			jQuery(".how_do_img .round_dots ul").append("<li><span></span></li>");
		}
	}

	if(jQuery('.about_section').length > 1){
		jarallax(document.querySelectorAll('.jarallax'), {
			speed: 2,
		});
	}

	// Select all child elements and separate divs
	const childElements = document.querySelectorAll('.how_do_img .how_scroll');
	const separateDivs = document.querySelectorAll('.round_dots ul li');

	// Create a new Intersection Observer
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			// Find the index of the intersecting child element
			const index = Array.from(childElements).indexOf(entry.target);
			// console.log(`Child ${index + 1} is intersecting: ${entry.isIntersecting}`);

			if (entry.isIntersecting) {
				// Add 'active' class to corresponding separate div if it's intersecting
				separateDivs[index].classList.add('active');
				
				// Remove 'active' class from all other separate divs
				separateDivs.forEach((div, idx) => {
					if (idx !== index) {
						div.classList.remove('active');
					}
				});
			}
			else if(!entry.isIntersecting){
				if(jQuery('body').hasClass('load-content')){
					
					separateDivs[index-1].classList.add('active');
					
					separateDivs.forEach((div, idx) => {
						if (idx !== index-1) {
							div.classList.remove('active');
						}
					});
					
				}
				
				// console.log('reverce'+index);
			}
			 else {
				// Remove 'active' class from corresponding separate div if it's not intersecting
				separateDivs[index].classList.remove('active');
				// console.log(index);
				
			}
		});
	}, { threshold: 0.5 }); // Adjust threshold as needed

	// Observe each child element
	childElements.forEach(child => {
		observer.observe(child);
	});

	
	if(jQuery('#trialPopup_one').length > 0){
		var myOffcanvas = document.getElementById('trialPopup_one')
		myOffcanvas.addEventListener('show.bs.offcanvas', function () {
			locoscrolls.stop()
		})
		myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
			locoscrolls.start()
		})
	}

	let journeySlider = new Swiper(".journy_swipe", {
        slidesPerView: 1,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".journy-button-next",
			prevEl: ".journy-button-prev",
		},
    });

});





function getRotedImage() {
	jQuery('.center_text_img[data-inner-image]').each(function(){
		jQuery(this).removeClass('active');
		jQuery( ".center_text_img[data-outer-image="+jQuery(this).attr('data-inner-image')+"]" ).css({ left: + jQuery(this).offset().left - jQuery(this).parents('.black_white_text').offset().left , 'top': + jQuery(this).offset().top - jQuery(this).parents('.black_white_text').offset().top }).addClass('active');
		jQuery(this).addClass('active')
	});
}
function getSimpleImage() {
	jQuery('.center_text_img[data-inner-image]').each(function(){
		jQuery(this).removeClass('active');
		jQuery( ".center_text_img[data-outer-image="+jQuery(this).attr('data-inner-image')+"]" ).css({ left: + jQuery(this).offset().left - jQuery(this).parents('.black_white_text').offset().left , 'top': + jQuery(this).offset().top - jQuery(this).parents('.black_white_text').offset().top }).addClass('active');
		jQuery(this).addClass('active')
	});
}


let objAct = {
	'product_gallery': {
		'start': 'top 0%',
		'item': [{
			'class': 'item0',
			'duration': '0.5',
			'yPercent': '-60'
		}, {
			'class': 'item1',
			'duration': '0.8',
			'yPercent': '-40'
		}, {
			'class': 'item2',
			'duration': '1',
			'yPercent': '-30'
		}, {
			'class': 'inn-desc',
			'duration': '1.2',
			'yPercent': '-30'
		}]
	},
	'product_section_one': {
		'start': 'top 60%',
		'item': [{
			'class': 'item0',
			'duration': '0.2',
			'yPercent': '-20',
			'xPercent': '0'
		}, {
			'class': 'item1',
			'duration': '1.2',
			'yPercent': '-20',
			'xPercent': '0'
		}, {
			'class': 'item2',
			'duration': '1',
			'yPercent': '-40',
			'xPercent': '0'
		}, {
			'class': 'inn-desc',
			'duration': '1',
			'yPercent': '20',
			'xPercent': '0'
		}]
	},
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-40'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-40'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '12'
	// 	}]
	// },
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-25'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '15'
	// 	}]
	// },
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-40'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '15'
	// 	}]
	// },
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-25'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '15'
	// 	}]
	// },
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-40'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '15'
	// 	}]
	// },
	// 'product_section_one': {
	// 	'start': 'top 60%',
	// 	'item': [{
	// 		'class': 'item0',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'item1',
	// 		'duration': '1.2',
	// 		'yPercent': '-25'
	// 	}, {
	// 		'class': 'item2',
	// 		'duration': '1',
	// 		'yPercent': '-30'
	// 	}, {
	// 		'class': 'inn-desc',
	// 		'duration': '1',
	// 		'yPercent': '5'
	// 	}]
	// }
};

$(document).ready(function() {
	$('.inn-page').addClass('loaded');

	setTimeout(()=>{
		$('.inn-page').removeClass('loaded')
	}, 3000);
	actionBlock();
});

function actionBlock() {
	$.each(objAct, function(section, data) {
		$.each(data['item'], function(index, animationData) {
			const elements = $('.' + section + ' .' + animationData['class']);
			elements.each(function(i) {
				gsap.timeline({
					scrollTrigger: {
						trigger: $(this),
						start: data['start'],
						end: '+=1000',
						scrub: 1,
						pin: false,
						// markers: false,
					}
				}).to($(this), {
					yPercent: animationData['yPercent'],
					xPercent: animationData['xPercent'],
					duration: animationData['duration']
				});
			});
		});
	});
}

// function actionBlock() {
// 	var e = {};
// 	$.each(objAct, function(t, n) {
// 		e[t] = [];
// 		$.each(n['item'], function(c, s) {
// 			e[t][c] = gsap.timeline({
// 				scrollTrigger: {
// 					trigger: '.' + t,
// 					start: n['start'],
// 					end: '+=1000',
// 					scrub: 1,
// 					pin: !1,
// 					// markers: !1,
// 				}
// 			});
// 			e[t][c].to('.' + t + ' .' + s['class'], {
// 				yPercent: s['yPercent'],
// 				duration: s['duration']
// 			})
// 		})
// 	})
// };
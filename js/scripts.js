	
$(document).ready(function() {
	
	"use strict";
	
	PageLoad();
	ScrollEffects();
	FirstLoad();
	PageLoadActions();
	Showcase();
	ShowcaseWebgl();
	ShowcaseWebglCore();
	ShowcaseCarousel();
	FloatingLists();
	Portfolio();
	FitThumbScreen();
	Shortcodes();
	Sliders();	
	JustifiedGrid();
	Lightbox();	
});











/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {	
		
		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');			
		}
		
		TweenMax.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
		
		// Page Navigation Events
		$(".preloader-wrap").on('mouseenter', function() {	
			var $this = $(this);			
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".preloader-wrap").on('mouseleave', function() {					
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});		
		
		$('body').removeClass('hidden').removeClass('hidden-ball');
		TweenMax.to($(".preloader-marquee-wrapper"), 1, {force3D:true, opacity:1, y: 0, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($("#header-container"), 0.5, {force3D:true, opacity:1, delay:0.2, ease:Power2.easeOut}); //modified time
		var width = 0,
			perfData = window.performance.timing, 
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/100)%500) * 10
			
		// Loadbar Animation
		$(".loadbar").animate({
			width: width + "%"
		}, time  );	
		
		
		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time + 0;
				animateValue(PercentageID, start, end, durataion);
				
		function animateValue(id, start, end, duration) {
		  
			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);
			
			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}
		
		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('.loadbar').append('<span class="hold-progress-bar"></span>');
			
			TweenMax.to($('.hold-progress-bar'), 0.3, {force3D:true,width:'100%', delay:0, ease:Power2.easeOut, onComplete:function(){  //modified time 2019 nov
				
				$('body').waitForImages({
						finished: function() {
							TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
							TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
							$('#ball p').remove();
							TweenMax.to($(" .trackbar, .percentage-intro, .percentage"),0.3, {force3D:true, opacity:0, y:-10, delay:0, ease:Power2.easeIn});						
							TweenMax.to($(".preloader-wrap"),1, {force3D:true, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
							TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:1.7, opacity:0});
							TweenMax.to($("#header-container"), 0.5, {force3D:true, opacity:1, delay:1.4, ease:Power2.easeOut}); //modified time
							setTimeout(function(){
							
								$('body').waitForImages({
									finished: function() {
										TweenMax.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), 1, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut}); 
												
									},
									waitForAll: true
								});
								
								if( $('.hero-video-wrapper').length > 0 ){
									$('#hero-image-wrapper').find('video').each(function() {
										$(this).get(0).play();
									}); 
								}
								
								TweenMax.to($("#main"), 0, {opacity:1, delay:0, ease:Power2.easeOut});//modified time
								if( $('#hero').hasClass("has-image")) {	
									TweenMax.to($("#hero-bg-image, #hero-fg-image"), 1, {force3D:true, scale:1 , opacity:1, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(".hero-title span"), 1, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle span"), 1, {force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});

                                    
									TweenMax.to($(".hero-footer-left"), 1, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-right"), 1, {force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
									TweenMax.to($(".scroll-down-wrap"), 1, {force3D:true, scale:1, opacity:1, delay:1.2, ease: Elastic.easeOut});														
									TweenMax.to($("#main-page-content"), 0.4, {opacity:1, delay:1.15, ease:Power2.easeOut});
								} else {
									// Fading In Small Carousel elements on Finised
									var tlHerospan = new TimelineLite();
									tlHerospan.set($("#hero .hero-title span"), {y: 120, opacity:0});
									$("#hero .hero-title span").each(function(index, element) {
										tlHerospan.to(element, 0.7, {y:0, opacity:1, delay:0.6, ease:Power3.easeOut}, index * 0.05)
									});
									TweenMax.to($(".hero-subtitle span"), 0.4, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});									
									TweenMax.to($("#main-page-content"), 0.7, {opacity:1, delay:1.3, ease:Power2.easeOut});				
								}	
								
								
								// Fading In Showcase elements on Finised
								TweenMax.set($("#showcase-slider-holder"), {opacity:0});
								TweenMax.set($("#showcase-slider-webgl-holder, #showcase-carousel-holder, #vp-portfolio-wrapper"), {opacity:0});
								TweenMax.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), {opacity:0});								
								TweenMax.to($("#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, #vp-portfolio-wrapper"), 0.7, {opacity:1, delay:0.6, ease:Power2.easeOut});
								
								TweenMax.to($("#showcase-slider-holder .swiper-slide .slide-title span"), 1, {force3D:true, y: 0, opacity:1, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($("#showcase-slider-holder .swiper-slide .subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:1.2, ease:Power2.easeOut});
								
								TweenMax.set($("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), {y: 160, opacity:0});
								TweenMax.set($("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"), {y: 30, opacity:0});
								TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), 1, {force3D:true, y: 0, opacity:1, delay:0.6, ease:Power2.easeOut});
								TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"),1, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
								TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide .slide-title span"), 0.5, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
								TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide .subtitle span"), 0.5, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
								
								
								
								TweenMax.to($(".swiper-prev"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
								TweenMax.to($(".swiper-next"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
								setTimeout( function(){	
									$('#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, .showcase-list-holder').addClass("loaded");
								} , 1500 );
								var tlSmallTitles = new TimelineLite();					
								$(".slide-small-title span").each(function(index, element) {
									tlSmallTitles.to(element, 0.5, {force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
								});
								
								if ($("#showcase-carousel-holder").hasClass("columns-carousel")) {
									TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide"), {x:0, scale:0.9, opacity:0});								
									TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active"), 1, {force3D:true, x:0, scale:1, delay:0.7, opacity:1, ease:Power3.easeOut});
									TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), 1, {force3D:true, x:0, scale:1, delay:0.6, opacity:1, ease:Power3.easeOut});
									TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next().next(), 1, {force3D:true, x:0, scale:1, delay:0.7, opacity:1, ease:Power3.easeOut});
									TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide"), {x:0, scale:1, delay:1.8, opacity:1});
									TweenMax.to($("#showcase-carousel-holder.columns-carousel .swiper-slide .slide-title span"), 0.5, {force3D:true, y: 0, opacity:1, delay:0.8, ease:Power2.easeOut});		
								} else {
									var slideWidth = $("#showcase-carousel-holder #showcase-slider .swiper-slide").width();
									TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), {x:slideWidth, scale:0.8, opacity:0});
									TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), {x:-slideWidth, scale:0.8, opacity:0});								
									TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), 2, {force3D:true, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
									TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), 2, {force3D:true, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
								}
								
								
								TweenMax.to($(".showcase-list-intro span, .split-slider-intro span"), 1, {force3D:true, y:0, opacity:1, rotation:0, delay:0.3, ease:Power2.easeOut});
								var SlideListTitle = new TimelineLite();					
								$(".sl-title span, .split-title span").each(function(index, element) {
									SlideListTitle.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
								});
								
								var SlideListSubtitle = new TimelineLite();					
								$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
									SlideListSubtitle.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
								});
									
								TweenMax.set($(".intro-timeline"), {opacity:0, y:30});
								var introTitles = new TimelineLite();					
								$(".intro-timeline").each(function(index, element) {
									introTitles.to(element, 0.5, {force3D:true, y:0, opacity:1, delay:0.65, ease:Power2.easeOut}, index * 0.05)
								});	
											
									
								setTimeout( function(){	
									$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
								} , 600 );
								
								setTimeout( function(){	
									$('body').removeClass("load-next-project");
									$('body').addClass("header-visible");
									$('#showcase-holder').removeClass("disabled");
								} , 1600 );
								
								setTimeout( function(){	
									$('body').removeClass("show-loader")
								} , 800 );	
								
							} , 600 );
						},
					waitForAll: true
				});
				
			}});
	  
		}, time);
		
		
		
	}// End Page Load




/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {
		
		if( $('#project-nav').length > 0 ){
			$('#main-content').addClass('solid-color');
			$('#main-page-content').addClass('project-page');					
		}
		
		if( $('.portfolio').length > 0 ){			
			$('#main-page-content').addClass('portfolio-page');				
		}
		
		if ($("#page-content").hasClass("light-content")) {
			$("nav").css('background-color', '#141414');
			$("main, #main-content.solid-color").css('background-color', function () {
				return $("#page-content").data('bgcolor')
			});
			$('#magic-cursor').addClass('light-content');
			if( $('#hero').length > 0 ){						
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		} else {			
			$("nav").css('background-color', '#141414');
			$("main, #main-content.solid-color").css('background-color', function () {
				return $("#page-content").data('bgcolor')
			});
			$('#magic-cursor').removeClass('light-content');
			if( $('#hero').length > 0 ){	
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		}
		
		
		$(".hero-subtitle, .next-hero-subtitle, .light-content .hero-subtitle, .light-content .next-hero-subtitle, .item-cat, .vp-cat, .showcase-list-intro, .sl-subtitle, .subtitle, li.split-slider-intro, .split-subtitle, .primary-color").css('color', function () {
			return $("body").data('primary-color')
		});
		
		
		
		$('.video-cover').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			$('header').removeClass('white-header');
			$("#app").remove();
			setTimeout(function(){
				$("#canvas-slider.active").remove();						
			} , 300 );
			$(".temporary-hero").remove();	
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});	
			TweenMax.to('#ball', 0.3,{borderWidth:"4px",scale:0.5,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});			
			TweenMax.to($("#main, #hero-image-wrapper, #project-nav, .next-project-image, #app, #canvas-slider, #showcase-slider-webgl-holder, #quickmenu-scroll"), 0.3, {opacity:0, delay:0, ease:Power0.ease});					
			TweenMax.to($("#footer-container, .header-middle"), 0.3, {opacity:0, ease:Power0.ease});			
			TweenMax.to('#show-filters, #counter-wrap', 0.2,{opacity:0});
		});
		
		
		//Load Page From Menu
		$('nav .ajax-link').on('click', function() {
			$(this).parents('.flexnav').addClass('hover');
			$(this).parents('.item-with-ul').addClass('hover');
			TweenMax.set($(this).find('span'),{yPercent:0});
			var tl = new TimelineLite();
			$(".menu-timeline .before-span").each(function(index, element) {
				tl.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.05)
			});
			$('header').removeClass('white-header');
			$("#app").remove();
			$(".big-title-caption").remove();	
		});
		
		
		
		$('#burger-wrapper, .menu .button-text').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');			
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar').addClass('over-white-section');
					if (!$('#page-content').hasClass("light-content")) {	
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					TweenMax.set($("nav ul ul li"), {y: 0, opacity:1});
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
					//TweenMax.staggerTo($(".menu-timeline"), 0,{cycle:{x: ["50", "-50"]}, opacity:0});
					$(".menu-timeline .before-span").each(function(index, element) {
						tlMenu.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});
					  
					  
					$('.touch-button').click(function(e, bIndirect) {
						
						if( bIndirect == true ){
							return;
						}
						
						let currentItem = $(this);						
						
						$('.touch-button.active').each( function() {							
							if( currentItem.get(0) !== $(this).get(0) ) { 							
								$(this).trigger('click', true); 
							}  
						});
						
					});
					
				
						
				} else {	
					//Fade Out Navigation Lists	
					var tlMenu = new TimelineLite();					
					$(".menu-timeline .before-span").each(function(index, element) {
						tlMenu.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.05)
					});
					
					var tlSubMenu = new TimelineLite();					
					$("nav ul ul li").each(function(index, element) {
						tlSubMenu.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.03)
					});
					
					if (!$('#page-content').hasClass("light-content")) {	
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar')
						setTimeout( function(){
							$('header').removeClass('over-white-section');
						} , 350 );
					} , 500 );
				}							
			} , 20 );
		});
		
		
		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {				
			$('.hero-video-wrapper').remove();							 
		}
		
		
		
	}// End First Load
	
	
/*--------------------------------------------------
Page Load Actions
---------------------------------------------------*/	
	
	function PageLoadActions() {
		
		
		// Default Page Navigation Load Events
		$(".next-ajax-link-page").on('mouseenter', function() {	
			var $this = $(this);			
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".next-ajax-link-page").on('mouseleave', function() {					
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});				
		
		
		$('.next-ajax-link-page').on('click', function() {					
			$("body").addClass("load-next-page");
			$("body").addClass("show-loader");
			$('header').removeClass('white-header');
			$("#app").remove();
			$(".big-title-caption").remove();	
				
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();	
			
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}
			if ($("body").hasClass("smooth-scroll")) {
				var navmove = $("#content-scroll").height() - $("#page-nav").height() - $("footer").height() 			
			} else {
				var navmove = window.innerHeight - $("#page-nav").height() - $("footer").height()	   
			}
			
			TweenMax.to($(".subtitle-info"), 0.3, {force3D:true, opacity:0, delay:0, y: -20, ease:Power2.easeOut});
			TweenMax.to($(".subtitle-name"), 0.3, {force3D:true, opacity:1, y: 0, delay:0.15, ease:Power2.easeOut});
			
			TweenMax.to($("#main-page-content, #hero"), 0.3, {opacity:0});		
			TweenMax.to($("#page-nav"), 0.7, {y: - navmove, delay:0, ease:Power2.easeInOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, delay:0, ease:Power2.easeInOut});
		});
		
		
		// Project Page Navigation Load Events
		$("#project-nav .next-ajax-link-project").mouseenter(function(e) {	
			var $this = $(this);		
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});			
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});			
		});
						
		$("#project-nav .next-ajax-link-project").mouseleave(function(e) {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();
		});	
		
		$('.next-ajax-link-project').on('click', function() {					
			$("body").addClass("load-project-thumb-with-title").addClass("show-loader");
			$('header').removeClass('white-header');
			$("#app").remove();
			$('.next-project-image').addClass("temporary").appendTo('body');
			if ($(this).parents('#project-nav').hasClass("change-header")) {
				$("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>');
			} else {
				$("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>');
			}
			$('.next-caption').appendTo('.temporary-hero .inner');	
				
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();
			
			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});			
			TweenMax.to($(".next-project-image"), 0.6, {scale:1, opacity: 1, ease:Power2.easeOut,onComplete: function() {
			  $('.next-project-image').addClass("visible")
			}});
			TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
				
		});
		
	}// Page Load Actions
	
	

	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		TweenMax.set($("#show-filters, #counter-wrap"), {opacity:0, delay:0});
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($("#header-container, .header-middle"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		if( !$('#canvas-slider').hasClass("active")) {	
			TweenMax.set($('#canvas-slider'), {opacity:0, scale:1.1});
			TweenMax.to($('#canvas-slider'), 1, {force3D:true, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut});
		}
		
		TweenMax.to($("#main"), 0.3, {opacity:1, delay:0.1, ease:Power2.easeOut});
		TweenMax.to($("#footer-container"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb-with-title")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});				
				TweenMax.to($(".hero-title span"), 0, {force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});		
			} else if( $('body').hasClass("load-project-thumb-with-title-and-scale")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.02, opacity:1, delay:0, ease:Power2.easeOut});				
				TweenMax.to($(".hero-title span"), 0, {force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});		
			} else if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});				
				TweenMax.to($(".hero-title span"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});			
			} else {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title span"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});	
			}
			TweenMax.to($("#main-page-content"), 0.4, {opacity:1, delay:0.95, ease:Power2.easeOut});
		} else {
			var tlHerospan = new TimelineLite();
			tlHerospan.set($("#hero .hero-title span"), {y: 120, opacity:0});
			$("#hero .hero-title span").each(function(index, element) {
				tlHerospan.to(element, 0.7, {y:0, opacity:1, delay:0.1, ease:Power3.easeOut}, index * 0)
			});
			TweenMax.to($(".hero-subtitle span"), 0.4, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.25, ease:Power2.easeOut});
			TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.5, ease:Power2.easeOut});
			TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.5, {opacity:1, delay:0.15, ease:Power2.easeOut});
		}	
		
		// Fading In Showcase elements on Finised
		TweenMax.set($("#showcase-slider-holder"), {opacity:0, scale:1});
		TweenMax.set($("#showcase-carousel-holder, #showcase-slider-webgl-holder, #vp-portfolio-wrapper"), {opacity:0});
		TweenMax.to($("#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, #vp-portfolio-wrapper"), 0.7, {opacity:1, delay:0.6, ease:Power2.easeOut});
		TweenMax.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), {opacity:0});		
		TweenMax.to($(".swiper-prev"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
		TweenMax.to($(".swiper-pagination-bullet, .arrows-wrap, .carousel-allprojects-wrapper"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
		TweenMax.to($(".swiper-next"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
		// Fading In Showcase WebGl
		TweenMax.set($("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), {y: 160, opacity:0});
		TweenMax.set($("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"), {y: 30, opacity:0});
		TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide-active .slide-title span"), 1, {force3D:true, y: 0, opacity:1, delay:0.6, ease:Power2.easeOut});
		TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide-active .subtitle span"),1, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
		TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide .slide-title span"), 0.5, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
		TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide .subtitle span"), 0.5, {force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
		// Fading In Showcase Parallax Slider						
		TweenMax.to($("#showcase-slider-holder .swiper-slide .slide-title span"), 1, {force3D:true, y: 0, opacity:1, delay:0.8, ease:Power2.easeOut});
		TweenMax.to($("#showcase-slider-holder .swiper-slide .subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:1.2, ease:Power2.easeOut});
		var tlSmallTitles = new TimelineLite();					
		$(".slide-small-title span").each(function(index, element) {
			tlSmallTitles.to(element, 0.5, {force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
		});
		// Fading In Floating Lists and Split WebGL
		TweenMax.to($(".showcase-list-intro span, .split-slider-intro span"), 1, {force3D:true, y:0, opacity:1, rotation:0, delay:0.3, ease:Power2.easeOut});
		var SlideListTitle = new TimelineLite();					
		$(".sl-title span, .split-title span").each(function(index, element) {
			SlideListTitle.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
		});		
		var SlideListSubtitle = new TimelineLite();					
		$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
			SlideListSubtitle.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
		});											
		// Fading In Floating Lists and Split WebGL
		if ($("#showcase-carousel-holder").hasClass("columns-carousel")) {
			TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide"), {x:0, scale:0.9, opacity:0});								
			TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active"), 1, {force3D:true, x:0, scale:1, delay:0.7, opacity:1, ease:Power3.easeOut});
			TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), 1, {force3D:true, x:0, scale:1, delay:0.6, opacity:1, ease:Power3.easeOut});
			TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next().next(), 1, {force3D:true, x:0, scale:1, delay:0.7, opacity:1, ease:Power3.easeOut});
			TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide"), {x:0, scale:1, delay:1.8, opacity:1});		
			TweenMax.to($("#showcase-carousel-holder.columns-carousel .swiper-slide .slide-title span"), 0.5, {force3D:true, y: 0, opacity:1, delay:0.8, ease:Power2.easeOut});		
		} else {
			var slideWidth = $("#showcase-carousel-holder #showcase-slider .swiper-slide").width();
			TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), {x:slideWidth, scale:0.8, opacity:0});
			TweenMax.set($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), {x:-slideWidth, scale:0.8, opacity:0});								
			TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").prev(), 2, {force3D:true, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
			TweenMax.to($("#showcase-carousel-holder #showcase-slider .swiper-slide-active").next(), 2, {force3D:true, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
		}
		
		setTimeout( function(){	
			$('#showcase-slider-holder, #showcase-carousel-holder, #showcase-slider-webgl-holder, .showcase-list-holder').addClass("loaded");
		} , 1500 );
		
			
		
		if( $('.load-project-thumb').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$(".big-title-caption").remove();	
					} ,250 );
				},
				waitForAll: true
			});
		} else if( $('.load-project-thumb-with-title').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						$(".next-project-image.temporary").remove();
						$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});			
		} else if( $('.load-project-thumb-with-title-and-scale').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						$(".next-project-image.temporary").remove();
						$('body').removeClass("load-project-thumb-and-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});	
		} else {
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					$('#hero-image-wrapper').find('video').each(function() {
						$(this).get(0).play();
					});
					$("#app.active").remove();
					$("#canvas-slider.active").remove();
				},
				waitForAll: true
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-page").removeClass("load-project-thumb").removeClass("load-next-project").removeClass("load-next-page");
			setTimeout( function(){	
				$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");
			} , 300 );			
		} , 500 );
		
	
	}// End Lazy Load		








/* ---------------------------------------------
 OWL Sliders 
 --------------------------------------------- */
function initPageSliders(){
    (function($){
        "use strict";
        
        // FULLWIDTH SLIDER
        $(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
           // autoHeight: true,
            navigation: true,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        }); 

        // FULLWIDTH SLIDER AUTOPLAY
        $(".fullwidth-slider-auto").owlCarousel({
            autoPlay : 4000,
           // slideSpeed: 350,
            singleItem: true,
           // autoHeight: true,
            
            navigation: true,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
           // pagination : false,
            //paginationNumbers: false,
        });
       
        // CAROUSEL CLIENTS ITEMS
				$("#owl-clients").owlCarousel({
				  //Set AutoPlay to 3 seconds
				  autoPlay : 6000,
				  items : 5,
				  itemsDesktop : [1199, 4], //5 items between 1000px and 901px
				  itemsDesktopSmall : [768, 3], // betweem 900px and 601px
				  itemsTablet: [480, 2], //2 items between 600 and 0
				  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
					pagination : false,
					paginationNumbers: false,
				});
        
        // CAROUSEL CLIENTS AUTO PLAY 
			  $(".owl-clients-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4], 
          itemsDesktopSmall : [900,3], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
			 
			  });
		 
        // CAROUSEL CLIENTS NO AUTO PLAY  
			  $(".owl-clients-no-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4],
          itemsDesktopSmall : [900,3], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });
		 
        // CAROUSEL 3 ITEMS NAV NO AUTO PLAY 
			  $(".owl-3items-nav").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 4,
				  itemsDesktop : [1000,3], 
          itemsDesktopSmall : [900,2],
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
					
					// Navigation
					navigation : true,
					navigationText : ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
					rewindNav : true,
					scrollPerPage : false,
			 
			  });

        // CAROUSEL CLIENTS NAV NO AUTO PLAY
			  $(".owl-clients-nav").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4], 
          itemsDesktopSmall : [900,3],
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
					
					// Navigation
					navigation : true,
					navigationText : ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
					rewindNav : true,
					scrollPerPage : false,
			 
			  });
		 
        // CAROUSEL ONE ITEM INLINE, NO CONTROLS, NO AUTO PLAY, WITH PAGINATION  
			  $(".owl-1-pag").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 1,
				  itemsDesktop : [1000,1], 
					itemsDesktopSmall : [900,1], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });



        // CAROUSEL ONE ITEM INLINE, NO CONTROLS, AUTO PLAY, WITH PAGINATION
			  $(".owl-1-pag-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          autoPlay : 5000,
				  items : 1,
				  itemsDesktop : [1000,1], 
					itemsDesktopSmall : [900,1], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }
            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                }
                else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            }
            else 
                if (num === sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", sync2visible[1])
                }
                else 
                    if (num === sync2visible[0]) {
                        sync2.trigger("owl.goTo", num - 1)
                    }
        }
          
        var owl = $(".fullwidth-slideshow").data("owlCarousel");
        
        $(document.documentElement).keyup(function(event){
            // handle cursor keys
            if (event.keyCode == 37) {
                owl.prev();
            }
            else 
                if (event.keyCode == 39) {
                    owl.next();
                }
        });
        
        if ($(".owl-carousel").lenth) {
            var owl = $(".owl-carousel").data('owlCarousel');
            owl.reinit();
        }

    })(jQuery);
};











/*--------------------------------------------------
Function Showcase Webgl Slider
---------------------------------------------------*/
	
	function ShowcaseWebgl() {
		
	
		if( $('#showcase-slider-webgl-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer")
								
			var swiperOptions = {
				direction: "horizontal",
				loop: true,
				grabCursor: false,
				resistance : true,
				resistanceRatio:0.1,
				slidesPerView: 'auto',				
				centeredSlides: true,
				allowTouchMove:true,
				spaceBetween:0,  
				speed:1000,
				autoplay: false,
				mousewheel: true,
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {
					  return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
									'stroke-opacity="1" stroke-width="2px"></circle>'+
									'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
									'</svg></div></div></span>';
					},
			
				},						
				on: {
					slideChangeTransitionStart: function () {
						
						$('.swiper-slide-active').find('div').each(function() {
							if (!$(this).hasClass("active")) {
								$(this).trigger('click');
							}
							
						});
						
						$('.swiper-slide-duplicate-active').find('div').each(function() {
							if (!$(this).hasClass("active")) {
								$(this).trigger('click');
							}
						}); 
						
						if ($('.swiper-slide-active').hasClass("change-header")) {
							$('#page-content').removeClass('light-content');
							$('#magic-cursor').removeClass('light-content');
						} else {
							$('#page-content').addClass('light-content');
							$('#magic-cursor').addClass('light-content');
						}
						
						if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
							$('#page-content').removeClass('light-content');
							$('#magic-cursor').removeClass('light-content');
						} else {
							$('#page-content').addClass('light-content');
							$('#magic-cursor').addClass('light-content');
						}
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						
					},
					slideChangeTransitionEnd: function () {	
						
						setTimeout(function(){ 
						$('.swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});
						}, 0);
						
					},
  				},
			};
							
			var showcaseSwiper = new Swiper(".swiper-container", swiperOptions);
			
			if( $('#slider-webgl').length > 0 ){
				$('body').waitForImages({
					finished: function() {	
						showcaseSwiper.update();
					},				
					waitForAll: true
				});	
			}
			
			
			
			if ($(window).width() >= 1024) {
				var timeout, clicker = $('.swiper-container');
			
				$('.swiper-container .slide-title-wrapper').on('mousedown', function(event) {
					return false;
				});	
				
				$('.swiper-container').on('mousedown touchstart', function(event) {
					if ($('#magic-cursor').hasClass("light-content")) {
						TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					} else {
						TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#000',});
					}
					$("body" ).addClass("scale-drag-x");
					timeout = setInterval(function(){        
						if (!$('#page-content').hasClass("light-content")) {
							$('#page-content').addClass('light-content');
						}
						if (!$('#magic-cursor').hasClass("light-content")) {
							$('#magic-cursor').addClass('light-content');
						}
						TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
						$("body" ).addClass("scale-drag-down");
						TweenMax.to('#slider-webgl', 0.2,{scale: 0.6, delay:0,});
						TweenMax.to('.swiper-slide', 0.2,{scale: 1, delay:0,});
						TweenMax.to('.swiper-slide .subtitle span', 0.3,{y:80, opacity: 0,});
						TweenMax.to('#canvas-slider', 0.2,{opacity: 0, delay:0, ease:Linear.easeNone});					
						showcaseSwiper.params.longSwipes = true;
						showcaseSwiper.params.longSwipesRatio=0.5;
						showcaseSwiper.params.touchRatio=3;
						$('.swiper-slide .slide-title').each(function() {
							var image = $(this).data('fill-img');	
							$(this).children().css({'background': 'url(' + image + ')'});
						});
					}, 1000);
				});
				
				$('.swiper-container').on('mouseup touchend', function(event) {
					
					TweenMax.to('#slider-webgl', 0.2,{scale:1, });
					TweenMax.to('.swiper-slide', 0.2,{scale:1,});
					TweenMax.to('.swiper-slide .subtitle span', 0.2,{y:0, opacity: 1, delay:0.3});
					TweenMax.to('#canvas-slider', 0.2,{opacity: 1, delay:0.4, ease:Linear.easeNone});
					showcaseSwiper.params.longSwipes = false;
					showcaseSwiper.params.longSwipesRatio=0.1;
					showcaseSwiper.params.touchRatio=1;
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x");
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					clearInterval(timeout);
					setTimeout(function(){       
						
						if ($('.swiper-slide-active').hasClass("change-header")) {
							$('#page-content').removeClass('light-content');
							$('#magic-cursor').removeClass('light-content');
						} else {
							$('#page-content').addClass('light-content');
							$('#magic-cursor').addClass('light-content');
						}
						setTimeout(function(){
							
							$("body").removeClass("scale-drag-down");
							$('.swiper-slide .slide-title').each(function() {	
								$(this).children().css({'background': 'none'});
							});
						}, 100)
					}, 300);
				});
				
				$("#showcase-slider-webgl-holder .slide-title").on('mouseenter', function() {	
					var $this = $(this);			
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
				});
									
				$("#showcase-slider-webgl-holder .slide-title").on('mouseleave', function() {					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();				
				});
			}
			
			if (!$("body").hasClass("load-no-ajax")) {
				$('#showcase-slider-webgl-holder .slide-title span').on('click', function() {
					let parent_slide = $(this).closest( '.swiper-slide' );
					parent_slide.addClass('above');
					
					$("body").addClass("show-loader");
					if ($(this).parents('.swiper-slide').hasClass("change-header")) {
						$("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>');
					} else {
						$("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>');
					}
					
					TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide.above").prevAll(), 0.3, {force3D:true, x:-100, scale:1.1, delay:0, opacity:0, ease:Power3.easeInOut  });
					TweenMax.to($("#showcase-slider-webgl-holder .swiper-slide.above").nextAll(), 0.3, {force3D:true, x:100, scale:1.1, delay:0, opacity:0, ease:Power3.easeInOut  });
					TweenMax.to('footer, .showcase-pagination-wrap .parallax-element, .caption-border', 0.5,{opacity:0, ease:Power4.easeInOut});
					
					setTimeout( function(){
						parent_slide.find('.slide-title').appendTo('.temporary-hero .inner');
						parent_slide.find('.subtitle').appendTo('.temporary-hero .inner');
						$("body").addClass("load-project-thumb-with-title");
						setTimeout( function(){
							var link = $(".above").find('a');
							link.trigger('click');
						} , 100 );	
					} , 300 );
					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();
				});
				
				$('#slider-split-webgl .split-caption').on('click', function() {
					let parent_slide = $(this).closest( '#slider-split-projects li' );
					parent_slide.addClass('above');
					
					TweenMax.to('#canvas-slider.split', 0.7,{x:0, delay:0.3, ease:Power1.easeInOut});
					TweenMax.to('#canvas-slider.split canvas', 0.7,{x:0, delay:0.3, ease:Power1.easeInOut});
					
					$("body").addClass("show-loader");
					if (parent_slide.hasClass("change-header")) {
						$('#page-content').delay(900).queue(function(next){
							$(this).removeClass('light-content');
							next();
						});
					}
					TweenMax.to('footer', 0.5,{opacity:0, ease:Power4.easeInOut});
					
					TweenMax.to($(".split-slider-intro span"), 0.5, {force3D:true, y:-30, opacity:0, delay:0, ease:Power2.easeInOut});
					var SplitTitle = new TimelineLite();					
					$(".split-title span").each(function(index, element) {
						SplitTitle.to(element, 0.5, {force3D:true, y:-80, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
					});				
					var SplitSubtitle = new TimelineLite();					
					$(".split-subtitle span").each(function(index, element) {
						SplitSubtitle.to(element, 0.5, {force3D:true, y:-20, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
					});					
					TweenMax.to('footer', 0.5,{opacity:0, ease:Power4.easeInOut});
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();							
					$(this).delay(1000).queue(function() {
						var link = $(".above").find('a');
						link.trigger('click');
					});
				});
			}
			
			
			
			if( $('#slider-split-webgl').length > 0 ){
				
				class Spring {
					constructor(list, friction) {
						this.__list = $(list);
						this.friction = friction;
						this.desire_positionY = $("#slider-split-scroll").scrollTop();
						this.py = [];
						// Behaviours
						$("#slider-split-scroll").on("scroll", this.handleChange.bind(this));
						this.update();
					}
		
					handleChange(e){
						this.desire_positionY = $("#slider-split-scroll").scrollTop();
						
					}
		  
					update(){
						$.each(this.__list, function(i, e){
							if(this.py[i] == null) this.py[i] = 0;
							this.py[i] += ( (this.desire_positionY) - this.py[i]) / (this.friction+i);
							$(e).css({
								"top":  Math.round(this.desire_positionY)+"px",
								"transform": " translateY(-"+ Math.round(this.py[i])+"px)"
							});
						}.bind(this))
						window.requestAnimationFrame(this.update.bind(this));
						
					}
				}
		
				if ($(window).width() > 1024) {			
						
					let spring = new Spring("#slider-split-projects li", 6);			
				}
				
			}
			
			
		}	
		
			
	}//End Showcase Slider


/*--------------------------------------------------
Function Showcase Slider
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('#showcase-slider-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer")
								
			var interleaveOffset = 0.3;
			
			var swiperOptions = {
				direction: "vertical",
				loop: true,
				grabCursor: false,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 'auto',
				allowTouchMove:true,  
				speed:1000,
				autoplay: false,
				mousewheel: true,
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},						
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(0," + innerTranslate + "px, 0)";
						}
					  
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
						}   
				 	},
					init: function () {						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
					},
					slideChangeTransitionStart: function () {						
						
						
						if ($('#showcase-slider .swiper-slide-active').hasClass("change-header")) {							
							$('#page-content').delay(300).queue(function(next){
								$(this).removeClass('light-content');
								next();
							});							
							$('#magic-cursor').removeClass('light-content');
							
						} else {
							$('#page-content').delay(300).queue(function(next){
								$(this).addClass('light-content');
								next();
							});							
							$('#magic-cursor').addClass('light-content');
						}
							
						
						if ($('#showcase-slider .swiper-slide-duplicate-active').hasClass("change-header")) {
							$('#page-content').delay(300).queue(function(next){
								$(this).removeClass('light-content');
								next();
							});							
							$('#magic-cursor').removeClass('light-content');
						} else {
							$('#page-content').delay(300).queue(function(next){
								$(this).addClass('light-content');
								next();
							});							
							$('#magic-cursor').addClass('light-content');
						}
						
						$('#showcase-slider .swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						$('#showcase-slider .swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
						LinesWidth();  
						
					},
					slideChangeTransitionEnd: function () {	
					
						$('#showcase-slider .swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('#showcase-slider .swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});
						
						$('#showcase-slider .swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('#showcase-slider .swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						
					},
  				},
			};
			
			
			function LinesWidth() {
			
				var carouselWidth = $('#showcase-slider-holder').width();
				var captionWidth = $('.swiper-slide-active .slide-title').width();
				var lineWidth = carouselWidth / 2 - 120
				
				$(".caption-border.left").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});				
				$(".caption-border.right").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});
				
			}// End Lines Width
			
			var showcaseSwiper = new Swiper("#showcase-slider", swiperOptions);	
			
			LinesWidth();
			
			
			if ($(window).width() >= 1024) {
			
				var captionsSwiper = new Swiper('#showcase-slider-captions', {
					speed: 700,
					spaceBetween: 0,
					slidesPerView: 'auto',
					direction: 'vertical',
					longSwipes:true,
					longSwipesRatio:0.5,
					touchRatio:3,
					longSwipesMs: 0,
					centeredSlides: true,
					loop: true,
					mousewheel: true,
					parallax:true,
				});
				
				
				
				var listsSwiper = new Swiper('#showcase-slider-lists', {
					speed: 700,
					spaceBetween: 0,
					slidesPerView: 'auto',
					direction: 'vertical',
					longSwipes:true,
					longSwipesRatio:0.5,
					touchRatio:3,
					longSwipesMs: 0,
					centeredSlides: true,
					loop: true,
					mousewheel: true,
					parallax:true,
				});
				
				
				
				showcaseSwiper.controller.control = listsSwiper;
				showcaseSwiper.controller.control = captionsSwiper;
				captionsSwiper.controller.control = listsSwiper;
			
			} 
			
			
			
			if ($(window).width() >= 1024) {
			
				$('#showcase-slider-holder .slide-title').on('mousedown', function(event) {
					return false;
				});				
				
				$('.swiper-container').on('mousedown touchstart', function() {	
					if ($('#magic-cursor').hasClass("light-content")) {
						TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					} else {
						TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#000',});
					}
					$("body" ).addClass("scale-drag-y");
				});
					
				$('.swiper-container').on('mouseup touchend', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-y");
				});
				
				$('body').on('mouseup touchend', function() {				
					$('body').removeClass('scale-drag-y');					
				});
				
				$("#showcase-slider-holder .slide-title").on('mouseenter', function() {	
					var $this = $(this);			
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
				});
									
				$("#showcase-slider-holder .slide-title").on('mouseleave', function() {					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();				
				});
			
			}
			
			
			// Showcase Slider Project Load Events
			if (!$("body").hasClass("load-no-ajax")) {
				$('#showcase-slider-holder .slide-title').on('click', function() {
					let parent_slide = $(this).closest( '.swiper-slide' );
					parent_slide.addClass('above');
					
					$("body").addClass("show-loader");
					if ($(this).parents('.swiper-slide').hasClass("change-header")) {
						$("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>');
					} else {
						$("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>');
					}
					
					TweenMax.to('.slide-small-title span', 0.3,{y:-30, opacity:0, delay:0, ease:Power2.easeIn});				
					TweenMax.to('footer, .showcase-pagination-wrap .parallax-element, .caption-border', 0.5,{opacity:0, ease:Power4.easeInOut});
					
					TweenMax.to('#showcase-slider .inner .subtitle', 0.3,{opacity:1, delay:0.4, ease:Power2.easeOut, onComplete:function(){
						parent_slide.find('.slide-title').appendTo('.temporary-hero .inner');
						parent_slide.find('.subtitle').appendTo('.temporary-hero .inner');
						parent_slide.find(".section-image").addClass("temporary").appendTo('.temporary-hero');
						$("body").addClass("load-project-thumb-with-title");
						$(this).delay(100).queue(function() {
							var link = $(".above").find('a');
							link.trigger('click');
						});	
					}});
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();				
				});
			}
			
			
		}	
		
			
	}//End Showcase Slider

	
	
	
/*--------------------------------------------------
Function Showcase Carousel
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
		
	
		if( $('#showcase-carousel-holder').length > 10 ){	
								
			$("footer").addClass("showcase-footer")
			
			
			var swiperOptions = {
				direction: "horizontal",
				loop: true,
				grabCursor: false,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 'auto',
				allowTouchMove:true,  
				speed:1000,
				autoplay: false,
				mousewheel: true,
				centeredSlides: true,
				spaceBetween: 200,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {
					  return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"'+
									'stroke-opacity="1" stroke-width="2px"></circle>'+
							'<circle cx="10" cy="10" r="3" fill="#FFF"></circle>'+
									'</svg></div></div></span>';
					},
			
				},						
				on: {
					
					init: function () {						
						
						if (!$("#showcase-carousel-holder").hasClass("columns-carousel")) {
						
							$('.swiper-slide-active').find('video').each(function() {
								$(this).get(0).play();
							});
						
						}
					},
					slideChangeTransitionStart: function () {
						
						if (!$("#showcase-carousel-holder").hasClass("columns-carousel")) {
						
							$('.swiper-slide-active').find('video').each(function() {
								$(this).get(0).play();
							});						
												
							var TitleHeight = $("#showcase-carousel-holder #showcase-slider .swiper-slide .slide-title").height();
							
							$('#showcase-carousel-holder').find('.swiper-slide').each(function() {
								if (!$(this).hasClass("swiper-slide-active")) {	
									TweenMax.to($(this).find(".slide-title span"), 0.7, {force3D:true, y: TitleHeight, opacity:0, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(this).find(".subtitle span"), 0.7, {force3D:true, y: 30, opacity:0, delay:0.1, ease:Power2.easeOut});	
								} else {
									TweenMax.to($(this).find(".slide-title span"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.1, ease:Power2.easeOut});
									TweenMax.to($(this).find(".subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.15, ease:Power2.easeOut});								
								}
							});
						
						}
						
					},				
					slideChangeTransitionEnd: function () {	
						
						if (!$("#showcase-carousel-holder").hasClass("columns-carousel")) {
						
							$('.swiper-slide-prev').find('video').each(function() {
								$(this).get(0).pause();
							});
							
							$('.swiper-slide-next').find('video').each(function() {
								$(this).get(0).pause();
							});
						
						}
						
					}
  				},
			};
			
			
			
			var showcaseSwiper = new Swiper("#showcase-slider", swiperOptions);
			
			if ($("#showcase-carousel-holder").hasClass("mixed-carousel")) {
				showcaseSwiper.params.spaceBetween = 20;
				showcaseSwiper.update();
			}
			
			if ($("#showcase-carousel-holder").hasClass("columns-carousel")) {
				showcaseSwiper.params.spaceBetween = 0;
				showcaseSwiper.params.centeredSlides = false;
				showcaseSwiper.params.speed = 600;
				showcaseSwiper.update();
					
				if ($(window).width() > 1024) {
					$(".columns-carousel").find(".swiper-slide").on("mouseenter", function(e) {
						$(this).find('video').each(function() {
							$(this).get(0).play();
						});	
					}).on("mouseleave", function(e) {							
						$(this).find('video').each(function() {
							$(this).get(0).pause();
						});
					})
				}
				
			}
			
			
			if ($(window).width() >= 1024) {
				
				$('#showcase-carousel-holder .trigger-slide-link').on('mousedown', function() {
					return false;
				});
			
				$('#showcase-carousel-holder .swiper-container').on('mousedown touchstart', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					$("body" ).addClass("scale-drag-x");				
				});
				
				$('#showcase-carousel-holder .swiper-container').on('mouseup touchend', function(event) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x");				
				});
				
				$("#showcase-carousel-holder .trigger-slide-link").on('mouseenter', function() {	
					var $this = $(this);			
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
				});
									
				$("#showcase-carousel-holder .trigger-slide-link").on('mouseleave', function() {					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();				
				});
				
			}
			
		}	
		
			
	}//End Showcase Carousel
	
	
	
	
/*--------------------------------------------------
Function Floating Lists
---------------------------------------------------*/

	function FloatingLists() {
	
		if( $('.showcase-list-holder').length > 0 ){	
			
			if ($(window).width() < 1024) {
				$('.hover-reveal').addClass('trigger-slide-link');
				$('.sl-title').addClass('trigger-slide-link');
			}
			
			if ($(window).width() >= 1024) {
			
				if ($("body").hasClass("smooth-scroll")) {
					var elem = document.querySelector("#content-scroll");
					var scrollbar = Scrollbar.init(elem,
					{
						renderByPixels: true,
						damping:0.1
					});
				}
				
				const getMousePos = (e) => {
					let posx = 0;
					let posy = 0;
					if (!e) e = window.event;
					if (e.pageX || e.pageY) {
						posx = e.pageX;
						posy = e.pageY;
					}
					else if (e.clientX || e.clientY) 	{
						posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
					return { x : posx, y : posy }
				}
			
				// Effect 1
				class HoverImgFx1 {
					constructor(el) {
						this.DOM = {el: el};
						this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal');				
						this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
						this.DOM.revealInner.style.overflow = 'hidden';
						this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
						this.initEvents();
					}
					initEvents() {				
						
						this.positionElement = (ev) => {
							const mousePos = getMousePos(ev);
							if ($("body").hasClass("smooth-scroll")) {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : - scrollbar.scrollTop
								};
								if ($(".showcase-list-holder").hasClass("vertical-list")) {
									TweenLite.to($('.hover-reveal'), 0.7, { top: `${mousePos.y-250-docScrolls.top}px`, left: `${mousePos.x-400-docScrolls.left}px`, ease:Power4.easeOut });
								} else {
									TweenLite.to($('.hover-reveal'), 1, { top: `${mousePos.y+40-docScrolls.top}px`, left: `${mousePos.x+10-docScrolls.left}px`, ease:Power4.easeOut });
								}
							} else {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : document.body.scrollTop + document.documentElement.scrollTop
								};
								if ($(".showcase-list-holder").hasClass("vertical-list")) {
									TweenLite.to($('.hover-reveal'), 0.7, { top: `${mousePos.y-250-docScrolls.top}px`, left: `${mousePos.x-400-docScrolls.left}px`, ease:Power4.easeOut });
								} else {
									TweenLite.to($('.hover-reveal'), 1, { top: `${mousePos.y+40-docScrolls.top}px`, left: `${mousePos.x+10-docScrolls.left}px`, ease:Power4.easeOut });
								}
							}
							
						};
						this.mouseenterFn = (ev) => {
							this.positionElement(ev);
							this.showImage();
						};
						this.mousemoveFn = ev => requestAnimationFrame(() => {
							this.positionElement(ev);
						});
						this.mouseleaveFn = () => {
							this.hideImage();
						};
						
						this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
						this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
						this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
					}
					showImage() {
						TweenMax.killTweensOf(this.DOM.revealInner);
						TweenMax.killTweensOf(this.DOM.revealImg);
			
						this.tl = new TimelineMax({
							onStart: () => {
								this.DOM.reveal.style.opacity = 1;
								TweenMax.set(this.DOM.el, {zIndex: 1000});
							}
						})
						.add('begin')
						.add(new TweenMax(this.DOM.revealInner, 0.4, {
							ease: Sine.easeOut,
							startAt: {x: '-100%'},
							x: '0%'
						}), 'begin')
						.add(new TweenMax(this.DOM.revealImg, 0.4, {
							ease: Sine.easeOut,
							startAt: {x: '100%'},
							x: '0%'
						}), 'begin');
					}
					hideImage() {
						TweenMax.killTweensOf(this.DOM.revealInner);
						TweenMax.killTweensOf(this.DOM.revealImg);
			
						this.tl = new TimelineMax({
							onStart: () => {
								TweenMax.set(this.DOM.el, {zIndex: 999});
							},
							onComplete: () => {
								TweenMax.set(this.DOM.el, {zIndex: ''});
								TweenMax.set(this.DOM.reveal, {opacity: 0});
							}
						})
						.add('begin')
						.add(new TweenMax(this.DOM.revealInner, 0.4, {
							ease: Sine.easeOut,
							x: '100%'
						}), 'begin')
						
						.add(new TweenMax(this.DOM.revealImg, 0.4, {
							ease: Sine.easeOut,
							x: '-100%'
						}), 'begin');
					}
				}
				
				Array.from(document.querySelectorAll('.slide-list')).forEach(link => new HoverImgFx1(link));
				
				
				var slide_top = document.querySelector('.slide-list:first-child');
				$('.showcase-list-intro').css( 'top', slide_top.offsetTop);
				
				$('.slide-list').on('mouseenter', function() {
					$('.slide-list').addClass('disable');
					$(this).removeClass('disable');
					$(this).find('video').each(function() {
						$(this).get(0).play();
					});
				}).on('mouseleave', function() {
					$('.slide-list').removeClass('disable');
					$(this).find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			
			
				$(".vertical-list .slide-list").on('mouseenter', function() {	
					var $this = $(this);			
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
				}).on('mouseleave', function() {					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();				
				});
			}
			
			if (!$("body").hasClass("load-no-ajax")) {
				$('.showcase-list-holder .trigger-slide-link').on('click', function() {
					let parent_slide = $(this).closest( '.slide-list' );
					parent_slide.addClass('above');				
					if (parent_slide.hasClass("change-header")) {
						$('#page-content').delay(900).queue(function(next){
							$(this).removeClass('light-content');
							next();
						});
					}
					$('.showcase-list-holder').removeClass("loaded");
					$("body").addClass("load-project-thumb").addClass("show-loader");
					
					TweenMax.to($(".showcase-list-intro span"), 0.5, {force3D:true, y:-30, opacity:0, delay:0, ease:Power2.easeInOut});
					var SlideListTitle = new TimelineLite();					
					$(".sl-title span").each(function(index, element) {
						SlideListTitle.to(element, 0.5, {force3D:true, y:-80, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
					});				
					var SlideListSubtitle = new TimelineLite();					
					$(".sl-subtitle span").each(function(index, element) {
						SlideListSubtitle.to(element, 0.5, {force3D:true, y:-20, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
					});					
					TweenMax.to('footer, .slide-list', 0.5,{opacity:0, ease:Power4.easeInOut});
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent', opacity:1});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();							
					$(this).delay(1000).queue(function() {
						var link = $(".above").find('a');
						link.trigger('click');
					});
				});
			}
			
		}
		
		
	}// End Floating Lists	
	


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {	
	
			
		if( $('.portfolio-wrap').length > 0 ){			
			
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{renderByPixels: true,damping:0.1});
			}
			
			var $container = $('.portfolio');
		
			$container.isotope({
			  layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
			
			
				
			
			
			//Show Filters On overlay
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {
						
						TweenMax.to($(".item-parallax"), 0.6, {force3D:true, scale:0.9, opacity:0.3, delay:1.1, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.3, {opacity:0, ease:Power2.easeOut});
						TweenMax.to($("#show-filters, #counter-wrap"), 0.3, {opacity:0, delay:0, ease:Power2.easeOut});
						TweenMax.to($("#show-filters, #counter-wrap"), 0, {visibility:'hidden', delay:0.35, ease:Power2.easeOut}); 
						
						//Fade In Navigation Lists
						TweenMax.set($(".filters-info"), {y:30, opacity:0});
						TweenMax.to($(".filters-info"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
						var tlMenu = new TimelineLite();
						tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.5, {y:0, opacity:1, delay:1.2, ease:Power3.easeOut}, index * 0.1)
						});
						
						var heroheight = $("#hero").height();			
						if ($("body").hasClass("smooth-scroll")) {
							TweenLite.to(scrollbar, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
						} else {
							$("html,body").animate({scrollTop: heroheight}, 800);
						}
							
					} else {					
						
						
						TweenMax.to($(".item-parallax"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.5, {opacity:1, delay:0.5, ease:Power2.easeOut});
						TweenMax.set($("#show-filters, #counter-wrap"), {visibility:'visible', opacity:0});
						TweenMax.to($("#show-filters, #counter-wrap"), 0.3, {opacity:1, delay:0.7, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						TweenMax.to($(".filters-info"), 0.2, {force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = new TimelineLite();
						$(".filters-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});	
						TweenMax.to('#ball', 0.1,{borderWidth: '4px', scale:0.5,});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			if ($(window).width() >= 1024) {
				$("#close-filters").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
				});
					
				$("#close-filters").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("close-icon");
					$('#ball i').remove();
				});
			}
			
			setTimeout( function(){
				var controller = new ScrollMagic.Controller();
				$('.portfolio').each(function(){
					var $this = $(this);
					var $thisHeightFilters = $(this).outerHeight() - window.innerHeight*0.7;
					var $thisHeightCaptions = $(this).outerHeight() - window.innerHeight * 0.1;
					
					var sceneFilters = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeightFilters})
						.addTo(controller)
						
					
					sceneFilters.triggerHook(0.3)
					
					sceneFilters.on('enter', function(){				
						TweenMax.to($("#show-filters"), 0.3, {opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')
					});
					
					sceneFilters.on('leave', function(){				
						TweenMax.to($("#show-filters"), 0.15, {opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')
					});
					
					var sceneCaptions = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeightCaptions})
						.addTo(controller)
						
					
					sceneCaptions.triggerHook(0.5)
					
					sceneCaptions.on('enter', function(){
						$(".portfolio-captions").addClass('enabled')
					});
					
					sceneCaptions.on('leave', function(){
						$(".portfolio-captions").removeClass('enabled')
					});
					
					
					
					if ($("body").hasClass("smooth-scroll")) {
						scrollbar.addListener(() => {
							sceneFilters.refresh()
							sceneCaptions.refresh()
						});
					}
				})
			} , 2000 );
			
			TweenMax.to($("#show-filters"), 0, {opacity:0, delay:0.05, ease:Power2.easeOut});
			
			if ($(window).width() > 1024) {
				if (!$(".portfolio-wrap").hasClass("tooltip-caption")) {	
					$(".item-image").mouseenter(function(e) {	
						TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1, borderColor:'#fff'});
						TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
						$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
						$(this).parent().find('video').each(function() {
							$(this).get(0).play();
						});
					});
									
					$(".item-image").mouseleave(function(e) {
						TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999'});
						TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
						$("#ball").removeClass("with-icon");
						$('#ball i').remove();
						$(this).parent().find('video').each(function() {
							$(this).get(0).pause();
						});
					});
				}
				
				//Title Floating Tooltip
				if( $('.tooltip-caption').length > 0 ){
					
					$(".item-title-hover").remove();
					
					$("#ball").append('<div class="title-caption-tooltip"></div>');
					$(".portfolio").find(".item .item-caption").each(function() {
						$(".title-caption-tooltip").append($(this))
					});
					
					$(".portfolio").find(".item .item-image").on("mouseenter", function(e) {
						$(".title-caption-tooltip").children().eq($(this).parents('.item').index()).addClass("hover")
					}).on("mouseleave", function(e) {
						$(".title-caption-tooltip").children().eq($(this).parents('.item').index()).removeClass("hover")
					}).on("click", function() {
						$(".title-caption-tooltip").children().eq($(this).parents('.item').index()).removeClass("hover")
						setTimeout( function(){$(".title-caption-tooltip").remove();} , 100 );
					});
					$(".item-image").mouseenter(function(e) {	
						TweenMax.to('#ball', 0.2,{borderWidth:"0px",scale:1,borderColor:'transparent'});
						TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 4, left: 4});
					});						
					$(".item-image").mouseleave(function(e) {
						TweenMax.to('#ball', 0.3,{borderWidth:"4px",scale:0.5,borderColor:'#999999'});
						TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					});
						
				}	
				
				if( $('.hover-caption').length > 0 ){
					
					if ($(".portfolio-wrap").hasClass("hover-caption")) {
						if ($("#page-content").hasClass("light-content")) {
							$("body").append('<div class="temporary-hero portfolio-captions light-content"></div>');
						} else {
							$("body").append('<div class="temporary-hero portfolio-captions"></div>');
						}
						$(".temporary-hero").append('<div class="outer"></div>');
						$(".temporary-hero .outer").append('<div class="inner"></div>');
						$(".portfolio").find(".item .item-caption").each(function() {
							$(".temporary-hero .outer .inner").append($(this))
						}); 
						
						$(".portfolio").find(".item .item-image").on("mouseenter", function(e) {
							
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), 0.4, {force3D:true, opacity:1,  y: 0, delay:0.15, ease:Power2.easeOut});
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:1,  y: 0, delay:0.25, ease:Power2.easeOut});
							
						}).on("mouseleave", function(e) {
							
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:0,  y: -50, ease:Power2.easeIn});
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:0,  y: -30, delay:0.05, ease:Power2.easeIn});
							TweenMax.set($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), { y: 50, opacity:0, delay:0.3});
							TweenMax.set($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), { y: 30, opacity:0, delay:0.35});
							
						}).on("click", function() {
							$(".temporary-hero").removeClass('enabled')
						});
						$(".item-title-hover").remove();
					}
						
				}
			
			}
			
		}
	
	}//End Portfolio
	

	

/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/
	
	function Shortcodes() {

		// Accordion	  
		
		$('dd.accordion-content').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(350).siblings('dd.accordion-content').slideUp(350).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(350);
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
		
		// Project Share	
		
		$("#share").jsSocials({
            showLabel: false,
    		showCount: false,
    		shares: ["facebook", "twitter", "pinterest"]
        });
		
		$('.jssocials-share').wrap( "<div class='parallax-wrap'><div class='parallax-element'></div></div>" );
		
		if( $('.random-collage-wrap').length > 0 ){
		
			if ($(window).width() >= 1024) {
				
				$(".random-collage .rc-slide .item-wrap-image").on('mouseenter', function() {	
					var $this = $(this);			
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
				});
									
				$(".random-collage .rc-slide .item-wrap-image").on('mouseleave', function() {					
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();				
				});
			
			}
		}
	
	}//End Shortcodes
	

	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		setTimeout( function(){
			
			if( $('.content-slider').length > 0 ){
			
				var interleaveOffset = 0.4;
				
				var ContentSliderOptions = {				
					direction: 'horizontal',
					loop: true,
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 0,
					mousewheelControl: false,
					simulateTouch: false,
					speed: 1000,
					navigation: {
						nextEl: '.slider-button-next',
						prevEl: '.slider-button-prev',
					},
					on: {
						progress: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								var slideProgress = swiper.slides[i].progress;
								var innerOffset = swiper.height * interleaveOffset;
								var innerTranslate = slideProgress * innerOffset;
								swiper.slides[i].querySelector("img").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
							}
						  
						},
						touchStart: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = "";
							}
						},
						setTransition: function(speed) {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector("img").style.transition = speed + "ms";
							}   
						}
					}
			
				}
				
				var swiper = new Swiper(".content-slider", ContentSliderOptions);
				
				$(".slider-button-prev").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
				});
					
				$(".slider-button-prev").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
				$(".slider-button-next").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
				});
					
				$(".slider-button-next").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
			}
			
			
			if( $('.content-carousel').length > 0 ){
				
				$('body').waitForImages({
					finished: function() {
			
						var ContentCarouselOptions = {			
							direction: 'horizontal',
							simulateTouch: true,
							slidesPerView: 'auto',
							spaceBetween: 0,
							mousewheelControl: false,
							speed: 700,
							pagination: {
				  				el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
					  			return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
									'stroke-opacity="1" stroke-width="2px"></circle>'+
									'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
									'</svg></div></div></span>';
								},
							}
						}
						
						var swiper = new Swiper(".content-carousel", ContentCarouselOptions);
				
					},
					waitForAll: true
				});	

				
				$('.content-carousel').on('mousedown touchstart', function() {
					TweenMax.to('.swiper-slide img', 0.7,{scale: 0.9});
					$("body").addClass("drag-cursor");
				});
				
				$('body').on('mouseup touchend', function() {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("drag-cursor");
				});
				
				$('.content-carousel').on('mouseenter mousemove', function() {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.content-carousel').on('mouseleave', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
				
				$("body").mouseleave(function(e) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
			
			}
			
			
			if( $('.content-looped-carousel').length > 0 ){
				
				$('body').waitForImages({
					finished: function() {
			
						var ContentLoopedCarouselOptions = {			
							direction: 'horizontal',
							simulateTouch: true,
							slidesPerView: 'auto',
							spaceBetween: 0,
							centeredSlides: true,
							loop:true,
							mousewheelControl: false,
							speed: 700,
							pagination: {
				  				el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
					  			return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
									'stroke-opacity="1" stroke-width="2px"></circle>'+
									'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
									'</svg></div></div></span>';
								},
							}			
						}
						
						var swiper = new Swiper(".content-looped-carousel", ContentLoopedCarouselOptions);
						
					},
					waitForAll: true
				});							
				
				$('.content-looped-carousel').on('mousedown touchstart', function() {
					TweenMax.to('.swiper-slide img', 0.7,{scale: 0.9});
					$("body").addClass("drag-cursor");
				});
				
				$('body').on('mouseup touchend', function() {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("drag-cursor");
				});
				
				$('.content-looped-carousel').on('mouseenter mousemove', function() {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.content-looped-carousel').on('mouseleave', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
				
				$("body").mouseleave(function(e) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
			
			}
		
		} , 400 );
		
		
		if( $('.content-middle-carousel').length > 0 ){
			
			var ContentMiddleCarouselOptions = {			
				direction: 'horizontal',
				simulateTouch: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				loop:true,
				mousewheelControl: false,
				speed: 700,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
					return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
						'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
						'stroke-opacity="1" stroke-width="2px"></circle>'+
						'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
						'</svg></div></div></span>';
					},
				}			
			}
			
			var swiper = new Swiper(".content-middle-carousel", ContentMiddleCarouselOptions);
			
			if ($(window).width() > 1024) {
				
				$(".content-middle-carousel .swiper-slide img").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1, borderColor:'#fff'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
					$(this).parent().find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".content-middle-carousel .swiper-slide img").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999'});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
					$(this).parent().find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			}
			
		}
		
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 360,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	
	
	
	








	
					
	
		
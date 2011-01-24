/* 
 * jQuery Plugin: Content Slider
 * Version:  1.0
 * Author: Qawelesizwe Mlilo
 * Email:  qawemlilo@gmail.com 
 * Copyright (c) 2010 Raging Flame          
*/
(function ($) {
	$.fn.contentSlider = function (settings) {

		var settings = $.extend({
			registerButtons: false,
			autoStart: false,
			animateImg: true,
			timeOut : 5000,
			repeats: 0,
			speed: 300
		}, settings),

		container = this, numRepeats = 0, firstSlide = $($(".slide")[0]), imgTop = parseFloat($(".slide img").css('top'), 10),
		numSlides, slideMoverWidth, timoutID, slideWidth, onLastSlide, imgOffset = -($(container.parent()).height()), inMotion = true,
		
        slidePanel = function (nav) {
	        var marginLeft = container.css("left"), movement;

	        if (marginLeft === "auto") { marginLeft = 0; }
			marginLeft = parseFloat(marginLeft, 10);
			
	        if (nav && nav === 'back') {
			      if (marginLeft !== 0) {
      			      movement = (marginLeft + slideWidth);
			      }
				  else {
				    movement = (slideWidth - slideMoverWidth);
				}
				
		        $(".slide img").stop().animate({"top": imgOffset}, settings.speed, function () {
			        container.stop().animate({"left": movement}, settings.speed, function () {
				        $(".slide img").stop().animate({"top": imgTop});
			        });
		        });
				return;
			} 

			movement = (marginLeft - slideWidth);

	        if (movement === onLastSlide) {
			   if (!settings.animateImg) imgOffset = imgTop;
		        $(".slide img").stop().animate({"top": imgOffset}, settings.speed, function () {
			        container.stop().animate({"left": 0}, settings.speed, function () {
				        $(".slide img").stop().animate({"top": imgTop});
			        });
		        });
				if (numRepeats > settings.repeats) {
				    clearInterval(timoutID);
					inMotion = false;
					return false;
				} 
				numRepeats+=1
	        }
	        else { 
				if (!settings.animateImg) imgOffset = imgTop;
		        $(".slide img").stop().animate({"top": imgOffset}, settings.speed, function () {
			        container.stop().animate({"left": movement}, settings.speed, function () {
				        $(".slide img").stop().animate({"top": imgTop});
			        });
		        });		
	        }
        },
		
		
        init = function () {
		    slideWidth = parseFloat(firstSlide.outerWidth(), 10);
            numSlides = $(".slide").size(); 
		    slideMoverWidth = numSlides * slideWidth;
			onLastSlide = -(slideMoverWidth);
			
			container.css("width", slideMoverWidth);
			
	        if (settings.registerButtons === true && !($.browser.msie && $.browser.version.substr(0,1)<7)) {
     		    $(container.parent()).append('<a id="back" class="nav" alt="Back" title="Back">&nbsp;</a>').append('<a class="nav" id="next" title="Next" alt="Next">&nbsp;</a>')
			    .mouseover(function (e) {
                    clearInterval(timoutID);
                    $(".nav").css('display', 'block');
                })
				.mouseout(function (e) {
                    $(".nav").css('display', 'none');
					if (inMotion === true) {
			            timoutID = setInterval(function() {
			                slidePanel();
			            }, settings.timeOut);
					}
                });
				
				$('#back').click(function(e) {
				    e.preventDefault();
					slidePanel('back');				   
				});
				$('#next').click(function(e) { 
				    e.preventDefault();
					slidePanel();				   
				});
		    }
			
			if (settings.autoStart === true) {
                timoutID = setInterval(function() {
		            slidePanel();
                }, settings.timeOut);
			}
		}; 
		
		init();		
		return this;
	}
})(jQuery);
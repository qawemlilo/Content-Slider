/* 
 * RF_Content_Slider - v1.0
 * Author: Qawelesizwe Mlilo
 * Email:  qawemlilo@gmail.com 
 * Copyright (c) 2010 Raging Flame          
*/
(function($){

	$.fn.contentSlider = function(settings) {
        //defualt settings
		settings = $.extend({
			registerButtons: false,
			autoStart: false,
			animateImg: true,
			timeOut : 5000,
			slideRepeats: 0,
			speed: 300,
			imgOffset : -200,
			imgTop : 30
		}, settings);

		var container = this, numRepeats = 0, $slide1 = $($(".slide")[0]), 
		slides, slideMoverWidth, timoutID, slideWidth, lastSlide,

		
        slidePanel = function(nav) {
	        var pxLeft = container.css("left"), movement;

	        if (pxLeft === "auto") { pxLeft = 0; }
	        
	        if (nav && nav === 'back') {
			      if (parseFloat(pxLeft) !== 0) {
      			      movement = parseFloat(pxLeft, 10) + slideWidth;
			      }
				  else {
				    movement = slideWidth - slideMoverWidth;
				}
				
		        $(".slide img").stop().animate({"top": settings.imgOffset}, settings.speed, function() {
			        container.stop().animate({"left": movement}, settings.speed, function() {
				        $(".slide img").stop().animate({"top": settings.imgTop});
			        });
		        });
				return;
			} 

			movement = parseFloat(pxLeft, 10) - slideWidth;

	        if (movement === lastSlide) {
			   if(!settings.animateImg) settings.imgOffset = settings.imgTop;
		        $(".slide img").stop().animate({"top": settings.imgOffset}, settings.speed, function() {
			        container.stop().animate({"left": 0}, settings.speed, function() {
				        $(".slide img").stop().animate({"top": settings.imgTop});
			        });
		        });
				if (numRepeats >= settings.slideRepeats) {
				    clearInterval(timoutID);
					return false;
				} 
				numRepeats+=1
	        }
	        else { 
				if(!settings.animateImg) settings.imgOffset = settings.imgTop;
		        $(".slide img").stop().animate({"top": settings.imgOffset}, settings.speed, function() {
			        container.stop().animate({"left": movement}, settings.speed, function() {
				        $(".slide img").stop().animate({"top": settings.imgTop});
			        });
		        });		
	        }
        },
		
		
        init = function () {
		    var mainContainer = container.parent();
			
		    slideWidth = parseFloat($slide1.outerWidth(), 10);
            slides = $(".slide").size(); 
		    slideMoverWidth = slides * slideWidth;
			lastSlide = -(slideMoverWidth);
            
			container.css("width", slideMoverWidth);
			
	        if (settings.registerButtons && !($.browser.msie && $.browser.version.substr(0,1)<7)) {
				
     		    $(mainContainer).append('<a id="back" class="nav" alt="Back" title="Back">&nbsp;</a>').append('<a class="nav" id="next" title="Next" alt="Next">&nbsp;</a>')
			    .mouseover(function(e) {
                    clearInterval(timoutID);
                    $(".nav").css('display', 'block');
                }).mouseout(function(e) {
                    $(".nav").css('display', 'none');
			        timoutID = setInterval(function() {
			             slidePanel();
			        }, settings.timeOut);
                });
				
				$('#back').click(function(e) {
				    e.stopPropagation();
					slidePanel('back');				   
				});
				
				$('#next').click(function(e) { 
				    e.stopPropagation();
					slidePanel();				   
				});
		    }
			if(settings.autoStart){
            timoutID = setInterval(function() {
		        slidePanel();
            }, settings.timeOut);
			}
		}; 
		
		init();		
		return this;
	}
})(jQuery);
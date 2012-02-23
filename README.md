# Content Slider  

Content Slider is a simple and elegant jQuery plugin that displays sliding html content. This plugin was inspired by Chris Coyier's Start/Stop Slider which i came across when i was working on a project that required a slide showcase for products.  

### Features:

* Slides any type of html content 
* Shows navigation buttons on hover 
* Pauses slide show on hover  
* Transparent png fix for IE6 users  
* Runs in all major browsers (IE6 included)   

### Browser Support  

* Internet Explorer v6+  
* Firefox v2+  
* Apple Safari  
* Google Chrome  
* Opera  

## How to use  

Content Slider uses the following files:  

* jQuery-1.4.4.js  
* content-slider.css  
* jquery.contentSlider.js  
* iepngfix.htc (for png fix in IE6)   

### CSS


  
```
<link href="style.css" rel="stylesheet" type="text/css" />
```



Include the Content Slider css in the head section of of your html page. 

### HTML



```html
<div id="slider">
    <div id="mover">
        <div class="slide">
		    <-- Slide content here -->
        </div>
		
        <div class="slide">
		    <-- Slide content here -->
        </div>
		
        <div class="slide">
		    <-- Slide content here -->
        </div>
		
        <div class="slide">
		    <-- Slide content here -->
        </div>
    </div>
</div>
``` 



Make sure the content is wrapped inside divs with a 'slide' class name JavaScript.  



```javascript
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    $("#mover").contentSlider({
        autoStart: true,
        registerButtons: ture,      
        animateImg: true,
        timeOut: 5000,
        repeats: 0,
        speed: 300
    });	
});
</script>
```



Include the javaScript code above at the botttom of your page(just before the closing body tag) and edit necessary options.  


### OPTIONS:  

* **autoStart** - (@boolean, defaults to 'true') Triggers the Content Slider to run as soon as the page loads.   



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            autoStart: true
        });	
    });
``` 



* **registerButtons** - (@boolean, defaults to 'true')  If set to true, navigation buttons are displayed when the mouse hovers over sliding content.   



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            registerButtons: true
        });	
    }); 
```



* **animateImg** - (@boolean, @default = true) Creates the "slide up and down" animation for images inside each panel slide.  



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            autoStart: true
        });	
    });
```



* **timeOut** - (@int, @default = 5000) Interval between slides in microseconds.  



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            timeOut: 7000
        });	
    }); 
```



* **repeats** - (@int, @default = 0) The number of times the Content Slider should repeat, a default of 0 will run the Content Slider only once.  



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            repeats: 0
        });	
    }); 
````



* **speed** - (@int, @defaults = 300) The speed of animation transitions. Ranges between 200 and 600.



```javascript
    $(document).ready(function() {
        $("#mover").contentSlider({
            speed: 300
        });	
    });
```

 
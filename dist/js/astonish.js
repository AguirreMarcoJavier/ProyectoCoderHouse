

$(function () {
    'use strict';
    var $window = $(window); 

    
    function astonish() {
        if ($window.width() > 748) {
            var window_top = $window.scrollTop(), // Top of the screen
                window_bottom = $window.height() * 0.8 + window_top;

            /* Reveal animation will look for all elements that do not have the
            animated class and cycle through each one as if it were a for loop */
            $(".astonish:not(.animated)").each(function () {
                var $this = $(this), // In this instance $this refers to any object with a class of astonish
                    object_top = $this.offset().top, // The top part of any object
                    object_bottom = $this.outerHeight() + object_top, // Bottom part of any object
                    animation = $this.data("animation");
                if ((window_bottom > object_top) && (window_top < object_bottom)) {
                    // Declaring variables
                    var delay,
                        animationDuration;
                    // Get the data-delay attribute, if not present a default will be given
                    if (typeof $this.data("delay") !== 'undefined') {
                        delay = $this.data("delay");
                    } else {
                        delay = 0; // Default delay
                    }
                    // Get the data-duration attribute, if not present a default will be given
                    if (typeof $this.data("duration") !== 'undefined') {
                        animationDuration = $this.data("duration");
                    } else {
                        animationDuration = 1; // Default duration
                    }
                    // If one or both have been set, display animation according to those user defined values
                    if (delay > 0 || animationDuration > 0) {
                        window.setTimeout(function () {
                            $this.css({
                                "moz-animation-duration": animationDuration + 's',
                                "webkit-animation-duration": animationDuration + 's',
                                "animation-duration": animationDuration + 's'
                            });
                           
                            $this.addClass('animated ' + animation);
                        }, delay * 1000);
                    } else {
                        // If not defined, the default animate.css will take over with default delay and duration
                        $this.addClass('animated ' + animation);
                    }
                }
            });
        }
    }
    /*$window.on('scroll', function () {
        setTimeout(function () {
            astonish();
        }, 1000);
    });*/
    var timeOut;

    $window.scroll(function () {
        if (timeOut) {
            // Clear timeOut if there already is one
            clearTimeout(timeOut);
            timeOut = null;
        }
        timeOut = setTimeout(astonish, 10);
        //console.log("The time it takes for astonish to fire");
    });
});



$(function () {
    'use strict';
    var $window = $(window); 

    
    function astonish() {
        if ($window.width() > 748) {
            var window_top = $window.scrollTop(), 
                window_bottom = $window.height() * 0.8 + window_top;
            $(".astonish:not(.animated)").each(function () {
                var $this = $(this),
                    object_top = $this.offset().top, 
                    object_bottom = $this.outerHeight() + object_top,
                    animation = $this.data("animation");
                if ((window_bottom > object_top) && (window_top < object_bottom)) {
                    var delay,
                        animationDuration;
                    if (typeof $this.data("delay") !== 'undefined') {
                        delay = $this.data("delay");
                    } else {
                        delay = 0;
                    }
                    if (typeof $this.data("duration") !== 'undefined') {
                        animationDuration = $this.data("duration");
                    } else {
                        animationDuration = 1;
                    }
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
                        $this.addClass('animated ' + animation);
                    }
                }
            });
        }
    }
    var timeOut;

    $window.scroll(function () {
        if (timeOut) {
            clearTimeout(timeOut);
            timeOut = null;
        }
        timeOut = setTimeout(astonish, 10);
    });
});

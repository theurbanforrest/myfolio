/*
ONVIEW FADE-IN ENTRY
-When .fc-onview-fadein enters viewport, make fc-visible and animate fadeInUp
*/ 
    $('.fc-onview-fadein').viewportChecker({
        classToRemove: 'fc-hidden',
        classToAdd: 'fc-visible animated fadeInUp' // Class to add to the elements when they are visible,
    });


/*
ONVIEW RUBBERBAND
-When .fc-onview-fadein enters viewport, make fc-visible and animate rubberBand
*/ 
    $('.fc-onview-rubberband').viewportChecker({
        classToRemove: 'fc-hidden',
        classToAdd: 'fc-visible animated rubberBand'
    });



/*
ONVIEW COUNTUP
-When .fc-onview-countup enters viewport, count up to the target number
*/

    $('.fc-onview-countup').viewportChecker({
        callbackFunction: function(elem,action){
            $('.fc-onview-countup').each(function() {
                var $this = $(this),
                countTo = $this.attr('data-count');
                
                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 1600,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }
    });



/*
SOCIAL DEEPLINKS
-If on Mobile, updates LinkedIn URL's to deeplink to apps
*/
    (function($) {
        "use strict"; // Start of use strict
                //If iOS
                if( /webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $("a[href='https://www.linkedin.com/in/forrest-ching-86421232/']").attr('href','linkedin://profile?id=86421232');
                }
                //If Android
                else if(/Android/i.test(navigator.userAgent) ){
                    $("a[href='https://www.linkedin.com/in/forrest-ching-86421232/']").attr('href','https://www.linkedin.com/in/forrest-ching-86421232/');
                /*End Social Deeplinks*/
                }
        }(jQuery) // End of use strict




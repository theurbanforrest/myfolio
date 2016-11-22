// Freelancer Theme JavaScript
(function($) {
    "use strict"; // Start of use strict
    /*Begin Social Deeplinks*/
        /*Update social links to deeplinks if iOS or Android*/
        //If iOS
            if( /webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $("a[href='https://www.instagram.com/riseandpineco/']").attr('href','instagram://user?username=riseandpineco');
            }
        //If Android
            else if(/Android/i.test(navigator.userAgent) ){
                $("a[href='https://www.instagram.com/riseandpineco/']").attr('href','intent://instagram.com/_u/riseandpineco/#Intent;package=com.instagram.android;scheme=https;end');
            }
    /*End Social Deeplinks*/
})(jQuery); // End of use strict



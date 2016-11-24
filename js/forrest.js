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

    /*Begin Squares vs Tiles
    if (document.documentElement.clientWidth < 768) {
        $("#portfolioModal1-image").attr('src','../img/rp-pineyspread-banner-1x.png');
        $("#portfolioModal2-image").attr('src','../img/rp-citycup-banner-1x.png');
        $("#portfolioModal3-image").attr('src','../img/rp-mugshot-banner-1x.png');
    }
    /*End Squares vs Tiles*/
})(jQuery); // End of use strict



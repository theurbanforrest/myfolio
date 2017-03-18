



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




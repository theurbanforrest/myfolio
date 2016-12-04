// Freelancer Theme JavaScript
(function($) {
    "use strict"; // Start of use strict
    /*Begin Social Deeplinks*/
        /*Update social links to deeplinks if iOS or Android*/
        //If iOS
            if( /webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $("a[href='https://www.instagram.com/riseandpineco/']").attr('href','instagram://user?username=riseandpineco');
                $("a[href='https://www.facebook.com/riseandpineco/']").attr('href','fb://profile/1158300764228333');
            }
        //If Android
            else if(/Android/i.test(navigator.userAgent) ){
                $("a[href='https://www.instagram.com/riseandpineco/']").attr('href','intent://instagram.com/_u/riseandpineco/#Intent;package=com.instagram.android;scheme=https;end');
                $("a[href='https://www.facebook.com/riseandpineco/']").attr('href','fb://profile/1158300764228333');
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


    /*Analytics Handlers*/

        //Set useful variables
        dataLayer.modal1name = $("#portfolioModal1-name").text();
        dataLayer.modal2name = $("#portfolioModal2-name").text();
        dataLayer.modal3name = $("#portfolioModal3-name").text();

        //Portfolio Link Clicks
        $(".portfolio-link").on("click", function() {
            var clickName = $(this.getAttribute('href')+"-name").text();
                dataLayer.push(
                    {
                        'event' : 'User Interaction',
                        'eventName' : 'Portfolio Link Click',
                        'clickName' : clickName
                    }
                );
        });

        //Home Click
        $(".navbar-brand").on("click", function(){
            var clickName = this.text;
                dataLayer.push(
                    {
                        'event' : 'User Interaction',
                        'eventName' : 'Home Click',
                        'clickName' : clickName

                    }
                );
        });

        //Footer : Instagram Click
        $("#footer-instagram").on("click", function() {
                dataLayer.push(
                    {
                        'event' : 'User Interaction',
                        'eventName' : 'Footer Click',
                        'clickName' : 'Instagram'
                    }
                );
        });

        //Footer : Facebook Click
        $("#footer-facebook").on("click", function() {
                dataLayer.push(
                    {
                        'event' : 'User Interaction',
                        'eventName' : 'Footer Click',
                        'clickName' : 'Facebook'
                    }
                );
        });

require("../node_modules/slick-carousel/slick/slick.min.js")
require("../src/pages/main.js")
$(document).ready(function(){
    $('.slide-card__image-title').each(function() {
        var h = $(this).html();
        var index = h.indexOf(' ');
        if(index == -1) {
            index = h.length;
        }
        $(this).html('<span>' + h.substring(0, index) + '</span>' + h.substring(index, h.length));
    });
        $('.slide-second-card__image-title').each(function() {
            var h = $(this).html();
            var index = h.indexOf(' ');
            if(index == -1) {
                index = h.length;
            }
            $(this).html('<span class="white-span">' + h.substring(0, index) + h.substring(9,index) + '</span>' + "<br>" + h.substring(9, h.length));
        });
    
});

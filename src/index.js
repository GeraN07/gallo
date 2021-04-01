require("../node_modules/slick-carousel/slick/slick.min.js")
require("../src/pages/main.js")
$(document).ready(function(){
    $('h2').each(function(){
     var title = $(this);
     title.html( title.text().replace(/(^\w+)/,'<span>$1</span>') );
    });
   });

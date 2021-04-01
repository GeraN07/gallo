$(document).ready(function(){
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable:true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    $(".menu-block__device-micro").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-micro").toggleClass("active");
        $(".menu-block__device-micro-image").toggleClass("active");
    });
    $(".menu-block__device-micro-se").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-micro-se").toggleClass("active");
        $(".menu-block__device-micro-se-image").toggleClass("active");
    });
    $(".menu-block__device-adiva").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-adiva").toggleClass("active");
        $(".menu-block__device-adiva-image").toggleClass("active");
    });
    $(".menu-block__device-adiva-se ").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-adiva-se").toggleClass("active");
        $(".menu-block__device-adiva-se-image").toggleClass("active");
    });
    $(".menu-block__device-micro-droplet").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-micro-droplet").toggleClass("active");
        $(".menu-block__device-micro-droplet-image").toggleClass("active");
    });
    $(".menu-block__device-micro-se-droplet").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-micro-se-droplet").toggleClass("active");
        $(".menu-block__device-micro-se-droplet-image").toggleClass("active");
    });
    $(".menu-block__device-adiva-droplet").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-adiva-droplet").toggleClass("active");
        $(".menu-block__device-adiva-droplet-image").toggleClass("active");
    });
    $(".menu-block__device-adiva-se-droplet").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-adiva-se-droplet").toggleClass("active");
        $(".menu-block__device-adiva-se-droplet-image").toggleClass("active");
    });
    $(".menu-block__device-strada-2").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-strada-2").toggleClass("active");
        $(".menu-block__device-strada-2-image").toggleClass("active");
    });
    $(".menu-block__device-subwoofers").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-subwoofers").toggleClass("active");
        $(".menu-block__device-subwoofers-image").toggleClass("active");
    });
    $(".menu-block__device-accessories").hover(function(){
        $(".device-image-block").removeClass("active");
        $(".menu-block__devices-list li").removeClass("active");
        $(".menu-block__device-accessories").toggleClass("active");
        $(".menu-block__device-accessories-image").toggleClass("active");
    });
    
  });

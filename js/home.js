
$(document).ready(function (e) {
    //home
    $('.header .banner').flexslider({
        animation: "fade",
        direction: "horizontal",
        easing: "swing",
        touch: "true"
    });
    $('.index_title #demo01').flexslider({
        animation: "fade",
        direction: "horizontal",
        easing: "swing"
    });
    // if ($(window).width() > 640) {
    //     $(".index_item ul li").hover(function () {
    //         $(this).stop().animate({ bottom: 20 }, 200);
    //     }, function () {
    //         $(this).stop().animate({ bottom: 0 }, 200);
    //     });
    // };

    if ($(window).width() > 1000) {


    }

    //phone-nav
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $(".menuBtn").click(function () {
        $('body').toggleClass('fixme');
        if ($(".phone-nav").position().left < 0) {
            $(".mask").fadeIn(300);
            $(".phone-nav").animate({ left: 0 }, 300);
        } else if ($(".phone-nav").position().left >= 0) {
            $(".mask").fadeOut(300);
			
			// $(".dealer .process .applyBtn").removeClass("hover");
			// $(".Loginbox").fadeOut();
			// $(".dealer .process .entrance").removeClass("hover");
			// $(".Contacts").fadeOut();
			// $(".dealer_data .dataBox table td .addperson .plus").removeClass("active");


            $(".phone-nav").animate({ left: -170 }, 300);
        }
    });
    $(".phone-nav ul li").click(function () {
        $(this).next(".phone-navlist").slideToggle().siblings(".phone-navlist").slideUp();
    });
    $('.nav ul li').mouseenter(function () {
        $(this).find(".erji").slideDown(200);
    });
    $('.nav ul li').mouseleave(function () {
        $(this).find(".erji").stop().slideUp(200);
    });
    $(".mask").click(function () {
        $(".phone-nav").animate({ left: -170 }, 300);
        $(this).fadeOut(100);
        $(".video_box").fadeOut(100);
        $('body').removeClass('fixme');
        $(".code_box").fadeOut(200);
        $(".weibo_box").fadeOut(200);
		
    })
   
    //xiaotu
    $(".small_img ul li img").click(function () {
        var src = $(this).attr("src");
        $(".big_img .pic_container .whole_pic img").attr("src", src);
        $(".big_img .pic_show .show_left ul li img").attr("src", src);
    });
    $(".section .content").addClass("animated fadeInDown");
    
    $('.fancybox').fancybox();
    
	
	$(".item_middle ul li").hover(function(){
		$(this).find(".small_shadow").stop().animate({opacity:0.6},200);
		},function(){
			$(this).find(".small_shadow").animate({opacity:1},200);
			});
	 var _index =0;	
	 
	$(".bottom .bottom_con .bottom_middle dl dd a").click(function(){
		var self = this;
		$(this).addClass("on").siblings().removeClass("on");
		 _index =$(self).index();
		 $('#map_slide').flexslider(_index);
		$(".map_box").stop().delay(400).animate({width:"100%",height:"100%",top:0,left:0},400,function(){
			
			});		 
		});
	 			
});

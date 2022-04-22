$(function() {
    $(window).on("resize load", function () {
        //mainVertical();
    });
	mainVertical();
	gnbMenu();
	pointer();
	moNav();
});

// 메인 - 서비스소개
function mainVertical() {
    var mainVertical = new Swiper('.fullscreen', {
        direction: "vertical",
        effect: "slide",
        slidesPerView: 'auto',
        speed: 800,
        allowTouchMove:false,
        simulateTouch:false,
        touchStartPreventDefault:false,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
        mousewheel: {
            releaseOnEdges: true,
			invert: false,
        },
        mousewheelControl: true,
        pagination: {
            el: '.fullscreen .swiper-pagination',
            clickable : true,
        },

        on:{
			init: function(){
			},
			transitionStart: function(){
				if(this.activeIndex != 0){
					$(".btn_top_wrap").fadeIn(500);
				}else{
					$(".btn_top_wrap").fadeOut(500);
				}
				
				var footHeight = $(".footer_section").outerHeight();
				if($(".footer_section").hasClass("swiper-slide-visible")){
					$(".btn_top_wrap").css("position","fixed").css("bottom",footHeight + 60).addClass('on');
				}else{
					$(".btn_top_wrap").css("position","fixed").css("bottom","80px").removeClass('on');
				}
			},
			transitionEnd: function(){		
			},

			// reachEnd: function () {
			// 	$('.swiper-pagination').css({"display":"none"})
			// },
			// slidePrevTransitionStart: function () {
			// 	$('.swiper-pagination').css({"display":"block"})
			// },
			// slideChangeTransitionEnd: function(){
			// 	alert(this.activeIndex);
			// },
		},

        breakpoints: {
			1024: {
				allowTouchMove:true,
				simulateTouch:true,
				grabCursor: true,
				touchStartPreventDefault:true,
			},
		},
    });

    $(".btn_top_wrap a").click(function(){
		mainVertical.slideTo(0,600);
	});
	
}

// 상단메뉴 페이지인식
function gnbMenu(depth1) {
    $('.gnb li').eq(depth1-1).find('> a').addClass('on');
}

// 모바일 mo_nav_open
function moNav() {
	// $('.btn_menu_open').on('click',function(){
	// 	var href = $(this).attr("href");
	// 	$('.mo_nav_wrap' + href).addClass('on');
	// 	$('body').css({'height':$(window).height(), 'overflow':'hidden'});
	// });
	// $('.mo_nav_wrap .btn_close').on('click', function(e){
	// 	e.preventDefault();
	// 	$('.mo_nav_wrap').removeClass('on');
	// 	$('body').css({'height':$(window).height(), 'overflow':'auto'});
	// });
}


//마우스 포인터
function pointer() {
	var pointSize = $(".pointer").width()/2;
	$(window).on("mousemove", function(e){
		$('.pointer').css("top", e.pageY-pointSize);
		$('.pointer').css("left", e.pageX-pointSize);
	});
	$('.pointer').on("mouseenter", function(){
		$('.pointer').removeClass('on');
	});
	$('.pointer').on("mouseleave", function(){
		$('.pointer').addClass('on');
	});
}


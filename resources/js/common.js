$(function() {
    $(window).on('load', function() {
        mainVertical();
    });

    // 메인 : 비주얼
    var mainVertical = new Swiper('.main_vertical', {
        direction: "vertical",
        effect: "slide",
        slidesPerView: 'auto',
        speed: 1000,
        allowTouchMove:false,
        simulateTouch:false,
        touchStartPreventDefault:false,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
        mousewheel: {
            releaseOnEdges: true
        },
        mousewheelControl: true,
        pagination: {
            el: '.main_vertical .swiper-pagination',
            clickable : true,
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
});

// 상단메뉴
function gnbMenu(depth1) {
	var $gnbDep1 = $('.gnb li');
    
    if ($gnbDep1.length > depth1-1) {
        $gnbDep1.eq(depth1-1).find('> a').addClass('on');
	}
}
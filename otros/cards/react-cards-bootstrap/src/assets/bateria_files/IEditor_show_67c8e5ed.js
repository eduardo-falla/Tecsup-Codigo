$(function(){if(0<$(".J-richTextNav .richtext-nav-item").length){var e=function(b,h){var d=!1;if(!b)return d;try{1!==b.nodeType&&(b=b.get(0));var c=b.getBoundingClientRect(),a=window.innerHeight;0>c.top&&c.height/2>Math.abs(c.top)?d=!0:c.top+c.height>a&&c.top+c.height-a<c.height/2?d=!0:0<c.top&&c.top<a&&c.top+c.height<a&&(d=!0);d&&h&&setTimeout(function(){e(b)&&h(b)},500)}catch(n){return e}return d},f=!1,k=200;4>=$(".J-tabs .J-richTextNav .richtext-nav-item").length&&($(".J-tabs .J-richTextNav .toolbar").hide(),
k=0);var m=new SwiperA(".J-tabs .J-richTextNav",{autoplay:!1,hashNavigation:!1,slidesPerView:"auto",wrapperClass:"richtext-nav-ul",slideClass:"richtext-nav-item",slideActiveClass:"active",slideToClickedSlide:!0,normalizeSlideIndex:!1,slidesOffsetAfter:k,navigation:{nextEl:".arrow-next",prevEl:".arrow-pre"},on:{click:function(b){f=!0;var a=$(b.target).attr("data-hash");a||(a=$(".J-richTextNav .active").attr("data-hash"));a=$("#"+a).offset().top-150+"px";$("html,body").animate({scrollTop:a},200);setTimeout(function(){f=
!1},300);b.preventDefault()}}}),l=$("div[cke-mic-navigation]"),a=null;$(".com-block-tab").wrapAll('\x3cdiv style\x3d"height: 52px;"\x3e\x3c/div\x3e');$(".J-tabs .J-richTextNav").wrapAll('\x3cdiv style\x3d"height: 54px;"\x3e\x3c/div\x3e');var g=90;0===$(".J-tabs .tab-item").length&&(g=40);$(window).on("scroll",function(){null!==a||f||(a=setTimeout(function(){for(var b=0;b<l.length;b++)if(e(l[b])){m.slideTo(b);break}a&&clearTimeout(a);a=null},200));$(window).scrollTop()<$(".J-tabs").offset().top&&($(".com-block-tab").css({position:"static",
top:"40px",width:"auto"}),$(".J-richTextNav").css({position:"relative",top:"0px",width:"100%"}));$(window).scrollTop()>=$(".J-tabs").offset().top&&($(".com-block-tab").css({position:"fixed",top:"40px",width:$(".J-tabs").width()}),$(".J-richTextNav").css({position:"fixed",top:g+"px",width:$(".J-tabs").width()}));$(window).scrollTop()>=$(".J-tabs").offset().top+$(".J-tabs").height()&&($(".com-block-tab").css({position:"static",top:"40px",width:"auto"}),$(".J-richTextNav").css({position:"relative",top:"0px",
width:"100%"}))});$(window).on("resize",function(){$(window).scrollTop()<$(".J-tabs").offset().top&&($(".com-block-tab").css({position:"static",top:"40px",width:"auto"}),$(".J-richTextNav").css({position:"relative",top:"0px",width:"100%"}));$(window).scrollTop()>=$(".J-tabs").offset().top&&($(".com-block-tab").css({position:"fixed",top:"40px",width:$(".J-tabs").width()}),$(".J-richTextNav").css({position:"fixed",top:g+"px",width:$(".J-tabs").width()}));$(window).scrollTop()>=$(".J-tabs").offset().top+
$(".J-tabs").height()&&($(".com-block-tab").css({position:"static",top:"40px",width:"auto"}),$(".J-richTextNav").css({position:"relative",top:"0px",width:"100%"}))})}});
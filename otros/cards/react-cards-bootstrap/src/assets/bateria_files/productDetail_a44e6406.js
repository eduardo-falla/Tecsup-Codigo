$(function(){var c=function(){var c=$(".J-contact-fix");if(0!==c.length){var a=c.parents(".sr-layout-nav:first").length?c.parents(".sr-layout-nav:first"):c.parents(".sr-layout-extra:first");$(".J-msg-block");var b=$(".J-about-nav").length?$(".J-about-nav").height()+120:40,d=top=$(".J-about-nav").length?a.offset().top-40:c.offset().top-40,f=function(){return $(".J-about-nav").length?a.offset().top-40:c.offset().top-40},e=new JFixed({carrier:c[0],isRestore:!0,position:{top:b},triggerTop:top}),m=!0;
e.on("fixed",function(){c.css("width",a.width());m=!0});$(".J-proGroup-more").click(function(){setTimeout(function(){e.triggerTop(f())},300)});$(".J-proGroup-less").click(function(){e.triggerTop(d);setTimeout(function(){e.triggerTop(f())},300)});e.on("unfixed",function(){c.css("width","auto");m&&top!=f()&&1024<=window.innerWidth&&(m=!1,e.triggerTop(f()))});$(window).resize(function(){c.css("width",a.width())});e.fixed();$(window).scroll(function(){});var h=0,q=setInterval(function(){25<h&&clearInterval(q);
50<f()&&1024<=window.innerWidth&&e.triggerTop(f());h++},200)}};if(1024<=window.innerWidth)c();else{var e=!0;$(window).resize(function(){1024<=window.innerWidth&&e&&(setTimeout(function(){c()},200),e=!1)})}});
void function(){var c={itemTmpl:'\x3cdiv class\x3d"sr-side-maylike-item"\x3e\t\x3cdiv class\x3d"sr-side-maylike-pic"\x3e\t\t\x3ca href\x3d"{{\x3dproductUrl}}" title\x3d"{{\x3dprodName}}" class\x3d"J-data-stat"\x3e\t\t\t\x3cimg src\x3d"{{\x3dproductImgUrl}}" alt\x3d"{{\x3dprodName}}"\x3e\t\t\x3c/a\x3e\t\x3c/div\x3e\t\x3cdiv class\x3d"sr-side-maylike-txt"\x3e\t\t\x3cdiv class\x3d"sr-side-maylike-name"\x3e\t\t\t\x3ca href\x3d"{{\x3dproductUrl}}" title\x3d"{{\x3dprodName}}" class\x3d"J-data-stat"\x3e\t\t\t\t{{\x3dprodName}}\t\t\t\x3c/a\x3e\t\t\x3c/div\x3e\t\t\x3cdiv class\x3d"sr-side-maylike-price J-async-price-wrap" title\x3d"{{-prodMinOrderPriceRang}} / {{-prodPriceUnit}}"\x3e\t\t\t\x3cspan class\x3d"sr-side-maylike-num J-async-price"\x3e{{-prodMinOrderPriceRang}}\x3c/span\x3e\t\t\t\x3cspan class\x3d"sr-side-maylike-unit J-async-unit"\x3e/ {{-prodPriceUnit}}\x3c/span\x3e\t\t\x3c/div\x3e\t\x3c/div\x3e\x3c/div\x3e',place:".J-yml-place",
refresh:".J-yml-refresh",listwrap:".J-yml-list-wrap",data:[],countPerPage:5},e=function(a){this._={};this.elems={};this.config=$.extend(!0,{},c,a);this.__init()};e.prototype={constructor:e,__init:function(){this.elems.$place=$(this.config.place);this.elems.$refresh=$(this.config.refresh,this.elems.$place);this.elems.$listwrap=$(this.config.listwrap,this.elems.$place);this._.refreshTimes=0;this.__initLogData();this.__initEvents();this.config.data.length<=this.config.countPerPage?this.elems.$refresh.remove():
this.elems.$refresh.show();this.render()},__initLogData:function(){var a=this;$.each(this.config.data,function(b,d){d.times=a._.refreshTimes;d.isRandom=a._isRandom(d)});this.elems.$refresh.attr("cz-times",this._.refreshTimes)},__initEvents:function(){var a=this;this.elems.$refresh.on("touchend"in window?"touchend":"click",function(b){b.preventDefault();a.canRefresh&&(a._.refreshTimes++,a.__initLogData(),a.render())})},_isRandom:function(a){return a.isRendered?1:0},render:function(){var a=this;this.canRefresh=
!1;this.config.data&&this.config.data.length||this.elems.$place.remove();var b=this.config.data.splice(0,this.config.countPerPage),d=$.grep(b,function(a){return!!a.isRendered}),c=$.grep(b,function(a){return!a.isRendered});[].unshift.apply(this.config.data,d);b=[];for([].push.apply(b,c);b.length<this.config.countPerPage;)d=this.getRandomItemIndex(),b.push(this.config.data.splice(d,1)[0]);b=$.grep(b,function(a){return a});var e=[];$.map(b,function(b,d){e.push(template(a.config.itemTmpl,b));b.isRendered=
!0});this.elems.$listwrap.each(function(){var b=$(this);b.append('\x3cdiv class\x3d"sr-layout-content sr-side-maylike-cnt cf J-yml-list"\x3e\x3c/div\x3e');b.find(".J-yml-list").eq(1).append(e.join(""));0===a._.refreshTimes?(b.find(".J-yml-list").eq(0).remove(),a.canRefresh=!0):b.animate({"margin-left":-b.find(".J-yml-list").width()},300,function(){b.find(".J-yml-list").eq(0).remove();b.css("margin-left",0);a.canRefresh=!0})});[].push.apply(this.config.data,b);this.__initLogData();for(b=0;b<$(".J-async-price").length;b++)""===
$(".J-async-price").eq(b).text()&&($(".J-async-price").eq(b).siblings(".J-async-unit").text(""),$(".J-async-price").eq(b).parents(".J-async-price-wrap").removeAttr("title"))},getRandomItemIndex:function(){return parseInt(Math.random()*this.config.data.length)}};var g=function(a){var b=[],d=$(".J-data-stat").map(function(a,b){var c=b.getAttribute("cz-id"),d=parseInt(b.getAttribute("cz-type"))||0,n=parseInt(b.getAttribute("cz-from"))||0;return{id:c,t:d,f:n}}).toArray();[].push.apply(b,d);a=a||[];for(d=
0;d<a.length;d++){var c=a[d];b.push({id:c.prodId,t:c.type||0,f:c.from||1})}window.asyncRenderListData=b};$("#productId").val();$.ajax({type:"GET",url:"/productDetail/recommend",dataType:"json",data:{logonName:$.trim($("#logonName4Hidden").val()),prodId:$.trim($("#prodId4Hidden").val()),respType:$.trim($("#respType").val())||"prodDetail"},cache:!1,timeout:3E5,success:function(a){if(a){if(a.otherLikeProds){var b=a.otherLikeProds;g(b);new e({data:b});b=$.extend(!0,[],b);$.each(b,function(a,b){b.prodPicUrl=
b.prodPic160Url});new e({place:".J-yml-place-clone",data:b})}else $(".J-yml-place").remove();b=$(".J-async-lastProds");if(b.length)if(a.lastProducts){b=$(".J-async-lastProdsWrap");a=a.lastProducts;for(var c=0;c<a.length;c++){var f=a[c],l='\x3cdiv class\x3d"sr-layout-col-5"\x3e\x3cdiv class\x3d"sr-proList-pic"\x3e\x3ca href\x3d"{{productUrl}}" title\x3d"{{prodName}}"\x3e{{productImgUrl}}\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"sr-proList-txt"\x3e\x3cdiv class\x3d"sr-proList-name"\x3e\x3ca href\x3d"{{productUrl}}" title\x3d"{{prodName}}"\x3e{{prodName}}\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"sr-proList-price sr-proList-detail-price J-async-price-wrap" title\x3d"{{prodMinOrderPriceRang}} / {{prodPriceUnit}}"\x3e\x3cspan class\x3d"sr-proList-num J-async-price"\x3e{{prodMinOrderPriceRang}}\x3c/span\x3e\x3cspan class\x3d"sr-proList-unit J-async-unit"\x3e/ {{prodPriceUnit}}\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'.replace(/\{\{\w+\}\}/g,
function(a){a=a.substring(2,a.length-2);return"productImgUrl"==a?f.safeImage?'\x3cspan class\x3d"safe-img-text"\x3e'+f.safeImageText+"\x3c/span\x3e":'\x3cimg src\x3d"//www.micstatic.com/ml/2019/img/transparent.png" data-original\x3d"'+f.productImgUrl+'"" alt\x3d"'+f.prodName+'"\x3e':f[a]});$(".J-lastProdLoading").remove();b.append(l);b.find("img[data-original]").lazyload()}}else b.remove()}else $(".J-yml-place").remove(),$(".J-async-lastProds").remove()},error:function(){},complete:function(){for(var a=
0;a<$(".J-async-price").length;a++)""===$(".J-async-price").eq(a).text()&&($(".J-async-price").eq(a).siblings(".J-async-unit").text(""),$(".J-async-price").eq(a).parents(".J-async-price-wrap").removeAttr("title"))}})}.call(this);
$(function(){$("#latestPriceInquiry").on("click",function(){var c=$("#inquiry4PriceHref").val();window.priceDialog=new artDialog({title:$("#latestPriceInquiry").attr("data-title"),id:"inquiryDialog",lock:!0,fixed:!0,content:'\x3ciframe src\x3d"'+c+'" frameborder\x3d"0" style\x3d"width:570px;"\x3e\x3c/iframe\x3e',init:function(){$(this.DOM.content[0]).find("iframe").bind("load",function(){resizeForm()})},close:function(){window.closeReload&&!0===window.closeReload&&(window.closeReload=!1,window.location.reload());
window.priceDialog=null}})})});
void function(c){var e={youku:0,youtube:1,ms:2,h5:9},g="youku",a=(new Date).getTime().toString()+Math.round(1E5*Math.random()),b="",d,f,l=function(c,d,e,k){c&&($.ajax({type:"POST",url:"/logForVisitDiyVideo",data:{type:d,player:e,playId:3===d?b:a,videoId:c,prodId:$(".J-data-pid").val(),duration:k?k:""}}),b=a,5===d&&(a=(new Date).getTime().toString()+Math.round(1E5*Math.random())))},m=function(a){var b="";try{b=a.currentTime()}catch(p){}return b},h=function(a,b,p,k,g,r,u){f=g;d=new VideoPlayer({el:a,
videoUrl:b,autoplay:k||!1,blank:"/vblank.html",token:p||"",muted:!!u});d.on("play",function(a){c.localStorage&&c.localStorage.setItem("autoPlayVideo","1");c.storage&&c.storage("set","autoPlayVideo","1");"youku"!==a.type&&"0"!=m(a.player)||l(g,2,e[a.type])});d.on("ended",function(a){l(g,5,e[a.type],m(a.player))});d.on("error",function(){r&&(d.dispose(),h(a,r,p,k,g));l(g,10,e[data.type],(new Date).getTime())});d.on("loadstart",function(a){l(g,6,e[a.type],(new Date).getTime())});d.on("loadeddata",function(a){l(g,
7,e[a.type],(new Date).getTime())});d.on("pause",function(a){c.localStorage&&c.localStorage.removeItem("autoPlayVideo");c.storage&&c.storage("remove","autoPlayVideo")})};c.resolveAndPlayVideo=function(a,b){var c=b.videoUrl.split("$_$_$"),d=c[1]||"",n=c[0].split("$_$");c=n[0];n=n[1]||"";g=/youku\.com/i.test(c)?"youku":"ms";l(b.vid,1,e[g]);h(a,c,n,b.autoplay,b.vid,d,b.muted)};c.playVideo=h;c.closeVideoDialog=function(a){l(f,3,e[g],d.currentTime())}}.call(this,window);
(function(c){function e(a){this.config=c.extend({},g,a);this.init()}if(!window.ProSlide){var g={wrapper:".J-proSlide-wrapper",container:".J-proSlide-container",slideCls:".J-proSlide-slide",paginationCls:".J-proSlide-pagination",paginationDotCls:".swiper-pagination-bullet",leftCls:".J-proSlide-left",rightCls:".J-proSlide-right",autoplay:5E3,speed:300,spaceBetween:0,loop:!0,autoplayDisableOnInteraction:!1,slidesPerView:1,slidesPerGroup:1,lazyLoading:!1,initialSlide:0,onInit:function(){},bindEvent:{},
onSlideChangeStart:function(){}};e.prototype={init:function(){this.$wrapper=c(this.config.wrapper);this.$container=c(this.config.container);var a=this,b=this.$wrapper.find(this.config.slideCls).length;this.mySwiper=new Swiper(this.$container,c.extend({loop:a.config.loop&&b>a.config.slidesPerView,pagination:b>a.config.slidesPerView?this.config.paginationCls:!1,spaceBetween:a.config.spaceBetween,autoplay:a.config.autoplay,speed:a.config.speed,paginationClickable:!0,autoHeight:!0,autoResize:!0,resizeReInit:!0,
roundLengths:!0,initialSlide:a.config.initialSlide,autoplayDisableOnInteraction:a.config.autoplayDisableOnInteraction,slidesPerView:a.config.slidesPerView,slidesPerGroup:a.config.slidesPerGroup,lazyLoading:a.config.lazyLoading,prevButton:this.$wrapper.find(a.config.leftCls),nextButton:this.$wrapper.find(a.config.rightCls),onInit:a.config.onInit,onSlideChangeStart:a.config.onSlideChangeStart},a.config.bindEvent));this.$wrapper.on("hover",this.config.paginationDotCls,function(b){a.mySwiper.stopAutoplay();
c(b.currentTarget).click()}).on("mouseenter",function(){a.mySwiper.stopAutoplay()}).on("mouseleave",function(){a.mySwiper.startAutoplay()});this.$wrapper.on("mouseenter",function(){a.mySwiper.stopAutoplay();b>a.config.slidesPerView&&a.$wrapper.addClass("sr-proSlide-left-open sr-proSlide-right-open")}).on("mouseleave",function(){a.mySwiper.startAutoplay();a.$wrapper.removeClass("sr-proSlide-left-open sr-proSlide-right-open")})}};window.ProSlide=e}})(jQuery);
void function(){var c;$(".J-play-gifs").bind("click",function(e){e.stopPropagation();e.preventDefault();e=[];try{e=JSON.parse($.trim($("script[type\x3d'text/data-gif']",this).html()))}catch(g){}e.length&&$(".J-picGifDialog").length&&($(".J-picGifDialog #picRoundBox").html(e.map(function(c){return'\x3cimg src\x3d"'+c+'"/\x3e'}).join("")),new artDialog({id:"picGifDialog",lock:!0,fixed:!0,opacity:.65,title:"",padding:"0",skin:"prod-gif",content:$(".J-picGifDialog")[0],close:function(){c&&c.picRoundStop()},
init:function(){c?c.picRoundStart():(c=new PicRound({picWidth:600,speed:200,carrier:{imgbox:"#picRoundBox",startBtn:".J-picRoundTool .J-start",stopBtn:".J-picRoundTool .J-stop",turnRightBtn:".J-picRoundTool .J-icon-rotate-r",turnLeftBtn:".J-picRoundTool .J-icon-rotate-l"}}),$(".J-changeSpeed").unbind().bind("click",function(){$(".J-speed-tool").toggle()}));$(".J-picRoundTool .J-start").hide();$(".J-picRoundTool .J-stop").show();$(".J-picGifDialog").unbind().bind("click",function(){$(this).hasClass("J-roundStop")?
($(this).removeClass("J-roundStop"),$(".J-picRoundTool .J-start").hide(),$(".J-picRoundTool .J-stop").show(),c&&c.picRoundStart()):($(this).addClass("J-roundStop"),$(".J-picRoundTool .J-start").show(),$(".J-picRoundTool .J-stop").hide(),c&&c.picRoundStop())});var e,a,b,d;$(".J-speed-circle").mousedown(function(f){e=f.pageY;$(".J-picGifDialog").bind("mousemove",function(c){a=c.pageY;b=e-a;d=parseInt($(".circle-tool").css("height"))+b/25;d=100<d?100:d;$(".circle-tool").css("height",d+"px")});$(".J-picGifDialog").mouseup(function(a){$(".J-picGifDialog").unbind("mousemove");
c&&c.changeSpeed(parseInt(150-d));return!1});return!1})}}))})}.call(this);
$(function(){function c(c,n,f,k){n=n||l;var p=c.split("$_$");c=p[0]||"";p=p[1]||"";$("#J-video-azure").empty();$("#J-video-azure").append('\x3cvideo id\x3d"azuremediaplayer'+n+'" class\x3d"azuremediaplayer amp-default-skin amp-big-play-centered" tabindex\x3d"0"\x3e\x3c/video\x3e');$("#J-video-azure").show();$("#J-video-youku").hide();d=amp("azuremediaplayer"+n,{nativeControlsForTouch:!0,controls:!0,autoplay:!0,width:"100%",height:"100%",language:"zh-hans",logo:{enabled:!1}},function(){this.addEventListener("error",
function(){k&&""!=k&&a(k,f)});h&&""!=h&&(this.addEventListener("ready",function(){e(h);g(h,4,"2")}),this.addEventListener("play",function(){b.hide();g(h,2,"2")}),this.addEventListener("ended",function(){b.show();if(null!=d){try{var a=d.currentTime()}catch(u){}g(h,5,"2",a)}}))});d.src([{src:c,type:"application/vnd.ms-sstr+xml",protectionInfo:[{type:"AES",authenticationToken:p}]}])}function e(b){$.ajax({url:"/recommendVideos",data:{videoId:b},dataType:"json",success:function(b){if(0<b.length){$(".J-replay-video").removeClass("replay-video-none");
for(var c="\x3cul\x3e",d=0;d<b.length;d++)c=c+'\x3cli\x3e\x3cdiv class\x3d"relatedImg"\x3e\x3ca href\x3d"javascript:void(0);" class\x3d"J-showRelated" videoId\x3d"'+b[d].videoId+'" palyUrl\x3d"'+b[d].palyUrl+'"\x3e\x3cimg src\x3d"'+b[d].picUrl+'"/\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"relatedInfo"\x3e'+b[d].subject+"\x3c/div\x3e\x3c/li\x3e";c+="\x3c/ul\x3e";$(".J-relatedViedo-wrap").html(c);$(".J-showRelated").unbind().bind("click",function(){a($(this).attr("palyUrl"),"J-video");$(".J-relatedViedo").hide();
f._reset()})}else $(".J-replay-video").addClass("replay-video-none")}});0==$(".J-relatedViedo-wrap .relatedImg").size()?$(".J-replay-video").addClass("replay-video-none"):$(".J-replay-video").removeClass("replay-video-none");$(".J-replay-video").unbind().bind("click",function(){"0"==m?d.playVideo():"2"==m&&d.play()})}function g(a,b,c,d){a&&""!=a&&$.ajax({type:"POST",url:"/logForVisitDiyVideo",data:{type:b,player:c,videoId:a,prodId:$(".J-data-pid").val(),duration:d?d:""}})}function a(a,e){var f=a.split("$_$_$"),
k=f[0];f=f[1];e=e?e:"J-video";0<k.indexOf("youku")?(m="0",g(h,1,m),k=/id_([^\/]+?)\.html/.exec(k),f="youku",k&&(f=k[1]),0==$("#"+e+" #J-video-youku").length&&$("#"+e).append('\x3cdiv id\x3d"J-video-youku" style\x3d"width:100%;height:100%;"\x3e\x3c/div\x3e'),k=f,$("#J-video-azure").hide(),$("#J-video-youku").show(),b.hide(),d=new YKU.Player("J-video-youku",{styleid:"6",client_id:"cb8e4957a0226090",vid:k,show_related:!1,flashext:'\x3cparam name\x3d"wmode" value\x3d"transparent"\x3e',newPlayer:!0})):
(m="2",g(h,1,m),l++,0==$("#"+e+" #J-video-azure").length&&$("#"+e).append('\x3cdiv id\x3d"J-video-azure" style\x3d"width:100%;height:100%;"\x3e\x3c/div\x3e'),c(k,l,e,f))}var b=$(".J-relatedViedo"),d=null,f=null,l=0,m="0",h=$("#J-current").val();window.addEventListener("message",function(a){if(0<a.origin.indexOf("//player.youku.com")&&h&&("onPlayStart"===a.data.msg&&(e(h),$(".J-replay-video").hide(),b.hide(),g(h,2,"0")),"onPlayEnd"===a.data.msg&&(b.show(),null!=d))){try{var c=d.currentTime()}catch(p){}g(h,
5,"0",c)}},!1);window.startVideo=function(b,c,e,k){b&&c&&(e?f&&!f.closed?(d=null,f.content().innerHTML="",f.content(k),a(b,c),f._reset()):f=new e({title:"Video",content:k,fixed:!0,lock:!0,drag:!0,resize:!1,padding:"0",init:function(){a(b,c)},close:function(){if(null!=d&&h){try{var a=d.currentTime()}catch(r){}g(h,3,m,a)}}}):a(b,c))};window.renderVideo=a});
$(function(){$(".J-more-desc").click(function(){$(".J-desc-long").show();$(".J-desc-short").hide();$(".J-more-desc").hide()});"0"==$("#videoFlag").val()&&document.getElementById("J-current")&&$("#J-video").html('\x3ca class\x3d"old-video" href\x3d"'+document.getElementById("J-current").value+'"\x3e\x3ci class\x3d"ob-icon icon-play"\x3e\x3c/i\x3e\x3c/a\x3e');if(document.getElementById("J-current")){var c=document.getElementById("J-current").value;window.renderVideo&&window.renderVideo(c)}});
$(function(){var c="ontouchend"in window,e=c?"touchend":"click",g=$(".J-play-video");try{var a=JSON.parse($.trim($("script[type\x3d'text/data-video']",this).html()))}catch(r){}if(a&&(a.autoplay=!0,g.length))$(".play-video-btn").on("click",function(b){b.preventDefault();b.stopPropagation();$(".play-video-btn").hide();g.find(".J-play-video-wrap").append('\x3cdiv class\x3d"video-cnt"\x3e\t\x3cdiv class\x3d"video-main J-video"\x3e\x3c/div\x3e\t\x3cdiv class\x3d"relatedViedo J-relatedViedo"\x3e\t\t\x3cdiv class\x3d"relatedViedo-wrap J-relatedViedo-wrap"\x3e\x3c/div\x3e\t\x3c/div\x3e\x3c/div\x3e');
b=$(".J-video");resolveAndPlayVideo(b[0],a)});var b=$(".J-pic-box"),d=$(".J-pic-item",b),f=$(".J-pic-dot",b);b=$("#curLang").val();c||"sa"===b||Magnifier.ready(function(){var a=document.createElement("div");a.style.cssText=';display:block; width:300px; height:300px; position:absolute; top:0; left:0; background:url("//www.micstatic.com/gb/img/space.png") repeat scroll 0 0 transparent;';var b=[];d.each(function(){var c=$(this),d=$(a).clone(!1)[0];c.append(d);b.push(d);(c=c.attr("fsrc"))&&(new Magnifier({target:d,
loading:"//www.micstatic.com/gb/img/icon/loading32.gif",layer:{bgColor:"#000",alpha:.2},detail:{width:500,height:500,offsetX:2,offsetY:-1}})).setDetailImageSrc(c)});var c=-1,e=function(){clearTimeout(c);c=setTimeout(function(){var a=d.eq(0).width(),c=d.eq(0).height();$.each(b,function(b,d){$(d).css({width:a,height:c})})},25)};$(window).resize(e);e()});if(d.length){var l=!0,m=new ProSlide({wrapper:$(".J-pic-list-wrap"),container:$(".J-pic-list-container"),loop:!1,autoplay:0,bindEvent:{onSlideChangeStart:function(b){f.removeClass("selected");
f.eq(b.activeIndex).addClass("selected");setTimeout(function(){d.find("img[data-original]").lazyload()},0);if(!a&&$("#switchPhotoStatData").length&&l){l=!1;var c=new Image;c.onload=function(){c=null};c.src=$("#switchPhotoStatData").val()+"\x26time\x3d"+(new Date).valueOf()}}}});$(".J-dot-play").on(e,function(a){a.stopPropagation();a.preventDefault();a=$(this).parents("li:first").index();d.eq(a).trigger(e)});f.hover(function(){var a=$(this).index();m.mySwiper.slideTo(a,0)})}if($(".J-proSlide-content").length){var h=
$(".J-proSlide-left"),q=$(".J-proSlide-right"),n=$(".J-proSlide-content"),p=$(".J-pic-dot").length,k=0,t=function(a,b){a.css({WebkitTransform:"translateX(-"+100*b+"%) translateX(-"+10*b+"px)",transform:"translateX(-"+100*b+"%) translateX(-"+10*b+"px)"})};h.on(e,function(){if(!$(this).hasClass("disabled")){q.removeClass("disabled");var a=--k;t($(".J-pic-dot",n),a);0===a&&$(this).addClass("disabled")}});q.on(e,function(){if(!$(this).hasClass("disabled")){h.removeClass("disabled");var a=++k;t($(".J-pic-dot",
n),a);a===p-6&&$(this).addClass("disabled")}})}});
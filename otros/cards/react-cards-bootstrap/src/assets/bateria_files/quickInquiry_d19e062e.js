document.domain=/[\w\-]+\.[\w\-]+$/.exec(window.location.hostname)[0];var hisLoginStatus=!1,senderInfo=null,resetFlag=!1;$(function(){$.ajax({type:"get",url:"//www.made-in-china.com/inquiryabout.do?xcase\x3dgetCookieSendEmail",dataType:"jsonp",success:function(b){b&&b.senderMail&&(document.forms.inqueryForm.senderMail.value=b.senderMail)}});window.loginUserInfo(function(b){hisLoginStatus=b.loginStatus;initQuickInquiry()})});
function initQuickInquiry(){if($("#inqueryForm").length){var b=inquiryFormValidate();$("#inqueryForm").bind("submit",function(a){quickRequestFormLog();a.preventDefault();b.isValidate()&&($("#inquirySend").addClass("btn-disabled").attr("disabled","disabled"),senderInfo&&!hisLoginStatus?(senderInfo.show(),a=$(senderInfo.DOM.content[0]).find("iframe")[0].contentWindow,initDialog(hisLoginStatus,a,!1)):senderInfoDialog(hisLoginStatus),senderInfo&&senderInfo.lock(),senderInfo&&senderInfo.position("50%",
"33%"))})}}function quickRequestFormLog(){var b=$("#showRoomUrl").val();$.ajax({type:"get",url:b,dataType:"jsonp",success:function(b){}})}
function inquiryFormValidate(){function b(b,a){$(a).parent().find(".feedback-block").remove();$(a).parent().append('\x3cdiv class\x3d"feedback-block"\x3e\x3cdiv class\x3d"error"\x3e{Message}\x3c/div\x3e\x3c/div\x3e'.replace("{Message}",b))}function a(){var a=!0;if(!/\S+/.test(h.value))return b(QUICKINQUIRY_LANG.errorMSG.senderMail.required,h),!1;var d=h.value;if(/^[-\.\w]+@[-\.a-zA-Z0-9]+\.[-\.a-zA-Z0-9]+$/.test(d)){var c=d.split("@")[0];d=d.split("@")[1];if(!/^.*[A-Za-z0-9]+.*$/.test(c)||/(^\..*)|(.*\.$)/.test(c)||
/(\.){2,}/.test(c))d=!1;else{var e=d.lastIndexOf(".");c=d.substr(0,e);d=d.substr(e+1);d=/(^[\.-].*)|(.*[\.-]$)/.test(c)||/(\.){2,}/.test(c)||!/^[a-zA-Z]+$/.test(d)?!1:!0}}else d=!1;d||(b(QUICKINQUIRY_LANG.errorMSG.senderMail.email,h),a=!1);return a}function k(){var a=!0;/\S+/.test(f.value)||(b(QUICKINQUIRY_LANG.errorMSG.content.required,f),a=!1);if(20>f.value.length||4E3<f.value.length)b(QUICKINQUIRY_LANG.errorMSG.content.maxLength,f),a=!1;return a}function g(){var a=!0;if("undefined"==typeof l)return!0;
""!=$.trim(l.value)&&/^\d+(?:[,\.]\d+)?$/.test(l.value)||(b(QUICKINQUIRY_LANG.errorMSG.quantity.valid,l),a=!1);return a}function c(){return"undefined"!=typeof m&&0<$("input[name\x3d'purchaseQuantityTypeOther']:visible",$(e)).length&&""==$.trim($("input[name\x3d'purchaseQuantityTypeOther']:visible",$(e)).val())?(b(QUICKINQUIRY_LANG.errorMSG.quantityType.required,m),!1):!0}var e=document.forms.inqueryForm,h=e.senderMail,f=e.content,l=e.purchaseQuantity,n=e.purchaseQuantityType,m=e.purchaseQuantityTypeOther;
$(h).bind("blur",function(c){a()?$(c.target).parent().find(".feedback-block").remove():b()});$(f).bind("blur",function(a){k()?$(a.target).parent().find(".feedback-block").remove():b()});"undefined"!=typeof l&&($(l).bind("blur",function(a){g()?$(a.target).parent().find(".feedback-block").remove():b()}),$(m).bind("blur",function(a){c()?$(a.target).parent().find(".feedback-block").remove():b()}),$(n).change(function(){"99"==$(this).val()?$(m).show():$(m).hide()}));return{isValidate:function(){var b=
a(),d=k(),e=g(),f=c();return b&&d&&e&&f}}}
function senderInfoDialog(b,a){var k="//www.made-in-china.com/sendInquiry/showQuickForm/?plant\x3d"+QUICKINQUIRY_LANG.lang+"\x26region\x3d"+QUICKINQUIRY_LANG.lang+"_quick",g="display:none";$.browser.msie&&7>=parseInt($.browser.version)&&(g="visibility:hidden;");senderInfo=new art.dialog({fixed:!0,show:a?!1:!0,title:b?"":QUICKINQUIRY_LANG.dialogTitle,duration:0,content:'\x3cdiv class\x3d"aui_loading" style\x3d"margin:60px auto; width:540px; height:55px; background:url(//img.made-in-china.com/img/athena/loading-big.gif) no-repeat center center;"\x3e\x3c/div\x3e\x3ciframe src\x3d"'+k+
'" frameborder\x3d"0" style\x3d"'+g+'"\x3e\x3c/iframe\x3e',init:function(){var c=this;resetFlag=!1;$(this.DOM.content[0]).find("iframe").bind("load",function(){initDialog(b,$(c.DOM.content[0]).find("iframe")[0].contentWindow,a)})},close:function(){window.loginUserInfo(function(a){(a=a.loginStatus)&&a!==hisLoginStatus?window.location.reload():($("#inquirySend").removeClass("btn-disabled").removeAttr("disabled"),resetFlag&&($("#inquiryContent").val(""),senderInfo.close(),senderInfo=null))});if(!resetFlag)return senderInfo.hide(),
!1}})}
function initDialog(b,a,k){var g=document.forms.inqueryForm.content.value,c=document.forms.inqueryForm.senderMail.value;if("undefined"!=typeof document.forms.inqueryForm.purchaseQuantity){var e=document.forms.inqueryForm.purchaseQuantity.value;var h=document.forms.inqueryForm.purchaseQuantityType.value;var f=document.forms.inqueryForm.purchaseQuantityTypeOther.value}a.loginClickHandle=function(){login&&login("\x26loginUserName\x3d"+c,function(a){senderInfoDialog(a);senderInfo&&senderInfo.lock();senderInfo&&
senderInfo.position("50%","33%")});senderInfo.close();senderInfo=null;$("#inquirySend").removeClass("btn-disabled").removeAttr("disabled")};"undefined"!=typeof document.forms.inqueryForm.purchaseQuantity?a.setForm&&a.setForm({senderMail:c,content:g,purchaseQuantity:e,purchaseQuantityType:h,purchaseQuantityTypeOther:f,requestUrl:$("#showRoomUrl").val()}):a.setForm&&a.setForm({senderMail:c,content:g,requestUrl:$("#showRoomUrl").val()});a.setForm||(resetFlag=!0);if(senderInfo&&!b||!a.setForm)$(senderInfo.DOM.content[0]).find("iframe").css("visibility",
"visible"),$(senderInfo.DOM.content[0]).find("iframe").show(),$(senderInfo.DOM.content[0]).find(".aui_loading").remove(),resizeForm();b&&!k&&a&&a.autoSubmit&&a.autoSubmit();a.result&&senderInfo.title("")}
function resizeForm(){if(senderInfo){var b=$(senderInfo.DOM.content[0]).find("iframe")[0];$(b).css({width:b.contentWindow.document.body.clientWidth,height:b.contentWindow.document.body.clientHeight})}window.priceDialog&&(b=$(priceDialog.DOM.content[0]).find("iframe")[0],$(b).css({height:b.contentWindow.document.body.clientHeight+20}))};
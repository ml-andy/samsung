$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],h.heromouseX_end=e.pageX,h.heromouseY_end=e.pageY}function o(){if(h.wrp.hasClass("index")){h.blue_lineinit=$(".menua").eq(0),r("player",h.videoID,!1);var e=Math.round(4*Math.random());$(".break_wrapper .pg3 .person").eq(e).show()}else if(h.wrp.hasClass("rule"))h.blue_lineinit=$(".menua").eq(3),h.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),d(!1);else if(h.wrp.hasClass("hero")){if(h.blue_lineinit=$(".menua").eq(1),!h.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(l),d(!1)}c(h.blue_lineinit)}function n(){90==Math.abs(window.orientation)?$(".break_mobile_cover").fadeIn():$(".break_mobile_cover").fadeOut()}function i(){var e=Math.abs(h.heromouseY_end-h.heromouseY),o=h.heromouseX_end-h.heromouseX;if(!(e>=h.touchvalueY||Math.abs(o)<=h.touchvalueX)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n-1:1*n+1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function t(e){e?$(".break_top_bar").css("height",$(window).height()).addClass("on"):$(".break_top_bar").attr("style","").removeClass("on")}function a(){h.blue_linetimeout=setTimeout(function(){clearTimeout(h.blue_linetimeout),c(h.blue_lineinit)},1500)}function l(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),t.eq(l-1).addClass("on"),o.click(function(){l-=1,e()}),n.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function s(e){FB.ui({method:"feed",name:h.sharetitle,caption:"",description:h.sharedes,display:"popup",link:e},function(e){})}function r(e,o,n){h.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:u}})}function u(){h.video.seekTo(1).pauseVideo(),d(!1)}function d(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function c(e){if(h.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+.75*e.height();if(h.blue_line==o)return;h.blue_line=o;var n;0==e.index()?n=.5*e.height()/16*33:1==e.index()?n=.5*e.height()/16*107:2==e.index()?n=.5*e.height()/16*84:3==e.index()?n=.5*e.height()/16*69:4==e.index()?n=.5*e.height()/16*68:5==e.index()&&(n=.5*e.height()/16*118),$(".blue_line").animate({top:h.blue_line,width:n},h.blue_line_speed)}else{if(h.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;h.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:h.blue_line,width:e.width()},h.blue_line_speed)}}var h={wrp:$(".break_wrapper"),touchvalueY:25,touchvalueX:100,blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！"};if($(window).width()<=640?h.mobile=!0:h.mobile=!1,h.wrp.hasClass("index")){var b,p,f;b=document.getElementById("canvas"),f=new lib.inedx,p=new createjs.Stage(b),p.addChild(f),p.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",p),h.mobile||(h.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),h.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:h.FBAppId,channelUrl:h.mainurl,status:!0,xfbml:!0,cookie:!0})}else h.wrp.hasClass("hero")&&(FB.init({appId:h.FBAppId,channelUrl:h.mainurl,status:!0,xfbml:!0,cookie:!0}),h.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),h.heromouseX=o.pageX,h.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),i()})));$(".logo").click(function(){h.mobile&&(h.wrp.hasClass("index")||(window.location.href="index.html"))}),$(".chatbtn").click(function(){window.open("whatsapp://send?text="+window.location.href)}),$(".linebtn").click(function(){window.open("//line.me/R/msg/text/?"+h.sharetitle+"，"+h.sharedes+window.location.href+"　","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400")}),$(window).on("touchmove",function(e){h.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),t(!1)):(e.addClass("on"),t(!0))}),$(".hero_box .fbshare").click(function(){s(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){s(h.videolink)}),$(".videoctrl").click(function(){h.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){c($(this)),h.mobile||(5==$(this).index()?h.sub.stop().fadeIn():h.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(h.blue_linetimeout)}),$(".menu").mouseout(function(){a()}),h.sub.mousemove(function(){clearTimeout(h.blue_linetimeout)}),h.sub.mouseover(function(){h.mobile||h.sub.hasClass("on")||h.sub.stop().addClass("on").fadeIn()}),h.sub.mouseout(function(){a(),h.mobile||h.sub.hasClass("on")&&h.sub.stop().removeClass("on").fadeOut()}),window.onorientationchange=n,$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2hvdyIsIm1vYmlsZSIsIm1DdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxJbmVydGlhIiwic2Nyb2xsRWFzaW5nIiwic2hvd2xvYWRpbmciLCJpIiwibGVuZ3RoIiwiZmluZCIsImVhY2giLCJoZXJvX2JveGZjIiwiYmx1ZV9saW5lIiwicmVhZERldmljZU9yaWVudGF0aW9uIiwiYWJzIiwid2luZG93Iiwib3JpZW50YXRpb24iLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2hlY2tIZXJvIiwiX3kiLCJoZXJvbW91c2VZIiwiX3giLCJoZXJvbW91c2VYIiwidG91Y2h2YWx1ZVkiLCJ0b3VjaHZhbHVlWCIsIm5vd251bSIsImF0dHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJocmVmIiwic2hvd21lbnUiLCJfdCIsImNzcyIsImhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtZW51bW91c2VPdXQiLCJibHVlX2xpbmV0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNoYW5nZWhlcm8iLCJfbWF4IiwibGVmdGJ0biIsInRoaXMiLCJyaWdodGJ0biIsInBlcnNvbiIsImJ0IiwiY2xpY2siLCJpbmRleCIsInNoYXJlRmIiLCJfbGluayIsIkZCIiwidWkiLCJtZXRob2QiLCJuYW1lIiwic2hhcmV0aXRsZSIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlZGVzIiwiZGlzcGxheSIsImxpbmsiLCJyZXNwb25zZSIsIl9vIiwiX2lkIiwiX2F1dG9wbGF5IiwidmlkZW8iLCJZVCIsIlBsYXllciIsIndpZHRoIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJjb250cm9scyIsImF1dG9wbGF5IiwiZW5hYmxlanNhcGkiLCJoZCIsInJlbCIsInNob3dpbmZvIiwibW9kZXN0YnJhbmRpbmciLCJjY19sb2FkX3BvbGljeSIsIndtb2RlIiwiZXZlbnRzIiwib25SZWFkeSIsInZpZGVvUmVhZHkiLCJzZWVrVG8iLCJwYXVzZVZpZGVvIiwiX3RvcCIsIm9mZnNldCIsInRvcCIsIl93aWR0aCIsImFuaW1hdGUiLCJibHVlX2xpbmVfc3BlZWQiLCJsZWZ0IiwidmlkZW9saW5rIiwic3ViIiwiRkJBcHBJZCIsIm1haW51cmwiLCJjYW52YXMiLCJzdGFnZSIsImV4cG9ydFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImxpYiIsImluZWR4IiwiY3JlYXRlanMiLCJTdGFnZSIsImFkZENoaWxkIiwidXBkYXRlIiwiVGlja2VyIiwic2V0RlBTIiwicHJvcGVydGllcyIsImZwcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJQYXJhbGxheCIsIlBhcmFsbGF4MiIsImluaXQiLCJhcHBJZCIsImNoYW5uZWxVcmwiLCJzdGF0dXMiLCJ4ZmJtbCIsImNvb2tpZSIsImJpbmQiLCJ1bmJpbmQiLCJvcGVuIiwib24iLCJfdGgiLCJwYXJlbnQiLCJwbGF5VmlkZW8iLCJtb3VzZW92ZXIiLCJzdG9wIiwibW91c2Vtb3ZlIiwibW91c2VvdXQiLCJvbm9yaWVudGF0aW9uY2hhbmdlIiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0EyRGYsUUFBU0MsR0FBY0MsR0FDdEJBLEVBQUlBLEVBQUVDLGNBQWNDLFFBQVEsR0FDNUJDLEVBQUVDLGVBQWlCSixFQUFFSyxNQUNyQkYsRUFBRUcsZUFBaUJOLEVBQUVPLE1BZ0Z4QixRQUFTQyxLQUNSLEdBQUdMLEVBQUVNLElBQUlDLFNBQVMsU0FBUyxDQUcxQlAs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RSxNQUFNaUYsU0FBU0EsUUFDeEJELEdBQUlwSSxTQUFTLE9BQ2ZvSSxFQUFJeEYsWUFBWSxVQUFVQSxZQUFZLE1BQ3RDTCxHQUFTLEtBRVQ2RixFQUFJekYsU0FBUyxNQUNiSixHQUFTLE1BR1hyRCxFQUFFLHNCQUFzQnNFLE1BQU0sV0FDN0JFLEVBQVFuQyxPQUFPYyxTQUFTQyxRQUV6QnBELEVBQUUsZ0NBQWdDc0UsTUFBTSxXQUN2Q0UsRUFBUWpFLEVBQUU0RyxhQUVYbkgsRUFBRSxjQUFjc0UsTUFBTSxXQUNyQi9ELEVBQUVpRixNQUFNNEQsWUFDUnBKLEVBQUUsY0FBY3dDLFlBRWpCeEMsRUFBRSxVQUFVcUosVUFBVSxXQUNyQm5ILEVBQVVsQyxFQUFFa0UsT0FDUjNELEVBQUVpQixTQUNlLEdBQWpCeEIsRUFBRWtFLE1BQU1LLFFBQ1ZoRSxFQUFFNkcsSUFBSWtDLE9BQU8vRyxTQUViaEMsRUFBRTZHLElBQUlrQyxPQUFPOUcsYUFJaEJ4QyxFQUFFLFNBQVN1SixVQUFVLFdBQ3BCekYsYUFBYXZELEVBQUVxRCxvQkFFaEI1RCxFQUFFLFNBQVN3SixTQUFTLFdBQ25CN0YsTUFFRHBELEVBQUU2RyxJQUFJbUMsVUFBVSxXQUNmekYsYUFBYXZELEVBQUVxRCxvQkFFaEJyRCxFQUFFNkcsSUFBSWlDLFVBQVUsV0FDWDlJLEVBQUVpQixRQUNEakIsRUFBRTZHLElBQUl0RyxTQUFTLE9BQ2xCUCxFQUFFNkcsSUFBSWtDLE9BQU83RixTQUFTLE1BQU1sQixXQUkvQmhDLEVBQUU2RyxJQUFJb0MsU0FBUyxXQUNkN0YsSUFDSXBELEVBQUVpQixRQUNGakIsRUFBRTZHLElBQUl0RyxTQUFTLE9BQ2pCUCxFQUFFNkcsSUFBSWtDLE9BQU81RixZQUFZLE1BQU1sQixZQUlsQ0gsT0FBT29ILG9CQUFzQnRILEVBQzdCbkMsRUFBRXFDLFFBQVFxSCxLQUFLOUkiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0Ly9Jbml0XHJcblx0dmFyIG8gPSB7XHJcblx0XHR3cnA6ICQoJy5icmVha193cmFwcGVyJyksXHJcblx0XHR0b3VjaHZhbHVlWTogMjUsXHJcblx0XHR0b3VjaHZhbHVlWDogMTAwLFxyXG5cdFx0Ymx1ZV9saW5lX3NwZWVkOiAxMDAsXHJcblx0XHR2aWRlb0lEOiAnYlJocGtwMV9xRUknLFxyXG5cdFx0dmlkZW9saW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1iUmhwa3AxX3FFSScsXHJcblx0XHRzdWI6ICQoJy5icmVha190b3BfYmFyIC5zdWInKSxcclxuXHRcdEZCQXBwSWQ6ICcxMzAxOTczODIzMTUwOTg4JyxcclxuXHRcdG1haW51cmw6ICdodHRwOi8vd3d3LnNhbXN1bmcuY29tL3R3L2NhbXBhaWducy8yMDE2b2x5bXBpY3MvaW5kZXguaHRtbCcsXHJcblx0XHRzaGFyZXRpdGxlOiAn56qB56C05qW16ZmQ5LmL5beUIC0gMjAxNumHjOe0hOWlp+mBi+WPsOeBo+S7o+ihqOmaiiDorJ3orJ3kvaDnmoTliqrlipsnLFxyXG5cdFx0c2hhcmVkZXM6ICfnl5voi6bmnIPpgY7ljrvvvIzmpq7ogIDlsIfnlZnkuIvorJ3orJ3kvaDnmoTliqrlipvvvIwyMDE2IOmHjOe0hOWlp+mBi+WPsOeBo+S7o+ihqOmaiu+8jOS9oOWAkei+m+iLpuS6hu+8gSdcclxuXHR9O1xyXG5cclxuXHRpZigkKHdpbmRvdykud2lkdGgoKTw9NjQwKSBvLm1vYmlsZSA9IHRydWU7XHJcblx0ZWxzZSBvLm1vYmlsZSA9IGZhbHNlO1xyXG5cclxuXHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHR2YXIgY2FudmFzLCBzdGFnZSwgZXhwb3J0Um9vdDtcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5cdFx0ZXhwb3J0Um9vdCA9IG5ldyBsaWIuaW5lZHgoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0XHRvLlBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtfcGFnZV9wZzFfYmcnKSk7XHJcblx0XHR9XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHQgICAgaWYoby5tb2JpbGUpe1xyXG5cdCAgICBcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuXHRcdFx0XHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaG1vdmUnLGhlcm90b3VjaG1vdmUpO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWCA9IGUucGFnZVg7XHJcblx0XHRcdFx0by5oZXJvbW91c2VZID0gZS5wYWdlWTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNoZW5kJyxmdW5jdGlvbihlKXtcclxuXHRcdFx0XHQkKCcuaGVyb19ib3gnKS51bmJpbmQoJ3RvdWNobW92ZScsaGVyb3RvdWNobW92ZSk7XHJcblx0XHRcdFx0Y2hlY2tIZXJvKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRmdW5jdGlvbiBoZXJvdG91Y2htb3ZlKGUpe1xyXG5cdFx0XHRcdGUgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVhfZW5kID0gZS5wYWdlWDtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVlfZW5kID0gZS5wYWdlWTtcclxuXHRcdFx0fVxyXG5cdCAgICB9XHJcblx0fVxyXG5cclxuXHQvL0FkZGxpc3RlbmVyXHJcblx0JCgnLmxvZ28nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0aWYoby5tb2JpbGUpe1xyXG5cdFx0XHRpZighby53cnAuaGFzQ2xhc3MoJ2luZGV4JykpIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5jaGF0YnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwid2hhdHNhcHA6Ly9zZW5kP3RleHQ9XCIrd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdH0pO1xyXG5cdCQoJy5saW5lYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwiLy9saW5lLm1lL1IvbXNnL3RleHQvP1wiK28uc2hhcmV0aXRsZStcIu+8jFwiK28uc2hhcmVkZXMrIHdpbmRvdy5sb2NhdGlvbi5ocmVmICtcIuOAgFwiLCdfYmxhbmsnLCBcInRvb2xiYXI9eWVzLCBzY3JvbGxiYXJzPXllcywgcmVzaXphYmxlPXllcywgdG9wPTEwMCwgbGVmdD01MDAsIHdpZHRoPTYwMCwgaGVpZ2h0PTQwMFwiKTtcclxuXHR9KTtcclxuXHQkKHdpbmRvdykub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oZSl7XHJcblx0XHRpZihvLm1vYmlsZSl7XHJcblx0XHRcdGlmKCQoJy5icmVha190b3BfYmFyJykuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYWRkQ2xhc3MoJ29uX2VuZCcpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkrMTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tX2ljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIF90aCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcblx0XHRpZihfdGguaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRfdGgucmVtb3ZlQ2xhc3MoJ29uX2VuZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudShmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0X3RoLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudSh0cnVlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuaGVyb19ib3ggLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYih3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSlcclxuXHQkKCcuYnJlYWtfd3JhcHBlciAucGcyIC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIoby52aWRlb2xpbmspO1xyXG5cdH0pO1xyXG5cdCQoJy52aWRlb2N0cmwnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0by52aWRlby5wbGF5VmlkZW8oKTtcclxuXHRcdCQoJy52aWRlb2N0cmwnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcblx0JCgnLm1lbnVhJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRibHVlX2xpbmUoJCh0aGlzKSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZigkKHRoaXMpLmluZGV4KCk9PTUpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5mYWRlSW4oKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVPdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2Vtb3ZlKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHR9KTtcclxuXHQkKCcubWVudScpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoIW8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKG8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0d2luZG93Lm9ub3JpZW50YXRpb25jaGFuZ2UgPSByZWFkRGV2aWNlT3JpZW50YXRpb247XHJcblx0JCh3aW5kb3cpLmxvYWQod2luZG93TG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93TG9hZCgpe1xyXG5cdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8qIGluZGV4ICovL1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMCk7XHJcblx0XHRcdGNyZWF0ZVZpZGVvKCdwbGF5ZXInLG8udmlkZW9JRCxmYWxzZSk7XHJcblx0XHRcdHZhciBfcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjQpO1xyXG5cdFx0XHQkKCcuYnJlYWtfd3JhcHBlciAucGczIC5wZXJzb24nKS5lcShfcmFuZG9tKS5zaG93KCk7XHJcblxyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblxyXG5cdFx0XHQvLyogcnVsZSAqLy9cclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDMpO1xyXG5cdFx0XHRpZighby5tb2JpbGUpICQoXCIucnVsZV9ib3ggLnJ1bGVfd29yZFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cclxuXHRcdFx0Ly8qIGhlcm8gKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgxKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0XHRmb3IodmFyIGk9MDtpPCQoJy5oZXJvX2JveCAucGVyc29uJykubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHQkKCcuaGVyb19ib3ggLnBlcnNvbicpLmVxKGkpLmZpbmQoJy53JykubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmVhY2goaGVyb19ib3hmYyk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGJsdWVfbGluZShvLmJsdWVfbGluZWluaXQpO1xyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIHJlYWREZXZpY2VPcmllbnRhdGlvbigpIHtcclxuXHQgICAgaWYgKE1hdGguYWJzKHdpbmRvdy5vcmllbnRhdGlvbikgPT0gOTApIHtcclxuXHQgICAgICAgIC8vIExhbmRzY2FwZVxyXG5cdCAgICAgICAgJCgnLmJyZWFrX21vYmlsZV9jb3ZlcicpLmZhZGVJbigpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICBcdC8vIFBvcnRyYWl0XHJcblx0ICAgIFx0JCgnLmJyZWFrX21vYmlsZV9jb3ZlcicpLmZhZGVPdXQoKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHRmdW5jdGlvbiBjaGVja0hlcm8oKXtcclxuXHRcdHZhciBfeSA9IE1hdGguYWJzKCBvLmhlcm9tb3VzZVlfZW5kIC0gby5oZXJvbW91c2VZKTtcclxuXHRcdHZhciBfeCA9IG8uaGVyb21vdXNlWF9lbmQgLSBvLmhlcm9tb3VzZVg7XHJcblx0XHRpZihfeSA+PSBvLnRvdWNodmFsdWVZKSByZXR1cm47XHJcblx0XHRlbHNle1xyXG5cdFx0XHRpZihNYXRoLmFicyhfeCk8PW8udG91Y2h2YWx1ZVgpIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBub3dudW0gPSQoJy5wZXJzb24nKS5hdHRyKCdjbGFzcycpLnJlcGxhY2UoJ3BlcnNvbiBwZScsJycpLnJlcGxhY2UoJyBvbicsJycpKjE7XHJcblx0XHRcdGlmKF94PjApIG5vd251bSA9IG5vd251bSoxIC0gMTtcclxuXHRcdFx0ZWxzZSBub3dudW0gPSBub3dudW0qMSArIDE7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09NTt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPjUpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNob3dtZW51KF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5jc3MoJ2hlaWdodCcsJCh3aW5kb3cpLmhlaWdodCgpKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmF0dHIoJ3N0eWxlJywnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG1lbnVtb3VzZU91dCgpe1xyXG5cdFx0by5ibHVlX2xpbmV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHRcdFx0Ymx1ZV9saW5lKG8uYmx1ZV9saW5laW5pdCk7XHJcblx0XHR9LDE1MDApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoZXJvX2JveGZjKCl7XHJcblx0XHR2YXIgbGVmdGJ0biA9ICQodGhpcykuZmluZCgnLmxlZnRidG4nKSxcclxuXHRcdFx0cmlnaHRidG4gPSAkKHRoaXMpLmZpbmQoJy5yaWdodGJ0bicpLFxyXG5cdFx0XHRwZXJzb24gPSAkKHRoaXMpLmZpbmQoJy5wZXJzb24nKSxcclxuXHRcdFx0YnQgPSAkKHRoaXMpLmZpbmQoJy5zdWInKS5maW5kKCcuYnQnKSxcclxuXHRcdFx0X21heCA9IDUsXHJcblx0XHRcdG5vd251bSA9cGVyc29uLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHJcblx0XHRwZXJzb24uYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRidC5lcShub3dudW0tMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRsZWZ0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bS09MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRyaWdodGJ0bi5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0rPTE7XHJcblx0XHRcdGNoYW5nZWhlcm8oKTtcclxuXHRcdH0pO1xyXG5cdFx0YnQuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRmdW5jdGlvbiBjaGFuZ2VoZXJvKCl7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09X21heDt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPl9tYXgpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNoYXJlRmIoX2xpbmspe1xyXG4gICAgICAgIEZCLnVpKHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICBuYW1lOiBvLnNoYXJldGl0bGUsXHJcbiAgICAgICAgICAgIGNhcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvLnNoYXJlZGVzLFxyXG4gICAgICAgICAgICBkaXNwbGF5OlwicG9wdXBcIixcclxuICAgICAgICAgICAgbGluazogX2xpbmtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gY3JlYXRlVmlkZW8oX28sX2lkLF9hdXRvcGxheSl7XHJcbiAgICAgICAgby52aWRlbyA9IG5ldyBZVC5QbGF5ZXIoX28sIHtcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIHZpZGVvSWQ6IF9pZCxcclxuICAgICAgICAgIHBsYXllclZhcnM6e1xyXG4gICAgICAgICAgICAnY29udHJvbHMnOjAsXHJcbiAgICAgICAgICAgICdhdXRvcGxheSc6X2F1dG9wbGF5LFxyXG4gICAgICAgICAgICAnZW5hYmxlanNhcGknOicwJyxcclxuICAgICAgICAgICAgJ2hkJzonMScsXHJcbiAgICAgICAgICAgICdyZWwnOicwJyxcclxuICAgICAgICAgICAgJ3Nob3dpbmZvJzonMCcsXHJcbiAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6JzEnLFxyXG4gICAgICAgICAgICAnY2NfbG9hZF9wb2xpY3knOicxJyxcclxuICAgICAgICAgICAgJ3dtb2RlJzondHJhbnNwYXJlbnQnICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXZlbnRzOiB7XHJcblx0ICAgICAgICAnb25SZWFkeSc6IHZpZGVvUmVhZHlcclxuXHQgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2aWRlb1JlYWR5KCl7XHJcbiAgICBcdG8udmlkZW8uc2Vla1RvKDEpLnBhdXNlVmlkZW8oKTtcclxuICAgIFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIHNob3dsb2FkaW5nKF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlSW4oKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYmx1ZV9saW5lKF9vKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0dmFyIF90b3AgPSBfby5vZmZzZXQoKS50b3AgLSAkKCcuYnJlYWtfdG9wX2JhcicpLm9mZnNldCgpLnRvcCArIF9vLmhlaWdodCgpKjAuNzU7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT1fdG9wKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX3RvcDtcclxuXHRcdFx0dmFyIF93aWR0aDtcclxuXHRcdFx0aWYoX28uaW5kZXgoKT09MCkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiAzMztcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0xKSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDEwNztcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0yKSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDg0O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTMpIF93aWR0aCA9IF9vLmhlaWdodCgpKjAuNSAvIDE2ICogNjk7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09NCkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiA2ODtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT01KSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDExODtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeyd0b3AnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X3dpZHRofSxvLmJsdWVfbGluZV9zcGVlZCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoby5ibHVlX2xpbmU9PShfby5vZmZzZXQoKS5sZWZ0IC0gJCgnLmJyZWFrX3RvcF9iYXJpbicpLm9mZnNldCgpLmxlZnQpKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHQkKCcuYmx1ZV9saW5lJykuYW5pbWF0ZSh7J2xlZnQnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X28ud2lkdGgoKX0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxufSkvL3JlYWR5IGVuZCAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],h.heromouseX_end=e.pageX,h.heromouseY_end=e.pageY}function o(){if(h.wrp.hasClass("index")){h.blue_lineinit=$(".menua").eq(0),r("player",h.videoID,!1);var e=Math.round(4*Math.random());$(".break_wrapper .pg3 .person").eq(e).show()}else if(h.wrp.hasClass("rule"))h.blue_lineinit=$(".menua").eq(3),h.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),d(!1);else if(h.wrp.hasClass("hero")){if(h.blue_lineinit=$(".menua").eq(1),!h.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(l),d(!1)}c(h.blue_lineinit)}function n(){90==Math.abs(window.orientation)?$(".break_mobile_cover").fadeIn():$(".break_mobile_cover").fadeOut()}function i(){var e=Math.abs(h.heromouseY_end-h.heromouseY),o=h.heromouseX_end-h.heromouseX;if(!(e>=h.touchvalueY||Math.abs(o)<=h.touchvalueX)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n-1:1*n+1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function t(e){e?(h.wrp.hasClass("index")&&($(".break_top_barin").removeClass("index"),$(".break_top_barin .logo").stop().animate({opacity:1},300)),$(".break_top_bar").css("height",$(window).height()).addClass("on")):(h.wrp.hasClass("index")&&($(".break_top_barin").addClass("index"),$(".break_top_barin .logo").stop().animate({opacity:0},300)),$(".break_top_bar").attr("style","").removeClass("on"))}function a(){h.blue_linetimeout=setTimeout(function(){clearTimeout(h.blue_linetimeout),c(h.blue_lineinit)},1500)}function l(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),t.eq(l-1).addClass("on"),o.click(function(){l-=1,e()}),n.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function s(e){FB.ui({method:"feed",name:h.sharetitle,link:e,picture:"http://img.youtube.com/vi/bRhpkp1_qEI/0.jpg",description:h.sharedes,display:"popup",source:"https://www.youtube.com/v/bRhpkp1_qEI?version=3&autohide=1&autoplay=1",type:"video"},function(e){})}function r(e,o,n){h.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:u}})}function u(){h.video.seekTo(1).pauseVideo(),d(!1)}function d(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function c(e){if(h.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+.75*e.height();if(h.blue_line==o)return;h.blue_line=o;var n;0==e.index()?n=.5*e.height()/16*33:1==e.index()?n=.5*e.height()/16*107:2==e.index()?n=.5*e.height()/16*84:3==e.index()?n=.5*e.height()/16*69:4==e.index()?n=.5*e.height()/16*68:5==e.index()&&(n=.5*e.height()/16*118),$(".blue_line").animate({top:h.blue_line,width:n},h.blue_line_speed)}else{if(h.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;h.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:h.blue_line,width:e.width()},h.blue_line_speed)}}var h={wrp:$(".break_wrapper"),touchvalueY:25,touchvalueX:.4*$(window).width(),blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/olympics/",sharetitle:"突破極限之巔 - 2016里約奧運代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運代表隊，你們辛苦了！"};if($(window).width()<=640?h.mobile=!0:h.mobile=!1,h.wrp.hasClass("index")){var b,p,f;b=document.getElementById("canvas"),f=new lib.inedx,p=new createjs.Stage(b),p.addChild(f),p.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",p),h.mobile||(h.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),h.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:h.FBAppId,channelUrl:h.mainurl,status:!0,xfbml:!0,cookie:!0}),$(".break_top_bar .logo").css("opacity",0),h.mobile&&$(".break_top_barin").addClass("index")}else h.wrp.hasClass("hero")&&(FB.init({appId:h.FBAppId,channelUrl:h.mainurl,status:!0,xfbml:!0,cookie:!0}),h.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),h.heromouseX=o.pageX,h.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),i()})));$(".logo").click(function(){h.wrp.hasClass("index")||(window.location.href="index.html")}),$(".chatbtn").click(function(){window.open("whatsapp://send?text="+window.location.href)}),$(".linebtn").click(function(){window.open("//line.me/R/msg/text/?"+h.sharetitle+"，"+h.sharedes+window.location.href+"　","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400")}),$(window).on("touchmove",function(e){h.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),t(!1)):(e.addClass("on"),t(!0))}),$(".hero_box .fbshare").click(function(){s(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){s(h.videolink)}),$(".videoctrl").click(function(){h.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){c($(this)),h.mobile||(6==$(this).index()?h.sub.stop().fadeIn():h.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(h.blue_linetimeout)}),$(".menu").mouseout(function(){a()}),h.sub.mousemove(function(){clearTimeout(h.blue_linetimeout)}),h.sub.mouseover(function(){h.mobile||h.sub.hasClass("on")||h.sub.stop().addClass("on").fadeIn()}),h.sub.mouseout(function(){a(),h.mobile||h.sub.hasClass("on")&&h.sub.stop().removeClass("on").fadeOut()}),window.onorientationchange=n,$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2hvdyIsIm1vYmlsZSIsIm1DdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxJbmVydGlhIiwic2Nyb2xsRWFzaW5nIiwic2hvd2xvYWRpbmciLCJpIiwibGVuZ3RoIiwiZmluZCIsImVhY2giLCJoZXJvX2JveGZjIiwiYmx1ZV9saW5lIiwicmVhZERldmljZU9yaWVudGF0aW9uIiwiYWJzIiwid2luZG93Iiwib3JpZW50YXRpb24iLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2hlY2tIZXJvIiwiX3kiLCJoZXJvbW91c2VZIiwiX3giLCJoZXJvbW91c2VYIiwidG91Y2h2YWx1ZVkiLCJ0b3VjaHZhbHVlWCIsIm5vd251bSIsImF0dHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJocmVmIiwic2hvd21lbnUiLCJfdCIsInJlbW92ZUNsYXNzIiwic3RvcCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiY3NzIiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJtZW51bW91c2VPdXQiLCJibHVlX2xpbmV0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNoYW5nZWhlcm8iLCJfbWF4IiwibGVmdGJ0biIsInRoaXMiLCJyaWdodGJ0biIsInBlcnNvbiIsImJ0IiwiY2xpY2siLCJpbmRleCIsInNoYXJlRmIiLCJfbGluayIsIkZCIiwidWkiLCJtZXRob2QiLCJuYW1lIiwic2hhcmV0aXRsZSIsImxpbmsiLCJwaWN0dXJlIiwiZGVzY3JpcHRpb24iLCJzaGFyZWRlcyIsImRpc3BsYXkiLCJzb3VyY2UiLCJ0eXBlIiwicmVzcG9uc2UiLCJfbyIsIl9pZCIsIl9hdXRvcGxheSIsInZpZGVvIiwiWVQiLCJQbGF5ZXIiLCJ3aWR0aCIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJhdXRvcGxheSIsImVuYWJsZWpzYXBpIiwiaGQiLCJyZWwiLCJzaG93aW5mbyIsIm1vZGVzdGJyYW5kaW5nIiwiY2NfbG9hZF9wb2xpY3kiLCJ3bW9kZSIsImV2ZW50cyIsIm9uUmVhZHkiLCJ2aWRlb1JlYWR5Iiwic2Vla1RvIiwicGF1c2VWaWRlbyIsIl90b3AiLCJvZmZzZXQiLCJ0b3AiLCJfd2lkdGgiLCJibHVlX2xpbmVfc3BlZWQiLCJsZWZ0IiwidmlkZW9saW5rIiwic3ViIiwiRkJBcHBJZCIsIm1haW51cmwiLCJjYW52YXMiLCJzdGFnZSIsImV4cG9ydFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImxpYiIsImluZWR4IiwiY3JlYXRlanMiLCJTdGFnZSIsImFkZENoaWxkIiwidXBkYXRlIiwiVGlja2VyIiwic2V0RlBTIiwicHJvcGVydGllcyIsImZwcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJQYXJhbGxheCIsIlBhcmFsbGF4MiIsImluaXQiLCJhcHBJZCIsImNoYW5uZWxVcmwiLCJzdGF0dXMiLCJ4ZmJtbCIsImNvb2tpZSIsImJpbmQiLCJ1bmJpbmQiLCJvcGVuIiwib24iLCJfdGgiLCJwYXJlbnQiLCJwbGF5VmlkZW8iLCJtb3VzZW92ZXIiLCJtb3VzZW1vdmUiLCJtb3VzZW91dCIsIm9ub3JpZW50YXRpb25jaGFuZ2UiLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQTZEZixRQUFTQyxHQUFjQyxHQUN0QkEsRUFBSUEsRUFBRUMsY0FBY0MsUUFBUSxHQUM1QkMsRUFBRUMsZUFBaUJKLEVBQUVLLE1BQ3JCRixFQUFFRyxlQUFpQk4sRUFBRU8sTUE4RXhCLFFBQVNDLEtBQ1IsR0FBR0wsRUFB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VUFBVSxXQUNYbEosRUFBRWlCLFFBQ0RqQixFQUFFaUgsSUFBSTFHLFNBQVMsT0FDbEJQLEVBQUVpSCxJQUFJaEUsT0FBT0ssU0FBUyxNQUFNdEIsV0FJL0JoQyxFQUFFaUgsSUFBSW1DLFNBQVMsV0FDZDdGLElBQ0l2RCxFQUFFaUIsUUFDRmpCLEVBQUVpSCxJQUFJMUcsU0FBUyxPQUNqQlAsRUFBRWlILElBQUloRSxPQUFPRCxZQUFZLE1BQU1mLFlBSWxDSCxPQUFPdUgsb0JBQXNCekgsRUFDN0JuQyxFQUFFcUMsUUFBUXdILEtBQUtqSiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvL0luaXRcclxuXHR2YXIgbyA9IHtcclxuXHRcdHdycDogJCgnLmJyZWFrX3dyYXBwZXInKSxcclxuXHRcdHRvdWNodmFsdWVZOiAyNSxcclxuXHRcdHRvdWNodmFsdWVYOiAkKHdpbmRvdykud2lkdGgoKSowLjQsXHJcblx0XHRibHVlX2xpbmVfc3BlZWQ6IDEwMCxcclxuXHRcdHZpZGVvSUQ6ICdiUmhwa3AxX3FFSScsXHJcblx0XHR2aWRlb2xpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWJSaHBrcDFfcUVJJyxcclxuXHRcdHN1YjogJCgnLmJyZWFrX3RvcF9iYXIgLnN1YicpLFxyXG5cdFx0RkJBcHBJZDogJzEzMDE5NzM4MjMxNTA5ODgnLFxyXG5cdFx0bWFpbnVybDogJ2h0dHA6Ly93d3cuc2Ftc3VuZy5jb20vdHcvY2FtcGFpZ25zL29seW1waWNzLycsXHJcblx0XHRzaGFyZXRpdGxlOiAn56qB56C05qW16ZmQ5LmL5beUIC0gMjAxNumHjOe0hOWlp+mBi+S7o+ihqOmaiiDorJ3orJ3kvaDnmoTliqrlipsnLFxyXG5cdFx0c2hhcmVkZXM6ICfnl5voi6bmnIPpgY7ljrvvvIzmpq7ogIDlsIfnlZnkuIvorJ3orJ3kvaDnmoTliqrlipvvvIwyMDE2IOmHjOe0hOWlp+mBi+S7o+ihqOmaiu+8jOS9oOWAkei+m+iLpuS6hu+8gSdcclxuXHR9O1xyXG5cclxuXHRpZigkKHdpbmRvdykud2lkdGgoKTw9NjQwKSBvLm1vYmlsZSA9IHRydWU7XHJcblx0ZWxzZSBvLm1vYmlsZSA9IGZhbHNlO1xyXG5cclxuXHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHR2YXIgY2FudmFzLCBzdGFnZSwgZXhwb3J0Um9vdDtcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5cdFx0ZXhwb3J0Um9vdCA9IG5ldyBsaWIuaW5lZHgoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0XHRvLlBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtfcGFnZV9wZzFfYmcnKSk7XHJcblx0XHR9XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdCAgICAkKCcuYnJlYWtfdG9wX2JhciAubG9nbycpLmNzcygnb3BhY2l0eScsMCk7XHJcblx0ICAgIGlmKG8ubW9iaWxlKSAkKCcuYnJlYWtfdG9wX2JhcmluJykuYWRkQ2xhc3MoJ2luZGV4Jyk7XHJcblx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ2hlcm8nKSl7XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdCAgICBpZihvLm1vYmlsZSl7XHJcblx0ICAgIFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2hzdGFydCcsZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cdFx0XHRcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNobW92ZScsaGVyb3RvdWNobW92ZSk7XHJcblx0XHRcdFx0by5oZXJvbW91c2VYID0gZS5wYWdlWDtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVkgPSBlLnBhZ2VZO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2hlbmQnLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdCQoJy5oZXJvX2JveCcpLnVuYmluZCgndG91Y2htb3ZlJyxoZXJvdG91Y2htb3ZlKTtcclxuXHRcdFx0XHRjaGVja0hlcm8oKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGZ1bmN0aW9uIGhlcm90b3VjaG1vdmUoZSl7XHJcblx0XHRcdFx0ZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWF9lbmQgPSBlLnBhZ2VYO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWV9lbmQgPSBlLnBhZ2VZO1xyXG5cdFx0XHR9XHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdC8vQWRkbGlzdGVuZXJcclxuXHQkKCcubG9nbycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRpZighby53cnAuaGFzQ2xhc3MoJ2luZGV4JykpIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG5cdH0pO1xyXG5cdCQoJy5jaGF0YnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwid2hhdHNhcHA6Ly9zZW5kP3RleHQ9XCIrd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdH0pO1xyXG5cdCQoJy5saW5lYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwiLy9saW5lLm1lL1IvbXNnL3RleHQvP1wiK28uc2hhcmV0aXRsZStcIu+8jFwiK28uc2hhcmVkZXMrIHdpbmRvdy5sb2NhdGlvbi5ocmVmICtcIuOAgFwiLCdfYmxhbmsnLCBcInRvb2xiYXI9eWVzLCBzY3JvbGxiYXJzPXllcywgcmVzaXphYmxlPXllcywgdG9wPTEwMCwgbGVmdD01MDAsIHdpZHRoPTYwMCwgaGVpZ2h0PTQwMFwiKTtcclxuXHR9KTtcclxuXHQkKHdpbmRvdykub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oZSl7XHJcblx0XHRpZihvLm1vYmlsZSl7XHJcblx0XHRcdGlmKCQoJy5icmVha190b3BfYmFyJykuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYWRkQ2xhc3MoJ29uX2VuZCcpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkrMTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tX2ljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIF90aCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcblx0XHRpZihfdGguaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRfdGgucmVtb3ZlQ2xhc3MoJ29uX2VuZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudShmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0X3RoLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudSh0cnVlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuaGVyb19ib3ggLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYih3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSlcclxuXHQkKCcuYnJlYWtfd3JhcHBlciAucGcyIC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIoby52aWRlb2xpbmspO1xyXG5cdH0pO1xyXG5cdCQoJy52aWRlb2N0cmwnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0by52aWRlby5wbGF5VmlkZW8oKTtcclxuXHRcdCQoJy52aWRlb2N0cmwnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcblx0JCgnLm1lbnVhJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRibHVlX2xpbmUoJCh0aGlzKSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZigkKHRoaXMpLmluZGV4KCk9PTYpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5mYWRlSW4oKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVPdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2Vtb3ZlKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHR9KTtcclxuXHQkKCcubWVudScpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoIW8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKG8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0d2luZG93Lm9ub3JpZW50YXRpb25jaGFuZ2UgPSByZWFkRGV2aWNlT3JpZW50YXRpb247XHJcblx0JCh3aW5kb3cpLmxvYWQod2luZG93TG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93TG9hZCgpe1xyXG5cdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8qIGluZGV4ICovL1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMCk7XHJcblx0XHRcdGNyZWF0ZVZpZGVvKCdwbGF5ZXInLG8udmlkZW9JRCxmYWxzZSk7XHJcblx0XHRcdHZhciBfcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjQpO1xyXG5cdFx0XHQkKCcuYnJlYWtfd3JhcHBlciAucGczIC5wZXJzb24nKS5lcShfcmFuZG9tKS5zaG93KCk7XHJcblxyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblxyXG5cdFx0XHQvLyogcnVsZSAqLy9cclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDMpO1xyXG5cdFx0XHRpZighby5tb2JpbGUpICQoXCIucnVsZV9ib3ggLnJ1bGVfd29yZFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cclxuXHRcdFx0Ly8qIGhlcm8gKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgxKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0XHRmb3IodmFyIGk9MDtpPCQoJy5oZXJvX2JveCAucGVyc29uJykubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHQkKCcuaGVyb19ib3ggLnBlcnNvbicpLmVxKGkpLmZpbmQoJy53JykubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmVhY2goaGVyb19ib3hmYyk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGJsdWVfbGluZShvLmJsdWVfbGluZWluaXQpO1xyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIHJlYWREZXZpY2VPcmllbnRhdGlvbigpIHtcclxuXHQgICAgaWYgKE1hdGguYWJzKHdpbmRvdy5vcmllbnRhdGlvbikgPT0gOTApIHtcclxuXHQgICAgICAgIC8vIExhbmRzY2FwZVxyXG5cdCAgICAgICAgJCgnLmJyZWFrX21vYmlsZV9jb3ZlcicpLmZhZGVJbigpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICBcdC8vIFBvcnRyYWl0XHJcblx0ICAgIFx0JCgnLmJyZWFrX21vYmlsZV9jb3ZlcicpLmZhZGVPdXQoKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHRmdW5jdGlvbiBjaGVja0hlcm8oKXtcclxuXHRcdHZhciBfeSA9IE1hdGguYWJzKCBvLmhlcm9tb3VzZVlfZW5kIC0gby5oZXJvbW91c2VZKTtcclxuXHRcdHZhciBfeCA9IG8uaGVyb21vdXNlWF9lbmQgLSBvLmhlcm9tb3VzZVg7XHJcblx0XHRpZihfeSA+PSBvLnRvdWNodmFsdWVZKSByZXR1cm47XHJcblx0XHRlbHNle1xyXG5cdFx0XHRpZihNYXRoLmFicyhfeCk8PW8udG91Y2h2YWx1ZVgpIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBub3dudW0gPSQoJy5wZXJzb24nKS5hdHRyKCdjbGFzcycpLnJlcGxhY2UoJ3BlcnNvbiBwZScsJycpLnJlcGxhY2UoJyBvbicsJycpKjE7XHJcblx0XHRcdGlmKF94PjApIG5vd251bSA9IG5vd251bSoxIC0gMTtcclxuXHRcdFx0ZWxzZSBub3dudW0gPSBub3dudW0qMSArIDE7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09NTt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPjUpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNob3dtZW51KF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRcdCQoJy5icmVha190b3BfYmFyaW4nKS5yZW1vdmVDbGFzcygnaW5kZXgnKTtcclxuXHRcdFx0XHQkKCcuYnJlYWtfdG9wX2JhcmluIC5sb2dvJykuc3RvcCgpLmFuaW1hdGUoeydvcGFjaXR5JzoxfSwzMDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5icmVha190b3BfYmFyJykuY3NzKCdoZWlnaHQnLCQod2luZG93KS5oZWlnaHQoKSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRcdCQoJy5icmVha190b3BfYmFyaW4nKS5hZGRDbGFzcygnaW5kZXgnKTtcclxuXHRcdFx0XHQkKCcuYnJlYWtfdG9wX2JhcmluIC5sb2dvJykuc3RvcCgpLmFuaW1hdGUoeydvcGFjaXR5JzowfSwzMDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYXR0cignc3R5bGUnLCcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gbWVudW1vdXNlT3V0KCl7XHJcblx0XHRvLmJsdWVfbGluZXRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdFx0XHRibHVlX2xpbmUoby5ibHVlX2xpbmVpbml0KTtcclxuXHRcdH0sMTUwMCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhlcm9fYm94ZmMoKXtcclxuXHRcdHZhciBsZWZ0YnRuID0gJCh0aGlzKS5maW5kKCcubGVmdGJ0bicpLFxyXG5cdFx0XHRyaWdodGJ0biA9ICQodGhpcykuZmluZCgnLnJpZ2h0YnRuJyksXHJcblx0XHRcdHBlcnNvbiA9ICQodGhpcykuZmluZCgnLnBlcnNvbicpLFxyXG5cdFx0XHRidCA9ICQodGhpcykuZmluZCgnLnN1YicpLmZpbmQoJy5idCcpLFxyXG5cdFx0XHRfbWF4ID0gNSxcclxuXHRcdFx0bm93bnVtID1wZXJzb24uYXR0cignY2xhc3MnKS5yZXBsYWNlKCdwZXJzb24gcGUnLCcnKS5yZXBsYWNlKCcgb24nLCcnKSoxO1xyXG5cclxuXHRcdHBlcnNvbi5hZGRDbGFzcygnb24nKTtcclxuXHRcdGJ0LmVxKG5vd251bS0xKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdGxlZnRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtLT0xO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdHJpZ2h0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bSs9MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRidC5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0gPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdGZ1bmN0aW9uIGNoYW5nZWhlcm8oKXtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT1fbWF4O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+X21heCl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hhcmVGYihfbGluayl7XHJcbiAgICAgICAgRkIudWkoeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgIG5hbWU6IG8uc2hhcmV0aXRsZSxcclxuICAgICAgICAgICAgbGluazogX2xpbmssXHJcbiAgICAgICAgICAgIHBpY3R1cmU6ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpL2JSaHBrcDFfcUVJLzAuanBnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG8uc2hhcmVkZXMsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJwb3B1cFwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdi9iUmhwa3AxX3FFST92ZXJzaW9uPTMmYXV0b2hpZGU9MSZhdXRvcGxheT0xXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICd2aWRlbydcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gY3JlYXRlVmlkZW8oX28sX2lkLF9hdXRvcGxheSl7XHJcbiAgICAgICAgby52aWRlbyA9IG5ldyBZVC5QbGF5ZXIoX28sIHtcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIHZpZGVvSWQ6IF9pZCxcclxuICAgICAgICAgIHBsYXllclZhcnM6e1xyXG4gICAgICAgICAgICAnY29udHJvbHMnOjAsXHJcbiAgICAgICAgICAgICdhdXRvcGxheSc6X2F1dG9wbGF5LFxyXG4gICAgICAgICAgICAnZW5hYmxlanNhcGknOicwJyxcclxuICAgICAgICAgICAgJ2hkJzonMScsXHJcbiAgICAgICAgICAgICdyZWwnOicwJyxcclxuICAgICAgICAgICAgJ3Nob3dpbmZvJzonMCcsXHJcbiAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6JzEnLFxyXG4gICAgICAgICAgICAnY2NfbG9hZF9wb2xpY3knOicxJyxcclxuICAgICAgICAgICAgJ3dtb2RlJzondHJhbnNwYXJlbnQnICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXZlbnRzOiB7XHJcblx0ICAgICAgICAnb25SZWFkeSc6IHZpZGVvUmVhZHlcclxuXHQgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2aWRlb1JlYWR5KCl7XHJcbiAgICBcdG8udmlkZW8uc2Vla1RvKDEpLnBhdXNlVmlkZW8oKTtcclxuICAgIFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIHNob3dsb2FkaW5nKF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlSW4oKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYmx1ZV9saW5lKF9vKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0dmFyIF90b3AgPSBfby5vZmZzZXQoKS50b3AgLSAkKCcuYnJlYWtfdG9wX2JhcicpLm9mZnNldCgpLnRvcCArIF9vLmhlaWdodCgpKjAuNzU7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT1fdG9wKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX3RvcDtcclxuXHRcdFx0dmFyIF93aWR0aDtcclxuXHRcdFx0aWYoX28uaW5kZXgoKT09MCkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiAzMztcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0xKSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDEwNztcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0yKSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDg0O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTMpIF93aWR0aCA9IF9vLmhlaWdodCgpKjAuNSAvIDE2ICogNjk7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09NCkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiA2ODtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT01KSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDExODtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeyd0b3AnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X3dpZHRofSxvLmJsdWVfbGluZV9zcGVlZCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoby5ibHVlX2xpbmU9PShfby5vZmZzZXQoKS5sZWZ0IC0gJCgnLmJyZWFrX3RvcF9iYXJpbicpLm9mZnNldCgpLmxlZnQpKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHQkKCcuYmx1ZV9saW5lJykuYW5pbWF0ZSh7J2xlZnQnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X28ud2lkdGgoKX0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxufSkvL3JlYWR5IGVuZCAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

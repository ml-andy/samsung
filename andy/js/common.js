$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],b.heromouseX_end=e.pageX,b.heromouseY_end=e.pageY}function o(){if(b.wrp.hasClass("index")){b.blue_lineinit=$(".menua").eq(0),d("player",b.videoID,!1);var e=Math.round(4*Math.random());$(".break_wrapper .pg3 .person").eq(e).show()}else if(b.wrp.hasClass("rule"))b.blue_lineinit=$(".menua").eq(3),b.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),c(!1);else if(b.wrp.hasClass("hero")){if(b.blue_lineinit=$(".menua").eq(1),!b.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(s),c(!1)}h(b.blue_lineinit)}function n(){90==Math.abs(window.orientation)?$(".break_mobile_cover").fadeIn():$(".break_mobile_cover").fadeOut()}function i(){var e=Math.abs(b.heromouseY_end-b.heromouseY),o=b.heromouseX_end-b.heromouseX;if(!(e>=b.touchvalueY||Math.abs(o)<=b.touchvalueX)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n-1:1*n+1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function a(e){e?(b.wrp.hasClass("index")&&($(".break_top_barin").removeClass("index"),$(".break_top_barin .logo").stop().animate({opacity:1},300)),$(".break_top_bar").css("height",$(window).height()).addClass("on")):(b.wrp.hasClass("index")&&($(".break_top_barin").addClass("index"),$(".break_top_barin .logo").stop().animate({opacity:0},300)),$(".break_top_bar").attr("style","").removeClass("on"))}function t(){b.blue_linetimeout=setTimeout(function(){clearTimeout(b.blue_linetimeout),h(b.blue_lineinit)},1500)}function s(){function e(){s<1?s=t:s>t&&(s=1),window.location.href="hero"+s+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),a=$(this).find(".sub").find(".bt"),t=5,s=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),a.eq(s-1).addClass("on"),o.click(function(){s-=1,e()}),n.click(function(){s+=1,e()}),a.click(function(){return s=$(this).index()+1,6==s?void window.open("https://tw.youcard.yahoo.com/cardstack/b6511ea0-2644-11e6-a450-a1c2efa13529"):void e()})}function l(e){FB.ui({method:"feed",name:b.sharetitle,caption:"",description:b.sharedes,display:"popup",link:e},function(e){})}function r(e){FB.ui({method:"feed",name:b.sharetitle,description:b.sharedes,display:"popup",link:b.videolink},function(e){})}function d(e,o,n){b.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:u}})}function u(){b.video.seekTo(1).pauseVideo(),c(!1)}function c(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function h(e){if(b.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+.75*e.height();if(b.blue_line==o)return;b.blue_line=o;var n;0==e.index()?n=.5*e.height()/16*33:1==e.index()?n=.5*e.height()/16*107:2==e.index()?n=.5*e.height()/16*84:3==e.index()?n=.5*e.height()/16*69:4==e.index()?n=.5*e.height()/16*68:5==e.index()&&(n=.5*e.height()/16*118),$(".blue_line").animate({top:b.blue_line,width:n},b.blue_line_speed)}else{if(b.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;b.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:b.blue_line,width:e.width()},b.blue_line_speed)}}var b={wrp:$(".break_wrapper"),touchvalueY:25,touchvalueX:.4*$(window).width(),blue_line_speed:100,videoID:"xy4OULEL2ew",videolink:"http://www.samsung.com/tw/campaigns/olympics/video.html",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/olympics/",sharetitle:"突破極限之巔 - 2016里約奧運代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運代表隊，你們辛苦了！"};if($(window).width()<=640?b.mobile=!0:b.mobile=!1,b.wrp.hasClass("index")){var p,f,m;p=document.getElementById("canvas"),m=new lib.inedx,f=new createjs.Stage(p),f.addChild(m),f.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",f),b.mobile||(b.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),b.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:b.FBAppId,channelUrl:b.mainurl,status:!0,xfbml:!0,cookie:!0}),$(".break_top_bar .logo").css("opacity",0),b.mobile&&$(".break_top_barin").addClass("index")}else b.wrp.hasClass("hero")&&(FB.init({appId:b.FBAppId,channelUrl:b.mainurl,status:!0,xfbml:!0,cookie:!0}),b.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),b.heromouseX=o.pageX,b.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),i()})));$(".sroll_btn").click(function(){$("body,html").animate({scrollTop:$(".pg2").offset().top-$(".break_top_bar").height()},500)}),$(".logo").click(function(){b.wrp.hasClass("index")||(window.location.href="index.html")}),$(".chatbtn").click(function(){window.open("whatsapp://send?text="+window.location.href)}),$(".linebtn").click(function(){window.open("//line.me/R/msg/text/?"+b.sharetitle+"，"+b.sharedes+window.location.href+"　","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400")}),$(window).on("touchmove",function(e){b.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),a(!1)):(e.addClass("on"),a(!0))}),$(".hero_box .fbshare").click(function(){l(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){r()}),$(".videoctrl").click(function(){b.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){h($(this)),b.mobile||(6==$(this).index()?b.sub.hasClass("on")||b.sub.stop().addClass("on").hide().css("opacity",1).fadeIn():b.sub.hasClass("on")&&b.sub.stop().removeClass("on").show().css("opacity",1).fadeOut())}),$(".menu").mousemove(function(){clearTimeout(b.blue_linetimeout)}),$(".menu").mouseout(function(){t()}),b.sub.mousemove(function(){clearTimeout(b.blue_linetimeout)}),b.sub.mouseover(function(){b.mobile||b.sub.hasClass("on")||b.sub.stop().addClass("on").hide().css("opacity",1).fadeIn()}),b.sub.mouseout(function(){t(),b.mobile||b.sub.hasClass("on")&&b.sub.stop().removeClass("on").show().css("opacity",1).fadeOut()}),window.onorientationchange=n,$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2hvdyIsIm1vYmlsZSIsIm1DdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxJbmVydGlhIiwic2Nyb2xsRWFzaW5nIiwic2hvd2xvYWRpbmciLCJpIiwibGVuZ3RoIiwiZmluZCIsImVhY2giLCJoZXJvX2JveGZjIiwiYmx1ZV9saW5lIiwicmVhZERldmljZU9yaWVudGF0aW9uIiwiYWJzIiwid2luZG93Iiwib3JpZW50YXRpb24iLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2hlY2tIZXJvIiwiX3kiLCJoZXJvbW91c2VZIiwiX3giLCJoZXJvbW91c2VYIiwidG91Y2h2YWx1ZVkiLCJ0b3VjaHZhbHVlWCIsIm5vd251bSIsImF0dHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJocmVmIiwic2hvd21lbnUiLCJfdCIsInJlbW92ZUNsYXNzIiwic3RvcCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiY3NzIiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJtZW51bW91c2VPdXQiLCJibHVlX2xpbmV0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNoYW5nZWhlcm8iLCJfbWF4IiwibGVmdGJ0biIsInRoaXMiLCJyaWdodGJ0biIsInBlcnNvbiIsImJ0IiwiY2xpY2siLCJpbmRleCIsIm9wZW4iLCJzaGFyZUZiIiwiX2xpbmsiLCJGQiIsInVpIiwibWV0aG9kIiwibmFtZSIsInNoYXJldGl0bGUiLCJjYXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZWRlcyIsImRpc3BsYXkiLCJsaW5rIiwicmVzcG9uc2UiLCJzaGFyZUZidmlkZW8iLCJ2aWRlb2xpbmsiLCJfbyIsIl9pZCIsIl9hdXRvcGxheSIsInZpZGVvIiwiWVQiLCJQbGF5ZXIiLCJ3aWR0aCIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJhdXRvcGxheSIsImVuYWJsZWpzYXBpIiwiaGQiLCJyZWwiLCJzaG93aW5mbyIsIm1vZGVzdGJyYW5kaW5nIiwiY2NfbG9hZF9wb2xpY3kiLCJ3bW9kZSIsImV2ZW50cyIsIm9uUmVhZHkiLCJ2aWRlb1JlYWR5Iiwic2Vla1RvIiwicGF1c2VWaWRlbyIsIl90b3AiLCJvZmZzZXQiLCJ0b3AiLCJfd2lkdGgiLCJibHVlX2xpbmVfc3BlZWQiLCJsZWZ0Iiwic3ViIiwiRkJBcHBJZCIsIm1haW51cmwiLCJjYW52YXMiLCJzdGFnZSIsImV4cG9ydFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImxpYiIsImluZWR4IiwiY3JlYXRlanMiLCJTdGFnZSIsImFkZENoaWxkIiwidXBkYXRlIiwiVGlja2VyIiwic2V0RlBTIiwicHJvcGVydGllcyIsImZwcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJQYXJhbGxheCIsIlBhcmFsbGF4MiIsImluaXQiLCJhcHBJZCIsImNoYW5uZWxVcmwiLCJzdGF0dXMiLCJ4ZmJtbCIsImNvb2tpZSIsImJpbmQiLCJ1bmJpbmQiLCJzY3JvbGxUb3AiLCJvbiIsIl90aCIsInBhcmVudCIsInBsYXlWaWRlbyIsIm1vdXNlb3ZlciIsImhpZGUiLCJtb3VzZW1vdmUiLCJtb3VzZW91dCIsIm9ub3JpZW50YXRpb25jaGFuZ2UiLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQTZEZixRQUFTQyxHQUFjQyxHQUN0QkEsRUFBSUEsRUFBRUMsY0FBY0MsUUFBUSxHQUM1QkMsRUFBRUMsZUFBaUJKLEVBQUVLLE1BQ3JCRixFQUFFRyxlQUFpQk4sRUFBRU8sTUFxRnhCLFFB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Q1I5RCxFQUFFaUIsU0FDZSxHQUFqQnhCLEVBQUVxRSxNQUFNSyxRQUNObkUsRUFBRWlILElBQUkxRyxTQUFTLE9BQ2xCUCxFQUFFaUgsSUFBSWhFLE9BQU9LLFNBQVMsTUFBTTZGLE9BQU8vRixJQUFJLFVBQVUsR0FBR3BCLFNBR2xEaEMsRUFBRWlILElBQUkxRyxTQUFTLE9BQ2pCUCxFQUFFaUgsSUFBSWhFLE9BQU9ELFlBQVksTUFBTWhDLE9BQU9vQyxJQUFJLFVBQVUsR0FBR25CLGFBSzNEeEMsRUFBRSxTQUFTMkosVUFBVSxXQUNwQjFGLGFBQWExRCxFQUFFd0Qsb0JBRWhCL0QsRUFBRSxTQUFTNEosU0FBUyxXQUNuQjlGLE1BRUR2RCxFQUFFaUgsSUFBSW1DLFVBQVUsV0FDZjFGLGFBQWExRCxFQUFFd0Qsb0JBRWhCeEQsRUFBRWlILElBQUlpQyxVQUFVLFdBQ1hsSixFQUFFaUIsUUFDRGpCLEVBQUVpSCxJQUFJMUcsU0FBUyxPQUNsQlAsRUFBRWlILElBQUloRSxPQUFPSyxTQUFTLE1BQU02RixPQUFPL0YsSUFBSSxVQUFVLEdBQUdwQixXQUl2RGhDLEVBQUVpSCxJQUFJb0MsU0FBUyxXQUNkOUYsSUFDSXZELEVBQUVpQixRQUNGakIsRUFBRWlILElBQUkxRyxTQUFTLE9BQ2pCUCxFQUFFaUgsSUFBSWhFLE9BQU9ELFlBQVksTUFBTWhDLE9BQU9vQyxJQUFJLFVBQVUsR0FBR25CLFlBSTFESCxPQUFPd0gsb0JBQXNCMUgsRUFDN0JuQyxFQUFFcUMsUUFBUXlILEtBQUtsSiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvL0luaXRcclxuXHR2YXIgbyA9IHtcclxuXHRcdHdycDogJCgnLmJyZWFrX3dyYXBwZXInKSxcclxuXHRcdHRvdWNodmFsdWVZOiAyNSxcclxuXHRcdHRvdWNodmFsdWVYOiAkKHdpbmRvdykud2lkdGgoKSowLjQsXHJcblx0XHRibHVlX2xpbmVfc3BlZWQ6IDEwMCxcclxuXHRcdHZpZGVvSUQ6ICd4eTRPVUxFTDJldycsXHJcblx0XHR2aWRlb2xpbms6ICdodHRwOi8vd3d3LnNhbXN1bmcuY29tL3R3L2NhbXBhaWducy9vbHltcGljcy92aWRlby5odG1sJyxcclxuXHRcdHN1YjogJCgnLmJyZWFrX3RvcF9iYXIgLnN1YicpLFxyXG5cdFx0RkJBcHBJZDogJzEzMDE5NzM4MjMxNTA5ODgnLFxyXG5cdFx0bWFpbnVybDogJ2h0dHA6Ly93d3cuc2Ftc3VuZy5jb20vdHcvY2FtcGFpZ25zL29seW1waWNzLycsXHJcblx0XHRzaGFyZXRpdGxlOiAn56qB56C05qW16ZmQ5LmL5beUIC0gMjAxNumHjOe0hOWlp+mBi+S7o+ihqOmaiiDorJ3orJ3kvaDnmoTliqrlipsnLFxyXG5cdFx0c2hhcmVkZXM6ICfnl5voi6bmnIPpgY7ljrvvvIzmpq7ogIDlsIfnlZnkuIvorJ3orJ3kvaDnmoTliqrlipvvvIwyMDE2IOmHjOe0hOWlp+mBi+S7o+ihqOmaiu+8jOS9oOWAkei+m+iLpuS6hu+8gSdcclxuXHR9O1xyXG5cclxuXHRpZigkKHdpbmRvdykud2lkdGgoKTw9NjQwKSBvLm1vYmlsZSA9IHRydWU7XHJcblx0ZWxzZSBvLm1vYmlsZSA9IGZhbHNlO1xyXG5cclxuXHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHR2YXIgY2FudmFzLCBzdGFnZSwgZXhwb3J0Um9vdDtcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5cdFx0ZXhwb3J0Um9vdCA9IG5ldyBsaWIuaW5lZHgoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0XHRvLlBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtfcGFnZV9wZzFfYmcnKSk7XHJcblx0XHR9XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdCAgICAkKCcuYnJlYWtfdG9wX2JhciAubG9nbycpLmNzcygnb3BhY2l0eScsMCk7XHJcblx0ICAgIGlmKG8ubW9iaWxlKSAkKCcuYnJlYWtfdG9wX2JhcmluJykuYWRkQ2xhc3MoJ2luZGV4Jyk7XHJcblx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ2hlcm8nKSl7XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdCAgICBpZihvLm1vYmlsZSl7XHJcblx0ICAgIFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2hzdGFydCcsZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cdFx0XHRcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNobW92ZScsaGVyb3RvdWNobW92ZSk7XHJcblx0XHRcdFx0by5oZXJvbW91c2VYID0gZS5wYWdlWDtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVkgPSBlLnBhZ2VZO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2hlbmQnLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdCQoJy5oZXJvX2JveCcpLnVuYmluZCgndG91Y2htb3ZlJyxoZXJvdG91Y2htb3ZlKTtcclxuXHRcdFx0XHRjaGVja0hlcm8oKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGZ1bmN0aW9uIGhlcm90b3VjaG1vdmUoZSl7XHJcblx0XHRcdFx0ZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWF9lbmQgPSBlLnBhZ2VYO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWV9lbmQgPSBlLnBhZ2VZO1xyXG5cdFx0XHR9XHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdC8vQWRkbGlzdGVuZXJcclxuXHQkKCcuc3JvbGxfYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDokKCcucGcyJykub2Zmc2V0KCkudG9wLSQoJy5icmVha190b3BfYmFyJykuaGVpZ2h0KCl9LDUwMCk7XHJcblx0fSk7XHJcblx0JCgnLmxvZ28nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuXHR9KTtcclxuXHQkKCcuY2hhdGJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR3aW5kb3cub3BlbihcIndoYXRzYXBwOi8vc2VuZD90ZXh0PVwiK3dpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHR9KTtcclxuXHQkKCcubGluZWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR3aW5kb3cub3BlbihcIi8vbGluZS5tZS9SL21zZy90ZXh0Lz9cIitvLnNoYXJldGl0bGUrXCLvvIxcIitvLnNoYXJlZGVzKyB3aW5kb3cubG9jYXRpb24uaHJlZiArXCLjgIBcIiwnX2JsYW5rJywgXCJ0b29sYmFyPXllcywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHRvcD0xMDAsIGxlZnQ9NTAwLCB3aWR0aD02MDAsIGhlaWdodD00MDBcIik7XHJcblx0fSk7XHJcblx0JCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUnLGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoby5tb2JpbGUpe1xyXG5cdFx0XHRpZigkKCcuYnJlYWtfdG9wX2JhcicpLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmFkZENsYXNzKCdvbl9lbmQnKS5jc3MoJ2hlaWdodCcsJCh3aW5kb3cpLmhlaWdodCgpKzEwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcubV9pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHZhciBfdGggPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG5cdFx0aWYoX3RoLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0X3RoLnJlbW92ZUNsYXNzKCdvbl9lbmQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdFx0c2hvd21lbnUoZmFsc2UpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdF90aC5hZGRDbGFzcygnb24nKTtcclxuXHRcdFx0c2hvd21lbnUodHJ1ZSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLmhlcm9fYm94IC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdH0pXHJcblx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMiAuZmJzaGFyZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRzaGFyZUZidmlkZW8oKTtcclxuXHR9KTtcclxuXHQkKCcudmlkZW9jdHJsJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdG8udmlkZW8ucGxheVZpZGVvKCk7XHJcblx0XHQkKCcudmlkZW9jdHJsJykuZmFkZU91dCgpO1xyXG5cdH0pO1xyXG5cdCQoJy5tZW51YScpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0Ymx1ZV9saW5lKCQodGhpcykpO1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoJCh0aGlzKS5pbmRleCgpPT02KXtcclxuXHRcdFx0XHRpZighby5zdWIuaGFzQ2xhc3MoJ29uJykpe1x0XHJcblx0XHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuaGlkZSgpLmNzcygnb3BhY2l0eScsMSkuZmFkZUluKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZihvLnN1Yi5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuc2hvdygpLmNzcygnb3BhY2l0eScsMSkuZmFkZU91dCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2Vtb3ZlKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHR9KTtcclxuXHQkKCcubWVudScpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoIW8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuaGlkZSgpLmNzcygnb3BhY2l0eScsMSkuZmFkZUluKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW91dChmdW5jdGlvbigpe1xyXG5cdFx0bWVudW1vdXNlT3V0KCk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZihvLnN1Yi5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLnJlbW92ZUNsYXNzKCdvbicpLnNob3coKS5jc3MoJ29wYWNpdHknLDEpLmZhZGVPdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHdpbmRvdy5vbm9yaWVudGF0aW9uY2hhbmdlID0gcmVhZERldmljZU9yaWVudGF0aW9uO1xyXG5cdCQod2luZG93KS5sb2FkKHdpbmRvd0xvYWQpO1xyXG5cdGZ1bmN0aW9uIHdpbmRvd0xvYWQoKXtcclxuXHRcdGlmKG8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKXtcclxuXHRcdFx0XHJcblx0XHRcdC8vKiBpbmRleCAqLy9cclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDApO1xyXG5cdFx0XHRjcmVhdGVWaWRlbygncGxheWVyJyxvLnZpZGVvSUQsZmFsc2UpO1xyXG5cdFx0XHR2YXIgX3JhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo0KTtcclxuXHRcdFx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMyAucGVyc29uJykuZXEoX3JhbmRvbSkuc2hvdygpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdydWxlJykpe1xyXG5cclxuXHRcdFx0Ly8qIHJ1bGUgKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgzKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKSAkKFwiLnJ1bGVfYm94IC5ydWxlX3dvcmRcIikubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHJcblx0XHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHJcblx0XHRcdC8vKiBoZXJvICovL1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMSk7XHJcblx0XHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdFx0Zm9yKHZhciBpPTA7aTwkKCcuaGVyb19ib3ggLnBlcnNvbicpLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0JCgnLmhlcm9fYm94IC5wZXJzb24nKS5lcShpKS5maW5kKCcudycpLm1DdXN0b21TY3JvbGxiYXIoe3Njcm9sbEluZXJ0aWE6MzAwLHNjcm9sbEVhc2luZzonbGluZWFyJ30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcuaGVyb19ib3gnKS5lYWNoKGhlcm9fYm94ZmMpO1xyXG5cdFx0XHRzaG93bG9hZGluZyhmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRibHVlX2xpbmUoby5ibHVlX2xpbmVpbml0KTtcclxuXHR9XHJcblxyXG5cdC8vRXZlbnRcclxuXHRmdW5jdGlvbiByZWFkRGV2aWNlT3JpZW50YXRpb24oKSB7XHJcblx0ICAgIGlmIChNYXRoLmFicyh3aW5kb3cub3JpZW50YXRpb24pID09IDkwKSB7XHJcblx0ICAgICAgICAvLyBMYW5kc2NhcGVcclxuXHQgICAgICAgICQoJy5icmVha19tb2JpbGVfY292ZXInKS5mYWRlSW4oKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgXHQvLyBQb3J0cmFpdFxyXG5cdCAgICBcdCQoJy5icmVha19tb2JpbGVfY292ZXInKS5mYWRlT3V0KCk7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gY2hlY2tIZXJvKCl7XHJcblx0XHR2YXIgX3kgPSBNYXRoLmFicyggby5oZXJvbW91c2VZX2VuZCAtIG8uaGVyb21vdXNlWSk7XHJcblx0XHR2YXIgX3ggPSBvLmhlcm9tb3VzZVhfZW5kIC0gby5oZXJvbW91c2VYO1xyXG5cdFx0aWYoX3kgPj0gby50b3VjaHZhbHVlWSkgcmV0dXJuO1xyXG5cdFx0ZWxzZXtcclxuXHRcdFx0aWYoTWF0aC5hYnMoX3gpPD1vLnRvdWNodmFsdWVYKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbm93bnVtID0kKCcucGVyc29uJykuYXR0cignY2xhc3MnKS5yZXBsYWNlKCdwZXJzb24gcGUnLCcnKS5yZXBsYWNlKCcgb24nLCcnKSoxO1xyXG5cdFx0XHRpZihfeD4wKSBub3dudW0gPSBub3dudW0qMSAtIDE7XHJcblx0XHRcdGVsc2Ugbm93bnVtID0gbm93bnVtKjEgKyAxO1xyXG5cdFx0XHRpZihub3dudW08MSl7bm93bnVtPTU7fVxyXG5cdFx0XHRlbHNlIGlmKG5vd251bT41KXtub3dudW09MTt9XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hlcm8nK25vd251bSsnLmh0bWwnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzaG93bWVudShfdCl7XHJcblx0XHRpZihfdCl7XHJcblx0XHRcdGlmKG8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKXtcclxuXHRcdFx0XHQkKCcuYnJlYWtfdG9wX2JhcmluJykucmVtb3ZlQ2xhc3MoJ2luZGV4Jyk7XHJcblx0XHRcdFx0JCgnLmJyZWFrX3RvcF9iYXJpbiAubG9nbycpLnN0b3AoKS5hbmltYXRlKHsnb3BhY2l0eSc6MX0sMzAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkpLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKG8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKXtcclxuXHRcdFx0XHQkKCcuYnJlYWtfdG9wX2JhcmluJykuYWRkQ2xhc3MoJ2luZGV4Jyk7XHJcblx0XHRcdFx0JCgnLmJyZWFrX3RvcF9iYXJpbiAubG9nbycpLnN0b3AoKS5hbmltYXRlKHsnb3BhY2l0eSc6MH0sMzAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmF0dHIoJ3N0eWxlJywnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG1lbnVtb3VzZU91dCgpe1xyXG5cdFx0by5ibHVlX2xpbmV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHRcdFx0Ymx1ZV9saW5lKG8uYmx1ZV9saW5laW5pdCk7XHJcblx0XHR9LDE1MDApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoZXJvX2JveGZjKCl7XHJcblx0XHR2YXIgbGVmdGJ0biA9ICQodGhpcykuZmluZCgnLmxlZnRidG4nKSxcclxuXHRcdFx0cmlnaHRidG4gPSAkKHRoaXMpLmZpbmQoJy5yaWdodGJ0bicpLFxyXG5cdFx0XHRwZXJzb24gPSAkKHRoaXMpLmZpbmQoJy5wZXJzb24nKSxcclxuXHRcdFx0YnQgPSAkKHRoaXMpLmZpbmQoJy5zdWInKS5maW5kKCcuYnQnKSxcclxuXHRcdFx0X21heCA9IDUsXHJcblx0XHRcdG5vd251bSA9cGVyc29uLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHJcblx0XHRwZXJzb24uYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRidC5lcShub3dudW0tMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRsZWZ0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bS09MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRyaWdodGJ0bi5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0rPTE7XHJcblx0XHRcdGNoYW5nZWhlcm8oKTtcclxuXHRcdH0pO1xyXG5cdFx0YnQuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdFx0aWYobm93bnVtPT02KXtcclxuXHRcdFx0XHR3aW5kb3cub3BlbignaHR0cHM6Ly90dy55b3VjYXJkLnlhaG9vLmNvbS9jYXJkc3RhY2svYjY1MTFlYTAtMjY0NC0xMWU2LWE0NTAtYTFjMmVmYTEzNTI5Jyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNoYW5nZWhlcm8oKTtcclxuXHRcdH0pO1xyXG5cdFx0ZnVuY3Rpb24gY2hhbmdlaGVybygpe1xyXG5cdFx0XHRpZihub3dudW08MSl7bm93bnVtPV9tYXg7fVxyXG5cdFx0XHRlbHNlIGlmKG5vd251bT5fbWF4KXtub3dudW09MTt9XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hlcm8nK25vd251bSsnLmh0bWwnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzaGFyZUZiKF9saW5rKXtcclxuICAgICAgICBGQi51aSh7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICAgbmFtZTogby5zaGFyZXRpdGxlLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogby5zaGFyZWRlcyxcclxuICAgICAgICAgICAgZGlzcGxheTpcInBvcHVwXCIsXHJcbiAgICAgICAgICAgIGxpbms6IF9saW5rXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hhcmVGYnZpZGVvKF9saW5rKXtcclxuICAgICAgICBGQi51aSh7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICAgbmFtZTogby5zaGFyZXRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogby5zaGFyZWRlcyxcclxuICAgICAgICAgICAgZGlzcGxheTpcInBvcHVwXCIsXHJcbiAgICAgICAgICAgIGxpbms6IG8udmlkZW9saW5rXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVZpZGVvKF9vLF9pZCxfYXV0b3BsYXkpe1xyXG4gICAgICAgIG8udmlkZW8gPSBuZXcgWVQuUGxheWVyKF9vLCB7XHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICB2aWRlb0lkOiBfaWQsXHJcbiAgICAgICAgICBwbGF5ZXJWYXJzOntcclxuICAgICAgICAgICAgJ2NvbnRyb2xzJzowLFxyXG4gICAgICAgICAgICAnYXV0b3BsYXknOl9hdXRvcGxheSxcclxuICAgICAgICAgICAgJ2VuYWJsZWpzYXBpJzonMCcsXHJcbiAgICAgICAgICAgICdoZCc6JzEnLFxyXG4gICAgICAgICAgICAncmVsJzonMCcsXHJcbiAgICAgICAgICAgICdzaG93aW5mbyc6JzAnLFxyXG4gICAgICAgICAgICAnbW9kZXN0YnJhbmRpbmcnOicxJyxcclxuICAgICAgICAgICAgJ2NjX2xvYWRfcG9saWN5JzonMScsXHJcbiAgICAgICAgICAgICd3bW9kZSc6J3RyYW5zcGFyZW50JyAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGV2ZW50czoge1xyXG5cdCAgICAgICAgJ29uUmVhZHknOiB2aWRlb1JlYWR5XHJcblx0ICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmlkZW9SZWFkeSgpe1xyXG4gICAgXHRvLnZpZGVvLnNlZWtUbygxKS5wYXVzZVZpZGVvKCk7XHJcbiAgICBcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHRmdW5jdGlvbiBzaG93bG9hZGluZyhfdCl7XHJcblx0XHRpZihfdCl7XHJcblx0XHRcdCQoJy5icmVha19sb2FkaW5nJykuZmFkZUluKCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlT3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGJsdWVfbGluZShfbyl7XHJcblx0XHRpZihvLm1vYmlsZSl7XHJcblx0XHRcdHZhciBfdG9wID0gX28ub2Zmc2V0KCkudG9wIC0gJCgnLmJyZWFrX3RvcF9iYXInKS5vZmZzZXQoKS50b3AgKyBfby5oZWlnaHQoKSowLjc1O1xyXG5cdFx0XHRpZihvLmJsdWVfbGluZT09X3RvcCl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF90b3A7XHJcblx0XHRcdHZhciBfd2lkdGg7XHJcblx0XHRcdGlmKF9vLmluZGV4KCk9PTApIF93aWR0aCA9IF9vLmhlaWdodCgpKjAuNSAvIDE2ICogMzM7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MSkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiAxMDc7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MikgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiA4NDtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0zKSBfd2lkdGggPSBfby5oZWlnaHQoKSowLjUgLyAxNiAqIDY5O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTQpIF93aWR0aCA9IF9vLmhlaWdodCgpKjAuNSAvIDE2ICogNjg7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09NSkgX3dpZHRoID0gX28uaGVpZ2h0KCkqMC41IC8gMTYgKiAxMTg7XHJcblx0XHRcdCQoJy5ibHVlX2xpbmUnKS5hbmltYXRlKHsndG9wJzpvLmJsdWVfbGluZSwnd2lkdGgnOl93aWR0aH0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT0oX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0KSl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF9vLm9mZnNldCgpLmxlZnQgLSAkKCcuYnJlYWtfdG9wX2JhcmluJykub2Zmc2V0KCkubGVmdDtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeydsZWZ0JzpvLmJsdWVfbGluZSwnd2lkdGgnOl9vLndpZHRoKCl9LG8uYmx1ZV9saW5lX3NwZWVkKTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcbn0pLy9yZWFkeSBlbmQgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

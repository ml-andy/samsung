$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],c.heromouseX_end=e.pageX,c.heromouseY_end=e.pageY}function o(){if(c.wrp.hasClass("index")){c.blue_lineinit=$(".menua").eq(0),s("player",c.videoID,!1);var e=Math.round(4*Math.random());console.log(e),$(".break_wrapper .pg3 .person").eq(e).show()}else if(c.wrp.hasClass("rule"))c.blue_lineinit=$(".menua").eq(3),c.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),u(!1);else if(c.wrp.hasClass("hero")){if(c.blue_lineinit=$(".menua").eq(1),!c.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(a),u(!1)}d(c.blue_lineinit)}function n(){var e=Math.abs(c.heromouseY_end-c.heromouseY),o=c.heromouseX_end-c.heromouseX;if(!(e>=c.touchvalueY||Math.abs(o)<=c.touchvalueX)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n+1:1*n-1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function i(e){e?$(".break_top_bar").css("height",$(window).height()).addClass("on"):$(".break_top_bar").attr("style","").removeClass("on")}function t(){c.blue_linetimeout=setTimeout(function(){clearTimeout(c.blue_linetimeout),d(c.blue_lineinit)},1500)}function a(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),t.eq(l-1).addClass("on"),o.click(function(){l-=1,e()}),n.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function l(e){FB.ui({method:"feed",name:c.sharetitle,caption:"",description:c.sharedes,display:"popup",link:e},function(e){})}function s(e,o,n){c.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:r}})}function r(){c.video.seekTo(1).pauseVideo(),u(!1)}function u(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function d(e){if(c.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+60;if(c.blue_line==o)return;c.blue_line=o;var n;0==e.index()?n=70:1==e.index()?n=224:2==e.index()?n=186:3==e.index()?n=146:4==e.index()?n=146:5==e.index()&&(n=260),$(".blue_line").animate({top:c.blue_line,width:n},c.blue_line_speed)}else{if(c.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;c.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:c.blue_line,width:e.width()},c.blue_line_speed)}}var c={wrp:$(".break_wrapper"),touchvalueY:25,touchvalueX:50,blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！"};if($(window).width()<=640?c.mobile=!0:c.mobile=!1,c.wrp.hasClass("index")){var b,h,p;b=document.getElementById("canvas"),p=new lib.firwork,h=new createjs.Stage(b),h.addChild(p),h.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",h),c.mobile||(c.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),c.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0})}else c.wrp.hasClass("hero")&&(FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0}),c.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),c.heromouseX=o.pageX,c.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),n()})));$(".chatbtn").click(function(){window.open("whatsapp://send?text="+window.location.href)}),$(".linebtn").click(function(){window.open("//line.me/R/msg/text/?"+c.sharetitle+"，"+c.sharedes+window.location.href+"　","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400")}),$(window).on("touchmove",function(e){c.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),i(!1)):(e.addClass("on"),i(!0))}),$(".hero_box .fbshare").click(function(){l(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){l(c.videolink)}),$(".videoctrl").click(function(){c.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){d($(this)),c.mobile||(5==$(this).index()?c.sub.stop().fadeIn():c.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(c.blue_linetimeout)}),$(".menu").mouseout(function(){t()}),c.sub.mousemove(function(){clearTimeout(c.blue_linetimeout)}),c.sub.mouseover(function(){c.mobile||c.sub.hasClass("on")||c.sub.stop().addClass("on").fadeIn()}),c.sub.mouseout(function(){t(),c.mobile||c.sub.hasClass("on")&&c.sub.stop().removeClass("on").fadeOut()}),$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJtb2JpbGUiLCJtQ3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsSW5lcnRpYSIsInNjcm9sbEVhc2luZyIsInNob3dsb2FkaW5nIiwiaSIsImxlbmd0aCIsImZpbmQiLCJlYWNoIiwiaGVyb19ib3hmYyIsImJsdWVfbGluZSIsImNoZWNrSGVybyIsIl95IiwiYWJzIiwiaGVyb21vdXNlWSIsIl94IiwiaGVyb21vdXNlWCIsInRvdWNodmFsdWVZIiwidG91Y2h2YWx1ZVgiLCJub3dudW0iLCJhdHRyIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNob3dtZW51IiwiX3QiLCJjc3MiLCJoZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudW1vdXNlT3V0IiwiYmx1ZV9saW5ldGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjaGFuZ2VoZXJvIiwiX21heCIsImxlZnRidG4iLCJ0aGlzIiwicmlnaHRidG4iLCJwZXJzb24iLCJidCIsImNsaWNrIiwiaW5kZXgiLCJzaGFyZUZiIiwiX2xpbmsiLCJGQiIsInVpIiwibWV0aG9kIiwibmFtZSIsInNoYXJldGl0bGUiLCJjYXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZWRlcyIsImRpc3BsYXkiLCJsaW5rIiwicmVzcG9uc2UiLCJfbyIsIl9pZCIsIl9hdXRvcGxheSIsInZpZGVvIiwiWVQiLCJQbGF5ZXIiLCJ3aWR0aCIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJhdXRvcGxheSIsImVuYWJsZWpzYXBpIiwiaGQiLCJyZWwiLCJzaG93aW5mbyIsIm1vZGVzdGJyYW5kaW5nIiwiY2NfbG9hZF9wb2xpY3kiLCJ3bW9kZSIsImV2ZW50cyIsIm9uUmVhZHkiLCJ2aWRlb1JlYWR5Iiwic2Vla1RvIiwicGF1c2VWaWRlbyIsImZhZGVJbiIsImZhZGVPdXQiLCJfdG9wIiwib2Zmc2V0IiwidG9wIiwiX3dpZHRoIiwiYW5pbWF0ZSIsImJsdWVfbGluZV9zcGVlZCIsImxlZnQiLCJ2aWRlb2xpbmsiLCJzdWIiLCJGQkFwcElkIiwibWFpbnVybCIsImNhbnZhcyIsInN0YWdlIiwiZXhwb3J0Um9vdCIsImdldEVsZW1lbnRCeUlkIiwibGliIiwiZmlyd29yayIsImNyZWF0ZWpzIiwiU3RhZ2UiLCJhZGRDaGlsZCIsInVwZGF0ZSIsIlRpY2tlciIsInNldEZQUyIsInByb3BlcnRpZXMiLCJmcHMiLCJhZGRFdmVudExpc3RlbmVyIiwiUGFyYWxsYXgiLCJQYXJhbGxheDIiLCJpbml0IiwiYXBwSWQiLCJjaGFubmVsVXJsIiwic3RhdHVzIiwieGZibWwiLCJjb29raWUiLCJiaW5kIiwidW5iaW5kIiwib3BlbiIsIm9uIiwiX3RoIiwicGFyZW50IiwicGxheVZpZGVvIiwibW91c2VvdmVyIiwic3RvcCIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0EyRGYsUUFBU0MsR0FBY0MsR0FDdEJBLEVBQUlBLEVBQUVDLGNBQWNDLFFBQVEsR0FDNUJDLEVBQUVDLGVBQWlCSixFQUFFSyxNQUNyQkYsRUFBRUcsZUFBaUJOLEVBQUVPLE1BMEV4QixRQUFTQyxLQUNSLEdBQUdMLEVBQUVNLElBQUlDLFNBQVMsU0FBUyxDQUcxQlAsRUFBRVEsY0FBY2YsRUFBRSxVQUFVZ0IsR0FBRyxHQUMvQkMsRUFBWSxT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RTZHLElBQUlrQyxPQUFPNUMsU0FFYm5HLEVBQUU2RyxJQUFJa0MsT0FBTzNDLGFBSWhCM0csRUFBRSxTQUFTdUosVUFBVSxXQUNwQjNGLGFBQWFyRCxFQUFFbUQsb0JBRWhCMUQsRUFBRSxTQUFTd0osU0FBUyxXQUNuQi9GLE1BRURsRCxFQUFFNkcsSUFBSW1DLFVBQVUsV0FDZjNGLGFBQWFyRCxFQUFFbUQsb0JBRWhCbkQsRUFBRTZHLElBQUlpQyxVQUFVLFdBQ1g5SSxFQUFFbUIsUUFDRG5CLEVBQUU2RyxJQUFJdEcsU0FBUyxPQUNsQlAsRUFBRTZHLElBQUlrQyxPQUFPL0YsU0FBUyxNQUFNbUQsV0FJL0JuRyxFQUFFNkcsSUFBSW9DLFNBQVMsV0FDZC9GLElBQ0lsRCxFQUFFbUIsUUFDRm5CLEVBQUU2RyxJQUFJdEcsU0FBUyxPQUNqQlAsRUFBRTZHLElBQUlrQyxPQUFPOUYsWUFBWSxNQUFNbUQsWUFJbEMzRyxFQUFFZ0QsUUFBUXlHLEtBQUs3SSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvL0luaXRcclxuXHR2YXIgbyA9IHtcclxuXHRcdHdycDogJCgnLmJyZWFrX3dyYXBwZXInKSxcclxuXHRcdHRvdWNodmFsdWVZOiAyNSxcclxuXHRcdHRvdWNodmFsdWVYOiA1MCxcclxuXHRcdGJsdWVfbGluZV9zcGVlZDogMTAwLFxyXG5cdFx0dmlkZW9JRDogJ2JSaHBrcDFfcUVJJyxcclxuXHRcdHZpZGVvbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YlJocGtwMV9xRUknLFxyXG5cdFx0c3ViOiAkKCcuYnJlYWtfdG9wX2JhciAuc3ViJyksXHJcblx0XHRGQkFwcElkOiAnMTMwMTk3MzgyMzE1MDk4OCcsXHJcblx0XHRtYWludXJsOiAnaHR0cDovL3d3dy5zYW1zdW5nLmNvbS90dy9jYW1wYWlnbnMvMjAxNm9seW1waWNzL2luZGV4Lmh0bWwnLFxyXG5cdFx0c2hhcmV0aXRsZTogJ+eqgeegtOaltemZkOS5i+W3lCAtIDIwMTbph4zntITlpafpgYvlj7DngaPku6Pooajpmoog6Kyd6Kyd5L2g55qE5Yqq5YqbJyxcclxuXHRcdHNoYXJlZGVzOiAn55eb6Ium5pyD6YGO5Y6777yM5qau6ICA5bCH55WZ5LiL6Kyd6Kyd5L2g55qE5Yqq5Yqb77yMMjAxNiDph4zntITlpafpgYvlj7DngaPku6PooajpmorvvIzkvaDlgJHovpvoi6bkuobvvIEnXHJcblx0fTtcclxuXHJcblx0aWYoJCh3aW5kb3cpLndpZHRoKCk8PTY0MCkgby5tb2JpbGUgPSB0cnVlO1xyXG5cdGVsc2Ugby5tb2JpbGUgPSBmYWxzZTtcclxuXHJcblx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0dmFyIGNhbnZhcywgc3RhZ2UsIGV4cG9ydFJvb3Q7XHJcblx0XHRjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuXHRcdGV4cG9ydFJvb3QgPSBuZXcgbGliLmZpcndvcmsoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0XHRvLlBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtfcGFnZV9wZzFfYmcnKSk7XHJcblx0XHR9XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHQgICAgaWYoby5tb2JpbGUpe1xyXG5cdCAgICBcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuXHRcdFx0XHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaG1vdmUnLGhlcm90b3VjaG1vdmUpO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWCA9IGUucGFnZVg7XHJcblx0XHRcdFx0by5oZXJvbW91c2VZID0gZS5wYWdlWTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmJpbmQoJ3RvdWNoZW5kJyxmdW5jdGlvbihlKXtcclxuXHRcdFx0XHQkKCcuaGVyb19ib3gnKS51bmJpbmQoJ3RvdWNobW92ZScsaGVyb3RvdWNobW92ZSk7XHJcblx0XHRcdFx0Y2hlY2tIZXJvKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRmdW5jdGlvbiBoZXJvdG91Y2htb3ZlKGUpe1xyXG5cdFx0XHRcdGUgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVhfZW5kID0gZS5wYWdlWDtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVlfZW5kID0gZS5wYWdlWTtcclxuXHRcdFx0fVxyXG5cdCAgICB9XHJcblx0fVxyXG5cclxuXHQvL0FkZGxpc3RlbmVyXHJcblx0JCgnLmNoYXRidG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93Lm9wZW4oXCJ3aGF0c2FwcDovL3NlbmQ/dGV4dD1cIit3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSk7XHJcblx0JCgnLmxpbmVidG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93Lm9wZW4oXCIvL2xpbmUubWUvUi9tc2cvdGV4dC8/XCIrby5zaGFyZXRpdGxlK1wi77yMXCIrby5zaGFyZWRlcysgd2luZG93LmxvY2F0aW9uLmhyZWYgK1wi44CAXCIsJ19ibGFuaycsIFwidG9vbGJhcj15ZXMsIHNjcm9sbGJhcnM9eWVzLCByZXNpemFibGU9eWVzLCB0b3A9MTAwLCBsZWZ0PTUwMCwgd2lkdGg9NjAwLCBoZWlnaHQ9NDAwXCIpO1xyXG5cdH0pO1xyXG5cdCQod2luZG93KS5vbigndG91Y2htb3ZlJyxmdW5jdGlvbihlKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0aWYoJCgnLmJyZWFrX3RvcF9iYXInKS5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5hZGRDbGFzcygnb25fZW5kJykuY3NzKCdoZWlnaHQnLCQod2luZG93KS5oZWlnaHQoKSsxMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLm1faWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgX3RoID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuXHRcdGlmKF90aC5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdF90aC5yZW1vdmVDbGFzcygnb25fZW5kJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHRcdHNob3dtZW51KGZhbHNlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRfdGguYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdHNob3dtZW51KHRydWUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5oZXJvX2JveCAuZmJzaGFyZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRzaGFyZUZiKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHR9KVxyXG5cdCQoJy5icmVha193cmFwcGVyIC5wZzIgLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYihvLnZpZGVvbGluayk7XHJcblx0fSk7XHJcblx0JCgnLnZpZGVvY3RybCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRvLnZpZGVvLnBsYXlWaWRlbygpO1xyXG5cdFx0JCgnLnZpZGVvY3RybCcpLmZhZGVPdXQoKTtcclxuXHR9KTtcclxuXHQkKCcubWVudWEnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdGJsdWVfbGluZSgkKHRoaXMpKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKCQodGhpcykuaW5kZXgoKT09NSl7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVJbigpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLm1lbnUnKS5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdG1lbnVtb3VzZU91dCgpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlbW92ZShmdW5jdGlvbigpe1xyXG5cdFx0Y2xlYXJUaW1lb3V0KG8uYmx1ZV9saW5ldGltZW91dCk7XHJcblx0fSk7XHJcblx0by5zdWIubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZighby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5hZGRDbGFzcygnb24nKS5mYWRlSW4oKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0by5zdWIubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdG1lbnVtb3VzZU91dCgpO1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5yZW1vdmVDbGFzcygnb24nKS5mYWRlT3V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dMb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dMb2FkKCl7XHJcblx0XHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyogaW5kZXggKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgwKTtcclxuXHRcdFx0Y3JlYXRlVmlkZW8oJ3BsYXllcicsby52aWRlb0lELGZhbHNlKTtcclxuXHRcdFx0dmFyIF9yYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKF9yYW5kb20pO1xyXG5cdFx0XHQkKCcuYnJlYWtfd3JhcHBlciAucGczIC5wZXJzb24nKS5lcShfcmFuZG9tKS5zaG93KCk7XHJcblxyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblxyXG5cdFx0XHQvLyogcnVsZSAqLy9cclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDMpO1xyXG5cdFx0XHRpZighby5tb2JpbGUpICQoXCIucnVsZV9ib3ggLnJ1bGVfd29yZFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cclxuXHRcdFx0Ly8qIGhlcm8gKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgxKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0XHRmb3IodmFyIGk9MDtpPCQoJy5oZXJvX2JveCAucGVyc29uJykubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHQkKCcuaGVyb19ib3ggLnBlcnNvbicpLmVxKGkpLmZpbmQoJy53JykubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmVhY2goaGVyb19ib3hmYyk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGJsdWVfbGluZShvLmJsdWVfbGluZWluaXQpO1xyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIGNoZWNrSGVybygpe1xyXG5cdFx0dmFyIF95ID0gTWF0aC5hYnMoIG8uaGVyb21vdXNlWV9lbmQgLSBvLmhlcm9tb3VzZVkpO1xyXG5cdFx0dmFyIF94ID0gby5oZXJvbW91c2VYX2VuZCAtIG8uaGVyb21vdXNlWDtcclxuXHRcdGlmKF95ID49IG8udG91Y2h2YWx1ZVkpIHJldHVybjtcclxuXHRcdGVsc2V7XHJcblx0XHRcdGlmKE1hdGguYWJzKF94KTw9by50b3VjaHZhbHVlWCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIG5vd251bSA9JCgnLnBlcnNvbicpLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHRcdFx0aWYoX3g+MCkgbm93bnVtID0gbm93bnVtKjEgKyAxO1xyXG5cdFx0XHRlbHNlIG5vd251bSA9IG5vd251bSoxIC0gMTtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT01O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+NSl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hvd21lbnUoX3Qpe1xyXG5cdFx0aWYoX3Qpe1xyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkpLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYXR0cignc3R5bGUnLCcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gbWVudW1vdXNlT3V0KCl7XHJcblx0XHRvLmJsdWVfbGluZXRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdFx0XHRibHVlX2xpbmUoby5ibHVlX2xpbmVpbml0KTtcclxuXHRcdH0sMTUwMCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhlcm9fYm94ZmMoKXtcclxuXHRcdHZhciBsZWZ0YnRuID0gJCh0aGlzKS5maW5kKCcubGVmdGJ0bicpLFxyXG5cdFx0XHRyaWdodGJ0biA9ICQodGhpcykuZmluZCgnLnJpZ2h0YnRuJyksXHJcblx0XHRcdHBlcnNvbiA9ICQodGhpcykuZmluZCgnLnBlcnNvbicpLFxyXG5cdFx0XHRidCA9ICQodGhpcykuZmluZCgnLnN1YicpLmZpbmQoJy5idCcpLFxyXG5cdFx0XHRfbWF4ID0gNSxcclxuXHRcdFx0bm93bnVtID1wZXJzb24uYXR0cignY2xhc3MnKS5yZXBsYWNlKCdwZXJzb24gcGUnLCcnKS5yZXBsYWNlKCcgb24nLCcnKSoxO1xyXG5cclxuXHRcdHBlcnNvbi5hZGRDbGFzcygnb24nKTtcclxuXHRcdGJ0LmVxKG5vd251bS0xKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdGxlZnRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtLT0xO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdHJpZ2h0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bSs9MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRidC5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0gPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdGZ1bmN0aW9uIGNoYW5nZWhlcm8oKXtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT1fbWF4O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+X21heCl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hhcmVGYihfbGluayl7XHJcbiAgICAgICAgRkIudWkoeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgIG5hbWU6IG8uc2hhcmV0aXRsZSxcclxuICAgICAgICAgICAgY2FwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG8uc2hhcmVkZXMsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJwb3B1cFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBfbGlua1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHRmdW5jdGlvbiBjcmVhdGVWaWRlbyhfbyxfaWQsX2F1dG9wbGF5KXtcclxuICAgICAgICBvLnZpZGVvID0gbmV3IFlULlBsYXllcihfbywge1xyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgdmlkZW9JZDogX2lkLFxyXG4gICAgICAgICAgcGxheWVyVmFyczp7XHJcbiAgICAgICAgICAgICdjb250cm9scyc6MCxcclxuICAgICAgICAgICAgJ2F1dG9wbGF5JzpfYXV0b3BsYXksXHJcbiAgICAgICAgICAgICdlbmFibGVqc2FwaSc6JzAnLFxyXG4gICAgICAgICAgICAnaGQnOicxJyxcclxuICAgICAgICAgICAgJ3JlbCc6JzAnLFxyXG4gICAgICAgICAgICAnc2hvd2luZm8nOicwJyxcclxuICAgICAgICAgICAgJ21vZGVzdGJyYW5kaW5nJzonMScsXHJcbiAgICAgICAgICAgICdjY19sb2FkX3BvbGljeSc6JzEnLFxyXG4gICAgICAgICAgICAnd21vZGUnOid0cmFuc3BhcmVudCcgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBldmVudHM6IHtcclxuXHQgICAgICAgICdvblJlYWR5JzogdmlkZW9SZWFkeVxyXG5cdCAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHZpZGVvUmVhZHkoKXtcclxuICAgIFx0by52aWRlby5zZWVrVG8oMSkucGF1c2VWaWRlbygpO1xyXG4gICAgXHRzaG93bG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gc2hvd2xvYWRpbmcoX3Qpe1xyXG5cdFx0aWYoX3Qpe1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVJbigpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoJy5icmVha19sb2FkaW5nJykuZmFkZU91dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBibHVlX2xpbmUoX28pe1xyXG5cdFx0aWYoby5tb2JpbGUpe1xyXG5cdFx0XHR2YXIgX3RvcCA9IF9vLm9mZnNldCgpLnRvcCAtICQoJy5icmVha190b3BfYmFyJykub2Zmc2V0KCkudG9wICsgNjA7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT1fdG9wKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX3RvcDtcclxuXHRcdFx0dmFyIF93aWR0aDtcclxuXHRcdFx0aWYoX28uaW5kZXgoKT09MCkgX3dpZHRoID0gNzA7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MSkgX3dpZHRoID0gMjI0O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTIpIF93aWR0aCA9IDE4NjtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0zKSBfd2lkdGggPSAxNDY7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09NCkgX3dpZHRoID0gMTQ2O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTUpIF93aWR0aCA9IDI2MDtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeyd0b3AnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X3dpZHRofSxvLmJsdWVfbGluZV9zcGVlZCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoby5ibHVlX2xpbmU9PShfby5vZmZzZXQoKS5sZWZ0IC0gJCgnLmJyZWFrX3RvcF9iYXJpbicpLm9mZnNldCgpLmxlZnQpKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHQkKCcuYmx1ZV9saW5lJykuYW5pbWF0ZSh7J2xlZnQnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X28ud2lkdGgoKX0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxufSkvL3JlYWR5IGVuZCAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],c.heromouseX_end=e.pageX,c.heromouseY_end=e.pageY}function o(){if(c.wrp.hasClass("index")){c.blue_lineinit=$(".menua").eq(0),s("player",c.videoID,!1);var e=Math.round(4*Math.random());console.log(e),$(".break_wrapper .pg3 .person").eq(e).show()}else if(c.wrp.hasClass("rule"))c.blue_lineinit=$(".menua").eq(3),c.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),u(!1);else if(c.wrp.hasClass("hero")){if(c.blue_lineinit=$(".menua").eq(1),!c.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(a),u(!1)}d(c.blue_lineinit)}function n(){var e=Math.abs(c.heromouseY_end-c.heromouseY),o=c.heromouseX_end-c.heromouseX;if(!(e>=c.touchvalue)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n+1:1*n-1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function i(e){e?$(".break_top_bar").css("height",$(window).height()).addClass("on"):$(".break_top_bar").attr("style","").removeClass("on")}function t(){c.blue_linetimeout=setTimeout(function(){clearTimeout(c.blue_linetimeout),d(c.blue_lineinit)},1500)}function a(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),t.eq(l-1).addClass("on"),o.click(function(){l-=1,e()}),n.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function l(e){FB.ui({method:"feed",name:c.sharetitle,caption:"",description:c.sharedes,display:"popup",link:e},function(e){})}function s(e,o,n){c.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:r}})}function r(){c.video.seekTo(1).pauseVideo(),u(!1)}function u(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function d(e){if(c.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+60;if(c.blue_line==o)return;c.blue_line=o;var n;0==e.index()?n=70:1==e.index()?n=224:2==e.index()?n=186:3==e.index()?n=146:4==e.index()?n=146:5==e.index()&&(n=260),$(".blue_line").animate({top:c.blue_line,width:n},c.blue_line_speed)}else{if(c.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;c.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:c.blue_line,width:e.width()},c.blue_line_speed)}}var c={wrp:$(".break_wrapper"),touchvalue:25,blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！"};if($(window).width()<=640?c.mobile=!0:c.mobile=!1,c.wrp.hasClass("index")){var b,h,p;b=document.getElementById("canvas"),p=new lib.firwork,h=new createjs.Stage(b),h.addChild(p),h.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",h),c.mobile||(c.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),c.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0})}else c.wrp.hasClass("hero")&&(FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0}),c.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),c.heromouseX=o.pageX,c.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),n()})));$(".chatbtn").click(function(){window.open("whatsapp://send?text="+window.location.href)}),$(".linebtn").click(function(){window.open("//line.me/R/msg/text/?"+c.sharetitle+"，"+c.sharedes+window.location.href+"　","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400")}),$(window).on("touchmove",function(e){c.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),i(!1)):(e.addClass("on"),i(!0))}),$(".hero_box .fbshare").click(function(){l(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){l(c.videolink)}),$(".videoctrl").click(function(){c.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){d($(this)),c.mobile||(5==$(this).index()?c.sub.stop().fadeIn():c.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(c.blue_linetimeout)}),$(".menu").mouseout(function(){t()}),c.sub.mousemove(function(){clearTimeout(c.blue_linetimeout)}),c.sub.mouseover(function(){c.mobile||c.sub.hasClass("on")||c.sub.stop().addClass("on").fadeIn()}),c.sub.mouseout(function(){t(),c.mobile||c.sub.hasClass("on")&&c.sub.stop().removeClass("on").fadeOut()}),$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJtb2JpbGUiLCJtQ3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsSW5lcnRpYSIsInNjcm9sbEVhc2luZyIsInNob3dsb2FkaW5nIiwiaSIsImxlbmd0aCIsImZpbmQiLCJlYWNoIiwiaGVyb19ib3hmYyIsImJsdWVfbGluZSIsImNoZWNrSGVybyIsIl95IiwiYWJzIiwiaGVyb21vdXNlWSIsIl94IiwiaGVyb21vdXNlWCIsInRvdWNodmFsdWUiLCJub3dudW0iLCJhdHRyIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNob3dtZW51IiwiX3QiLCJjc3MiLCJoZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudW1vdXNlT3V0IiwiYmx1ZV9saW5ldGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjaGFuZ2VoZXJvIiwiX21heCIsImxlZnRidG4iLCJ0aGlzIiwicmlnaHRidG4iLCJwZXJzb24iLCJidCIsImNsaWNrIiwiaW5kZXgiLCJzaGFyZUZiIiwiX2xpbmsiLCJGQiIsInVpIiwibWV0aG9kIiwibmFtZSIsInNoYXJldGl0bGUiLCJjYXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZWRlcyIsImRpc3BsYXkiLCJsaW5rIiwicmVzcG9uc2UiLCJfbyIsIl9pZCIsIl9hdXRvcGxheSIsInZpZGVvIiwiWVQiLCJQbGF5ZXIiLCJ3aWR0aCIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJhdXRvcGxheSIsImVuYWJsZWpzYXBpIiwiaGQiLCJyZWwiLCJzaG93aW5mbyIsIm1vZGVzdGJyYW5kaW5nIiwiY2NfbG9hZF9wb2xpY3kiLCJ3bW9kZSIsImV2ZW50cyIsIm9uUmVhZHkiLCJ2aWRlb1JlYWR5Iiwic2Vla1RvIiwicGF1c2VWaWRlbyIsImZhZGVJbiIsImZhZGVPdXQiLCJfdG9wIiwib2Zmc2V0IiwidG9wIiwiX3dpZHRoIiwiYW5pbWF0ZSIsImJsdWVfbGluZV9zcGVlZCIsImxlZnQiLCJ2aWRlb2xpbmsiLCJzdWIiLCJGQkFwcElkIiwibWFpbnVybCIsImNhbnZhcyIsInN0YWdlIiwiZXhwb3J0Um9vdCIsImdldEVsZW1lbnRCeUlkIiwibGliIiwiZmlyd29yayIsImNyZWF0ZWpzIiwiU3RhZ2UiLCJhZGRDaGlsZCIsInVwZGF0ZSIsIlRpY2tlciIsInNldEZQUyIsInByb3BlcnRpZXMiLCJmcHMiLCJhZGRFdmVudExpc3RlbmVyIiwiUGFyYWxsYXgiLCJQYXJhbGxheDIiLCJpbml0IiwiYXBwSWQiLCJjaGFubmVsVXJsIiwic3RhdHVzIiwieGZibWwiLCJjb29raWUiLCJiaW5kIiwidW5iaW5kIiwib3BlbiIsIm9uIiwiX3RoIiwicGFyZW50IiwicGxheVZpZGVvIiwibW91c2VvdmVyIiwic3RvcCIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0EwRGYsUUFBU0MsR0FBY0MsR0FDdEJBLEVBQUlBLEVBQUVDLGNBQWNDLFFBQVEsR0FDNUJDLEVBQUVDLGVBQWlCSixFQUFFSyxNQUNyQkYsRUFBRUcsZUFBaUJOLEVBQUVPLE1BMEV4QixRQUFTQyxLQUNSLEdBQUdMLEVBQUVNLElBQUlDLFNBQVMsU0FBUyxDQUcxQlAsRUFBRVEsY0FBY2YsRUFBRSxVQUFVZ0IsR0FBRyxHQUMvQkMsRUFBWSxTQUFTVixFQUFFVyxTQUFR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QVNzSixVQUFVLFdBQ3BCM0YsYUFBYXBELEVBQUVrRCxvQkFFaEJ6RCxFQUFFLFNBQVN1SixTQUFTLFdBQ25CL0YsTUFFRGpELEVBQUU0RyxJQUFJbUMsVUFBVSxXQUNmM0YsYUFBYXBELEVBQUVrRCxvQkFFaEJsRCxFQUFFNEcsSUFBSWlDLFVBQVUsV0FDWDdJLEVBQUVtQixRQUNEbkIsRUFBRTRHLElBQUlyRyxTQUFTLE9BQ2xCUCxFQUFFNEcsSUFBSWtDLE9BQU8vRixTQUFTLE1BQU1tRCxXQUkvQmxHLEVBQUU0RyxJQUFJb0MsU0FBUyxXQUNkL0YsSUFDSWpELEVBQUVtQixRQUNGbkIsRUFBRTRHLElBQUlyRyxTQUFTLE9BQ2pCUCxFQUFFNEcsSUFBSWtDLE9BQU85RixZQUFZLE1BQU1tRCxZQUlsQzFHLEVBQUUrQyxRQUFReUcsS0FBSzVJIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdC8vSW5pdFxyXG5cdHZhciBvID0ge1xyXG5cdFx0d3JwOiAkKCcuYnJlYWtfd3JhcHBlcicpLFxyXG5cdFx0dG91Y2h2YWx1ZTogMjUsXHJcblx0XHRibHVlX2xpbmVfc3BlZWQ6IDEwMCxcclxuXHRcdHZpZGVvSUQ6ICdiUmhwa3AxX3FFSScsXHJcblx0XHR2aWRlb2xpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWJSaHBrcDFfcUVJJyxcclxuXHRcdHN1YjogJCgnLmJyZWFrX3RvcF9iYXIgLnN1YicpLFxyXG5cdFx0RkJBcHBJZDogJzEzMDE5NzM4MjMxNTA5ODgnLFxyXG5cdFx0bWFpbnVybDogJ2h0dHA6Ly93d3cuc2Ftc3VuZy5jb20vdHcvY2FtcGFpZ25zLzIwMTZvbHltcGljcy9pbmRleC5odG1sJyxcclxuXHRcdHNoYXJldGl0bGU6ICfnqoHnoLTmpbXpmZDkuYvlt5QgLSAyMDE26YeM57SE5aWn6YGL5Y+w54Gj5Luj6KGo6ZqKIOisneisneS9oOeahOWKquWKmycsXHJcblx0XHRzaGFyZWRlczogJ+eXm+iLpuacg+mBjuWOu++8jOamruiAgOWwh+eVmeS4i+isneisneS9oOeahOWKquWKm++8jDIwMTYg6YeM57SE5aWn6YGL5Y+w54Gj5Luj6KGo6ZqK77yM5L2g5YCR6L6b6Ium5LqG77yBJ1xyXG5cdH07XHJcblxyXG5cdGlmKCQod2luZG93KS53aWR0aCgpPD02NDApIG8ubW9iaWxlID0gdHJ1ZTtcclxuXHRlbHNlIG8ubW9iaWxlID0gZmFsc2U7XHJcblxyXG5cdGlmKG8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKXtcclxuXHRcdHZhciBjYW52YXMsIHN0YWdlLCBleHBvcnRSb290O1xyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcblx0XHRleHBvcnRSb290ID0gbmV3IGxpYi5maXJ3b3JrKCk7XHJcblx0XHRzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShjYW52YXMpO1xyXG5cdFx0c3RhZ2UuYWRkQ2hpbGQoZXhwb3J0Um9vdCk7XHJcblx0XHRzdGFnZS51cGRhdGUoKTtcclxuXHRcdGNyZWF0ZWpzLlRpY2tlci5zZXRGUFMobGliLnByb3BlcnRpZXMuZnBzKTtcclxuXHRcdGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBzdGFnZSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRvLlBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVha19wYWdlX3BnMV9rdicpKTtcclxuXHRcdFx0by5QYXJhbGxheDIgPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2JnJykpO1xyXG5cdFx0fVxyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHRcdEZCLmluaXQoe1xyXG5cdCAgICAgICAgYXBwSWQgICAgICA6IG8uRkJBcHBJZCxcclxuXHQgICAgICAgIGNoYW5uZWxVcmwgOiBvLm1haW51cmwsXHJcblx0ICAgICAgICBzdGF0dXMgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIHhmYm1sICAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgY29va2llICAgICA6IHRydWVcclxuXHQgICAgfSk7XHJcblx0ICAgIGlmKG8ubW9iaWxlKXtcclxuXHQgICAgXHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcblx0XHRcdFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2htb3ZlJyxoZXJvdG91Y2htb3ZlKTtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVggPSBlLnBhZ2VYO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWSA9IGUucGFnZVk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaGVuZCcsZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0JCgnLmhlcm9fYm94JykudW5iaW5kKCd0b3VjaG1vdmUnLGhlcm90b3VjaG1vdmUpO1xyXG5cdFx0XHRcdGNoZWNrSGVybygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZnVuY3Rpb24gaGVyb3RvdWNobW92ZShlKXtcclxuXHRcdFx0XHRlID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcblx0XHRcdFx0by5oZXJvbW91c2VYX2VuZCA9IGUucGFnZVg7XHJcblx0XHRcdFx0by5oZXJvbW91c2VZX2VuZCA9IGUucGFnZVk7XHJcblx0XHRcdH1cclxuXHQgICAgfVxyXG5cdH1cclxuXHJcblx0Ly9BZGRsaXN0ZW5lclxyXG5cdCQoJy5jaGF0YnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwid2hhdHNhcHA6Ly9zZW5kP3RleHQ9XCIrd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdH0pO1xyXG5cdCQoJy5saW5lYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKFwiLy9saW5lLm1lL1IvbXNnL3RleHQvP1wiK28uc2hhcmV0aXRsZStcIu+8jFwiK28uc2hhcmVkZXMrIHdpbmRvdy5sb2NhdGlvbi5ocmVmICtcIuOAgFwiLCdfYmxhbmsnLCBcInRvb2xiYXI9eWVzLCBzY3JvbGxiYXJzPXllcywgcmVzaXphYmxlPXllcywgdG9wPTEwMCwgbGVmdD01MDAsIHdpZHRoPTYwMCwgaGVpZ2h0PTQwMFwiKTtcclxuXHR9KTtcclxuXHQkKHdpbmRvdykub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oZSl7XHJcblx0XHRpZihvLm1vYmlsZSl7XHJcblx0XHRcdGlmKCQoJy5icmVha190b3BfYmFyJykuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYWRkQ2xhc3MoJ29uX2VuZCcpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkrMTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tX2ljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIF90aCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcblx0XHRpZihfdGguaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRfdGgucmVtb3ZlQ2xhc3MoJ29uX2VuZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudShmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0X3RoLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudSh0cnVlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuaGVyb19ib3ggLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYih3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSlcclxuXHQkKCcuYnJlYWtfd3JhcHBlciAucGcyIC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIoby52aWRlb2xpbmspO1xyXG5cdH0pO1xyXG5cdCQoJy52aWRlb2N0cmwnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0by52aWRlby5wbGF5VmlkZW8oKTtcclxuXHRcdCQoJy52aWRlb2N0cmwnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcblx0JCgnLm1lbnVhJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRibHVlX2xpbmUoJCh0aGlzKSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZigkKHRoaXMpLmluZGV4KCk9PTUpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5mYWRlSW4oKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVPdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2Vtb3ZlKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHR9KTtcclxuXHQkKCcubWVudScpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoIW8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKG8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCh3aW5kb3cpLmxvYWQod2luZG93TG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93TG9hZCgpe1xyXG5cdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8qIGluZGV4ICovL1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMCk7XHJcblx0XHRcdGNyZWF0ZVZpZGVvKCdwbGF5ZXInLG8udmlkZW9JRCxmYWxzZSk7XHJcblx0XHRcdHZhciBfcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhfcmFuZG9tKTtcclxuXHRcdFx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMyAucGVyc29uJykuZXEoX3JhbmRvbSkuc2hvdygpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdydWxlJykpe1xyXG5cclxuXHRcdFx0Ly8qIHJ1bGUgKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgzKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKSAkKFwiLnJ1bGVfYm94IC5ydWxlX3dvcmRcIikubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHJcblx0XHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHJcblx0XHRcdC8vKiBoZXJvICovL1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMSk7XHJcblx0XHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdFx0Zm9yKHZhciBpPTA7aTwkKCcuaGVyb19ib3ggLnBlcnNvbicpLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0JCgnLmhlcm9fYm94IC5wZXJzb24nKS5lcShpKS5maW5kKCcudycpLm1DdXN0b21TY3JvbGxiYXIoe3Njcm9sbEluZXJ0aWE6MzAwLHNjcm9sbEVhc2luZzonbGluZWFyJ30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcuaGVyb19ib3gnKS5lYWNoKGhlcm9fYm94ZmMpO1xyXG5cdFx0XHRzaG93bG9hZGluZyhmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRibHVlX2xpbmUoby5ibHVlX2xpbmVpbml0KTtcclxuXHR9XHJcblxyXG5cdC8vRXZlbnRcclxuXHRmdW5jdGlvbiBjaGVja0hlcm8oKXtcclxuXHRcdHZhciBfeSA9IE1hdGguYWJzKCBvLmhlcm9tb3VzZVlfZW5kIC0gby5oZXJvbW91c2VZKTtcclxuXHRcdHZhciBfeCA9by5oZXJvbW91c2VYX2VuZCAtIG8uaGVyb21vdXNlWDtcclxuXHRcdGlmKF95ID49IG8udG91Y2h2YWx1ZSkgcmV0dXJuO1xyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dmFyIG5vd251bSA9JCgnLnBlcnNvbicpLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHRcdFx0aWYoX3g+MCkgbm93bnVtID0gbm93bnVtKjEgKyAxO1xyXG5cdFx0XHRlbHNlIG5vd251bSA9IG5vd251bSoxIC0gMTtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT01O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+NSl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hvd21lbnUoX3Qpe1xyXG5cdFx0aWYoX3Qpe1xyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmNzcygnaGVpZ2h0JywkKHdpbmRvdykuaGVpZ2h0KCkpLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoJy5icmVha190b3BfYmFyJykuYXR0cignc3R5bGUnLCcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gbWVudW1vdXNlT3V0KCl7XHJcblx0XHRvLmJsdWVfbGluZXRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdFx0XHRibHVlX2xpbmUoby5ibHVlX2xpbmVpbml0KTtcclxuXHRcdH0sMTUwMCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhlcm9fYm94ZmMoKXtcclxuXHRcdHZhciBsZWZ0YnRuID0gJCh0aGlzKS5maW5kKCcubGVmdGJ0bicpLFxyXG5cdFx0XHRyaWdodGJ0biA9ICQodGhpcykuZmluZCgnLnJpZ2h0YnRuJyksXHJcblx0XHRcdHBlcnNvbiA9ICQodGhpcykuZmluZCgnLnBlcnNvbicpLFxyXG5cdFx0XHRidCA9ICQodGhpcykuZmluZCgnLnN1YicpLmZpbmQoJy5idCcpLFxyXG5cdFx0XHRfbWF4ID0gNSxcclxuXHRcdFx0bm93bnVtID1wZXJzb24uYXR0cignY2xhc3MnKS5yZXBsYWNlKCdwZXJzb24gcGUnLCcnKS5yZXBsYWNlKCcgb24nLCcnKSoxO1xyXG5cclxuXHRcdHBlcnNvbi5hZGRDbGFzcygnb24nKTtcclxuXHRcdGJ0LmVxKG5vd251bS0xKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdGxlZnRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtLT0xO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdHJpZ2h0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bSs9MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRidC5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0gPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdGZ1bmN0aW9uIGNoYW5nZWhlcm8oKXtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT1fbWF4O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+X21heCl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gc2hhcmVGYihfbGluayl7XHJcbiAgICAgICAgRkIudWkoeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgIG5hbWU6IG8uc2hhcmV0aXRsZSxcclxuICAgICAgICAgICAgY2FwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG8uc2hhcmVkZXMsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJwb3B1cFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBfbGlua1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHRmdW5jdGlvbiBjcmVhdGVWaWRlbyhfbyxfaWQsX2F1dG9wbGF5KXtcclxuICAgICAgICBvLnZpZGVvID0gbmV3IFlULlBsYXllcihfbywge1xyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgdmlkZW9JZDogX2lkLFxyXG4gICAgICAgICAgcGxheWVyVmFyczp7XHJcbiAgICAgICAgICAgICdjb250cm9scyc6MCxcclxuICAgICAgICAgICAgJ2F1dG9wbGF5JzpfYXV0b3BsYXksXHJcbiAgICAgICAgICAgICdlbmFibGVqc2FwaSc6JzAnLFxyXG4gICAgICAgICAgICAnaGQnOicxJyxcclxuICAgICAgICAgICAgJ3JlbCc6JzAnLFxyXG4gICAgICAgICAgICAnc2hvd2luZm8nOicwJyxcclxuICAgICAgICAgICAgJ21vZGVzdGJyYW5kaW5nJzonMScsXHJcbiAgICAgICAgICAgICdjY19sb2FkX3BvbGljeSc6JzEnLFxyXG4gICAgICAgICAgICAnd21vZGUnOid0cmFuc3BhcmVudCcgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBldmVudHM6IHtcclxuXHQgICAgICAgICdvblJlYWR5JzogdmlkZW9SZWFkeVxyXG5cdCAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHZpZGVvUmVhZHkoKXtcclxuICAgIFx0by52aWRlby5zZWVrVG8oMSkucGF1c2VWaWRlbygpO1xyXG4gICAgXHRzaG93bG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gc2hvd2xvYWRpbmcoX3Qpe1xyXG5cdFx0aWYoX3Qpe1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVJbigpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoJy5icmVha19sb2FkaW5nJykuZmFkZU91dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBibHVlX2xpbmUoX28pe1xyXG5cdFx0aWYoby5tb2JpbGUpe1xyXG5cdFx0XHR2YXIgX3RvcCA9IF9vLm9mZnNldCgpLnRvcCAtICQoJy5icmVha190b3BfYmFyJykub2Zmc2V0KCkudG9wICsgNjA7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT1fdG9wKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX3RvcDtcclxuXHRcdFx0dmFyIF93aWR0aDtcclxuXHRcdFx0aWYoX28uaW5kZXgoKT09MCkgX3dpZHRoID0gNzA7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MSkgX3dpZHRoID0gMjI0O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTIpIF93aWR0aCA9IDE4NjtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0zKSBfd2lkdGggPSAxNDY7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09NCkgX3dpZHRoID0gMTQ2O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTUpIF93aWR0aCA9IDI2MDtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeyd0b3AnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X3dpZHRofSxvLmJsdWVfbGluZV9zcGVlZCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoby5ibHVlX2xpbmU9PShfby5vZmZzZXQoKS5sZWZ0IC0gJCgnLmJyZWFrX3RvcF9iYXJpbicpLm9mZnNldCgpLmxlZnQpKXtyZXR1cm59XHJcblx0XHRcdG8uYmx1ZV9saW5lID0gX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHQkKCcuYmx1ZV9saW5lJykuYW5pbWF0ZSh7J2xlZnQnOm8uYmx1ZV9saW5lLCd3aWR0aCc6X28ud2lkdGgoKX0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxufSkvL3JlYWR5IGVuZCAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

$(document).ready(function(){function e(e){e=e.originalEvent.touches[0],c.heromouseX_end=e.pageX,c.heromouseY_end=e.pageY}function o(){if(c.wrp.hasClass("index")){c.blue_lineinit=$(".menua").eq(0),s("player",c.videoID,!1);var e=Math.round(4*Math.random());console.log(e),$(".break_wrapper .pg3 .person").eq(e).show()}else if(c.wrp.hasClass("rule"))c.blue_lineinit=$(".menua").eq(3),c.mobile||$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),u(!1);else if(c.wrp.hasClass("hero")){if(c.blue_lineinit=$(".menua").eq(1),!c.mobile)for(var o=0;o<$(".hero_box .person").length;o++)$(".hero_box .person").eq(o).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(a),u(!1)}d(c.blue_lineinit)}function n(){var e=Math.abs(c.heromouseY_end-c.heromouseY),o=c.heromouseX_end-c.heromouseX;if($(".st").html(e),!(e>=c.touchvalue)){var n=1*$(".person").attr("class").replace("person pe","").replace(" on","");n=o>0?1*n+1:1*n-1,n<1?n=5:n>5&&(n=1),window.location.href="hero"+n+".html"}}function i(e){e?$(".break_top_bar").css("height",$(window).height()).addClass("on"):$(".break_top_bar").attr("style","").removeClass("on")}function t(){c.blue_linetimeout=setTimeout(function(){clearTimeout(c.blue_linetimeout),d(c.blue_lineinit)},1500)}function a(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var o=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),i=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*i.attr("class").replace("person pe","").replace(" on","");i.addClass("on"),t.eq(l-1).addClass("on"),o.click(function(){l-=1,e()}),n.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function l(e){FB.ui({method:"feed",name:c.sharetitle,caption:"",description:c.sharedes,display:"popup",link:e},function(e){})}function s(e,o,n){c.video=new YT.Player(e,{height:"100%",width:"100%",videoId:o,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:r}})}function r(){c.video.seekTo(1).pauseVideo(),u(!1)}function u(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function d(e){if(c.mobile){var o=e.offset().top-$(".break_top_bar").offset().top+60;if(c.blue_line==o)return;c.blue_line=o;var n;0==e.index()?n=70:1==e.index()?n=224:2==e.index()?n=186:3==e.index()?n=146:4==e.index()?n=146:5==e.index()&&(n=260),$(".blue_line").animate({top:c.blue_line,width:n},c.blue_line_speed)}else{if(c.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;c.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:c.blue_line,width:e.width()},c.blue_line_speed)}}var c={wrp:$(".break_wrapper"),touchvalue:25,blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！"};if($(window).width()<=640?c.mobile=!0:c.mobile=!1,c.wrp.hasClass("index")){var b,h,p;b=document.getElementById("canvas"),p=new lib.firwork,h=new createjs.Stage(b),h.addChild(p),h.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",h),c.mobile||(c.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),c.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0})}else c.wrp.hasClass("hero")&&(FB.init({appId:c.FBAppId,channelUrl:c.mainurl,status:!0,xfbml:!0,cookie:!0}),c.mobile&&($(".hero_box").bind("touchstart",function(o){o=o.originalEvent.touches[0],$(".hero_box").bind("touchmove",e),c.heromouseX=o.pageX,c.heromouseY=o.pageY}),$(".hero_box").bind("touchend",function(o){$(".hero_box").unbind("touchmove",e),n()})));$(window).on("touchmove",function(e){c.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").addClass("on_end").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on_end").removeClass("on"),i(!1)):(e.addClass("on"),i(!0))}),$(".hero_box .fbshare").click(function(){l(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){l(c.videolink)}),$(".videoctrl").click(function(){c.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){d($(this)),c.mobile||(5==$(this).index()?c.sub.stop().fadeIn():c.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(c.blue_linetimeout)}),$(".menu").mouseout(function(){t()}),c.sub.mousemove(function(){clearTimeout(c.blue_linetimeout)}),c.sub.mouseover(function(){c.mobile||c.sub.hasClass("on")||c.sub.stop().addClass("on").fadeIn()}),c.sub.mouseout(function(){t(),c.mobile||c.sub.hasClass("on")&&c.sub.stop().removeClass("on").fadeOut()}),$(window).load(o)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhlcm90b3VjaG1vdmUiLCJlIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJvIiwiaGVyb21vdXNlWF9lbmQiLCJwYWdlWCIsImhlcm9tb3VzZVlfZW5kIiwicGFnZVkiLCJ3aW5kb3dMb2FkIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJtb2JpbGUiLCJtQ3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsSW5lcnRpYSIsInNjcm9sbEVhc2luZyIsInNob3dsb2FkaW5nIiwiaSIsImxlbmd0aCIsImZpbmQiLCJlYWNoIiwiaGVyb19ib3hmYyIsImJsdWVfbGluZSIsImNoZWNrSGVybyIsIl95IiwiYWJzIiwiaGVyb21vdXNlWSIsIl94IiwiaGVyb21vdXNlWCIsImh0bWwiLCJ0b3VjaHZhbHVlIiwibm93bnVtIiwiYXR0ciIsInJlcGxhY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzaG93bWVudSIsIl90IiwiY3NzIiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm1lbnVtb3VzZU91dCIsImJsdWVfbGluZXRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hhbmdlaGVybyIsIl9tYXgiLCJsZWZ0YnRuIiwidGhpcyIsInJpZ2h0YnRuIiwicGVyc29uIiwiYnQiLCJjbGljayIsImluZGV4Iiwic2hhcmVGYiIsIl9saW5rIiwiRkIiLCJ1aSIsIm1ldGhvZCIsIm5hbWUiLCJzaGFyZXRpdGxlIiwiY2FwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVkZXMiLCJkaXNwbGF5IiwibGluayIsInJlc3BvbnNlIiwiX28iLCJfaWQiLCJfYXV0b3BsYXkiLCJ2aWRlbyIsIllUIiwiUGxheWVyIiwid2lkdGgiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJlbmFibGVqc2FwaSIsImhkIiwicmVsIiwic2hvd2luZm8iLCJtb2Rlc3RicmFuZGluZyIsImNjX2xvYWRfcG9saWN5Iiwid21vZGUiLCJldmVudHMiLCJvblJlYWR5IiwidmlkZW9SZWFkeSIsInNlZWtUbyIsInBhdXNlVmlkZW8iLCJmYWRlSW4iLCJmYWRlT3V0IiwiX3RvcCIsIm9mZnNldCIsInRvcCIsIl93aWR0aCIsImFuaW1hdGUiLCJibHVlX2xpbmVfc3BlZWQiLCJsZWZ0IiwidmlkZW9saW5rIiwic3ViIiwiRkJBcHBJZCIsIm1haW51cmwiLCJjYW52YXMiLCJzdGFnZSIsImV4cG9ydFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImxpYiIsImZpcndvcmsiLCJjcmVhdGVqcyIsIlN0YWdlIiwiYWRkQ2hpbGQiLCJ1cGRhdGUiLCJUaWNrZXIiLCJzZXRGUFMiLCJwcm9wZXJ0aWVzIiwiZnBzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBhcmFsbGF4IiwiUGFyYWxsYXgyIiwiaW5pdCIsImFwcElkIiwiY2hhbm5lbFVybCIsInN0YXR1cyIsInhmYm1sIiwiY29va2llIiwiYmluZCIsInVuYmluZCIsIm9uIiwiX3RoIiwicGFyZW50IiwicGxheVZpZGVvIiwibW91c2VvdmVyIiwic3RvcCIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0EwRGYsUUFBU0MsR0FBY0MsR0FDdEJBLEVBQUlBLEVBQUVDLGNBQWNDLFFBQVEsR0FDNUJDLEVBQUVDLGVBQWlCSixFQUFFSyxNQUNyQkYsRUFBRUcsZUFBaUJOLEVBQUVPLE1Bb0V4QixRQUFTQyxLQUNSLEdBQUdMLEVBQUVNLElBQUlDLFNBQVMsU0FBUyxDQUcxQlAsRUFBRVEsY0FBY2YsRUFBRSxVQUFVZ0IsR0FBRyxHQUMvQkMsRUFBWSxTQUFTVixFQUFFVyxTQUFR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QUNEbkIsRUFBRTZHLElBQUl0RyxTQUFTLE9BQ2xCUCxFQUFFNkcsSUFBSWlDLE9BQU85RixTQUFTLE1BQU1tRCxXQUkvQm5HLEVBQUU2RyxJQUFJbUMsU0FBUyxXQUNkOUYsSUFDSWxELEVBQUVtQixRQUNGbkIsRUFBRTZHLElBQUl0RyxTQUFTLE9BQ2pCUCxFQUFFNkcsSUFBSWlDLE9BQU83RixZQUFZLE1BQU1tRCxZQUlsQzNHLEVBQUVnRCxRQUFRd0csS0FBSzVJIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdC8vSW5pdFxyXG5cdHZhciBvID0ge1xyXG5cdFx0d3JwOiAkKCcuYnJlYWtfd3JhcHBlcicpLFxyXG5cdFx0dG91Y2h2YWx1ZTogMjUsXHJcblx0XHRibHVlX2xpbmVfc3BlZWQ6IDEwMCxcclxuXHRcdHZpZGVvSUQ6ICdiUmhwa3AxX3FFSScsXHJcblx0XHR2aWRlb2xpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWJSaHBrcDFfcUVJJyxcclxuXHRcdHN1YjogJCgnLmJyZWFrX3RvcF9iYXIgLnN1YicpLFxyXG5cdFx0RkJBcHBJZDogJzEzMDE5NzM4MjMxNTA5ODgnLFxyXG5cdFx0bWFpbnVybDogJ2h0dHA6Ly93d3cuc2Ftc3VuZy5jb20vdHcvY2FtcGFpZ25zLzIwMTZvbHltcGljcy9pbmRleC5odG1sJyxcclxuXHRcdHNoYXJldGl0bGU6ICfnqoHnoLTmpbXpmZDkuYvlt5QgLSAyMDE26YeM57SE5aWn6YGL5Y+w54Gj5Luj6KGo6ZqKIOisneisneS9oOeahOWKquWKmycsXHJcblx0XHRzaGFyZWRlczogJ+eXm+iLpuacg+mBjuWOu++8jOamruiAgOWwh+eVmeS4i+isneisneS9oOeahOWKquWKm++8jDIwMTYg6YeM57SE5aWn6YGL5Y+w54Gj5Luj6KGo6ZqK77yM5L2g5YCR6L6b6Ium5LqG77yBJ1xyXG5cdH07XHJcblxyXG5cdGlmKCQod2luZG93KS53aWR0aCgpPD02NDApIG8ubW9iaWxlID0gdHJ1ZTtcclxuXHRlbHNlIG8ubW9iaWxlID0gZmFsc2U7XHJcblxyXG5cdGlmKG8ud3JwLmhhc0NsYXNzKCdpbmRleCcpKXtcclxuXHRcdHZhciBjYW52YXMsIHN0YWdlLCBleHBvcnRSb290O1xyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcblx0XHRleHBvcnRSb290ID0gbmV3IGxpYi5maXJ3b3JrKCk7XHJcblx0XHRzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShjYW52YXMpO1xyXG5cdFx0c3RhZ2UuYWRkQ2hpbGQoZXhwb3J0Um9vdCk7XHJcblx0XHRzdGFnZS51cGRhdGUoKTtcclxuXHRcdGNyZWF0ZWpzLlRpY2tlci5zZXRGUFMobGliLnByb3BlcnRpZXMuZnBzKTtcclxuXHRcdGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBzdGFnZSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRvLlBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVha19wYWdlX3BnMV9rdicpKTtcclxuXHRcdFx0by5QYXJhbGxheDIgPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2JnJykpO1xyXG5cdFx0fVxyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHRcdEZCLmluaXQoe1xyXG5cdCAgICAgICAgYXBwSWQgICAgICA6IG8uRkJBcHBJZCxcclxuXHQgICAgICAgIGNoYW5uZWxVcmwgOiBvLm1haW51cmwsXHJcblx0ICAgICAgICBzdGF0dXMgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIHhmYm1sICAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgY29va2llICAgICA6IHRydWVcclxuXHQgICAgfSk7XHJcblx0ICAgIGlmKG8ubW9iaWxlKXtcclxuXHQgICAgXHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcblx0XHRcdFx0JCgnLmhlcm9fYm94JykuYmluZCgndG91Y2htb3ZlJyxoZXJvdG91Y2htb3ZlKTtcclxuXHRcdFx0XHRvLmhlcm9tb3VzZVggPSBlLnBhZ2VYO1xyXG5cdFx0XHRcdG8uaGVyb21vdXNlWSA9IGUucGFnZVk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKCcuaGVyb19ib3gnKS5iaW5kKCd0b3VjaGVuZCcsZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0JCgnLmhlcm9fYm94JykudW5iaW5kKCd0b3VjaG1vdmUnLGhlcm90b3VjaG1vdmUpO1xyXG5cdFx0XHRcdGNoZWNrSGVybygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZnVuY3Rpb24gaGVyb3RvdWNobW92ZShlKXtcclxuXHRcdFx0XHRlID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcblx0XHRcdFx0by5oZXJvbW91c2VYX2VuZCA9IGUucGFnZVg7XHJcblx0XHRcdFx0by5oZXJvbW91c2VZX2VuZCA9IGUucGFnZVk7XHJcblx0XHRcdH1cclxuXHQgICAgfVxyXG5cdH1cclxuXHJcblx0Ly9BZGRsaXN0ZW5lclxyXG5cdCQod2luZG93KS5vbigndG91Y2htb3ZlJyxmdW5jdGlvbihlKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0aWYoJCgnLmJyZWFrX3RvcF9iYXInKS5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5hZGRDbGFzcygnb25fZW5kJykuY3NzKCdoZWlnaHQnLCQod2luZG93KS5oZWlnaHQoKSsxMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLm1faWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgX3RoID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuXHRcdGlmKF90aC5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdF90aC5yZW1vdmVDbGFzcygnb25fZW5kJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHRcdHNob3dtZW51KGZhbHNlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRfdGguYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdHNob3dtZW51KHRydWUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5oZXJvX2JveCAuZmJzaGFyZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRzaGFyZUZiKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHR9KVxyXG5cdCQoJy5icmVha193cmFwcGVyIC5wZzIgLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYihvLnZpZGVvbGluayk7XHJcblx0fSk7XHJcblx0JCgnLnZpZGVvY3RybCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRvLnZpZGVvLnBsYXlWaWRlbygpO1xyXG5cdFx0JCgnLnZpZGVvY3RybCcpLmZhZGVPdXQoKTtcclxuXHR9KTtcclxuXHQkKCcubWVudWEnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdGJsdWVfbGluZSgkKHRoaXMpKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKCQodGhpcykuaW5kZXgoKT09NSl7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVJbigpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLm1lbnUnKS5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdG1lbnVtb3VzZU91dCgpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlbW92ZShmdW5jdGlvbigpe1xyXG5cdFx0Y2xlYXJUaW1lb3V0KG8uYmx1ZV9saW5ldGltZW91dCk7XHJcblx0fSk7XHJcblx0by5zdWIubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZighby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5hZGRDbGFzcygnb24nKS5mYWRlSW4oKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0by5zdWIubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdG1lbnVtb3VzZU91dCgpO1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5yZW1vdmVDbGFzcygnb24nKS5mYWRlT3V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dMb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dMb2FkKCl7XHJcblx0XHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyogaW5kZXggKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgwKTtcclxuXHRcdFx0Y3JlYXRlVmlkZW8oJ3BsYXllcicsby52aWRlb0lELGZhbHNlKTtcclxuXHRcdFx0dmFyIF9yYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKF9yYW5kb20pO1xyXG5cdFx0XHQkKCcuYnJlYWtfd3JhcHBlciAucGczIC5wZXJzb24nKS5lcShfcmFuZG9tKS5zaG93KCk7XHJcblxyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblxyXG5cdFx0XHQvLyogcnVsZSAqLy9cclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDMpO1xyXG5cdFx0XHRpZighby5tb2JpbGUpICQoXCIucnVsZV9ib3ggLnJ1bGVfd29yZFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cclxuXHRcdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cclxuXHRcdFx0Ly8qIGhlcm8gKi8vXHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgxKTtcclxuXHRcdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0XHRmb3IodmFyIGk9MDtpPCQoJy5oZXJvX2JveCAucGVyc29uJykubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHQkKCcuaGVyb19ib3ggLnBlcnNvbicpLmVxKGkpLmZpbmQoJy53JykubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmVhY2goaGVyb19ib3hmYyk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGJsdWVfbGluZShvLmJsdWVfbGluZWluaXQpO1xyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIGNoZWNrSGVybygpe1xyXG5cdFx0dmFyIF95ID0gTWF0aC5hYnMoIG8uaGVyb21vdXNlWV9lbmQgLSBvLmhlcm9tb3VzZVkpO1xyXG5cdFx0dmFyIF94ID1vLmhlcm9tb3VzZVhfZW5kIC0gby5oZXJvbW91c2VYO1xyXG5cdFx0JCgnLnN0JykuaHRtbChfeSk7XHJcblx0XHRpZihfeSA+PSBvLnRvdWNodmFsdWUpIHJldHVybjtcclxuXHRcdGVsc2V7XHJcblx0XHRcdHZhciBub3dudW0gPSQoJy5wZXJzb24nKS5hdHRyKCdjbGFzcycpLnJlcGxhY2UoJ3BlcnNvbiBwZScsJycpLnJlcGxhY2UoJyBvbicsJycpKjE7XHJcblx0XHRcdGlmKF94PjApIG5vd251bSA9IG5vd251bSoxICsgMTtcclxuXHRcdFx0ZWxzZSBub3dudW0gPSBub3dudW0qMSAtIDE7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09NTt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPjUpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNob3dtZW51KF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5jc3MoJ2hlaWdodCcsJCh3aW5kb3cpLmhlaWdodCgpKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfdG9wX2JhcicpLmF0dHIoJ3N0eWxlJywnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG1lbnVtb3VzZU91dCgpe1xyXG5cdFx0by5ibHVlX2xpbmV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHRcdFx0Ymx1ZV9saW5lKG8uYmx1ZV9saW5laW5pdCk7XHJcblx0XHR9LDE1MDApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoZXJvX2JveGZjKCl7XHJcblx0XHR2YXIgbGVmdGJ0biA9ICQodGhpcykuZmluZCgnLmxlZnRidG4nKSxcclxuXHRcdFx0cmlnaHRidG4gPSAkKHRoaXMpLmZpbmQoJy5yaWdodGJ0bicpLFxyXG5cdFx0XHRwZXJzb24gPSAkKHRoaXMpLmZpbmQoJy5wZXJzb24nKSxcclxuXHRcdFx0YnQgPSAkKHRoaXMpLmZpbmQoJy5zdWInKS5maW5kKCcuYnQnKSxcclxuXHRcdFx0X21heCA9IDUsXHJcblx0XHRcdG5vd251bSA9cGVyc29uLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHJcblx0XHRwZXJzb24uYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRidC5lcShub3dudW0tMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRsZWZ0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bS09MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRyaWdodGJ0bi5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0rPTE7XHJcblx0XHRcdGNoYW5nZWhlcm8oKTtcclxuXHRcdH0pO1xyXG5cdFx0YnQuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRmdW5jdGlvbiBjaGFuZ2VoZXJvKCl7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09X21heDt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPl9tYXgpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNoYXJlRmIoX2xpbmspe1xyXG4gICAgICAgIEZCLnVpKHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICBuYW1lOiBvLnNoYXJldGl0bGUsXHJcbiAgICAgICAgICAgIGNhcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvLnNoYXJlZGVzLFxyXG4gICAgICAgICAgICBkaXNwbGF5OlwicG9wdXBcIixcclxuICAgICAgICAgICAgbGluazogX2xpbmtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gY3JlYXRlVmlkZW8oX28sX2lkLF9hdXRvcGxheSl7XHJcbiAgICAgICAgby52aWRlbyA9IG5ldyBZVC5QbGF5ZXIoX28sIHtcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIHZpZGVvSWQ6IF9pZCxcclxuICAgICAgICAgIHBsYXllclZhcnM6e1xyXG4gICAgICAgICAgICAnY29udHJvbHMnOjAsXHJcbiAgICAgICAgICAgICdhdXRvcGxheSc6X2F1dG9wbGF5LFxyXG4gICAgICAgICAgICAnZW5hYmxlanNhcGknOicwJyxcclxuICAgICAgICAgICAgJ2hkJzonMScsXHJcbiAgICAgICAgICAgICdyZWwnOicwJyxcclxuICAgICAgICAgICAgJ3Nob3dpbmZvJzonMCcsXHJcbiAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6JzEnLFxyXG4gICAgICAgICAgICAnY2NfbG9hZF9wb2xpY3knOicxJyxcclxuICAgICAgICAgICAgJ3dtb2RlJzondHJhbnNwYXJlbnQnICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXZlbnRzOiB7XHJcblx0ICAgICAgICAnb25SZWFkeSc6IHZpZGVvUmVhZHlcclxuXHQgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2aWRlb1JlYWR5KCl7XHJcbiAgICBcdG8udmlkZW8uc2Vla1RvKDEpLnBhdXNlVmlkZW8oKTtcclxuICAgIFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIHNob3dsb2FkaW5nKF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlSW4oKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYmx1ZV9saW5lKF9vKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0dmFyIF90b3AgPSBfby5vZmZzZXQoKS50b3AgLSAkKCcuYnJlYWtfdG9wX2JhcicpLm9mZnNldCgpLnRvcCArIDYwO1xyXG5cdFx0XHRpZihvLmJsdWVfbGluZT09X3RvcCl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF90b3A7XHJcblx0XHRcdHZhciBfd2lkdGg7XHJcblx0XHRcdGlmKF9vLmluZGV4KCk9PTApIF93aWR0aCA9IDcwO1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTEpIF93aWR0aCA9IDIyNDtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0yKSBfd2lkdGggPSAxODY7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MykgX3dpZHRoID0gMTQ2O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTQpIF93aWR0aCA9IDE0NjtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT01KSBfd2lkdGggPSAyNjA7XHJcblx0XHRcdCQoJy5ibHVlX2xpbmUnKS5hbmltYXRlKHsndG9wJzpvLmJsdWVfbGluZSwnd2lkdGgnOl93aWR0aH0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT0oX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0KSl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF9vLm9mZnNldCgpLmxlZnQgLSAkKCcuYnJlYWtfdG9wX2JhcmluJykub2Zmc2V0KCkubGVmdDtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeydsZWZ0JzpvLmJsdWVfbGluZSwnd2lkdGgnOl9vLndpZHRoKCl9LG8uYmx1ZV9saW5lX3NwZWVkKTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcbn0pLy9yZWFkeSBlbmQgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

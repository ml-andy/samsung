$(document).ready(function(){function e(){if(l.wrp.hasClass("index")){t($(".menua").eq(0)),o("player",l.videoID,!1);var e=Math.round(4*Math.random());console.log(e),$(".break_wrapper .pg3 .person").eq(e).show()}else if(l.wrp.hasClass("rule"))t($(".menua").eq(3)),$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),s(!1);else if(l.wrp.hasClass("hero")){t($(".menua").eq(1));for(var n=0;n<$(".hero_box .person").length;n++)$(".hero_box .person").eq(n).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(a),s(!1)}}function a(){function e(){t<1?t=s:t>s&&(t=1),window.location.href="hero"+t+".html"}var a=$(this).find(".leftbtn"),n=$(this).find(".rightbtn"),o=$(this).find(".person"),i=$(this).find(".sub").find(".bt"),s=5,t=1*o.attr("class").replace("person pe","").replace(" on","");o.addClass("on"),i.eq(t-1).addClass("on"),a.click(function(){t-=1,e()}),n.click(function(){t+=1,e()}),i.click(function(){t=$(this).index()+1,e()})}function n(e){FB.ui({method:"feed",name:l.sharetitle,caption:"",description:l.sharedes,display:"popup",link:e},function(e){})}function o(e,a,n){l.video=new YT.Player(e,{height:"100%",width:"100%",videoId:a,playerVars:{controls:0,autoplay:n,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:i}})}function i(){l.video.seekTo(1).pauseVideo(),s(!1)}function s(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function t(e){l.blue_line!=e.offset().left-$(".break_top_barin").offset().left&&(l.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:l.blue_line,width:e.width()},l.blue_line_speed))}var l={wrp:$(".break_wrapper"),blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"Samsung 突破極限之巔",sharedes:"Samsung 突破極限之巔"};if(l.wrp.hasClass("index")){var r,d,u;r=document.getElementById("canvas"),u=new lib.firwork,d=new createjs.Stage(r),d.addChild(u),d.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",d),l.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),l.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg")),FB.init({appId:l.FBAppId,channelUrl:l.mainurl,status:!0,xfbml:!0,cookie:!0})}else l.wrp.hasClass("hero")&&FB.init({appId:l.FBAppId,channelUrl:l.mainurl,status:!0,xfbml:!0,cookie:!0});$(".hero_box .fbshare").click(function(){n(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){n(l.videolink)}),$(".videoctrl").click(function(){l.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){t($(this)),5==$(this).index()?l.sub.stop().fadeIn():l.sub.stop().fadeOut()}),l.sub.mouseover(function(){l.sub.hasClass("on")||l.sub.stop().addClass("on").fadeIn()}),l.sub.mouseout(function(){l.sub.hasClass("on")&&l.sub.stop().removeClass("on").fadeOut()}),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd0xvYWQiLCJvIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmUiLCJlcSIsImNyZWF0ZVZpZGVvIiwidmlkZW9JRCIsIl9yYW5kb20iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwic2hvdyIsIm1DdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxJbmVydGlhIiwic2Nyb2xsRWFzaW5nIiwic2hvd2xvYWRpbmciLCJpIiwibGVuZ3RoIiwiZmluZCIsImVhY2giLCJoZXJvX2JveGZjIiwiY2hhbmdlaGVybyIsIm5vd251bSIsIl9tYXgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsZWZ0YnRuIiwidGhpcyIsInJpZ2h0YnRuIiwicGVyc29uIiwiYnQiLCJhdHRyIiwicmVwbGFjZSIsImFkZENsYXNzIiwiY2xpY2siLCJpbmRleCIsInNoYXJlRmIiLCJfbGluayIsIkZCIiwidWkiLCJtZXRob2QiLCJuYW1lIiwic2hhcmV0aXRsZSIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlZGVzIiwiZGlzcGxheSIsImxpbmsiLCJyZXNwb25zZSIsIl9vIiwiX2lkIiwiX2F1dG9wbGF5IiwidmlkZW8iLCJZVCIsIlBsYXllciIsImhlaWdodCIsIndpZHRoIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJjb250cm9scyIsImF1dG9wbGF5IiwiZW5hYmxlanNhcGkiLCJoZCIsInJlbCIsInNob3dpbmZvIiwibW9kZXN0YnJhbmRpbmciLCJjY19sb2FkX3BvbGljeSIsIndtb2RlIiwiZXZlbnRzIiwib25SZWFkeSIsInZpZGVvUmVhZHkiLCJzZWVrVG8iLCJwYXVzZVZpZGVvIiwiX3QiLCJmYWRlSW4iLCJmYWRlT3V0Iiwib2Zmc2V0IiwibGVmdCIsImFuaW1hdGUiLCJibHVlX2xpbmVfc3BlZWQiLCJ2aWRlb2xpbmsiLCJzdWIiLCJGQkFwcElkIiwibWFpbnVybCIsImNhbnZhcyIsInN0YWdlIiwiZXhwb3J0Um9vdCIsImdldEVsZW1lbnRCeUlkIiwibGliIiwiZmlyd29yayIsImNyZWF0ZWpzIiwiU3RhZ2UiLCJhZGRDaGlsZCIsInVwZGF0ZSIsIlRpY2tlciIsInNldEZQUyIsInByb3BlcnRpZXMiLCJmcHMiLCJhZGRFdmVudExpc3RlbmVyIiwiUGFyYWxsYXgiLCJQYXJhbGxheDIiLCJpbml0IiwiYXBwSWQiLCJjaGFubmVsVXJsIiwic3RhdHVzIiwieGZibWwiLCJjb29raWUiLCJwbGF5VmlkZW8iLCJtb3VzZW92ZXIiLCJzdG9wIiwibW91c2VvdXQiLCJyZW1vdmVDbGFzcyIsImxvYWQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBeUVqQixRQUFTQyxLQUNSLEdBQUdDLEVBQUVDLElBQUlDLFNBQVMsU0FBUyxDQUMxQkMsRUFBVVAsRUFBRSxVQUFVUSxHQUFHLElBQ3pCQyxFQUFZLFNBQVNMLEVBQUVNLFNBQVEsRUFDL0IsSUFBSUMsR0FBVUMsS0FBS0MsTUFBb0IsRUFBZEQsS0FBS0UsU0FDOUJDLFNBQVFDLElBQUlMLEdBQ1pYLEVBQUUsK0JBQStCUSxHQUFHRyxHQUFTTSxXQUN4QyxJQUFHYixFQUFFQyxJQUFJQyxTQUFTLFFBQ3ZCQyxFQUFVUCxFQUFFLFVBQVVRLEdBQUcsSUFDekJSLEVBQUUsd0JBQXdCa0Isa0JBQWtCQyxjQUFjLElBQUlDLGFBQWEsV0FDM0VDLEdBQVksT0FDUCxJQUFHakIsRUFBRUMsSUFBSUMsU0FBUyxRQUFRLENBQy9CQyxFQUFVUCxFQUFFLFVBQVVRLEdBQUcsR0FDekIsS0FBSSxHQUFJYyxHQUFFLEVBQUVBLEVBQUV0QixFQUFFLHFCQUFxQnVCLE9BQU9ELElBQzNDdEIsRUFBRSxxQkFBcUJRLEdBQUdjLEdBQUdFLEtBQUssTUFBTU4sa0JBQWtCQyxjQUFjLElBQUlDLGFBQWEsVUFFMUZwQixHQUFFLGFBQWF5QixLQUFLQyxHQUNwQkwsR0FBWSxJQUtkLFFBQVNLLEtBc0JSLFFB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RixRQUNmcUIsV0FBYTFHLEVBQUVzRixRQUNmcUIsUUFBYSxFQUNiQyxPQUFhLEVBQ2JDLFFBQWEsR0FLckJqSCxHQUFFLHNCQUFzQnlDLE1BQU0sV0FDN0JFLEVBQVFiLE9BQU9DLFNBQVNDLFFBRXpCaEMsRUFBRSxnQ0FBZ0N5QyxNQUFNLFdBQ3ZDRSxFQUFRdkMsRUFBRW1GLGFBRVh2RixFQUFFLGNBQWN5QyxNQUFNLFdBQ3JCckMsRUFBRXVELE1BQU11RCxZQUNSbEgsRUFBRSxjQUFja0YsWUFFakJsRixFQUFFLFVBQVVtSCxVQUFVLFdBQ3JCNUcsRUFBVVAsRUFBRWtDLE9BQ1EsR0FBakJsQyxFQUFFa0MsTUFBTVEsUUFDVnRDLEVBQUVvRixJQUFJNEIsT0FBT25DLFNBRWI3RSxFQUFFb0YsSUFBSTRCLE9BQU9sQyxZQUdmOUUsRUFBRW9GLElBQUkyQixVQUFVLFdBQ1gvRyxFQUFFb0YsSUFBSWxGLFNBQVMsT0FDbEJGLEVBQUVvRixJQUFJNEIsT0FBTzVFLFNBQVMsTUFBTXlDLFdBRzlCN0UsRUFBRW9GLElBQUk2QixTQUFTLFdBQ1hqSCxFQUFFb0YsSUFBSWxGLFNBQVMsT0FDakJGLEVBQUVvRixJQUFJNEIsT0FBT0UsWUFBWSxNQUFNcEMsWUFHakNsRixFQUFFOEIsUUFBUXlGLEtBQUtwSCIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvL0luaXRcclxuXHR2YXIgbyA9IHtcclxuXHRcdHdycDogJCgnLmJyZWFrX3dyYXBwZXInKSxcclxuXHRcdGJsdWVfbGluZV9zcGVlZDogMTAwLFxyXG5cdFx0dmlkZW9JRDogJ2JSaHBrcDFfcUVJJyxcclxuXHRcdHZpZGVvbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YlJocGtwMV9xRUknLFxyXG5cdFx0c3ViOiAkKCcuYnJlYWtfdG9wX2JhciAuc3ViJyksXHJcblx0XHRGQkFwcElkOiAnMTMwMTk3MzgyMzE1MDk4OCcsXHJcblx0XHRtYWludXJsOiAnaHR0cDovL3d3dy5zYW1zdW5nLmNvbS90dy9jYW1wYWlnbnMvMjAxNm9seW1waWNzL2luZGV4Lmh0bWwnLFxyXG5cdFx0c2hhcmV0aXRsZTogJ1NhbXN1bmcg56qB56C05qW16ZmQ5LmL5beUJyxcclxuXHRcdHNoYXJlZGVzOiAnU2Ftc3VuZyDnqoHnoLTmpbXpmZDkuYvlt5QnXHJcblx0fTtcclxuXHJcblx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0dmFyIGNhbnZhcywgc3RhZ2UsIGV4cG9ydFJvb3Q7XHJcblx0XHRjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuXHRcdGV4cG9ydFJvb3QgPSBuZXcgbGliLmZpcndvcmsoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0by5QYXJhbGxheDIgPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2JnJykpO1xyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHRcdEZCLmluaXQoe1xyXG5cdCAgICAgICAgYXBwSWQgICAgICA6IG8uRkJBcHBJZCxcclxuXHQgICAgICAgIGNoYW5uZWxVcmwgOiBvLm1haW51cmwsXHJcblx0ICAgICAgICBzdGF0dXMgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIHhmYm1sICAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgY29va2llICAgICA6IHRydWVcclxuXHQgICAgfSk7XHJcblx0fVxyXG5cclxuXHQvL0FkZGxpc3RlbmVyXHJcblx0JCgnLmhlcm9fYm94IC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdH0pXHJcblx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMiAuZmJzaGFyZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRzaGFyZUZiKG8udmlkZW9saW5rKTtcclxuXHR9KTtcclxuXHQkKCcudmlkZW9jdHJsJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdG8udmlkZW8ucGxheVZpZGVvKCk7XHJcblx0XHQkKCcudmlkZW9jdHJsJykuZmFkZU91dCgpO1xyXG5cdH0pO1xyXG5cdCQoJy5tZW51YScpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0Ymx1ZV9saW5lKCQodGhpcykpO1xyXG5cdFx0aWYoJCh0aGlzKS5pbmRleCgpPT01KXtcclxuXHRcdFx0by5zdWIuc3RvcCgpLmZhZGVJbigpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG8uc3ViLnN0b3AoKS5mYWRlT3V0KCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0by5zdWIubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRpZighby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW91dChmdW5jdGlvbigpe1xyXG5cdFx0aWYoby5zdWIuaGFzQ2xhc3MoJ29uJykpe1xyXG5cdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuZmFkZU91dCgpO1xyXG5cdFx0fVx0XHRcclxuXHR9KTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dMb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dMb2FkKCl7XHJcblx0XHRpZihvLndycC5oYXNDbGFzcygnaW5kZXgnKSl7XHJcblx0XHRcdGJsdWVfbGluZSgkKCcubWVudWEnKS5lcSgwKSk7XHJcblx0XHRcdGNyZWF0ZVZpZGVvKCdwbGF5ZXInLG8udmlkZW9JRCxmYWxzZSk7XHJcblx0XHRcdHZhciBfcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhfcmFuZG9tKTtcclxuXHRcdFx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMyAucGVyc29uJykuZXEoX3JhbmRvbSkuc2hvdygpO1xyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblx0XHRcdGJsdWVfbGluZSgkKCcubWVudWEnKS5lcSgzKSk7XHJcblx0XHRcdCQoXCIucnVsZV9ib3ggLnJ1bGVfd29yZFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ2hlcm8nKSl7XHJcblx0XHRcdGJsdWVfbGluZSgkKCcubWVudWEnKS5lcSgxKSk7XHJcblx0XHRcdGZvcih2YXIgaT0wO2k8JCgnLmhlcm9fYm94IC5wZXJzb24nKS5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHQkKCcuaGVyb19ib3ggLnBlcnNvbicpLmVxKGkpLmZpbmQoJy53JykubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnLmhlcm9fYm94JykuZWFjaChoZXJvX2JveGZjKTtcclxuXHRcdFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIGhlcm9fYm94ZmMoKXtcclxuXHRcdHZhciBsZWZ0YnRuID0gJCh0aGlzKS5maW5kKCcubGVmdGJ0bicpLFxyXG5cdFx0XHRyaWdodGJ0biA9ICQodGhpcykuZmluZCgnLnJpZ2h0YnRuJyksXHJcblx0XHRcdHBlcnNvbiA9ICQodGhpcykuZmluZCgnLnBlcnNvbicpLFxyXG5cdFx0XHRidCA9ICQodGhpcykuZmluZCgnLnN1YicpLmZpbmQoJy5idCcpLFxyXG5cdFx0XHRfbWF4ID0gNSxcclxuXHRcdFx0bm93bnVtID1wZXJzb24uYXR0cignY2xhc3MnKS5yZXBsYWNlKCdwZXJzb24gcGUnLCcnKS5yZXBsYWNlKCcgb24nLCcnKSoxO1xyXG5cclxuXHRcdHBlcnNvbi5hZGRDbGFzcygnb24nKTtcclxuXHRcdGJ0LmVxKG5vd251bS0xKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdGxlZnRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtLT0xO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdHJpZ2h0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bSs9MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRidC5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0gPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG5cdFx0XHRjaGFuZ2VoZXJvKCk7XHJcblx0XHR9KTtcclxuXHRcdGZ1bmN0aW9uIGNoYW5nZWhlcm8oKXtcclxuXHRcdFx0aWYobm93bnVtPDEpe25vd251bT1fbWF4O31cclxuXHRcdFx0ZWxzZSBpZihub3dudW0+X21heCl7bm93bnVtPTE7fVxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdoZXJvJytub3dudW0rJy5odG1sJztcclxuXHJcblx0XHRcdC8vIGJ0LnJlbW92ZUNsYXNzKCdvbicpLmVxKG5vd251bSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdC8vIHBlcnNvbi5lcShub3dudW0pLnNob3coKTtcclxuXHRcdFx0Ly8gcGVyc29uLmVxKHByZW51bSkuZmFkZU91dCgzMDAsZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly8gXHRwcmVudW0gPSBub3dudW07XHJcblx0XHRcdC8vIFx0cGVyc29uLmVxKG5vd251bSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdC8vIH0pLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBzaGFyZUZiKF9saW5rKXtcclxuICAgICAgICBGQi51aSh7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICAgbmFtZTogby5zaGFyZXRpdGxlLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogby5zaGFyZWRlcyxcclxuICAgICAgICAgICAgZGlzcGxheTpcInBvcHVwXCIsXHJcbiAgICAgICAgICAgIGxpbms6IF9saW5rXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVZpZGVvKF9vLF9pZCxfYXV0b3BsYXkpe1xyXG4gICAgICAgIG8udmlkZW8gPSBuZXcgWVQuUGxheWVyKF9vLCB7XHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICB2aWRlb0lkOiBfaWQsXHJcbiAgICAgICAgICBwbGF5ZXJWYXJzOntcclxuICAgICAgICAgICAgJ2NvbnRyb2xzJzowLFxyXG4gICAgICAgICAgICAnYXV0b3BsYXknOl9hdXRvcGxheSxcclxuICAgICAgICAgICAgJ2VuYWJsZWpzYXBpJzonMCcsXHJcbiAgICAgICAgICAgICdoZCc6JzEnLFxyXG4gICAgICAgICAgICAncmVsJzonMCcsXHJcbiAgICAgICAgICAgICdzaG93aW5mbyc6JzAnLFxyXG4gICAgICAgICAgICAnbW9kZXN0YnJhbmRpbmcnOicxJyxcclxuICAgICAgICAgICAgJ2NjX2xvYWRfcG9saWN5JzonMScsXHJcbiAgICAgICAgICAgICd3bW9kZSc6J3RyYW5zcGFyZW50JyAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGV2ZW50czoge1xyXG5cdCAgICAgICAgJ29uUmVhZHknOiB2aWRlb1JlYWR5XHJcblx0ICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmlkZW9SZWFkeSgpe1xyXG4gICAgXHRvLnZpZGVvLnNlZWtUbygxKS5wYXVzZVZpZGVvKCk7XHJcbiAgICBcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHRmdW5jdGlvbiBzaG93bG9hZGluZyhfdCl7XHJcblx0XHRpZihfdCl7XHJcblx0XHRcdCQoJy5icmVha19sb2FkaW5nJykuZmFkZUluKCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlT3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGJsdWVfbGluZShfbyl7XHJcblx0XHRpZihvLmJsdWVfbGluZT09KF9vLm9mZnNldCgpLmxlZnQgLSAkKCcuYnJlYWtfdG9wX2JhcmluJykub2Zmc2V0KCkubGVmdCkpe3JldHVybn1cclxuXHRcdG8uYmx1ZV9saW5lID0gX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeydsZWZ0JzpvLmJsdWVfbGluZSwnd2lkdGgnOl9vLndpZHRoKCl9LG8uYmx1ZV9saW5lX3NwZWVkKTtcclxuXHR9XHJcblxyXG4gIFxyXG59KS8vcmVhZHkgZW5kICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

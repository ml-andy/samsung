$(document).ready(function(){function e(){if(u.wrp.hasClass("index")){u.blue_lineinit=$(".menua").eq(0),a("player",u.videoID,!1);var e=Math.round(4*Math.random());console.log(e),$(".break_wrapper .pg3 .person").eq(e).show()}else if(u.wrp.hasClass("rule"))u.blue_lineinit=$(".menua").eq(3),$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),s(!1);else if(u.wrp.hasClass("hero")){u.blue_lineinit=$(".menua").eq(1);for(var n=0;n<$(".hero_box .person").length;n++)$(".hero_box .person").eq(n).find(".w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});$(".hero_box").each(o),s(!1)}r(u.blue_lineinit)}function n(e){e?$(".break_top_bar").css("height",$(window).height()).addClass("on"):$(".break_top_bar").attr("style","").removeClass("on")}function i(){u.blue_linetimeout=setTimeout(function(){clearTimeout(u.blue_linetimeout),r(u.blue_lineinit)},1500)}function o(){function e(){l<1?l=a:l>a&&(l=1),window.location.href="hero"+l+".html"}var n=$(this).find(".leftbtn"),i=$(this).find(".rightbtn"),o=$(this).find(".person"),t=$(this).find(".sub").find(".bt"),a=5,l=1*o.attr("class").replace("person pe","").replace(" on","");o.addClass("on"),t.eq(l-1).addClass("on"),n.click(function(){l-=1,e()}),i.click(function(){l+=1,e()}),t.click(function(){l=$(this).index()+1,e()})}function t(e){FB.ui({method:"feed",name:u.sharetitle,caption:"",description:u.sharedes,display:"popup",link:e},function(e){})}function a(e,n,i){u.video=new YT.Player(e,{height:"100%",width:"100%",videoId:n,playerVars:{controls:0,autoplay:i,enablejsapi:"0",hd:"1",rel:"0",showinfo:"0",modestbranding:"1",cc_load_policy:"1",wmode:"transparent"},events:{onReady:l}})}function l(){u.video.seekTo(1).pauseVideo(),s(!1)}function s(e){e?$(".break_loading").fadeIn():$(".break_loading").fadeOut()}function r(e){if(u.mobile){var n=e.offset().top-$(".break_top_bar").offset().top+60;if(u.blue_line==n)return;u.blue_line=n;var i;0==e.index()?i=70:1==e.index()?i=224:2==e.index()?i=186:3==e.index()?i=146:4==e.index()?i=146:5==e.index()&&(i=260),$(".blue_line").animate({top:u.blue_line,width:i},u.blue_line_speed)}else{if(u.blue_line==e.offset().left-$(".break_top_barin").offset().left)return;u.blue_line=e.offset().left-$(".break_top_barin").offset().left,$(".blue_line").animate({left:u.blue_line,width:e.width()},u.blue_line_speed)}}var u={wrp:$(".break_wrapper"),blue_line_speed:100,videoID:"bRhpkp1_qEI",videolink:"https://www.youtube.com/watch?v=bRhpkp1_qEI",sub:$(".break_top_bar .sub"),FBAppId:"1301973823150988",mainurl:"http://www.samsung.com/tw/campaigns/2016olympics/index.html",sharetitle:"突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力",sharedes:"痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！"};if($(window).width()<=640?u.mobile=!0:u.mobile=!1,u.wrp.hasClass("index")){var d,c,b;d=document.getElementById("canvas"),b=new lib.firwork,c=new createjs.Stage(d),c.addChild(b),c.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",c),u.mobile||(u.Parallax=new Parallax(document.getElementById("break_page_pg1_kv")),u.Parallax2=new Parallax(document.getElementById("break_page_pg1_bg"))),FB.init({appId:u.FBAppId,channelUrl:u.mainurl,status:!0,xfbml:!0,cookie:!0})}else u.wrp.hasClass("hero")&&FB.init({appId:u.FBAppId,channelUrl:u.mainurl,status:!0,xfbml:!0,cookie:!0});$(window).on("touchmove",function(){u.mobile&&$(".break_top_bar").hasClass("on")&&$(".break_top_bar").css("height",$(window).height()+100)}),$(".m_icon").click(function(){var e=$(this).parent().parent();e.hasClass("on")?(e.removeClass("on"),n(!1)):(e.addClass("on"),n(!0))}),$(".hero_box .fbshare").click(function(){t(window.location.href)}),$(".break_wrapper .pg2 .fbshare").click(function(){t(u.videolink)}),$(".videoctrl").click(function(){u.video.playVideo(),$(".videoctrl").fadeOut()}),$(".menua").mouseover(function(){r($(this)),u.mobile||(5==$(this).index()?u.sub.stop().fadeIn():u.sub.stop().fadeOut())}),$(".menu").mousemove(function(){clearTimeout(u.blue_linetimeout)}),$(".menu").mouseout(function(){i()}),u.sub.mousemove(function(){clearTimeout(u.blue_linetimeout)}),u.sub.mouseover(function(){u.mobile||u.sub.hasClass("on")||u.sub.stop().addClass("on").fadeIn()}),u.sub.mouseout(function(){i(),u.mobile||u.sub.hasClass("on")&&u.sub.stop().removeClass("on").fadeOut()}),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd0xvYWQiLCJvIiwid3JwIiwiaGFzQ2xhc3MiLCJibHVlX2xpbmVpbml0IiwiZXEiLCJjcmVhdGVWaWRlbyIsInZpZGVvSUQiLCJfcmFuZG9tIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJtQ3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsSW5lcnRpYSIsInNjcm9sbEVhc2luZyIsInNob3dsb2FkaW5nIiwiaSIsImxlbmd0aCIsImZpbmQiLCJlYWNoIiwiaGVyb19ib3hmYyIsImJsdWVfbGluZSIsInNob3dtZW51IiwiX3QiLCJjc3MiLCJ3aW5kb3ciLCJoZWlnaHQiLCJhZGRDbGFzcyIsImF0dHIiLCJyZW1vdmVDbGFzcyIsIm1lbnVtb3VzZU91dCIsImJsdWVfbGluZXRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hhbmdlaGVybyIsIm5vd251bSIsIl9tYXgiLCJsb2NhdGlvbiIsImhyZWYiLCJsZWZ0YnRuIiwidGhpcyIsInJpZ2h0YnRuIiwicGVyc29uIiwiYnQiLCJyZXBsYWNlIiwiY2xpY2siLCJpbmRleCIsInNoYXJlRmIiLCJfbGluayIsIkZCIiwidWkiLCJtZXRob2QiLCJuYW1lIiwic2hhcmV0aXRsZSIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlZGVzIiwiZGlzcGxheSIsImxpbmsiLCJyZXNwb25zZSIsIl9vIiwiX2lkIiwiX2F1dG9wbGF5IiwidmlkZW8iLCJZVCIsIlBsYXllciIsIndpZHRoIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJjb250cm9scyIsImF1dG9wbGF5IiwiZW5hYmxlanNhcGkiLCJoZCIsInJlbCIsInNob3dpbmZvIiwibW9kZXN0YnJhbmRpbmciLCJjY19sb2FkX3BvbGljeSIsIndtb2RlIiwiZXZlbnRzIiwib25SZWFkeSIsInZpZGVvUmVhZHkiLCJzZWVrVG8iLCJwYXVzZVZpZGVvIiwiZmFkZUluIiwiZmFkZU91dCIsIm1vYmlsZSIsIl90b3AiLCJvZmZzZXQiLCJ0b3AiLCJfd2lkdGgiLCJhbmltYXRlIiwiYmx1ZV9saW5lX3NwZWVkIiwibGVmdCIsInZpZGVvbGluayIsInN1YiIsIkZCQXBwSWQiLCJtYWludXJsIiwiY2FudmFzIiwic3RhZ2UiLCJleHBvcnRSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaWIiLCJmaXJ3b3JrIiwiY3JlYXRlanMiLCJTdGFnZSIsImFkZENoaWxkIiwidXBkYXRlIiwiVGlja2VyIiwic2V0RlBTIiwicHJvcGVydGllcyIsImZwcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJQYXJhbGxheCIsIlBhcmFsbGF4MiIsImluaXQiLCJhcHBJZCIsImNoYW5uZWxVcmwiLCJzdGF0dXMiLCJ4ZmJtbCIsImNvb2tpZSIsIm9uIiwiX3RoIiwicGFyZW50IiwicGxheVZpZGVvIiwibW91c2VvdmVyIiwic3RvcCIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0ErR2pCLFFBQVNDLEtBQ1IsR0FBR0MsRUFBRUMsSUFBSUMsU0FBUyxTQUFTLENBQzFCRixFQUFFRyxjQUFjUCxFQUFFLFVBQVVRLEdBQUcsR0FDL0JDLEVBQVksU0FBU0wsRUFBRU0sU0FBUSxFQUMvQixJQUFJQyxHQUFVQyxLQUFLQyxNQUFvQixFQUFkRCxLQUFLRSxTQUM5QkMsU0FBUUMsSUFBSUwsR0FDWlgsRUFBRSwrQkFBK0JRLEdBQUdHLEdBQVNNLFdBQ3hDLElBQUdiLEVBQUVDLElBQUlDLFNBQVMsUUFDdkJGLEVBQUVHLGNBQWNQLEVBQUUsVUFBVVEsR0FBRyxHQUMvQlIsRUFBRSx3QkFBd0JrQixrQkFBa0JDLGNBQWMsSUFBSUMsYUFBYSxXQUMzRUMsR0FBWSxPQUNQLElBQUdqQixFQUFFQyxJQUFJQyxTQUFTLFFBQVEsQ0FDL0JGLEVBQUVHLGNBQWNQLEVBQUUsVUFBVVEsR0FBRyxFQUMv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SUFBSWlDLFNBQVMsV0FDZGpHLElBQ0loQyxFQUFFdUYsUUFDRnZGLEVBQUVnRyxJQUFJOUYsU0FBUyxPQUNqQkYsRUFBRWdHLElBQUkrQixPQUFPaEcsWUFBWSxNQUFNdUQsWUFJbEMxRixFQUFFK0IsUUFBUXVHLEtBQUtuSSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvL0luaXRcclxuXHR2YXIgbyA9IHtcclxuXHRcdHdycDogJCgnLmJyZWFrX3dyYXBwZXInKSxcclxuXHRcdGJsdWVfbGluZV9zcGVlZDogMTAwLFxyXG5cdFx0dmlkZW9JRDogJ2JSaHBrcDFfcUVJJyxcclxuXHRcdHZpZGVvbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YlJocGtwMV9xRUknLFxyXG5cdFx0c3ViOiAkKCcuYnJlYWtfdG9wX2JhciAuc3ViJyksXHJcblx0XHRGQkFwcElkOiAnMTMwMTk3MzgyMzE1MDk4OCcsXHJcblx0XHRtYWludXJsOiAnaHR0cDovL3d3dy5zYW1zdW5nLmNvbS90dy9jYW1wYWlnbnMvMjAxNm9seW1waWNzL2luZGV4Lmh0bWwnLFxyXG5cdFx0c2hhcmV0aXRsZTogJ+eqgeegtOaltemZkOS5i+W3lCAtIDIwMTbph4zntITlpafpgYvlj7DngaPku6Pooajpmoog6Kyd6Kyd5L2g55qE5Yqq5YqbJyxcclxuXHRcdHNoYXJlZGVzOiAn55eb6Ium5pyD6YGO5Y6777yM5qau6ICA5bCH55WZ5LiL6Kyd6Kyd5L2g55qE5Yqq5Yqb77yMMjAxNiDph4zntITlpafpgYvlj7DngaPku6PooajpmorvvIzkvaDlgJHovpvoi6bkuobvvIEnXHJcblx0fTtcclxuXHJcblx0aWYoJCh3aW5kb3cpLndpZHRoKCk8PTY0MCkgby5tb2JpbGUgPSB0cnVlO1xyXG5cdGVsc2Ugby5tb2JpbGUgPSBmYWxzZTtcclxuXHJcblx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0dmFyIGNhbnZhcywgc3RhZ2UsIGV4cG9ydFJvb3Q7XHJcblx0XHRjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuXHRcdGV4cG9ydFJvb3QgPSBuZXcgbGliLmZpcndvcmsoKTtcclxuXHRcdHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XHJcblx0XHRzdGFnZS5hZGRDaGlsZChleHBvcnRSb290KTtcclxuXHRcdHN0YWdlLnVwZGF0ZSgpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyhsaWIucHJvcGVydGllcy5mcHMpO1xyXG5cdFx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHN0YWdlKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdG8uUGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrX3BhZ2VfcGcxX2t2JykpO1xyXG5cdFx0XHRvLlBhcmFsbGF4MiA9IG5ldyBQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtfcGFnZV9wZzFfYmcnKSk7XHJcblx0XHR9XHJcblx0XHRGQi5pbml0KHtcclxuXHQgICAgICAgIGFwcElkICAgICAgOiBvLkZCQXBwSWQsXHJcblx0ICAgICAgICBjaGFubmVsVXJsIDogby5tYWludXJsLFxyXG5cdCAgICAgICAgc3RhdHVzICAgICA6IHRydWUsXHJcblx0ICAgICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuXHQgICAgICAgIGNvb2tpZSAgICAgOiB0cnVlXHJcblx0ICAgIH0pO1xyXG5cdH1lbHNlIGlmKG8ud3JwLmhhc0NsYXNzKCdoZXJvJykpe1xyXG5cdFx0RkIuaW5pdCh7XHJcblx0ICAgICAgICBhcHBJZCAgICAgIDogby5GQkFwcElkLFxyXG5cdCAgICAgICAgY2hhbm5lbFVybCA6IG8ubWFpbnVybCxcclxuXHQgICAgICAgIHN0YXR1cyAgICAgOiB0cnVlLFxyXG5cdCAgICAgICAgeGZibWwgICAgICA6IHRydWUsXHJcblx0ICAgICAgICBjb29raWUgICAgIDogdHJ1ZVxyXG5cdCAgICB9KTtcclxuXHR9XHJcblxyXG5cdC8vQWRkbGlzdGVuZXJcclxuXHQkKHdpbmRvdykub24oJ3RvdWNobW92ZScsZnVuY3Rpb24oKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0aWYoJCgnLmJyZWFrX3RvcF9iYXInKS5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5jc3MoJ2hlaWdodCcsJCh3aW5kb3cpLmhlaWdodCgpKzEwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcubV9pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHZhciBfdGggPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG5cdFx0aWYoX3RoLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0X3RoLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudShmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0X3RoLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0XHRzaG93bWVudSh0cnVlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuaGVyb19ib3ggLmZic2hhcmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0c2hhcmVGYih3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSlcclxuXHQkKCcuYnJlYWtfd3JhcHBlciAucGcyIC5mYnNoYXJlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHNoYXJlRmIoby52aWRlb2xpbmspO1xyXG5cdH0pO1xyXG5cdCQoJy52aWRlb2N0cmwnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0by52aWRlby5wbGF5VmlkZW8oKTtcclxuXHRcdCQoJy52aWRlb2N0cmwnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcblx0JCgnLm1lbnVhJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRibHVlX2xpbmUoJCh0aGlzKSk7XHJcblx0XHRpZighby5tb2JpbGUpe1xyXG5cdFx0XHRpZigkKHRoaXMpLmluZGV4KCk9PTUpe1xyXG5cdFx0XHRcdG8uc3ViLnN0b3AoKS5mYWRlSW4oKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0by5zdWIuc3RvcCgpLmZhZGVPdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5tZW51JykubW91c2Vtb3ZlKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHR9KTtcclxuXHQkKCcubWVudScpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHR9KTtcclxuXHRvLnN1Yi5tb3VzZW1vdmUoZnVuY3Rpb24oKXtcclxuXHRcdGNsZWFyVGltZW91dChvLmJsdWVfbGluZXRpbWVvdXQpO1xyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0aWYoIW8ubW9iaWxlKXtcclxuXHRcdFx0aWYoIW8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG8uc3ViLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRtZW51bW91c2VPdXQoKTtcclxuXHRcdGlmKCFvLm1vYmlsZSl7XHJcblx0XHRcdGlmKG8uc3ViLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0XHRvLnN1Yi5zdG9wKCkucmVtb3ZlQ2xhc3MoJ29uJykuZmFkZU91dCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCh3aW5kb3cpLmxvYWQod2luZG93TG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93TG9hZCgpe1xyXG5cdFx0aWYoby53cnAuaGFzQ2xhc3MoJ2luZGV4Jykpe1xyXG5cdFx0XHRvLmJsdWVfbGluZWluaXQ9JCgnLm1lbnVhJykuZXEoMCk7XHJcblx0XHRcdGNyZWF0ZVZpZGVvKCdwbGF5ZXInLG8udmlkZW9JRCxmYWxzZSk7XHJcblx0XHRcdHZhciBfcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhfcmFuZG9tKTtcclxuXHRcdFx0JCgnLmJyZWFrX3dyYXBwZXIgLnBnMyAucGVyc29uJykuZXEoX3JhbmRvbSkuc2hvdygpO1xyXG5cdFx0fWVsc2UgaWYoby53cnAuaGFzQ2xhc3MoJ3J1bGUnKSl7XHJcblx0XHRcdG8uYmx1ZV9saW5laW5pdD0kKCcubWVudWEnKS5lcSgzKTtcclxuXHRcdFx0JChcIi5ydWxlX2JveCAucnVsZV93b3JkXCIpLm1DdXN0b21TY3JvbGxiYXIoe3Njcm9sbEluZXJ0aWE6MzAwLHNjcm9sbEVhc2luZzonbGluZWFyJ30pO1xyXG5cdFx0XHRzaG93bG9hZGluZyhmYWxzZSk7XHJcblx0XHR9ZWxzZSBpZihvLndycC5oYXNDbGFzcygnaGVybycpKXtcclxuXHRcdFx0by5ibHVlX2xpbmVpbml0PSQoJy5tZW51YScpLmVxKDEpO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPCQoJy5oZXJvX2JveCAucGVyc29uJykubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0JCgnLmhlcm9fYm94IC5wZXJzb24nKS5lcShpKS5maW5kKCcudycpLm1DdXN0b21TY3JvbGxiYXIoe3Njcm9sbEluZXJ0aWE6MzAwLHNjcm9sbEVhc2luZzonbGluZWFyJ30pO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy5oZXJvX2JveCcpLmVhY2goaGVyb19ib3hmYyk7XHJcblx0XHRcdHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGJsdWVfbGluZShvLmJsdWVfbGluZWluaXQpO1xyXG5cdH1cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIHNob3dtZW51KF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5jc3MoJ2hlaWdodCcsJCh3aW5kb3cpLmhlaWdodCgpKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdFx0Ly8gby5tZW51dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly8gXHRjbGVhclRpbWVvdXQoby5tZW51dGltZW91dCk7XHJcblx0XHRcdC8vIFx0JCgnLmJyZWFrX3RvcF9iYXInKVxyXG5cdFx0XHQvLyB9LDUwMCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnLmJyZWFrX3RvcF9iYXInKS5hdHRyKCdzdHlsZScsJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHQvLyBvLm1lbnV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQvLyBcdGNsZWFyVGltZW91dChvLm1lbnV0aW1lb3V0KTtcclxuXHRcdFx0Ly8gXHQkKCcuYnJlYWtfdG9wX2JhcicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHQvLyB9LDUwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG1lbnVtb3VzZU91dCgpe1xyXG5cdFx0by5ibHVlX2xpbmV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoby5ibHVlX2xpbmV0aW1lb3V0KTtcclxuXHRcdFx0Ymx1ZV9saW5lKG8uYmx1ZV9saW5laW5pdCk7XHJcblx0XHR9LDE1MDApO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoZXJvX2JveGZjKCl7XHJcblx0XHR2YXIgbGVmdGJ0biA9ICQodGhpcykuZmluZCgnLmxlZnRidG4nKSxcclxuXHRcdFx0cmlnaHRidG4gPSAkKHRoaXMpLmZpbmQoJy5yaWdodGJ0bicpLFxyXG5cdFx0XHRwZXJzb24gPSAkKHRoaXMpLmZpbmQoJy5wZXJzb24nKSxcclxuXHRcdFx0YnQgPSAkKHRoaXMpLmZpbmQoJy5zdWInKS5maW5kKCcuYnQnKSxcclxuXHRcdFx0X21heCA9IDUsXHJcblx0XHRcdG5vd251bSA9cGVyc29uLmF0dHIoJ2NsYXNzJykucmVwbGFjZSgncGVyc29uIHBlJywnJykucmVwbGFjZSgnIG9uJywnJykqMTtcclxuXHJcblx0XHRwZXJzb24uYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRidC5lcShub3dudW0tMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRsZWZ0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG5vd251bS09MTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRyaWdodGJ0bi5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRub3dudW0rPTE7XHJcblx0XHRcdGNoYW5nZWhlcm8oKTtcclxuXHRcdH0pO1xyXG5cdFx0YnQuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0bm93bnVtID0gJCh0aGlzKS5pbmRleCgpICsgMTtcclxuXHRcdFx0Y2hhbmdlaGVybygpO1xyXG5cdFx0fSk7XHJcblx0XHRmdW5jdGlvbiBjaGFuZ2VoZXJvKCl7XHJcblx0XHRcdGlmKG5vd251bTwxKXtub3dudW09X21heDt9XHJcblx0XHRcdGVsc2UgaWYobm93bnVtPl9tYXgpe25vd251bT0xO31cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaGVybycrbm93bnVtKycuaHRtbCc7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNoYXJlRmIoX2xpbmspe1xyXG4gICAgICAgIEZCLnVpKHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICBuYW1lOiBvLnNoYXJldGl0bGUsXHJcbiAgICAgICAgICAgIGNhcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvLnNoYXJlZGVzLFxyXG4gICAgICAgICAgICBkaXNwbGF5OlwicG9wdXBcIixcclxuICAgICAgICAgICAgbGluazogX2xpbmtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gY3JlYXRlVmlkZW8oX28sX2lkLF9hdXRvcGxheSl7XHJcbiAgICAgICAgby52aWRlbyA9IG5ldyBZVC5QbGF5ZXIoX28sIHtcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIHZpZGVvSWQ6IF9pZCxcclxuICAgICAgICAgIHBsYXllclZhcnM6e1xyXG4gICAgICAgICAgICAnY29udHJvbHMnOjAsXHJcbiAgICAgICAgICAgICdhdXRvcGxheSc6X2F1dG9wbGF5LFxyXG4gICAgICAgICAgICAnZW5hYmxlanNhcGknOicwJyxcclxuICAgICAgICAgICAgJ2hkJzonMScsXHJcbiAgICAgICAgICAgICdyZWwnOicwJyxcclxuICAgICAgICAgICAgJ3Nob3dpbmZvJzonMCcsXHJcbiAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6JzEnLFxyXG4gICAgICAgICAgICAnY2NfbG9hZF9wb2xpY3knOicxJyxcclxuICAgICAgICAgICAgJ3dtb2RlJzondHJhbnNwYXJlbnQnICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXZlbnRzOiB7XHJcblx0ICAgICAgICAnb25SZWFkeSc6IHZpZGVvUmVhZHlcclxuXHQgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2aWRlb1JlYWR5KCl7XHJcbiAgICBcdG8udmlkZW8uc2Vla1RvKDEpLnBhdXNlVmlkZW8oKTtcclxuICAgIFx0c2hvd2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIHNob3dsb2FkaW5nKF90KXtcclxuXHRcdGlmKF90KXtcclxuXHRcdFx0JCgnLmJyZWFrX2xvYWRpbmcnKS5mYWRlSW4oKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKCcuYnJlYWtfbG9hZGluZycpLmZhZGVPdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gYmx1ZV9saW5lKF9vKXtcclxuXHRcdGlmKG8ubW9iaWxlKXtcclxuXHRcdFx0dmFyIF90b3AgPSBfby5vZmZzZXQoKS50b3AgLSAkKCcuYnJlYWtfdG9wX2JhcicpLm9mZnNldCgpLnRvcCArIDYwO1xyXG5cdFx0XHRpZihvLmJsdWVfbGluZT09X3RvcCl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF90b3A7XHJcblx0XHRcdHZhciBfd2lkdGg7XHJcblx0XHRcdGlmKF9vLmluZGV4KCk9PTApIF93aWR0aCA9IDcwO1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTEpIF93aWR0aCA9IDIyNDtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT0yKSBfd2lkdGggPSAxODY7XHJcblx0XHRcdGVsc2UgaWYoX28uaW5kZXgoKT09MykgX3dpZHRoID0gMTQ2O1xyXG5cdFx0XHRlbHNlIGlmKF9vLmluZGV4KCk9PTQpIF93aWR0aCA9IDE0NjtcclxuXHRcdFx0ZWxzZSBpZihfby5pbmRleCgpPT01KSBfd2lkdGggPSAyNjA7XHJcblx0XHRcdCQoJy5ibHVlX2xpbmUnKS5hbmltYXRlKHsndG9wJzpvLmJsdWVfbGluZSwnd2lkdGgnOl93aWR0aH0sby5ibHVlX2xpbmVfc3BlZWQpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKG8uYmx1ZV9saW5lPT0oX28ub2Zmc2V0KCkubGVmdCAtICQoJy5icmVha190b3BfYmFyaW4nKS5vZmZzZXQoKS5sZWZ0KSl7cmV0dXJufVxyXG5cdFx0XHRvLmJsdWVfbGluZSA9IF9vLm9mZnNldCgpLmxlZnQgLSAkKCcuYnJlYWtfdG9wX2JhcmluJykub2Zmc2V0KCkubGVmdDtcclxuXHRcdFx0JCgnLmJsdWVfbGluZScpLmFuaW1hdGUoeydsZWZ0JzpvLmJsdWVfbGluZSwnd2lkdGgnOl9vLndpZHRoKCl9LG8uYmx1ZV9saW5lX3NwZWVkKTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcbn0pLy9yZWFkeSBlbmQgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

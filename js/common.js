$(document).ready(function(){

	//Init
	var o = {
		wrp: $('.break_wrapper'),
		touchvalueY: 25,
		touchvalueX: $(window).width()*0.4,
		blue_line_speed: 100,
		videoID: 'xy4OULEL2ew',
		videolink: 'http://www.samsung.com/tw/campaigns/olympics/video.html',
		sub: $('.break_top_bar .sub'),
		FBAppId: '1301973823150988',
		mainurl: 'http://www.samsung.com/tw/campaigns/olympics/',
		sharetitle: '突破極限之巔 - 2016里約奧運代表隊 謝謝你的努力',
		sharedes: '痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運代表隊，你們辛苦了！'
	};

	if($(window).width()<=640) o.mobile = true;
	else o.mobile = false;

	if(o.wrp.hasClass('index')){
		var canvas, stage, exportRoot;
		canvas = document.getElementById("canvas");
		exportRoot = new lib.inedx();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
		if(!o.mobile){
			o.Parallax = new Parallax(document.getElementById('break_page_pg1_kv'));
			o.Parallax2 = new Parallax(document.getElementById('break_page_pg1_bg'));
		}
		FB.init({
	        appId      : o.FBAppId,
	        channelUrl : o.mainurl,
	        status     : true,
	        xfbml      : true,
	        cookie     : true
	    });
	    $('.break_top_bar .logo').css('opacity',0);
	    if(o.mobile) $('.break_top_barin').addClass('index');
	}else if(o.wrp.hasClass('hero')){
		FB.init({
	        appId      : o.FBAppId,
	        channelUrl : o.mainurl,
	        status     : true,
	        xfbml      : true,
	        cookie     : true
	    });
	    if(o.mobile){
	    	$('.hero_box').bind('touchstart',function(e){
				e = e.originalEvent.touches[0];
				$('.hero_box').bind('touchmove',herotouchmove);
				o.heromouseX = e.pageX;
				o.heromouseY = e.pageY;
			});
			$('.hero_box').bind('touchend',function(e){
				$('.hero_box').unbind('touchmove',herotouchmove);
				checkHero();
			});
			function herotouchmove(e){
				e = e.originalEvent.touches[0];
				o.heromouseX_end = e.pageX;
				o.heromouseY_end = e.pageY;
			}
	    }
	}

	//Addlistener
	$('.logo').click(function(){
		if(!o.wrp.hasClass('index')) window.location.href = 'index.html';
	});
	$('.chatbtn').click(function(){
		window.open("whatsapp://send?text="+window.location.href);
	});
	$('.linebtn').click(function(){
		window.open("//line.me/R/msg/text/?"+o.sharetitle+"，"+o.sharedes+ window.location.href +"　",'_blank', "toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=400");
	});
	$(window).on('touchmove',function(e){
		if(o.mobile){
			if($('.break_top_bar').hasClass('on')){
				$('.break_top_bar').addClass('on_end').css('height',$(window).height()+100);
			}
		}
	});
	$('.m_icon').click(function(){
		var _th = $(this).parent().parent();
		if(_th.hasClass('on')){
			_th.removeClass('on_end').removeClass('on');
			showmenu(false);
		}else{
			_th.addClass('on');
			showmenu(true);
		}
	});
	$('.hero_box .fbshare').click(function(){
		shareFb(window.location.href);
	})
	$('.break_wrapper .pg2 .fbshare').click(function(){
		shareFbvideo();
	});
	$('.videoctrl').click(function(){
		o.video.playVideo();
		$('.videoctrl').fadeOut();
	});
	$('.menua').mouseover(function(){
		blue_line($(this));
		if(!o.mobile){
			if($(this).index()==6){
				if(!o.sub.hasClass('on')){	
					o.sub.stop().addClass('on').hide().css('opacity',1).fadeIn();
				}
			}else{
				if(o.sub.hasClass('on')){
					o.sub.stop().removeClass('on').show().css('opacity',1).fadeOut();
				}
			}
		}
	});
	$('.menu').mousemove(function(){
		clearTimeout(o.blue_linetimeout);
	});
	$('.menu').mouseout(function(){
		menumouseOut();
	});
	o.sub.mousemove(function(){
		clearTimeout(o.blue_linetimeout);
	});
	o.sub.mouseover(function(){
		if(!o.mobile){
			if(!o.sub.hasClass('on')){
				o.sub.stop().addClass('on').hide().css('opacity',1).fadeIn();
			}
		}
	});
	o.sub.mouseout(function(){
		menumouseOut();
		if(!o.mobile){
			if(o.sub.hasClass('on')){
				o.sub.stop().removeClass('on').show().css('opacity',1).fadeOut();
			}
		}
	});
	window.onorientationchange = readDeviceOrientation;
	$(window).load(windowLoad);
	function windowLoad(){
		if(o.wrp.hasClass('index')){
			
			//* index *//
			o.blue_lineinit=$('.menua').eq(0);
			createVideo('player',o.videoID,false);
			var _random = Math.round(Math.random()*4);
			$('.break_wrapper .pg3 .person').eq(_random).show();

		}else if(o.wrp.hasClass('rule')){

			//* rule *//
			o.blue_lineinit=$('.menua').eq(3);
			if(!o.mobile) $(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
			showloading(false);

		}else if(o.wrp.hasClass('hero')){

			//* hero *//
			o.blue_lineinit=$('.menua').eq(1);
			if(!o.mobile){
				for(var i=0;i<$('.hero_box .person').length;i++){
					$('.hero_box .person').eq(i).find('.w').mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
				}
			}
			$('.hero_box').each(hero_boxfc);
			showloading(false);
		}
		blue_line(o.blue_lineinit);
	}

	//Event
	function readDeviceOrientation() {
	    if (Math.abs(window.orientation) == 90) {
	        // Landscape
	        $('.break_mobile_cover').fadeIn();
	    } else {
	    	// Portrait
	    	$('.break_mobile_cover').fadeOut();
	    }
	}
	function checkHero(){
		var _y = Math.abs( o.heromouseY_end - o.heromouseY);
		var _x = o.heromouseX_end - o.heromouseX;
		if(_y >= o.touchvalueY) return;
		else{
			if(Math.abs(_x)<=o.touchvalueX) return;

			var nownum =$('.person').attr('class').replace('person pe','').replace(' on','')*1;
			if(_x>0) nownum = nownum*1 - 1;
			else nownum = nownum*1 + 1;
			if(nownum<1){nownum=5;}
			else if(nownum>5){nownum=1;}
			window.location.href = 'hero'+nownum+'.html';
		}
	}
	function showmenu(_t){
		if(_t){
			if(o.wrp.hasClass('index')){
				$('.break_top_barin').removeClass('index');
				$('.break_top_barin .logo').stop().animate({'opacity':1},300);
			}
			$('.break_top_bar').css('height',$(window).height()).addClass('on');
		}else{
			if(o.wrp.hasClass('index')){
				$('.break_top_barin').addClass('index');
				$('.break_top_barin .logo').stop().animate({'opacity':0},300);
			}
			$('.break_top_bar').attr('style','').removeClass('on');
		}
	}
	function menumouseOut(){
		o.blue_linetimeout = setTimeout(function(){
			clearTimeout(o.blue_linetimeout);
			blue_line(o.blue_lineinit);
		},1500);
	}
	function hero_boxfc(){
		var leftbtn = $(this).find('.leftbtn'),
			rightbtn = $(this).find('.rightbtn'),
			person = $(this).find('.person'),
			bt = $(this).find('.sub').find('.bt'),
			_max = 5,
			nownum =person.attr('class').replace('person pe','').replace(' on','')*1;

		person.addClass('on');
		bt.eq(nownum-1).addClass('on');
		leftbtn.click(function(){
			nownum-=1;
			changehero();
		});
		rightbtn.click(function(){
			nownum+=1;
			changehero();
		});
		bt.click(function(){
			nownum = $(this).index() + 1;
			if(nownum==6){
				window.open('https://tw.youcard.yahoo.com/cardstack/b6511ea0-2644-11e6-a450-a1c2efa13529');
				return;
			}
			changehero();
		});
		function changehero(){
			if(nownum<1){nownum=_max;}
			else if(nownum>_max){nownum=1;}
			window.location.href = 'hero'+nownum+'.html';
		}
	}
	function shareFb(_link){
        FB.ui({             
            method: 'feed',
            name: o.sharetitle,
            caption: "",
            description: o.sharedes,
            display:"popup",
            link: _link
          }, function(response) {

        });        
    }
    function shareFbvideo(_link){
        FB.ui({             
            method: 'feed',
            name: o.sharetitle,
            description: o.sharedes,
            display:"popup",
            link: o.videolink
          }, function(response) {

        });        
    }
	function createVideo(_o,_id,_autoplay){
        o.video = new YT.Player(_o, {
          height: '100%',
          width: '100%',
          videoId: _id,
          playerVars:{
            'controls':0,
            'autoplay':_autoplay,
            'enablejsapi':'0',
            'hd':'1',
            'rel':'0',
            'showinfo':'0',
            'modestbranding':'1',
            'cc_load_policy':'1',
            'wmode':'transparent'      
          },
          events: {
	        'onReady': videoReady
	      }
        });
    }
    function videoReady(){
    	o.video.seekTo(1).pauseVideo();
    	showloading(false);
    }
	function showloading(_t){
		if(_t){
			$('.break_loading').fadeIn();
		}else{
			$('.break_loading').fadeOut();
		}
	}
	function blue_line(_o){
		if(o.mobile){
			var _top = _o.offset().top - $('.break_top_bar').offset().top + _o.height()*0.75;
			if(o.blue_line==_top){return}
			o.blue_line = _top;
			var _width;
			if(_o.index()==0) _width = _o.height()*0.5 / 16 * 33;
			else if(_o.index()==1) _width = _o.height()*0.5 / 16 * 107;
			else if(_o.index()==2) _width = _o.height()*0.5 / 16 * 84;
			else if(_o.index()==3) _width = _o.height()*0.5 / 16 * 69;
			else if(_o.index()==4) _width = _o.height()*0.5 / 16 * 68;
			else if(_o.index()==5) _width = _o.height()*0.5 / 16 * 118;
			$('.blue_line').animate({'top':o.blue_line,'width':_width},o.blue_line_speed);
		}else{
			if(o.blue_line==(_o.offset().left - $('.break_top_barin').offset().left)){return}
			o.blue_line = _o.offset().left - $('.break_top_barin').offset().left;
			$('.blue_line').animate({'left':o.blue_line,'width':_o.width()},o.blue_line_speed);
		}
	}
  
})//ready end  

































































































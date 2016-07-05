﻿$(document).ready(function(){

	//Init
	var o = {
		wrp: $('.break_wrapper'),
		blue_line_speed: 100,
		videoID: 'bRhpkp1_qEI',
		videolink: 'https://www.youtube.com/watch?v=bRhpkp1_qEI',
		sub: $('.break_top_bar .sub'),
		FBAppId: '1301973823150988',
		mainurl: 'http://www.samsung.com/tw/campaigns/2016olympics/index.html',
		sharetitle: '突破極限之巔 - 2016里約奧運台灣代表隊 謝謝你的努力',
		sharedes: '痛苦會過去，榮耀將留下謝謝你的努力，2016 里約奧運台灣代表隊，你們辛苦了！'
	};

	if($(window).width()<=640) o.mobile = true;
	else o.mobile = false;

	if(o.wrp.hasClass('index')){
		var canvas, stage, exportRoot;
		canvas = document.getElementById("canvas");
		exportRoot = new lib.firwork();
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
	}else if(o.wrp.hasClass('hero')){
		FB.init({
	        appId      : o.FBAppId,
	        channelUrl : o.mainurl,
	        status     : true,
	        xfbml      : true,
	        cookie     : true
	    });
	}

	//Addlistener
	$(window).on('touchmove',function(){
		if(o.mobile){
			if($('.break_top_bar').hasClass('on')){
				$('.break_top_bar').css('height',$(window).height());
			}
		}
	});
	$('.m_icon').click(function(){
		var _th = $(this).parent().parent();
		if(_th.hasClass('on')){
			_th.removeClass('on');
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
		shareFb(o.videolink);
	});
	$('.videoctrl').click(function(){
		o.video.playVideo();
		$('.videoctrl').fadeOut();
	});
	$('.menua').mouseover(function(){
		blue_line($(this));
		if(!o.mobile){
			if($(this).index()==5){
				o.sub.stop().fadeIn();
			}else{
				o.sub.stop().fadeOut();
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
				o.sub.stop().addClass('on').fadeIn();	
			}
		}
	});
	o.sub.mouseout(function(){
		menumouseOut();
		if(!o.mobile){
			if(o.sub.hasClass('on')){
				o.sub.stop().removeClass('on').fadeOut();
			}
		}
	});
	$(window).load(windowLoad);
	function windowLoad(){
		if(o.wrp.hasClass('index')){
			o.blue_lineinit=$('.menua').eq(0);
			createVideo('player',o.videoID,false);
			var _random = Math.round(Math.random()*4);
			console.log(_random);
			$('.break_wrapper .pg3 .person').eq(_random).show();
		}else if(o.wrp.hasClass('rule')){
			o.blue_lineinit=$('.menua').eq(3);
			$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
			showloading(false);
		}else if(o.wrp.hasClass('hero')){
			o.blue_lineinit=$('.menua').eq(1);
			for(var i=0;i<$('.hero_box .person').length;i++){
				$('.hero_box .person').eq(i).find('.w').mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
			}
			$('.hero_box').each(hero_boxfc);
			showloading(false);
		}
		blue_line(o.blue_lineinit);
	}

	//Event
	function showmenu(_t){
		if(_t){
			$('.break_top_bar').css('height',$(window).height()).addClass('on');
			// o.menutimeout = setTimeout(function(){
			// 	clearTimeout(o.menutimeout);
			// 	$('.break_top_bar')
			// },500);
		}else{
			$('.break_top_bar').attr('style','').removeClass('on');
			// o.menutimeout = setTimeout(function(){
			// 	clearTimeout(o.menutimeout);
			// 	$('.break_top_bar').removeClass('on');
			// },500);
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
			var _top = _o.offset().top - $('.break_top_bar').offset().top + 60;
			if(o.blue_line==_top){return}
			o.blue_line = _top;
			var _width;
			if(_o.index()==0) _width = 70;
			else if(_o.index()==1) _width = 224;
			else if(_o.index()==2) _width = 186;
			else if(_o.index()==3) _width = 146;
			else if(_o.index()==4) _width = 146;
			else if(_o.index()==5) _width = 260;
			$('.blue_line').animate({'top':o.blue_line,'width':_width},o.blue_line_speed);
		}else{
			if(o.blue_line==(_o.offset().left - $('.break_top_barin').offset().left)){return}
			o.blue_line = _o.offset().left - $('.break_top_barin').offset().left;
			$('.blue_line').animate({'left':o.blue_line,'width':_o.width()},o.blue_line_speed);
		}
	}
  
})//ready end  

































































































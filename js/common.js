$(document).ready(function(){

	//Init
	var o = {
		wrp: $('.break_wrapper'),
		blue_line_speed: 100,
		videoID: 'bRhpkp1_qEI',
		videolink: 'https://www.youtube.com/watch?v=bRhpkp1_qEI',
		sub: $('.break_top_bar .sub'),
		FBAppId: '1301973823150988',
		mainurl: 'http://www.samsung.com/tw/campaigns/2016olympics/index.html',
		sharetitle: 'Samsung 突破極限之巔',
		sharedes: 'Samsung 突破極限之巔'
	};

	if(o.wrp.hasClass('index')){
		var canvas, stage, exportRoot;
		canvas = document.getElementById("canvas");
		exportRoot = new lib.firwork();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
		o.Parallax = new Parallax(document.getElementById('break_page_pg1_kv'));
		o.Parallax2 = new Parallax(document.getElementById('break_page_pg1_bg'));
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
		if($(this).index()==5){
			o.sub.stop().fadeIn();
		}else{
			o.sub.stop().fadeOut();
		}
	});
	o.sub.mouseover(function(){
		if(!o.sub.hasClass('on')){
			o.sub.stop().addClass('on').fadeIn();	
		}
	});
	o.sub.mouseout(function(){
		if(o.sub.hasClass('on')){
			o.sub.stop().removeClass('on').fadeOut();
		}		
	});
	$(window).load(windowLoad);
	function windowLoad(){
		if(o.wrp.hasClass('index')){
			blue_line($('.menua').eq(0));
			createVideo('player',o.videoID,false);
			var _random = Math.round(Math.random()*4);
			console.log(_random);
			$('.break_wrapper .pg3 .person').eq(_random).show();
		}else if(o.wrp.hasClass('rule')){
			blue_line($('.menua').eq(3));
			$(".rule_box .rule_word").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
			showloading(false);
		}else if(o.wrp.hasClass('hero')){
			blue_line($('.menua').eq(1));
			for(var i=0;i<$('.hero_box .person').length;i++){
				$('.hero_box .person').eq(i).find('.w').mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
			}
			$('.hero_box').each(hero_boxfc);
			showloading(false);
		}
	}

	//Event
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

			// bt.removeClass('on').eq(nownum).addClass('on');
			// person.eq(nownum).show();
			// person.eq(prenum).fadeOut(300,function(){
			// 	prenum = nownum;
			// 	person.eq(nownum).addClass('on');
			// }).removeClass('on');
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
		if(o.blue_line==(_o.offset().left - $('.break_top_barin').offset().left)){return}
		o.blue_line = _o.offset().left - $('.break_top_barin').offset().left;
		$('.blue_line').animate({'left':o.blue_line,'width':_o.width()},o.blue_line_speed);
	}

  
})//ready end  

































































































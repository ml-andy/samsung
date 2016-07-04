$(document).ready(function(){

	//Init
	var o = {
		wrp: $('.break_wrapper'),
		blue_line_speed: 100,
		videoID: 'bRhpkp1_qEI',
		sub: $('.break_top_bar .sub'),
	};
	var canvas, stage, exportRoot;
	canvas = document.getElementById("canvas");
	exportRoot = new lib.firwork();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	o.Parallax = new Parallax(document.getElementById('break_page_pg1'));

	//Addlistener
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
		createVideo('player',o.videoID,false);
		var _random = Math.round(Math.random()*5);
		$('.break_wrapper .pg3 .person').eq(_random).show();
		blue_line($('.menua').eq(0));
	}

	//Event
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

































































































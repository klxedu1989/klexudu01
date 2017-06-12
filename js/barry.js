$(function(){
	//1.导航栏鼠标移入频道和投稿显示隐藏
	$('.tunnel').hover(function(){
		$('.tunnel1').css('display','block');
		$('.send1').css('display','none');
	},function(){});
	$('.tunnel1').mouseleave(function(){
		$('.tunnel1').css('display','none');
	});
	$('.send').hover(function(){
		$('.send1').css('display','block');
		$('.tunnel1').css('display','none');
	},function(){});
	$('.send1').mouseleave(function(){
		$('.send1').css('display','none');
	});
	$('.search').click(function(){
		$('.search').css('border','1px solid yellow');
	})
	//鼠标移入翻转
	$('.rotate').hover(function(){
		$(this).children().eq(0).css({'transform':'rotateY(180deg) perspective(133px)'});
		$(this).children().eq(1).css({'transform':'rotateY(0deg) perspective(133px)'});
	},function(){
		$(this).children().eq(1).css({'transform':'rotateY(-180deg) perspective(133px)'});
		$(this).children().eq(0).css({'transform':'rotateY(0deg) perspective(133px)'});
	})
	$('.zuoyi').hover(function(){
		$(this).children().eq(1).stop().slideDown();
	},
	function(){
		$(this).children().eq(1).stop().slideUp();
	})
	//鼠标移入上移
	$('.chinese ul li').hover(function(){
		// $(this).children().children().css('top','-170px');
	},function(){
		// $(this).children().children().css('top',0);
		$(this).children().children().slideDown();
	})
})
$(function(){
				$('#ul1').css('width',$('#ul1 li').length*300);
				$('#ul1').css('left',-300);
				var i=0;
				//点击小圆点
				$('#ol1 li').click(function(){
					i=$(this).index();
					var l=-300*($(this).index()+1);
					$('#ol1 li').removeClass();
					$(this).addClass('active');
					$('#ul1').css('left',l);
				});

				
				
				function next(){
					i++;
					if(i==5){
						i=0;
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(i).addClass('active');
						$('#ul1').css('left',-300*(i+1));
					}else{
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(i).addClass('active');
						$('#ul1').css('left',-300*(i+1));
					}				
				};
				//点击下一页
				$('#next').click(next);
				var tid=setInterval(next,5000);
				$('.carousel').hover(function(){
					clearInterval(tid);
				},function(){
					tid=setInterval(next,5000);
				});
				
				
				//点击上一页
				$('#prev').click(function(){
					i--;
					if(i==-1){
						i=4;
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(i).addClass('active');
						$('#ul1').css('left',-300*(i+1));
					}else{
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(i).addClass('active');
						$('#ul1').css('left',-300*(i+1));
					}
				});
});
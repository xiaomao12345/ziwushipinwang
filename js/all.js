window.onload=function(){
		//轮播图部分
		var container = document.getElementById('container');
		var list = document.getElementById('list');
		var buttons = document.getElementById('buttons').getElementsByTagName('span');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var index = 1;
		var animated = false;
		var timer;
		//左右箭头点击切换事件
		// next.onclick = function(){
		// 	list.style.left = parseInt(list.style.left) - 1160 +'px';
		// }
		// prev.onclick=function(){
		// 	list.style.left = parseInt(list.style.left) + 1160 + 'px';
		// }

		//封装函数
		// function animate(offset){
		// 	list.style.left = parseInt(list.style.left) - offset +'px';
		// 	//判断
		// 	if(list.style.left > -1160){
		// 		list.style.left = -5800 + 'px';
		// 	}
		// 	if(list.style.left < -5800)
		// 	{
		// 		list.style.left = -1160 + 'px';
		// 	}
		// }
		function animate(offset){
			animated = true;
			var newleft = parseInt(list.style.left) + offset;//用变量存贮节省时间
			var time = 300;//位移总时间
			var interval= 10;//位移间隔时间
			var speed = offset/(time/interval);//求出每次位移量

			//判断向哪移动
			function go(){
				if((speed < 0 && parseInt(list.style.left) > newleft)||(speed > 0 && parseInt(list.style.left)< newleft))
				{
					list.style.left = parseInt(list.style.left) + speed + 'px';
					setTimeout(go,interval);//递归
				}
			else{
				animated = false;
				list.style.left = newleft +'px';
			//判断  实现图片的无限滚动
			if(newleft > -1160){
				list.style.left = -5800 + 'px';
			}
			if(newleft < -5800)
			{
				list.style.left = -1160 + 'px';
			}
			}
	  	}
	  go();
	}


	//自动切换
		function play(){
			timer = setInterval(function (){
				next.onclick();
			},3000);
		}
		function stop(){
			clearInterval(timer);
		}
		//点击左右箭头
		next.onclick = function(){
			if(index == 5)
			{
				index = 1;
			}
			else
			{
			index += 1;
			}
			showButton();
			if (animated == false) {
				animate(-1160);
			}
			
		} 
		prev.onclick = function(){
			if(index == 1)//判断五个圆点的个数 如果大于等于五就回到第一个 
			{
				index = 5;
			}
			else
			{
			index -= 1;
			}
			showButton();
			if (animated == false) {
				animate(1160);
			}
			
		}


		//小圆点随箭头切换
		function showButton(){
			for(var i = 0;i<buttons.length;i++)
			{
				if(buttons[i].className == 'on')
				{
					buttons[i].className="";
					break;
				}
			}
			buttons[index - 1].className = 'on';
		}
		
		//点击小圆点切换   按钮切换
		for(var i = 0;i < buttons.length;i++){
			buttons[i].onclick = function(){
				 //计算偏移值
				 if(this.className == 'on')
				 {
				 	return;//返回  后面的语句不会执行
				 }
				 var myIndex =parseInt( this.getAttribute('index'));//获取自定义属性  也可以获取自带的属性值
				 var offset = -1160 * (myIndex - index);//算出每次点击小圆点的偏移量
				 if(animated == false)
				 {
				 	 animate(offset);
				 }
				
				 index = myIndex;//吧index归位
				 showButton();
			}
		}		
		//鼠标移入移出  箭头出现消失
		container.onmouseover = stop;
		container.onmouseout = play;

		play();//刚开始自动播放状态 鼠标不做移动


	//弹出登录界面
	var oBtn = document.getElementsByTagName('button');
	var oBack = document.getElementById('over');
  	var oCover = document.getElementById('cover');
  	var oYincang = document.getElementById('msg');

 //  	var oTab = document.getElementById('submenu');
 //  	var aBtn = oTab.getElementsByTagName('li');
	// var aDiv = document.getElementsByClassName('submain_txt');
  	// oBtn1.onclick = function(){
  	// 	oCover.style.display='block';
   //      oBack.style.display='block';
   //      oYincang.style.display = 'block';
  	// 	}
  	// oBtn2.onclick = function(){
  	// 	oCover.style.display='block';
   //      oBack.style.display='block';
   //      oYincang.style.display = 'block';       
  	// 	}
  	for(var i=0;i<oBtn.length;i++){
  		oBtn[i].onclick = function(){
  			oCover.style.display='block';
         	oBack.style.display='block';
         	oYincang.style.display = 'block';
  		// 			for(var i=0;i<aBtn.length;i++){
		// 	aBtn[i].onclick = function(){
		// 		for(var j=0;j<aBtn.length;j++){
		// 			aBtn[j].index = j;
		// 			aBtn[j].className = '';
		// 			aDiv[j].style.display = 'none';
		// 		}
		// 		this.className = 'subactive';
		// 		aDiv[this.index].style.display = 'block';
		// 	}
		// }
  		}
  	}
  	oBack.onclick = function(){
  	oCover.style.display='none';
    oBack.style.display='none';
    oYincang.style.display='none';
   }
 }




window.onload = function(){
			 var oBtn = document.getElementsByTagName('button');
	  var oBack = document.getElementById('over');
  	var oCover = document.getElementById('cover');
  	var oYincang = document.getElementById('msg');

  	var oTab = document.getElementById('submenu1');
  	var aBtn = oTab.getElementsByTagName('li');
	  var aDiv = document.getElementsByClassName('submain_txt');
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
  			for(var i=0;i<aBtn.length;i++){
			aBtn[i].onclick = function(){
				for(var j=0;j<aBtn.length;j++){
					aBtn[j].index = j;
					aBtn[j].className = '';
					aDiv[j].style.display = 'none';
				}
				this.className = 'subactive';
				aDiv[this.index].style.display = 'block';
			}
		}
  }
}
  	oBack.onclick = function(){
  	oCover.style.display='none';
    oBack.style.display='none';
    oYincang.style.display='none';
   }
		}
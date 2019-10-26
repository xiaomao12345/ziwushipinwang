window.onload=function(){
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


  var oTab1 = document.getElementById('obj_menu');
  var aBtn1 = oTab1.getElementsByTagName('li');
  var aDiv1 = document.getElementsByClassName('obj_one');

    for(var i=0;i<aBtn1.length;i++){
        aBtn1[i].onclick = function(){
          for(var j=0;j<aBtn1.length;j++){
            aBtn1[j].index = j;
            aBtn1[j].className = '';
            aDiv1[j].style.display = 'none';
          }
          this.className = 'obj_active';
          aDiv1[this.index].style.display = 'block';
        }
      }


      var oRight = document.getElementById('right');
      var oHide = document.getElementById('subactive_hide');
      var oSee = document.getElementById('subactive_see');
      var oCenter = document.getElementById('center_main');
      oHide.onclick = function(){
        oRight.style.display = 'none';
        oSee.style.display = 'block';
        oCenter.style.width = '1130'+'px';
      }
      oSee.onclick = function(){
        oRight.style.display = 'block';
        oSee.style.display = 'none';
        oCenter.style.width = '780'+'px';
      }
}
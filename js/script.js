window.onload=function(){
	var oTab = document.getElementById('obj_menu');
	var aBtn = oTab.getElementsByTagName('li');
	var aDiv = document.getElementsByClassName('obj_one');

		for(var i=0;i<aBtn.length;i++){
				aBtn[i].onclick = function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].index = j;
						aBtn[j].className = '';
						aDiv[j].style.display = 'none';
					}
					this.className = 'obj_active';
					aDiv[this.index].style.display = 'block';
				}
			}
}
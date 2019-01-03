window.onload=function(){
	var cover=document.getElementsByClassName('whole1')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.onscroll;
		if(st>120){
			cover.style.position='fixed';
			cover.style.zIndex = "999";
		}else{
			cover.style.position='static';
		}
	}
}
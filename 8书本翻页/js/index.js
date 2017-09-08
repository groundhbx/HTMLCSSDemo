<<<<<<< HEAD
var fir=document.getElementsByClassName("first")[0];
var sec=document.getElementsByClassName("second")[0];
var thir=document.getElementsByClassName("third")[0]
var fort=document.getElementsByClassName("forth")[0];
var fif=document.getElementsByClassName("fifth")[0];

var flag=0;

fif.onclick=function(){
	if(flag==0){
		fif.style.transform="rotateY(-180deg)";
		flag++;
	}else{
		fif.style.transform="rotateY(-50deg)";
		flag=0;
	}
}
fort.onclick=function(){
	if(flag==0){
		fort.style.transform="rotateY(-160deg)";
		flag++;
	}else{
		fort.style.transform="rotateY(-40deg)";
		flag=0;
	}
}
thir.onclick=function(){
	if(flag==0){
		thir.style.transform="rotateY(-150deg)";
		flag++;
	}else{
		thir.style.transform="rotateY(-30deg)";
		flag=0;
	}
}
sec.onclick=function(){
	if(flag==0){
		sec.style.transform="rotateY(-140deg)";
		flag++;
	}else{
		sec.style.transform="rotateY(-20deg)";
		flag=0;
	}
}
fir.onclick=function(){
	if(flag==0){
		fir.style.transform="rotateY(-130deg)";
		flag++;
	}else{
		fir.style.transform="rotateY(0deg)";
		flag=0;
	}
=======
var fir=document.getElementsByClassName("first")[0];
var sec=document.getElementsByClassName("second")[0];
var thir=document.getElementsByClassName("third")[0]
var fort=document.getElementsByClassName("forth")[0];
var fif=document.getElementsByClassName("fifth")[0];

var flag=0;

fif.onclick=function(){
	if(flag==0){
		fif.style.transform="rotateY(-180deg)";
		flag++;
	}else{
		fif.style.transform="rotateY(-50deg)";
		flag=0;
	}
}
fort.onclick=function(){
	if(flag==0){
		fort.style.transform="rotateY(-160deg)";
		flag++;
	}else{
		fort.style.transform="rotateY(-40deg)";
		flag=0;
	}
}
thir.onclick=function(){
	if(flag==0){
		thir.style.transform="rotateY(-150deg)";
		flag++;
	}else{
		thir.style.transform="rotateY(-30deg)";
		flag=0;
	}
}
sec.onclick=function(){
	if(flag==0){
		sec.style.transform="rotateY(-140deg)";
		flag++;
	}else{
		sec.style.transform="rotateY(-20deg)";
		flag=0;
	}
}
fir.onclick=function(){
	if(flag==0){
		fir.style.transform="rotateY(-130deg)";
		flag++;
	}else{
		fir.style.transform="rotateY(0deg)";
		flag=0;
	}
>>>>>>> first commit
}
cc1=document.getElementById("c1");
var cc2=document.getElementById("c2");
var cc3=document.getElementById("c3");
var cc4=document.getElementById("c4");
var cc5=document.getElementById("c5");
var cc6=document.getElementById("c6");
var cc7=document.getElementById("c7");
var cc8=document.getElementById("c8");
var cc9=document.getElementById("c9");
var rst=document.getElementById("rsrt");
var count=0
t1=document.getElementById("td1");



function c1(){
   
    if(count%2==0){
        cc1.src="tttX.jpg";
        cc1.onclick="";
        cc1.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc1.src="tttO.jpg";
        cc1.onclick="";
        cc1.style.cursor="not-allowed";
        count=count+1;
    }
}
function c2(){
    if(count%2==0){
        cc2.src="tttX.jpg";
        cc2.onclick="";
        cc2.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc2.src="tttO.jpg";
        cc2.onclick="";
        cc2.style.cursor="not-allowed";
        count=count+1;
    }
}
function c3(){
    if(count%2==0){
        cc3.src="tttX.jpg";
        cc3.onclick="";
        cc3.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc3.src="tttO.jpg";
        cc3.onclick="";
        cc3.style.cursor="not-allowed";
        count=count+1;
    }
}
function c4(){
    if(count%2==0){
        cc4.src="tttX.jpg";
        cc4.onclick="";
        cc4.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc4.src="tttO.jpg";
        cc4.onclick="";
        cc4.style.cursor="not-allowed";
        count=count+1;
    }
}
function c5(){
    if(count%2==0){
        cc5.src="tttX.jpg";
        cc5.onclick="";
        cc5.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc5.src="tttO.jpg";
        cc5.onclick="";
        cc5.style.cursor="not-allowed";
        count=count+1;
    }
}
function c6(){
    if(count%2==0){
        cc6.src="tttX.jpg";
        cc6.onclick="";
        cc6.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc6.src="tttO.jpg";
        cc6.onclick="";
        cc6.style.cursor="not-allowed";
        count=count+1;
    }
}
function c7(){
    if(count%2==0){
        cc7.src="tttX.jpg";
        cc7.onclick="";
        cc7.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc7.src="tttO.jpg";
        cc7.onclick="";
        cc7.style.cursor="not-allowed";
        count=count+1;
    }
}
function c8(){
    if(count%2==0){
        cc8.src="tttX.jpg";
        cc8.onclick="";
        cc8.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc8.src="tttO.jpg";
        cc8.onclick="";
        cc8.style.cursor="not-allowed";
        count=count+1;
    }
}
function c9(){
    if(count%2==0){
        cc9.src="tttX.jpg";
        cc9.onclick="";
        cc9.style.cursor="not-allowed";
        count=count+1;
    }
    else{
        cc9.src="tttO.jpg";
        cc9.onclick="";
        cc9.style.cursor="not-allowed";
        count=count+1;
    }
}
function start(){
    cc1.src=cc2.src=cc3.src=cc4.src=cc5.src=cc6.src=cc7.src=cc8.src=cc9.src="smile.jpg";
    rst.innerHTML;
    if(rst.innerHTML=="Start"){
        rst.innerHTML="Restart";
    }
    else{
        rst.innerHTML="Start";
    }
}


function checkwin(){
    if(cc1.src==cc2.src==cc3.src && cc1.src!="smile.jpg"){
        alert("win");
    }
    else{
        alert("ongoing")
    }
}

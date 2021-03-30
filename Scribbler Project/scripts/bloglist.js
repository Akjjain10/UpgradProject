var trashmodal1=document.getElementById("trashmodal1");
var trash1=document.getElementById('trash1');
var yes1=document.getElementById('yes1');
var no1=document.getElementById('no1');

var trashmodal2=document.getElementById("trashmodal2");
var trash2=document.getElementById('trash2');
var yes2=document.getElementById('yes2');
var no2=document.getElementById('no2');

var trashmodal3=document.getElementById("trashmodal3");
var trash3=document.getElementById('trash3');
var yes3=document.getElementById('yes3');
var no3=document.getElementById('no3');

var trashmodal4=document.getElementById("trashmodal4");
var trash4=document.getElementById('trash4');
var yes4=document.getElementById('yes4');
var no4=document.getElementById('no4');

var trashmodal5=document.getElementById("trashmodal5");
var trash5=document.getElementById('trash5');
var yes5=document.getElementById('yes5');
var no5=document.getElementById('no5');

trash1.onclick=function(){
    trashmodal1.style.display="block";
}
no1.onclick=function(){
    trashmodal1.style.display="none";
}
window.onclick=function(event){
    if(event.target==trashmodal1)
    {
        trashmodal1.style.display="none";
    }
}

trash2.onclick=function(){
    trashmodal2.style.display="block";
}
no2.onclick=function(){
    trashmodal2.style.display="none";
}
window.onclick=function(event){
    if(event.target==trashmodal2)
    {
        trashmodal2.style.display="none";
    }
}

trash3.onclick=function(){
    trashmodal3.style.display="block";
}
no3.onclick=function(){
    trashmodal3.style.display="none";
}
window.onclick=function(event){
    if(event.target==trashmodal3)
    {
        trashmodal3.style.display="none";
    }
}

trash4.onclick=function(){
    trashmodal4.style.display="block";
}
no4.onclick=function(){
    trashmodal4.style.display="none";
}
window.onclick=function(event){
    if(event.target==trashmodal4)
    {
        trashmodal4.style.display="none";
    }
}

trash5.onclick=function(){
    trashmodal5.style.display="block";
}
no5.onclick=function(){
    trashmodal5.style.display="none";
}
window.onclick=function(event){
    if(event.target==trashmodal5)
    {
        trashmodal5.style.display="none";
    }
}
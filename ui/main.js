console.log('Loaded!');
var marginleft=0;
var moveright=function(){
    marginleft=marginleft+1;
    img.style.marginleft=marginleft+"px";
};
var img=document.getElementById("pramit");
img.onclick=function(){
    var interval=setInterval(moveright,5);
};
var nameInput=document.getElementByid("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    //rendering request
    var names=["name1","name2","name3"];
     var list="";
     for(var i=0;i<names.length;i++){
         list=='<li>'+names[i]+'</li>';
         
     }
     var ul=documen.getElementById("namelist");
     ul.innerHTML=list;
}

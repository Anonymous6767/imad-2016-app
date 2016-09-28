var buttn=document.getElementById("counter");
var counter=0;
counter.onclick=function(){
  //rendering 
  counter=counter+1;
  var span=doocument.getElementById("count");
  span.innerHTML=counter.toString();
};

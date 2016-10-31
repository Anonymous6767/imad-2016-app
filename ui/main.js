//console.log('Loaded!');
//var marginleft=0;
//var moveright=function(){
 //   marginleft=marginleft+1;
  //  img.style.marginleft=marginleft+"px";
//};
//var img=document.getElementById("pramit");
//img.onclick=function(){
//    var interval=setInterval(moveright,5);
//};
//var nameInput=document.getElementByid("name");
//var name=nameInput.value;
//var submit=document.getElementById("submit_btn");
//submit.onclick=function(){
    //rendering request
//    var names=["name1","name2","name3"];
  //   var list="";
   //  for(var i=0;i<names.length;i++){
    //     list=='<li>'+names[i]+'</li>';
         
    // }
   //  var ul=document.getElementById("namelist");
   //  ul.innerHTML=list;
//};
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //create request
  //  var request=new XMLHTTPRequest();
  //  request.onreadystatechange=function(){
     //   if(request.readyState===XMLHTTPRequest.DONE){
       //     if(request.status===200){
        //        var counter=request.responseText;
             
                
           // }
       // }
        
   // };
    //work 
    
  //rendering 
  counter=counter+1;
   var span=doocument.getElementById('count');
                span.innerHTML=counter.toString();
 //Make the request
// request.open("GET","http://anonymous6767.imad.hasura-app.io/",true);
 //request.send(null);
 
};
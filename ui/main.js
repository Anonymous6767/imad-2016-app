var button=document.getElementById('counter');
//var counter=0;
button.onclick=function(){
    
//create a request
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if (request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                 var span=document.getElementById('count');
                    span.innerHTML=counter.toString();
            }
        }
    };
   // counter=counter+1;
 //make a request  
   
  request.open('GET','http://anonymous6767.imad.hasura-app.io/counter',true); 
    request.send(null);
};
  


    var submit=document.getElementById('submit_btn');       
submit.onclick=function(){
    var request=new XMLHttpRequest();
       request.onreadystatechange=function(){
       if (request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
    
                var names=request.responseText;
                names=JSON.parse(names);
           var list='';
                 for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
  }
            
        
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
           }
       }
      };
       
     
       var nameInput=document.getElementById('name');
         var name=nameInput.value;
        request.open('GET','http://anonymous6767.imad.hasura-app.io/submit-name?name=' +name,true); 
           request.send(null);
};
var submit1=document.getElementById('submit_btn1');
    var commentInput=document.getElementById('comment');
var comment=commentInput.value;

submit1.onclick=function(){
      var request=new XMLHttpRequest();
       request.onreadystatechange=function(){
        if (request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
    
                var names=['name1','name2','name 3'];
                names=JSON.parse(names);
              var list='';
                 for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
 }
  var ul=document.getElementById('commentlist');
  ul.innerHTML=list;
            }
      }
       };
   
     request.open('GET','http://anonymous6767.imad.hasura-app.io/comments?comment=' +comment,true); 
            request.send(null);
};

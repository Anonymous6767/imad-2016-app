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
   
  request.open('GET','http://http://anonymous6767.imad.hasura-app.io/',true); 
    request.send(null);
};
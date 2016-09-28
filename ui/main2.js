var buttn=document.getElementById("counter");
//var counter=0;
counter.onclick=function(){
    //create request
    var request=new XMLHTTPRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHTTPRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                 var span=doocument.getElementById("count");
                 span.innerHTML=counter.toString();
                
            }
        }
        
    };
    //work 
    
  //rendering 
 // counter=counter+1;
 //Make the request
 request.open("GET","http://anonymous6767.imad.hasura-app.io/",true);
 request.send(null);
 
};

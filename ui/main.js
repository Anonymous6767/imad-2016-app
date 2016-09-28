console.log('Loaded!');
var marginleft=0;
var moveright=function(){
    marginleft=marginleft+1;
    img.style.marginleft=marginleft+"px";
};
img.onclick=function(){
    var interval=setInterval(moveright,5);
};
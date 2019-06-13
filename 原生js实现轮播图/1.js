var img = document.getElementById("img");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");
var box3 = document.getElementById("father-box3");

//计时器
var timer = null;
//实现轮播

timer = setInterval(rightMove,1500)
function leftMove(){

    if(img.style.left === "0px"){
        img.style.left = "-1200px"
    }else{
        img.style.left = (img.style.left === "" ? 0 : parseInt(img.style.left))+ 300 +"px"
    }
}
function rightMove(){
    if(img.style.left === "-1200px"){
        img.style.left = "0px";
    }else{
        img.style.left = (img.style.left === "" ? 0 : parseInt(img.style.left)) - 300 + "px";
    }
}
//实现鼠标移入移出
img.addEventListener("mouseover",function(){
    clearInterval(timer);
})
img.addEventListener("mouseout",function(){
    timer = setInterval(rightMove,1500);
})
//实现点击箭头
btn1.addEventListener("mouseover",function(){
    clearInterval(timer);
})
btn1.addEventListener("click",function(){
    leftMove();
})

btn2.addEventListener("mouseover",function(){
    clearInterval(timer);
})
btn2.addEventListener("click",function(){
    rightMove();
})

//小圆点点击事件；
function cliclDot(a){//a代表left值
    clearInterval(timer);
    img.style.left = a;
    img.style.backgroundColor = " rgb(160, 218, 218)"
}
dot1.addEventListener("click",function(){
    cliclDot('0px');
})
dot2.addEventListener("click",function(){
   cliclDot('-300px');
})
dot3.addEventListener("click",function(){
    cliclDot('-600px');
})
dot4.addEventListener("click",function(){
    cliclDot('-900px');
})
dot5.addEventListener("click",function(){
    cliclDot('-1200px');
})
box3.addEventListener("mouseout",function(){
    clearInterval(timer);
    timer = setInterval(rightMove,1500);
})


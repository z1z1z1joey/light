"use strict";

var state = true;
var timeLeft = "" ;
var id = "";

function createToDo() {
    var input = document.getElementById("input").value ;

    if (isNaN(input) == true) {
      alert("請輸入數字");
    }
    else{
      timeLeft = Number(input)+ 1  ;
      id = setInterval(countDownTimer, 1000);
    }
      
}
//切換照片
function toggleLight(){
   var image = document.getElementById("image");
   state = ! state ;
   image.src = state ? "img/light-on.png" : "img/light-off.png";  
    
}

//計時器
function countDownTimer(){
   
   if (timeLeft <= 0) {
    document.getElementById("image").src = "img/light-off.png" ; 
    alert("時間到了");
    clearInterval(id);
    document.getElementById("btn").disabled=false;
    
   }else {
    timeLeft -= 1;
    image.src ="img/light-on.png";
    document.getElementById("btn").disabled=true;
   }
   document.getElementById("timer").innerHTML = timeLeft;


}




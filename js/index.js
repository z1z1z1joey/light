"use strict";

var state = true;
var timeLeft = 5;
var id = setInterval(countDownTimer, 1000);

//計時器
function countDownTimer(){
   timeLeft -= 1;
   if (timeLeft <= 0) {
    document.getElementById("image").src = "img/light-off.png" ; 
    clearInterval(id);
   }
   document.getElementById("timer").innerHTML = timeLeft;
}


//切換照片
function toggleLight(){
   var image = document.getElementById("image");
   state = ! state ;
  image.src = state ? "img/light-on.png" : "img/light-off.png";  

}


'use strict'
let numRandom = Math.trunc(Math.random()*20) +1;

function showMessege(msg){
    document.querySelector(".messege").textContent = msg;
}

document.querySelector(".btn2").addEventListener('click', function(){
    let gNum = Number(document.querySelector(".guessNumber").value);
    if (gNum < 1 || gNum > 20){
        showMessege("Put a number between 1 to 20.");
    }else{

    let sCore =Number(document.querySelector(".score").textContent);

    if (sCore >0){
    if (sCore==1){
        showMessege("Ops... You lost the game!");
        document.querySelector(".score").textContent = 0;
        document.body.classList.add("myStyle2");
        document.querySelector(".number").textContent = numRandom;
    }else{
    if (gNum < numRandom){
        showMessege("Too low!");
        let sCore =Number(document.querySelector(".score").textContent);
        sCore--;
        document.querySelector(".score").textContent = " " + sCore;
    }
    if (gNum > numRandom){
        showMessege("Too high!"); 
        let sCore =Number(document.querySelector(".score").textContent);
        sCore--;
        document.querySelector(".score").textContent = " " + sCore;
    }
    if (gNum == numRandom){
        document.querySelector(".number").textContent = numRandom;
        showMessege("YAY...You win the game."); 
        let highSore =Number(document.querySelector(".high-score").textContent) ;
        document.body.classList.add("myStyle1");
        if(sCore > highSore){
            document.querySelector(".high-score").textContent = sCore;
        }
    }
}
}
}
})
document.querySelector(".btn1").addEventListener('click', function(){
    document.querySelector(".guessNumber").value = null;
    document.querySelector(".score").textContent = 10;
    document.querySelector(".number").textContent = null;
    document.body.classList.remove("myStyle1");
    document.body.classList.remove("myStyle2");
    numRandom = Math.trunc(Math.random()*20) +1;
    showMessege("Start Guessing....");

})

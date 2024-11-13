let Gameseq =[];
let Userseq =[];

let btns =["yello","red","purple","green"]

let h2 = document.querySelector("h2");

let started = false;
let  level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        started= true;
        levelup();
    }
},);
  

function gameFlash(btn){
btn.classList.add("flash");
setTimeout (function(){
    btn.classList.remove("flash")
},250);


}
function userFlash(btn){
btn.classList.add("userflash");
setTimeout (function(){
    btn.classList.remove("userflash")
},250)
}


function levelup(){
    Userseq =[];
    level++;
    h2.innerText = `level ${level}`;
    let randInx = Math.floor(Math.random()*3);
    let randbackgroundColor =btns[randInx];
    let randbtn = document.querySelector(`.${randbackgroundColor}`)
    //console.log(randbtn)
    //console.log(randbackgroundColor)
    //console.log(randInx)
    Gameseq.push(randbackgroundColor);
    console.log(Gameseq)
    gameFlash(randbtn);
};

function checkAns(idx){
   if  (Userseq[idx] === Gameseq[idx]){
     if(Userseq.length == Gameseq.length){
    setTimeout(levelup,1000);
     }
   } else {
     h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start`;
     document.querySelector("body").style.backgroundColor = "red";
     setTimeout( function(){
document.querySelector("body").style.backgroundColor = "white";
     },150)
     reset();
   }
}

function btnpress(){
    
    let btn = this;
    userFlash(btn)

    userbackgroundColor = btn.getAttribute("id");
    console.log(userbackgroundColor)
     Userseq.push(userbackgroundColor)
    checkAns(Userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started = false;
    Gameseq =[];
    Userseq = [];
    level = 0;
}
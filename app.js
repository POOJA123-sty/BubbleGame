const bottom = document.querySelector("#bottom");
let score =document.querySelector(".score");
let hit = document.querySelector(".hit");
let timerBox=document.querySelector(".timer");


let scoreValue = 0;
let hitValue="";
let timer=10;
let interval;




function generatRandomNumber(){
    return Math.floor(Math.random()*20);
}

function createBubble(){
    let cluster ="";
    for(let i=1 ; i<=203; i++){
        let randomValue =generatRandomNumber()
        cluster += `<div class="circle">${randomValue}</div>` 
    }
    bottom.innerHTML =cluster;
}

function increaseScore(){
    scoreValue +=10;
    score.innerText=scoreValue;
}

function getHit(){
    hitValue = generatRandomNumber();
    hit.innerText = hitValue;
}
function timerStart(){
    timerBox.innerHTML = timer
    interval=setInterval(()=>{
        timer--;
        timerBox.innerHTML = timer
        
        if(timer<=0){
            clearInterval(interval);
            hit.innerHTML = "0"
            bottom.innerHTML =""
            bottom.classList.add("center")
            bottom.innerHTML = `<div class ="card">
                <h1>Game Over</h1>
                <h2>Score : <span>${scoreValue}</span></h2>
            <div class ="playBtn">
            <i class="fa-solid fa-play" style="color: #e80660;"></i>

            </div>
            </div>`
            document.querySelector(".playBtn").addEventListener("click",()=>{
                createBubble()
                bottom.classList.remove("center")
                getHit()
                timer =10;
                timerBox.innerHTML = timer
                timerStart()
                scoreValue=0;
                score.innerHTML = scoreValue;
            })
        }
    },1000);
}
timerStart()
bottom.addEventListener("click", function(e){

    let clickednum = Number(e.target.innerText);
    if(clickednum === hitValue){
        increaseScore();
        
        createBubble();
        getHit();

    }

})
createBubble();
// increaseScore();
getHit();

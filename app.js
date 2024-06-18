let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score")
const compGame =()=>{
const options=["Rock","paper","scissors"];
// rock,paper,scissors
const randIx=Math.floor(Math.random()*3);
return options[randIx];
}
const drawGame=()=>{
console.log("Game is Draw");
msg.innerText="Game is Draw";
msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userChoice,compChoice)=>{
if(userwin){
console.log("you win!");
userScore++;
userScore1.innerText=userScore;
userScore1.style.color="white";
msg.innerText=`You Win!Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
}else{
console.log("You lose!play again");
compScore++;
compScore1.innerText=compScore;
compScore1.style.color="white";
msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
msg.style.backgroundColor="red";
}
};
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // computer choice
    const compChoice = compGame();
    console.log("compChoice = ",compChoice)
    if(userChoice === compChoice){
    // draw
    drawGame();
    }else{
    let userwin=true;
    if (userChoice==="Rock"){
    // paper,scissors
    userwin=compChoice==="paper"?false :true;
    }else if(userChoice==="paper"){
    // rock,scissors
    userwin=compChoice==="scissors"?false:true;
    }else{
    // rock,paper
    userwin=compChoice==="Rock"?false :true
    }
    showWinner(userwin,userChoice,compChoice);
    }
    }
    choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
    });
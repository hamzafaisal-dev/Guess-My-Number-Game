'use strict';

const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".again");
let randomNumber = Math.floor(1 + Math.random() * 20); //generates a random number b/w 1 and 20
let currentScore = document.querySelector(".score"); //stores the current score text
let highScore = document.querySelector(".highscore"); //stores the current high score text
let displayMessage = document.querySelector(".message"); //displays whether user's guess is higher or lower 
let currentScoreCount = 20;
console.log(`Random number is ${randomNumber}`);

const updateCount = function(){
    currentScoreCount = currentScoreCount - 1;
    currentScore.innerHTML = currentScoreCount;   
};

checkButton.addEventListener('click', function(){ 

    let guessValue = document.querySelector(".guess").value; //stores the user's input value

    if(guessValue == ""){
        alert(`No value entered!`);
    }

    else if(guessValue !== randomNumber && currentScoreCount === 1){
        displayMessage.innerHTML = "No more tries left!";
        updateCount();
    }

    else if(guessValue > randomNumber && currentScoreCount >= 1){
        displayMessage.innerHTML = "Too high!";
        updateCount();
    }

    else if(guessValue < randomNumber && currentScoreCount >= 1){
        displayMessage.innerHTML = "Too low!";
        updateCount();
    }

    else if(guessValue == randomNumber && currentScoreCount >= 1){
        displayMessage.innerHTML = "Correct! You win!";
        document.querySelector(".number").textContent = guessValue;
        document.querySelector("body").style.backgroundColor = "#60b347";

        if(currentScoreCount > highScore.innerHTML){
            highScore.innerHTML = currentScoreCount;
        }
    }
});

resetButton.addEventListener("click", function(){
    currentScoreCount = 20;
    displayMessage.innerHTML = "Start guessing...";
    currentScore.innerHTML = 20;
    highScore.innerHTML = 0;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    randomNumber = Math.floor(1 + Math.random() * 20);
});






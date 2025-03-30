var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; 
var link1 = document.querySelectorAll("img")[0];
link1.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; 
var link2 = document.querySelectorAll("img")[1];
link2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
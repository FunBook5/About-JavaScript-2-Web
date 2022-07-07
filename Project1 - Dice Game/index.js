var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber1 = "Images/dice"+randomNumber1+".png";
var randomDiceNumber2 = "Images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceNumber1); 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceNumber2); 


if(randomDiceNumber1<randomDiceNumber2){
    document.querySelector('h1').textContent = "Player2 Wins";
}

else if(randomDiceNumber1>randomDiceNumber2){
    document.querySelector('h1').textContent = "Player1 Wins";
}

else{
    document.querySelector('h1').textContent = "Tie";
}


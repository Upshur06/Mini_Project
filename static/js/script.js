// Challenge 1: Your Age in Days
let flexBoxResult = document.getElementById('flex-box-result');
let catsContainer = document.getElementById('catsContainer');

let ageInDays = function(){
    let birthYear = prompt('Please Enter the year you were born');
    let currentYear = prompt('Please Enter the current year');
    let days = 365;
    let displayAgeInDays = (currentYear - birthYear) * days;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You are ${displayAgeInDays} days old!!!`)
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    flexBoxResult.appendChild(h1);
}

let reset = function(){
    flexBoxResult.remove();
}

// Challenge 2: Cat Generator
let generate = function(){
    let wildcatS = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsFWhP6teYmjKCD6CXtGGOAFvKE0__RT3Sg&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2LqumZ9p8tEheYOgMM2DpidU7mz0QE14gg&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZeRjWNZXYcU4plyD8Vh_d-N2SEsRShLfeQ&usqp=CAU&reload=on",
     "https://i.pinimg.com/originals/3b/fe/1c/3bfe1c2b9962af417c5fd208d5e343f5.jpg",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzWdEsjiAWZhHndrmiTK_rxhYMzTghw9EZA&usqp=CAU", 
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzGkPogEiVLbsuUmQdeFgKnpcFbbk-nEkzA&usqp=CAU"];

    //  for(let i=0;i<=wildcatS.length-1;i++){
        let catImage = document.createElement('img');
        catImage.setAttribute("src",wildcatS[1]);
        catImage.setAttribute('class', 'wildcats');
        catsContainer.appendChild(catImage);
        // }
}


// Challenge 3: Rock, Paper, Scissors
let rpsGame = function(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    
    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

let randToRpsInt = function(){
    return Math.floor(Math.random() *3 );
}

let numberToChoice = function(number){
    return ["rock", "paper", "scissors"][number];
}

let decideWinner = function(yourChoice, computerChoice){
    let rpsDataBase = {
        "rock": {"scissors" : 1, "rock" : 0.5, "paper" : 0},
        "paper": {"rock" : 1, "paper" : 0.5, "scissors" : 0},
        "scissors": {"paper" : 1, "scissors" : 0.5, "rock" : 0}
    };

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

let finalMessage = function([yourScore, computerScore]) {

    return (yourScore === 0) ? {'message': 'You Lost!', 'color': 'red'} : (yourScore === 0.5) ? {'message': 'You Tied!', 'color': 'yellow'} : {'message': 'You Won!', 'color': 'green'}    
}

let rpsFrontEnd = function(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src, 
        'paper' : document.getElementById('paper').src, 
        'scissors' : document.getElementById('scissors').src, 
    }

    document.getElementById('rock').remove(); 
    document.getElementById('paper').remove(); 
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
   
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);  
}

// Challenge 4: Change the Color of All Buttons
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

let buttonColorChange = function(buttonThingy){
    (buttonThingy.value === "red") ? buttonsRed() : (buttonThingy.value === "green") ? buttonsGreen() : (buttonThingy.value === "reset") ? buttonColorReset() : randomColors()
}


let buttonsRed = function(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}


let buttonsGreen = function(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

let buttonColorReset = function(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

let randomColors = function(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]}
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lostSound = new Audio('static/sounds/aww.mp3');

let randomCard = function(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

let dealerLogic = function(){
    let card = randomCard();
    console.log(card);
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    console.log(DEALER['score']);
}

let blackjackHit = function() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}


let showCard = function(card, activePlayer) {
    if(activePlayer['score'] <= 21){
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

let blackjackDeal = function() {
    showResult(computeWinner());
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }

    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }
     YOU['score'] = 0;
     DEALER['score'] = 0;

     document.querySelector('#your-blackjack-result').textContent = 0;
     document.querySelector('#your-blackjack-result').style.color = '#ffffff';
     document.querySelector('#dealer-blackjack-result').textContent = 0;
     document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
}

let updateScore = function(card, activePlayer){
    if(card === 'A'){
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

let showScore = function(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

let computeWinner = function(){
    let winner;

    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            console.log('You Won!');
            winner = YOU;
        } else if(YOU['score'] < DEALER['score']){
            console.log('You Lost!');
            winner = DEALER;
        } else if(YOU['score'] === DEALER['score']){
            console.log('You Drew!')
        }
    } else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        console.log('You Lost!');
        winner = DEALER;
    } else if(YOU['score'] > 21 && DEALER['score'] > 21){
        console.log('You Drew!');
    }
    console.log('winner is', winner);
    return winner;
}

let showResult = function(winner){
    let message, messageColor;

    if(winner === YOU){
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    } else if(winner === DEALER){
        message = 'You Lost!';
        messageColor = 'red',
        lostSound.play();
    } else {
        message = "You Drew!";
        messageColor = 'black'
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
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
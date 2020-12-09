// Challenge 1: Your Age in Days

let flexBoxResult = document.getElementById('flex-box-result');

function ageInDays(){

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

function reset(){
    flexBoxResult.remove();
}
// Challenge 1: Your Age in Days

let flexBoxResult = document.getElementById('flex-box-result');


let days = 365;

function ageInDays(){

    let birthYear = prompt('Please Enter the year you were born');
    let currentYear = prompt('Please Enter the current year');
    let ageInDays = (currentYear - birthYear) * days;
    flexBoxResult.innerHTML = `You are ${ageInDays} days old!!!`;
}


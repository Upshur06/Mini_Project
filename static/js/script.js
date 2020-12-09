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


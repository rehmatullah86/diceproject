///alert("Connection Successful");

let randomNumber1 = Math.random(); /////////Generate number between 0 and 1
randomNumber1 = randomNumber1 * 6 + 1; /////Generate the number between 1 and 6 including decimal points
randomNumber1 = Math.floor(randomNumber1); /////Generate the number between 1 and 6 whole number

////console.log(randomNumber1);

//////////////////Action for the Dice 1
let randomDiceImage = "dice" + randomNumber1 + ".png"; ////Select the Dice images from 1 to 6
let randomImageSource = "assets/images/" + randomDiceImage; /// Get the actual image from the assets files

let image1 = document.querySelectorAll("img")[0]; ///////Select the class of img from the HTML file
image1.setAttribute("src", randomImageSource);

//////////////////Action for the Dice 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber2);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "assets/images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

/////////Conditions to check for winner
//////if Player 1 Wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins🏆";
} //////if Player 2 Wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🏆";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw!!!";
}

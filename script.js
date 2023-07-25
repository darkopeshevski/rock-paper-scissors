

const myAnswer = prompt('Enter: "Rock", "Paper", or "Scissors".');

const myAnswerFormatted = myAnswer.toLowerCase();


// a function to return a random result from the ai player .
function getComputerChoice() {
  const aiPlayerArray = ['Rock', 'Paper', 'Scissors'];
  const aiCalc = Math.floor(Math.random() * aiPlayerArray.length);

  const aiAnswer = aiPlayerArray[aiCalc];
  const aiAnswerToLowerCase = aiAnswer.toLowerCase();
  return aiAnswerToLowerCase;
}


// a function to perform all the conditional logic and return a result to be displayed in an alert() or a console.log() function.

function playAround(playerOne, aiPLayer) {

  let result;

  if (playerOne == 'rock' && aiPLayer == 'rock') {
    result = "It's a tie! You've chosen the same!";
  } 
  else if (playerOne == 'rock' && aiPLayer == 'scissors') {
    result = "You win! rock beats scissors!";
  }
  else if (playerOne == 'rock' && aiPLayer == 'paper') {
    result = 'The AI player wins. paper beats rock.';
  }
  else if (playerOne == 'paper' && aiPLayer == 'rock') {
    result = 'You win! paper beats rock!';
  }
  else if (playerOne == 'paper' && aiPLayer == 'paper') {
    result = "It's a tie! You've chosen the same!";
  }
  else if (playerOne == 'paper' && aiPLayer == 'scissors') {
    result = 'The AI player wins. scissors beats paper.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'rock') {
    result = 'The AI player wins. rock beats scissors.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'paper') {
    result = 'You win! scissors beats paper.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'scissors') {
    result = 'It is a tie! You have chosen the same!';
  }
  else {
    result = 'Wrong input, try again';
  }
  
  if (result != 'Wrong input, try again') {
    alert(`The AI player has chosen: ${aiPLayer}!`)
  }

  return result;
  

}

// the official function call

alert(playAround(myAnswerFormatted, getComputerChoice()));



var wins = 0;
var draws = 0;
var losses = 0;

function choose(choice) {
  if(choice == 0) {
    document.getElementById("player").src="svg/rock.svg";
    document.getElementById("opponent").src="svg/mystery.svg";
    removeColors();
    document.getElementById("outcome").innerText="...";
    setTimeout(function() { whoWins(0); }, 300);
  } 
  else if(choice == 1) {
    document.getElementById("player").src="svg/paper.svg";
    document.getElementById("opponent").src="svg/mystery.svg";
    removeColors();
    document.getElementById("outcome").innerText="...";
    setTimeout(function() { whoWins(1); }, 300);
  }
  else {
    document.getElementById("player").src="svg/scissors.svg";
    document.getElementById("opponent").src="svg/mystery.svg";
    removeColors();
    document.getElementById("outcome").innerText="...";
    setTimeout(function() { whoWins(2); }, 300);
  }
}

function updateOppImg(opponentChoice) {
  if(opponentChoice == 0) {
    document.getElementById("opponent").src="svg/rock.svg";
  } 
  else if(opponentChoice == 1) {
    document.getElementById("opponent").src="svg/paper.svg";
  }
  else {
    document.getElementById("opponent").src="svg/scissors.svg";
  }
}

function updateRecords(outcome) {
  removeColors();
  switch (outcome) {
    case 0:
      losses += 1;
      document.getElementById("outcome").innerText="Loss!";
      document.getElementById("outcome").classList.add("red");
      document.getElementById("losses").innerText="Losses: " + losses.toString();
      break;
    case 1:
      wins += 1;
      document.getElementById("outcome").innerText="Win!";
      document.getElementById("outcome").classList.add("green");
      document.getElementById("wins").innerText="Wins: " + wins.toString();
      break;
    case 2:
      draws += 1;
      document.getElementById("outcome").innerText="Draw!";
      document.getElementById("outcome").classList.add("gray");
      document.getElementById("draws").innerText="Draws: " + draws.toString();
      break;
  }
}

function whoWins(playerChoice) {
  opponentChoice = Math.floor(Math.random() * 3);
  updateOppImg(opponentChoice);
  outcome = -1;
  switch(playerChoice) {
    case 0:
      if(opponentChoice == 0) {
        console.log("draw")
        outcome = 2;
      }
      else if(opponentChoice == 1) {
        console.log("lose")
        outcome = 0;
      }
      else {
        console.log("win")
        outcome = 1;
      }
      break;
    case 1:
      if(opponentChoice == 0) {
        console.log("win")
        outcome = 1;
      }
      else if(opponentChoice == 1) {
        console.log("draw")
        outcome = 2;
      }
      else {
        console.log("lose")
        outcome = 0;
      }
      break;
    case 2:
      if(opponentChoice == 0) {
        console.log("lose")
        outcome = 0;
      }
      else if(opponentChoice == 1) {
        console.log("win")
        outcome = 1;
      }
      else {
        console.log("draw")
        outcome = 2;
      }
      break;
    default:
      console.log("Fail")
      break;
  }

  updateRecords(outcome)
}

function removeColors() {
  document.getElementById("outcome").classList.remove("green");
  document.getElementById("outcome").classList.remove("red");
  document.getElementById("outcome").classList.remove("gray");
}
$(function() {
  // variables to keep track of the scores of
  // the user and the computer
  let userScore = 0;
  let computerScore = 0;
  let message;
  let options = ["rock", "paper", "scissors"];

  /*
    Provided code: Listen for click on all buttons
  */
  $("button").click(compare);

  function compare() {

    /*
      Provide Code: Hard Code the computer choice (for now)
      later in the lab you will make this dynamic
    */
    // let computerChoice = "rock";

    /*
      Provided Code: Identify the User Choice (i.e. which button they clicked)
      This code uses $(this) to help us figure out which button the user clicked
    */
    let userChoice = $(this).attr('id');
    console.log('user selected: ', userChoice);
    

    /*
      1. Add your logic that compares the computerChoice to
         the userChoice

         Whoever wins the round (user or computer) should get a point
    */
    if (userChoice === 'rock' & computerChoice === 'rock') {
      // tie
      message = "You played rock. The bot played rock. You tied. :|";

    } else if (userChoice === 'paper' & computerChoice === 'paper') {
      // tie
      message = "You played paper. The bot played paper. You tied. :|";

    } else if (userChoice === 'scissors' & computerChoice === 'scissors') {
      // tie
      message = "You played scissors. The bot played scissors. You tied. :|";

    } else if (userChoice === 'rock' & computerChoice === 'scissors') {
      // user wins
      message = "You played rock. The bot played scissors. You win. >)";
      userScore = userScore + 1;

    } else if (userChoice === 'scissors' & computerChoice === 'paper') {
      // user wins
      message = "You played scissors. The bot played papers. You win. >|";
      userScore = userScore + 1;

    } else if (userChoice === 'paper' & computerChoice === 'rock') {
      // user win
      message = "You played paper. The bot played rock. You win. >|";
      userScore = userScore + 1;

  } else if (userChoice === 'paper' & computerChoice === 'scissors') {
      // user lose
      message = "You played paper. The bot played scissors. You lose. :(";
      computerScore = computerScore + 1;

  } else if (userChoice === 'scissors' & computerChoice === 'rock') {
      // user lose
      message = "You played scissors. The bot played rock. You lose. :(";
      computerScore = computerScore + 1;

  } else if (userChoice === 'rock' & computerChoice === 'paper') {
      // user lose
      message = "You played rock. The bot played paper. You lose. :(";
      computerScore = computerScore + 1;

    } else {
      message = "Something funny's going on here";
    }

    /*
      2. Display the results to the page

    */
    $("#humanScore").text(userScore);
    $("#computerScore").text(computerScore);
    $("#status").text(message);
  }

});

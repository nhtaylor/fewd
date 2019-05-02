$(function() {
  // add code here


  // variable that represents randomly generated number
  let randomNumber  = generateRandomNumber;
  let remainingGuesses = 5;


  // listen for submit event on #guessForm
  $("#guessForm").submit(handleGuess);
  $("#reset").click(resetGame);

  function handleGuess(event) {
    console.log(event);

    // prevent the default behavior of
    // our html form so it does not
    // try to submit form to some backend server
    event.preventDefault();

    // console.log("submitting form");

    // grab value from text field #guessForm
    // convert to an integer number
    // store converted value into a varianble named guess
    let guess = parseInt($("#guess").val());
    let message;
    // console.log("value of guess variable", guess)

    // getting our logic down
    // by using console log firt
    // then writing text to the correct class
    if (guess === randomNumber) {
      // console.log("you guess correctly!");
      message = "you guessed correctly!";
      resetGame;
      // $(".message").text("you guessed correctly!");

    } else if (guess > randomNumber) {
      // console.log("you guessed too high!");
      message = "you guessed too high!";
      // $(".message").text("you guessed too high!");
      //decrease remainingGuesses by 1 for incorrect attempt
      remainingGuesses = remainingGuesses - 1

    } else if (guess < randomNumber) {
      // console.log("you guessed too low!");
      message = "you guessed too low!";
      // $(".message").text("you guessed too low!");
      //decrease remainingGuesses by 1 for incorrect attempt
      remainingGuesses = remainingGuesses - 1

    } else {
      // console.log("something funny's going on here");
      message = "something funny's going on here"
      // $(".message").text("something funny's going on here");
      //decrease remainingGuesses by 1 for dumb attempt
      remainingGuesses = remainingGuesses - 1
    }
    $(".message").text(message);

    // getting the guesses accurate
    // console.log("remainingGuesses", remainingGuesses);
    // clear out text field after guess is evaluated
    guess = $("#guess").val("");
    // display remaining guesses to screen
    $("#numberOfGuessesRemaining").text(remainingGuesses);

    // check to see if user has exhausted guess count
    // if so show an alert and reset remainingGuesses
    if (remainingGuesses === 0) {
      alert("game over, loser! please play again");
      // calling on reset function to reset game
      resetGame();
    }
    $("#numberOfGuessesRemaining").text(remainingGuesses);
  }

  function resetGame() {
    // reset number of remaining guesses when 5
    remainingGuesses = 5;
    $("#numberOfGuessesRemaining").text(remainingGuesses);

    // reset game if if user guessed correctly
    if (guess === randomNumber) {
      resetGame();
    }

    //clear message field
    $(".message").text("");
    randomNumber = generateRandomNumber();
    // make alerts that you won or lost
    // optional
  }

  function generateRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 100) + 1;
  }




});

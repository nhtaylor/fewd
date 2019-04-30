$(function() {
  // add code here


  // listen for submit event on #guess guessForm
  $("#guessForm").submit(handleGuess);

  function handleGuess(event) {
    // prevent the default behavior of
    // our html form so it does not
    // try to submit form to some backend server

    event.preventDefault();

    console.log("submitting form");

  }





});

$(function() {
  // variables to keep track of the scores of 
  // the user and the computer
  let userScore = 0;
  let computerScore = 0;

  /*
    Provided code: Listen for click on all buttons
  */
  $("button").click(compare);

  function compare() {

    /*
      Provide Code: Hard Code the computer choice (for now)
      later in the lab you will make this dynamic
    */
    let computerChoice = "rock";

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


    /*
      2. Display the results to the page

    */
  }

});

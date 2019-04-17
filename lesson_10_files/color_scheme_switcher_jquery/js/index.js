$(document).ready(function(){

  $('#grayButton').click(switchGray);
  $('#whiteButton').click(switchWhite);

  function switchGray() {
    // The following code reads as the following:
    // "Select the body tag and add a 'class' attribute with a value of 'gray'"
    $('body').attr('class', 'gray');
  }

  function switchWhite(){
    $('body').attr('class', 'white');
  }

  // 1) Add the code to accomodate using jQuery
  //    to make the other buttons work as expected

  // 2) Add two additional buttons

  // Extra Credit
  // - Add a link labeled "Show / Hide Buttons"
  // - When users click on the link the following should happen
  // -- if the buttons are showing, then pressing the link should Hide them
  // -- if the buttons are not showing, then pressing the link should Show them
  // -- Hint: Google is your friend
});

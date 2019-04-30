$(function() {
  // document ready function; a safety measure
});

$(function() {

  let inputA;
  let inputB;

  $("#submit").click(compare);

  function compare() {
    console.log('user clicked submit button')
    // use jquery .val() to grab Numbers
    // from textfileds
    inputA = $("#a").val();
    inputB = $("#b").val();

    // make sure we're grabbing what we want
    console.log("inputA", inputA);
    console.log("inputB", inputB);

    // convert values to numbers
    // values from html are always strings
    // need conversion to ints
    let convertedInputA = parseInt(inputA);
    let convertedInputB = parseInt(inputB);

    // add variable that will represent compareSymbol
    // (>, <, or =)
    let compareSymbol;

    if (convertedInputA > convertedInputB) {
      console.log("A > B");
      compareSymbol = ">";
    } else if (convertedInputA < convertedInputB) {
      console.log("A < B");
      compareSymbol = "<";
    } else {
      console.log("A = B");
      compareSymbol = "=";
    }

    // write comparesymbol to screen
    $("#comparison").text(compareSymbol)

  }




});

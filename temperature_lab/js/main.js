$(function() {

  let inputTemp = 0

  $("#tempForm").submit(convertTemp);

  function convertTemp(event){
    // stop from refreshing page
    event.preventDefault();

    // convert attempted message
    console.log('convertTemp attempted');

    // grab inputTemp and store it in our variable
    input = parseFloat($("#inputTemp").val());
    console.log('inputed temp:', input);

    // turn celsius to fahrenheit
    inputTemp = ((input * 9/5) + 32);
    console.log('converted temp:', inputTemp);

    // show new converted Temperature
    $("#outputTemp").text(inputTemp);

    // Make background color

    if (inputTemp > 79) {
    $("#body").attr.(class, "hot");
    } else if (inputTemp < 55) {
    $("#body").attr("cold");
    } else {
    $("#body").attr("breezy");
    }



  }

});

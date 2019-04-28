$(function() {

  let isLightOn = true;

  $("#light-switch").click(flashies);

  function flashies() {
    console.log("calling flashies");

    if (isLightOn === true) {

      $("body").addClass("dark");
      // remove class of .dark
      isLightOn = false;
      console.log('isLightOn', isLightOn)
    } else {

      $("body").removeClass("dark");
      // apply class of .dark, from css
      isLightOn = true;
      console.log('isLightOn', isLightOn)

    }


  }








});

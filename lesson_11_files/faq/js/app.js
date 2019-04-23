$(function(){
  console.log('ready!');

  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();

  $("#question1").click(showAnswer1);
  $("#question2").click(showAnswer2);
  $("#question3").click(showAnswer3);

  function showAnswer1() {
   // $("#answer1").show();
   $("#answer1").slideDown("slow");
   console.log('calling showAnswer1');
  }

  function showAnswer2() {
   // $("#answer2").show();
   $("#answer2").slideToggle("slow");
   console.log('calling showAnswer2');
  }

  function showAnswer3() {
   $("#answer3").show();
   console.log('calling showAnswer3');
  }

});

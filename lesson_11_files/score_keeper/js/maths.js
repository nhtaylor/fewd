$(function(){

  let score = 0;

  function resetNil(){
    console.log('calling resetNil');
    score = 0;
    $("#result").text(score);
    console.log(score);
  }


  function plusFive(){
    console.log('calling plusFive');
    score = score + 5;
    $("#result").text(score);
    console.log(score);
  }

  function plusTen(){
    console.log('calling plusTen');
    score = score + 10;
    $("#result").text(score);
    console.log(score);
  }

  function minusOne(){
    console.log('calling minusOne');
    score = score - 1;
    $("#result").text(score);
    console.log(score);
  }

  $("#zero").click(resetNil);
  $("#add5").click(plusFive);
  $("#add10").click(plusTen);
  $("#sub1").click(minusOne);





});

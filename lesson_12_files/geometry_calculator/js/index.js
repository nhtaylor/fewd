$(function() {
	// Add your listeners here
  $("#calculateRectangleArea").click(handleRectangleCalc);
  $("#calculateTriangleArea").click(handleTriangleCalc);
  $("#calculateSphereArea").click(handleSphereCalc);

	// Add your functions here
  function handleRectangleCalc(){
    console.log('user clicked on calculate rectangle area button');

    let rectangleWidth;
    let rectangleHeight;

    // extract value from text fields using .val();
    // and use parse int all on one line
    rectangleWidth = parseInt ( $("#rectangleWidth").val() );
    rectangleHeight = parseInt ( $("#rectangleHeight").val() );

    console.log("rectangleWidth", rectangleWidth);
    console.log("rectangleHeight", rectangleHeight);


    let rectangleResult = calculateRectangleArea(rectangleWidth, rectangleHeight);

    // print rectangleResult to screen
    $("#rectangleAreaResult .answer").text(rectangleResult);
  }

  function calculateRectangleArea(width, height){
    return width * height;
  }


  function handleTriangleCalc() {
    let triangleHeight;
    let triangleBase;

    triangleBase = parseInt ( $("#triangleBase").val() );
    triangleHeight = parseInt ( $("#triangleHeight").val() );

    let triangleResult = calculateTriangleArea(triangleBase, triangleHeight);

    $("#triangleAreaResult .answer").text(triangleResult);
  }

// need to do circle area AND sphere area


  function calculateTriangleArea(width, height) {
    return (width * height) / 2;
  }


  function handleSphereCalc() {
    let sphereRadius;

    sphereRadius = parseInt ( $("#sphereRadius").val() );

    let SphereResult = calculateSurfaceAreaOfSphere(sphereRadius);

    $("#surfaceAreaOfSphereResult .answer").text(surfaceAreaOfSphereResult);
  }

  function calculateSurfaceAreaOfSphere(radius) {
    return (4 * Math.pow(radius, 2) * Math.PI);
  }


});

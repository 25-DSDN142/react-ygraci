// ----=  HANDS  =----
/* load images here */
let Frokie;

function prepareInteraction() {
  Frokie = loadImage('/images/Frokie.png');
}

function drawInteraction(faces, hands) {
  // hands part
  
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    // This is how to load in the x and y of a point on the hand.
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    let pinkyFingerTipX = hand.pinky_finger_tip.x;
    let pinkyFingerTipY = hand.pinky_finger_tip.y;

    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;

    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;

    /*
    Start drawing on the hands here
    
    */
    //pokeBallWhite(hand); 
    //pokeBallRed(hand);
    //pokeBallBackButton(hand);
    //pokeBallBigButton(hand);
    //pokeBallSmallButton(hand);
    
     //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);
  image(Frokie, middleFingerTipX/1.6, thumbTipY/1.6, pinch, pinch);

    //lec examples 
    //fill(225, 225, 0);
    //ellipse(indexFingerTipX, indexFingerTipY, 30, 30);
    //drawPoints(hand)
    //fingerPuppet(indexFingerTipX, indexFingerTipY);
    //chameleonHandPuppet(hand)


    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
}

//full pokeball code (does not work)
function pokeBall(hand) {

  //lec used code to make the pokeball follow my fingers 
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);


  strokeWeight(7);//ball
  fill (360);//white
  arc(700, 400, 400, 400, 5, 175, CHORD);//bottom half
  fill(255,0,0);//red
  arc(700, 400, 400, 400, 175, 5, CHORD);//top half
  
  strokeWeight(5);//button
  fill(99,99,99);//dary grey
  circle(700, 415, 115); //dark circle 
  fill (227,227,227); //light grey
  circle(700, 415, 85); //big buttion 
  circle(700, 415, 45); //small bution 

  angleMode(DEGREES);
  strokeWeight(7);//ball

  fill (360);//white
  arc(centerX, centerY, pinch, pinch, 5, 175, CHORD);//bottom half
  fill(255,0,0);//red
  arc(centerX, centerY, pinch, pinch, 175, 5, CHORD);//top half
  
  strokeWeight(5);//button
  fill(99,99,99);//dary grey
  circle(centerX, centerY+15, pinch/3.4); //dark circle 
  fill (227,227,227); //light grey
  circle(centerX, centerY+15, pinch/4.7); //big buttion 
  circle(centerX, centerY+15, pinch/8.8); //small bution 
}


//top red half
function pokeBallRed(hand) {
  
  //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);


  angleMode(DEGREES);
  strokeWeight(7);//ball

  fill(255,0,0);//red
  arc(centerX, centerY, pinch, pinch, 175, 5, CHORD);//top half
}

//lower white half
function pokeBallWhite(hand) {
  
  //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);


  angleMode(DEGREES);
  strokeWeight(7);//ball

  fill (360);//white
  arc(centerX, centerY, pinch, pinch, 5, 175, CHORD);//bottom half
}
//Back button
function pokeBallBackButton(hand) {

  //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);


  strokeWeight(5);//button
  fill(99,99,99);//dary grey
  circle(centerX, centerY+15, pinch/3.4); //dark circle 
}

//Big button
function pokeBallBigButton(hand) {

  //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);
  
  strokeWeight(5);//button
  fill (227,227,227); //light grey
  circle(centerX, centerY+15, pinch/4.7); //big buttion 
}

//Small button
  function pokeBallSmallButton(hand) {

  //lec used code to make the pokeball follow my fingers
  // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (middle.x + thumb.x) / 2;
  let centerY = (middle.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);

  strokeWeight(5);//button
  fill (227,227,227); //light grey
  circle(centerX, centerY+15, pinch/8.89); //small bution 
}


// lec examples 

function fingerPuppet(hand) {
  fill(255, 38, 219) // pink
  ellipse(centerX, y, 100, 20)
  ellipse(centerX, y, 20, 100)

  fill(255, 252, 48) // yellow
  ellipse(centerX, y, 20) // draw center 

}


function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}

function chameleonHandPuppet(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;

  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

  let indexFingerTipX = hand.index_finger_tip.x;
  let indexFingerTipY = hand.index_finger_tip.y;
  fill(0)
  circle(indexFingerTipX, indexFingerTipY, 20);

}

function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}
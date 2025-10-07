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

    // Find the index finger tip and thumb tip
  let middle = hand.middle_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(middle.x, middle.y, thumb.x, thumb.y);

    /*
    Start drawing on the hands here
    
    */
    //pokeBallWhite(hand); 
    //pokeBallRed(hand);
    //pokeBallBackButton(hand);
    //pokeBallBigButton(hand);
    //pokeBallSmallButton(hand);
   
    //pokeBall(hand);
  
    image(Frokie, middleFingerTipX/1.6, thumbTipY/1.6, pinch, pinch);
 


    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
}

//full pokeball code (does not work)
function pokeBall(hand) {

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
  fill(255,0,0);//red
  arc(centerX, centerY, pinch, pinch, 175, 5, CHORD);//top half
  
  strokeWeight(5);//button
  fill(99,99,99);//dary grey
  circle(centerX, centerY+15, pinch/3.4); //back circle 
  fill (227,227,227); //light grey
  circle(centerX, centerY+15, pinch/4.7); //big buttion 
  circle(centerX, centerY+15, pinch/8.8); //small bution 
}


// ----=  HANDS  =----
  let Frokie;
function prepareInteraction() {
  Frokie = loadImage('/images/Frokie.png');
  }

  let isMouthOpen = false;
  let goPokeball = true; 

function drawInteraction(faces, hands) {

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"


  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;

    // Find the index finger tip and thumb tip
    let index = hand.index_finger_tip.x;
    //let finger = hand.pinky_finger_tip;
    let thumb = hand.thumb_tip;

  
    /*
    Start drawing on the hands here
    */
    if (goPokeball) {
    pokeBall(hand)
    } 
    else {
    image(Frokie, indexFingerTipX/1.6, indexFingerTipY/2, 450, 450);
    }
    
    /*
    Stop drawing on the hands here
    */
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

  //------------------------------------------------------------
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }
    // console.log(face);
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */

    /*
    Start drawing on the face here
    */
checkIfMouthOpen(face);

    if (isMouthOpen == false) {
      goPokeball=true
    }

    if (isMouthOpen == true) {
      goPokeball=false
    } 

    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function checkIfMouthOpen(face) {

  let upperLip = face.keypoints[13]
  let lowerLip = face.keypoints[14]
  // ellipse(lowerLip.x,lowerLip.y,20)
  // ellipse(upperLip.x,upperLip.y,20)

  let d = dist(upperLip.x, upperLip.y, lowerLip.x, lowerLip.y);
  //console.log(d)
  if (d < 10) {
    isMouthOpen = false;
  } else {
    isMouthOpen = true;
  }

}
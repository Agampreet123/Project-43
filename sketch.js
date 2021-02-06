var hr = hour();
var mn = minute();
var sc = second();
var hrAngle,mnAngle,scAngle



function setup() {
  createCanvas(800,400);
  
  
}

function draw() {
  background(0); 
  angleMode(DEGREES);
  
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  arc(200,200,50,50);
  line(200,200,50,50);
pop();
mnAngle = map(mn,0,60,0,360);
push();
rotate(mnAngle);
stroke(99,247,0);
strokeWeight(7);
arc(200,100,50,50)
line(200,100,50,50);
pop();

  hrAngle = map(hr%12,0,24,0,360);
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  arc(200,0,50,50)
  line(200,0,50,50);
pop();
  drawSprites();
}
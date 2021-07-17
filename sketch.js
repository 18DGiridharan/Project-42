var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);

  text('Current hour:\n' + hr, 5, 50);
  text('Current minute:\n' + mn, 5, 50);
  text('Current second:\n' + sc, 5, 50);
}

function draw() {
  background(0,0,0);
  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 138, 224);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(187, 138, 255);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(138, 200, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  stroke(255, 255, 255);
  point(0, 0);

  strokeWeight(10);
  noFill();

  stroke(255, 138, 224);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(187, 138, 255);
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke(138, 200, 255);
  arc(0, 0, 260, 260, 0, hrAngle);
}
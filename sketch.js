let randColors = [[255,218,185],[255,192,203],[139,0,0],[0,191,255],[138,43,226]]
let color = randColors[Math.floor(Math.random()*5)];

function setup() {
  let canvas = createCanvas(400,400);
  centerCanvas(canvas);
  background(255);

  // border around canvas
  line(0,400,400,400); line(400,0,400,400);
  line(0,0,0,400); line(400,0,0,0);
}

function centerCanvas(canvas) {
  let x = (windowWidth - width) / 2;
  let y = 165;
  canvas.position(x,y);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  //background(220);
  // strokeWeight(4);

  // peach square
  stroke(255,218,185); fill(255,218,185); rect(325,325,50,50)

  // pink square
  stroke(255,192,203); fill(255,192,203); rect(250,325,50,50)

  // maroon sqaure
  stroke(139,0,0); fill(139,0,0); rect(175,325,50,50)

  // blue square
  stroke(0,191,255); fill(0,191,255); rect(100,325,50,50)

  // purple square
  stroke(138,43,226); fill(138,43,226); rect(25,325,50,50)

  if (mouseIsPressed) {
    stroke(color[0],color[1],color[2])
    fill(color[0],color[1],color[2])
    
    ellipse(mouseX,mouseY,15,15);
  }

  
}

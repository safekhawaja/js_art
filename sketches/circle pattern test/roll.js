var n = 20;
var X = 0;
var Y = 200;
var D = 400;

function setup() {
  createCanvas(640, 400);
  background(0);
  }
  
function draw() {
  strokeWeight(4);
  stroke(255);
  
  for (let n = 0; n < 640; n +=20) {
    stroke (255);
    line(n, 0, n, height);
    
    if (n > 400) {   
      noStroke();
      fill(0);
      ellipse(X,Y,D);
    
    X = X+.2
    }
  }
}

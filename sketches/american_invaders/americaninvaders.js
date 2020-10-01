// https://www.coursescript.com/notes/interactivecomputing/images/
// https://www.geeksforgeeks.org/p5-js-loadimage-function/
var x = 1;
var speed = 1.5;

function setup() {
    createCanvas(600, 400);
  }
  
function draw() {
  for (var y = 0; y < height; y += 50) {
    background(0);
    stroke(255);
    strokeWeight(5);
    noFill();
    ellipse(x, y, 100, 100);
    if (x > width || x < 0) {
        speed = speed * (-1.5);
    } 

    y +=50
    x = x + speed;
     }
}
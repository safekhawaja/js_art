var ship;
var bush = [];
var shoe;

function setup() {
  createCanvas(600,400);
  ship = new Ship();
  shoe = new Shoe(width/2, height/2);
  for (var i = 0; i<5; i++) {
    bush[i] = new Bush(i*80 + 80, 20);
  }
}

function draw() {
  background(51);
  ship.show();
  shoe.show();
  for (var i = 0; i< bush.length; i++) {
    bush[i].show;
  }
}











function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode == LEFT_ARROW) {
    ship.move(-1);
  }
}
/* var x = 1;
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
*/
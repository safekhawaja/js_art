var ship;
var bush = [];
var shoes = [];

function setup() {
  createCanvas(600,400);
  ship = new Ship();
  for (var i = 0; i<5; i++) {
    bush[i] = new Bush(i*80 + 80, 20);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i< shoe.length; i++) {
    shoe[i].show;
    shoe[i].move;
  }

  var edge = false;

  for (var i = 0; i< bush.length; i++) {
    bush[i].show;
    bush[i].move;
    if (bush[i].x > width || bush[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i< bush.length; i++) {
      bush[i].shiftDown();
    }
  }
  
  for (var j = 0; j< bush.length; j++) {
    if (shoes[i].hits(bush[j])) {
      console.log("FREEDOM");
      shoes[i].missed();
      //need to remove bush
    }
  }  

  for (var i = shoes.length - 1; i >= 0; i--) {
    if (shoes[i].toDelete){
      shoes.splice(i, 1);
    }
  }

function keyPressed() {
  if (key === ' ') {
    var shoe = new Shoe(ship.x, height);
    shoes.push(drop);
  }

  if (keyCode == RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
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
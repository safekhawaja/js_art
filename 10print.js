//Thank you to Dan Shiffman for the tutorial!

var x = 0;
var y = 0;

function setup() {
    createCanvas(640, 360);
    background(255);
}

function draw() {
    //Drawing initial lines at angles of either +45 or -45 degrees
    if (random(1) > 0.5) {
        line(x, y, x+20, y+20);
    }
    else {
        line(x, y+20, x+20, y);
    }

    //Starting again from end of line
    x += 20
    if (x > width) {
        x=0;
        y+=20;
    }

    //Full reset after hitting bottom right corner
    if (y > height) {
        background(255);
        x=0;
        y=0;
    }
}
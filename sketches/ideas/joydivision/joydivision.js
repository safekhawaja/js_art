var x = 0;
var y = 40;
var dx;
var wave = {
    theta : random(360),
    period : (1280-300),
} 

//wave.theta

function setup() {
    createCanvas(1080, 720);
    background(255);
}

function draw() {
    for (var y = 40; y < height; y +=20) {
        strokeWeight(5);
        fill(0);
        line(300, y, 1080, y);
    }
}
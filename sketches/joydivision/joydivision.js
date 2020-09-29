var x = 0;
//var theta = random(360); 
//var period = (1280-300);
//var dx;

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
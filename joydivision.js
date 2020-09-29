var y = 0;
var theta = random(360); 
var period = (1280-300);
var dx;


function setup() {
    createCanvas(1080, 720);
    background(255);
}

//each line is randomly generated sine wave, draw each line with steps of uniform width across canvas

function draw() {
    for (let y = 40; y < height; y +=25)
        line(300, y, 1280, y);

        if (y == height) {
            delay(5000)
            background(255);
            y=0;
        }
//random(1) > 0.5

}
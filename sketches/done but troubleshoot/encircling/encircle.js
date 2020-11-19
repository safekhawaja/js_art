let theta = 0;
angleMode(DEGREES);

function setup() {
  createCanvas(1440, 700);
  
}

function draw() {
  background(0);
  
  translate(width/2, height/2);
  rotate(theta);
  
  noStroke();
  fill(255);
  ellipse(-50, 0, 150, 150);
  ellipse(+50, 0, 150, 150);
  
  for(var y=0; y < height; y+=40) {
        for(var x=0; x<width; x+=40){
        stroke(255);
        noFill();
        ellipse(-150, 0, 150, 150);
        ellipse(150, 0, 150, 150);
        }
    }
  
  theta = theta + 0.05;
}
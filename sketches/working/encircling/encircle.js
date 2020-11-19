var theta = 0;

function setup() {
  createCanvas(1440, 700);
}

function draw() {
  background(0);
  
  push();
  
  translate(width/2, height/2);
  rotate(theta);
  
  noStroke();
  fill(255);
  ellipse(-50, 0, 150, 150);
  ellipse(+50, 0, 150, 150);
  
  pop();
  
  for(var y=0; y < height; y+=120) {
        for(var x=0; x<width; x+=120) {
          push();
          
          translate(x,y);
          rotate(theta);
          
          strokeWeight(5); 
          stroke(255);
          noFill();
          ellipse(25, 25, 150, 150);
          ellipse(-25, -25, 150, 150);
          
          pop();
        }
    }
  
  theta = theta + 0.05;
}
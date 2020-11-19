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
  polygon(-50, 0, 150, 9);
  polygon(+50, 0, 150, 9);
  
  pop();
  
  for(var y=0; y < height; y+=150) {
        for(var x=0; x<width; x+=150) {
          push();
          
          translate(x,y);
          rotate(-theta);
          
          strokeWeight(8); 
          stroke(255);
          noFill();
          
          polygon(0,0,120,9)
          
          pop();
        }
    }
  
  theta = theta + 0.005;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
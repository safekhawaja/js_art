function setup() {
    createCanvas(400, 400);
    x_filling = map(mouseX, 0, 400, 255, 0);
  }
  
  function draw() {
    if (mouseIsPressed || (mouseX > height / 2)) {
      y_filling = random(0, 255);
      fill(y_filling);
      } else {
        fill(x_filling);
      }
    noStroke();
    ellipse(mouseX, mouseY, 80, 80);
  }
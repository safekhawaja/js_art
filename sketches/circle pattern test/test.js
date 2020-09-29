function setup() {
    createCanvas(400, 400);
    x_filling = map(mouseX, 0, 400, 0, 255)
    y_filling = map(mouseY, 0, 400, 255, 0)
  }
  
  function draw() {
    if (mouseIsPressed) {
        fill(y_filling);
      } else {
        fill(x_filling);
      }
    ellipse(mouseX, mouseY, 80, 80);
  }
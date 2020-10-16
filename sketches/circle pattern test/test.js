var y_fillings = [];

function setup() {
    createCanvas(400, 400);
    x_filling = map(mouseX, 0, 400, 255, 0);
  }
  
function draw() {
    if (mouseY > height / 2) {
        for (var i = 0; i< 3; i++) {
            y_fillings[i] = random(255);
        }

        fill(y_fillings[0], y_fillings[1], y_fillings[2]);
    } 
  
    else if (mouseIsPressed) {
        fill(255);
    }
    
    else {
        fill(x_filling, random(255), random(255));
    }
    
    // noStroke();
    ellipse(mouseX, mouseY, 40, 40);
}

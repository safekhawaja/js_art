//https://p5js.org/examples/typography-words.html
function preload() {
    font = loadFont('/Users/saif/Documents/GitHub/js_art/sketches/woah/SuisseIntl.otf');
  }

function setup() {
    createCanvas(1080, 720);
    extraCanvas = createGraphics(1080, 720);
    background(255);
  }
 
  function variableWoah(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    textFont(font, speed*10);
    fill(0);
    if (speed > 10) {
      text('woahhhh', x, y);
    } 
    else {
      text('woah', x, y)
    }
  }

  function draw() {
    noStroke();
    colorspeed = map(speed, 0, 100, 50, 200);
    fill(colorspeed);
    extraCanvas.ellipse(x, y, 24, 24);
    
    variableWoah(mouseX, mouseY, pmouseX, pmouseY);
  }
  

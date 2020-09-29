function preload() {
    font = loadFont('/Users/saif/Documents/GitHub/js_art/sketches/woah/SuisseIntl.otf');
  }

function setup() {
    createCanvas(710, 400);
    background(102);
  }
  
  function draw() {
    variableWoah(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  function variableWoah(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    textFont(font);
    fill(0);
    fontsize(speed);
    text('woah', x, y);
  }
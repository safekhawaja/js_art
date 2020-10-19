let bubbles = [];
let bubble3;
let dim = [100, 300, 30];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        bubbles[i] = new Bubble(x, y, 40);
    }
    bubble3 = new Bubble(dim[0], dim[1], dim[2]);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubble[i].move();
        bubble[i].show();
    }
    
    /* for (let bubble of bubbles) {
        bubble.move;
        bubble.show;
    }
    */
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(+5, -5);
        this.y = this.y + random(+5, -5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r*2, 24);
    }
}
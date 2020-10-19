function Bush(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.xdir=1;

    this.show = function() {
        noStroke();
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown = function() {
        this.y = this.y + this.r;
        this.xdir = this.xdir * -1;
    }
}
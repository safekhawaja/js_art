function Bush(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, 60, 60);
    }
}
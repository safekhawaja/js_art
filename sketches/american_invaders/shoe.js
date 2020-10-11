function Shoe(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        fill(50, 0, 200);
        ellipse(this.x, this.y, 8, 8);
    }

    this.move = function() {
        this.y = this.y - 1;
    }
}
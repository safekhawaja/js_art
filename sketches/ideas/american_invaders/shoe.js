function Shoe(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = function() {
        noStroke();
        fill(150, 0, 255);
        ellipse(this.x, this.y, this.r*2, 8);
    }

    this.hits = function(bush) {
        var d = dist(this.x, this.y, bush.x, bush.y);
        if (d < this.r + bush.r) {
            return true;
        } else {
            return false;
        }
    }

    this.missed = function() {
        this.toDelete = true;
    }

    this.move = function() {
        this.y = this.y - 5;
    }
}
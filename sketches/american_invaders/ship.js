function Ship () {
    this.x = width/2;

    this.show = function() {
        rectMode(CENTER);
        rect(this.x, height-20, 20, 20);
    }

    this.move = function(dir) {
        this.x += dir*5;
    }
}
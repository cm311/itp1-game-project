(function() {
    function Canyon(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    Canyon.prototype.draw = function(x, y) {
        noStroke();
        fill(this.color);
        rect(x - this.width / 2, y, this.width, this.height);
    }
    window.Canyon = Canyon;
}())

class Stone {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(stone_img, pos.x, pos.y, this.w, this.h);
        strokeWeight(1);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        noStroke();
        pop();
        }
}
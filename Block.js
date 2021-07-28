class Block
{
    constructor(x, y, width, height)
    {
        var options = {isStatic: false, restitution: 0.5, density: 1, friction: 0.5};
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
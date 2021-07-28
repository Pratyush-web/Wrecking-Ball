class Ball
{
    constructor(x, y, r)
    {
        var options = {isStatic: false, density: 2, friction: 0.5, restitution: 0.5};
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
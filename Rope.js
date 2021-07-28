class Rope 
{
    constructor(body1, point2)
    {
        var options = {bodyA: body1, pointB: point2, length: 150, stiffness: 0.1};
        this.pointB = point2;
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
    }

    fly()
    {
        this.rope.bodyA = null;
    }

    display()
    {
        if(this.rope.bodyA)
        {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();   
        }
    }
}
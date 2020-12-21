class Particle
{
    constructor(x,y,r)
    {
        
        var options=
        {
         
            isStatic: false,
          density:3.0,
         
            restitution:0.4,
          
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display()
    {
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);

    }
}
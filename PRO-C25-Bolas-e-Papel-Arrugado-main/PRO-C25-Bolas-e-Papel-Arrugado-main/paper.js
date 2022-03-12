class paper
{
	constructor(x,y,r,angle)
	{
		var options={
		   isStatic:false,
		   restitution:0.3,
		   friction:0,
		   density:1.2,
		}

		this.x=x;
		this.y=y;
		this.r=r;
		this.angle=angle;
		this.image=loadImage("paper.png");
		
		//this.body=bodies.circle(this.x, this.y, (this.r-20)/2, options);
		//this.body=Body.circle(this.x, this.y, (this.r-20)/2, options);
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        Matter.Body.setAngle(this.body, angle);
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			//translate(pos.x, pos.y);
			//translate(0, 0);

			rectMode(CENTER)
			fill(255,0,255)

			//image(center);
            //imageMode(center);
            imageMode(CENTER);

			image(this.image, 0,0,this.r, this.r)
			
			
			pop()
			
	}

}
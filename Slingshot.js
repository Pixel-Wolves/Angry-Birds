class Slingshot{
    constructor(bodyA, pointB, lenghtChain){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            lenght : lenghtChain,
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            stroke(84,39,15);

            if(pointA.x < 220){
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 35, pointB.y);
                image(this.sling3, pointA.x-25, pointA.y-10, 15, 30);
            }
            else{
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3, pointA.x+25, pointA.y-10, 15, 30);
            }
        }

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
    }

    fly(){
        this.sling.bodyA = null;
    }
}
class Slingshot{
    constructor(bodyA, pointB, lenghtChain){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            lenght : lenghtChain,
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
}
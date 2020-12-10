class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the sling shot
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //take the rgb value from colorzilla to draw the rubber band
            stroke(48,22,8);
           // get the base of the rubber band infront of the bird when we pull it before the slingshot
            if(pointA.x<220){
                //draw the rubber band and display the base of th rubber band , give it rubber band effect(thin when streched)
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x-30, pointA.y-10,15,30) 
                strokeWeight(7);  
            }else{
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25, pointA.y-10,15,30)
                strokeWeight(3);
            }
        }
    }
    
}
class Rope {
    constructor(bodyA,bodyB,xoffset){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:xoffset,y:0},
            
            
            
         }

         this.rope = Constraint.create(options);
         this.xoffset = xoffset;
         World.add(world,this.rope);

    }

    display(){
        stroke("white");
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x + this.xoffset ,pointB.y);
    }
}
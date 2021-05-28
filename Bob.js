class Bob {
    constructor(x){
        var options = {
            restitution : 1,
            friction : 0.3,
            density : 0.8
        }

        this.body = Bodies.circle(x,300,25,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("pink");
        ellipse(pos.x,300,50,50);
    }
}
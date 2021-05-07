class Slingshot{
    constructor(x,y){
    var options = {
        bodyA:x,
        pointB:y,
        length:10,
        stiffness:0.04
    }
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
    this.pointB = y
    }
    attach(x){
        this.sling.bodyA = x
    }
    fly(){
      this.sling.bodyA = null  
    }
    display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    push()
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
    }
    }
    }
    
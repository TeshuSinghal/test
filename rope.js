class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 0.4,
            length: 20
            
        }
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
    }
    display(){
        push();
        strokeWeight(2);
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
 
 }
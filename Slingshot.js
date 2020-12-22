class Slingshot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.075,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
fly(){

this.sling.bodyA=null

}
    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


        }
     
    }
    
}
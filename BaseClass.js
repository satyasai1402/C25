class BaseClass{
    constructor(x,y,w,h,angle1){
        var options={
            restiturion: 0.8,
            friction: 1.0,
            density: 1.5
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("sprites/base.png");
        World.add(world,this.body);
    }
        display(){
        var angle=this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}
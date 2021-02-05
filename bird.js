class bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/bird.png");
    }
    display(){
        this.body.position.x=World.mouseX;
        this.body.position.y=World.mouseY;
        super.display();
    }
}

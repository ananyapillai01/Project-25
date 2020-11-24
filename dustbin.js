class DustBin{
    constructor(x, y ){
        var options = {
            resitutuion: 0.4,
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.thickness = 20;
        this.width = 200;
        this.height = 212;
        this.image = loadImage("dustbingreen.png");
        this.bottomBody = Bodies.rectangle(x, y, this.thickness, this.width, this.thickness,options);
        this.leftBody = Bodies.rectangle(x-this.width/2, y-this.widht/2, this.thickness, this.thickness, this.height,options);
        this.rightBody = Bodies.rectangle(x+ this.width/2, y+this.width/2, this.thickness, this.thickness, this.height,options);

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      
    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;

       

        push();
        translate(posLeft.x, posLeft.y);
     
       // rectMode(CENTER);
        fill(255);
        pop();

        push();
        translate(posRight.x, posRight.y);
      
        //rectMode(CENTER);
        fill(255);
        pop();

        push();
        translate(posBottom.x, posBottom.y);
  
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        fill(255);
        pop();

       
    }
}
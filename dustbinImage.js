class DustbinImage  {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 240;
      this.height = 240;
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);
     
      image(this.image,0, 0, this.width,this.height);
      pop(); 
    }
  };
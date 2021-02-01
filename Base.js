class Base {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 40;
      this.height = 40;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);
     
      image(this.image,0, 0, this.width, this.height);
      pop(); 
    }
  };
  
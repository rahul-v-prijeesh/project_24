class bin {
    constructor(x, y,width,height) {
        var options = {
            'restitution':0,
            'friction':400,
            'density':900
        }
      this.body = Bodies.rectangle(x, y, width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      rectMode(CENTER);
      fill(255);
      
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  
  
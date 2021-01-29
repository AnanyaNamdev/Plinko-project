class Plinko {
    constructor(x,y) {
      var options = {
          retitution:1,
          friction:0,
          isStatic: true
      }
      this.r = 10;
      this.body = Bodies.circle(x,y, this.r, options);
      World.add(world, this.body);
    }
    display(){

      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate();
      noStroke();
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
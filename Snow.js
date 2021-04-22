class Snow{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0

        }
        console.log(x, y, width, height)
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width ;
        this.height = height;
        var rand = round(random(1,2));
        switch(rand) {
          case 1: this.image = loadImage("snow4.webp");
                  break;
          case 2: this.image = loadImage("snow5.webp");
                  break;
                  default: break;
        }
        World.add(world, this.body);

      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.image,0,0,this.width,this.height);
        pop();
      }
}
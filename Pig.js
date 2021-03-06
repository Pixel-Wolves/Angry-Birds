class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }

  display(){
    //console.log(this.body.speed);
    
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visiblity -= 5;
      tint(255, this.visiblity);
      image(this.image, this.body.position.x-25, this.body.position.y-25, 50, 50, this.body.angle);
      pop();
    }
  }

  score(){
    var scored = false;
    
    if(this.visiblity < 0 && this.visiblity > -10 && scored == false){
      score += 1;
      scored = true;
    }
  }
};
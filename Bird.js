class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.arr1 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>300 && this.body.velocity.x>10){
      var birdpos = [this.body.position.x,this.body.position.y];
      this.arr1.push(birdpos);
    }
    for(var i=0;i<this.arr1.length;i++){
      image(this.image1,this.arr1[i][0],this.arr1[i][1]);
    }
  }
}

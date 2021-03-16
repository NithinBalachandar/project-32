class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
      this.Visiblity = 255;
    }

 

    
    display(){

     if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       this.Visiblity = this.Visiblity - 5;
     }
     
   }

   score(){
    if(this.Visiblity<0 && this.Visiblity>-500){
      //console.log("score function is running")
      score = score+1;
    }
  }
  
  
  
}

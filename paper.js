class paper
{
     constructor(x,y,r)
     {
           var options={
             isStatic:false
             density:1.2
             friction:0.5
             restitution: 3
            
            }
          this.x=x
          this.y=y
          this.r=r
          this.body=Bodies.circle(this.x,this.y,this.r/2,options)
          World.add(world,this.body)
           
          display(){
               var pos =this.body.position;
               rectMode(CENTER);
               fill("brown");
               rect(pos.x, pos.y, this.width, this.height);
             }
       




     }



















}
class Wall{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h); 
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        strokeWeight(3);
        stroke(rgb(220, 20, 60 ));
        rect(this.x, this.y, this.w, this.h);
        fill(rgb(220, 20, 60));
        pop();
    }
}
    

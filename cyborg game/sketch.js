const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
var cyborg, cyborgIdleImg, background;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;


function preload() {
    cyborgIdleImg = loadAnimation("sprites/MainCharacterIdle.png");

}

function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    
    cyborg=createSprite(200,200);
    cyborg.addAnimation("idle", cyborgIdleImg);

    wall1 = new Wall(300,300,30,30);
    World.add(world, wall1);
    wall2 = new Wall(350,102,30,30);
    World.add(world, wall2);
    wall3 = new Wall(27,305,30,30);
    World.add(world, wall3);
    wall4 = new Wall(92,30,30,30);
    World.add(world, wall4);
}

function draw(){
    background("gray");
    if(keyDown("a")){
        cyborg.x -= 5;
    }

    if(keyDown("d")){
        cyborg.x += 5;
    }

    if(keyDown("w")){
        cyborg.y -= 5;
    }

    if(keyDown("s")){
        cyborg.y += 5;
    }
    
    drawSprites();

    wall1.show();
    wall2.show();
    wall3.show();
    wall4.show();

   if(cyborg.collide(wall1)){
        wall1.destroy();
        wall1.debug = true;
    }
    if(cyborg.collide(wall2)){
        wall2.destroy();
        wall2.debug = true;
    }
    if(cyborg.collide(wall3)){
        wall3.destroy();
        wall3.debug = true;
    }
    if(cyborg.collide(wall4)){
        wall4.destroy();
        wall4.debug = true;
    }
    
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var box1, pig1;
var bg = "sprites/bg";
var backgroundImg = false;
var shooted = false;

var platform;
var gameState = "OnSling";
//var contrainedLog, chain;
//var log6;

var slingshot;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(180,305,300,170);

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    log6 = new Log(230,180,80,PI/2);

    slingshot = new Slingshot(bird.body,{x:200, y:50},10, shooted, gameState);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

        noStroke();
        textSize(35);
        fill("white")
        text("SCORE:" + score, width - 300, 50);

    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score(score);
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score(score);
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    platform.display();
    //log6.display();
    //chain.display();

    slingshot.display();
    slingshot.stretchString();
}

function mouseReleased(){
    slingshot.fly();
    gameState = "Launched";
}

function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body,{x:200, y:50});
        gameState = "OnSling";
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJSON = await response.json();
    
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if(hour >= 06 && hour<=18){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
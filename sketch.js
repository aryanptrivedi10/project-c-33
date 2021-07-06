var background
var createSprite

function preload() {
 background("snow3.jpg") = loadImage; 
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  background("snow3.jpg") = addImage;
}

function draw() {
  background(255,255,255);  

  drawSprites();
}
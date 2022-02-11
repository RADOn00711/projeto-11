//criando variaveis
var runner,runner_running;
var path,pathImage;
var leftBoundary;
var rightBoundary;
function preload(){
  //imagens pré-carregadas
runner_running = loadAnimation("Runner-1.png","runner-2.png");
pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,600);
  //crie sprite aqui
  path = createSprite(200,200);
  path.addImage("running",pathImage);
runner = createSprite(180,340,30,30);
runner.addAnimation("running", runner_running);
runner.scale = 0.08;

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary = createSprite(410, 0, 100,800);
rightBoundary.visible = false;
 

}

function draw() {
  background(0);

  path.velocityY = +5;

  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  

  if (keyIsDown(RIGHT_ARROW)) {
    runner.position.x = runner.position.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    runner.position.x = runner.position.x - 5;
  }
  
  if (path.y > 400) {
    path.y = height / 2;
  }
  drawSprites();
}


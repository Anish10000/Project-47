var bgImage
var enemy, enemyImage, enemyGroup
var player, playerImage
var bullet, bulletsGroup;
var edges = createEdgeSprite()
var score = 0;
var laserSound;

function preload() {
    bgImage = loadImage("assets/bg.jpg")
    enemyImage = loadImage("assets/enemy2.png")
    playerImage = loadImage("assets/player.png")
    laserSound = loadSound("assets/laser.mp3")

}

function setup() {
    createCanvas(windowWidth, windowHeight)


    player = createSprite(width / 2, height / 1.2)
    player.addImage(playerImage)
    player.scale = 0.1


    bulletGroup = createGroup()
    enemyGroup = createGroup()




}

function draw() {
    background(bgImage)

    if (keyIsDown(LEFT_ARROW)) {
        player.x = player.x - 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.x = player.x + 10;
    }

    if (keyIsDown(32)) {
        createBullets()

    }
    createEnemies()
    collideWithEnemy()




    drawSprites()

    fill("white")
    textSize(30)
    text("Score: " + score, 50, 50)



}

function createBullets() {
    if (frameCount % 7 == 0) {
        bullet = createSprite(player.x, player.y, 10, 40)
        bullet.shapeColor = "red"
        bullet.velocityY = -20;
        //console.log("createbullets")
        laserSound.play()

        bulletGroup.add(bullet)
        //bullet.lifetime = 197
    }



}

function createEnemies() {

    if (frameCount % 100 == 0) {
        enemy = createSprite(random(100, width - 100), -10)
        enemy.addImage(enemyImage)
        enemy.scale = 0.2
        enemy.velocityX = (random(-4, 5))
        enemy.velocityY = (random(2, 5))


        enemyGroup.add(enemy)

    }

}

function collideWithEnemy() {
    if (bulletGroup.isTouching(enemyGroup)) {
        enemyGroup.destroyEach()
        console.log("collide")

        score = score + 1;
    }


}

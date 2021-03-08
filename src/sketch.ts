
let pg: p5.Graphics

// -------------------
//       Drawing
// -------------------

function initializeMainSquare() {
    // Here you should put all the code of your mainSquare() function
    // And note that you have to prefix everything with "pg." so that it is drawn on the Graphics and not the screen directly !
    pg.background("red")
    pg.ellipse(0, 0, pg.width)
}

function drawMainSquare(centerX: number, centerY: number, rotation: number) {
    angleMode(DEGREES)
    imageMode(CENTER)
    push()
    translate(centerX, centerY)
    rotate(rotation)
    image(pg, 0, 0)
    pop()
}

function draw() {
    initializeMainSquare()
    drawMainSquare(width * 0.25, height * 0.25, 90)
    drawMainSquare(width * 0.75, height * 0.25, 180)
    drawMainSquare(width * 0.75, height * 0.75, 270)
    drawMainSquare(width * 0.25, height * 0.75, 0)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
    pg = createGraphics(width/2, height/2)
}

function windowResized() {
    p6_ResizeCanvas()
    pg.resizeCanvas(width/2, height/2)
}
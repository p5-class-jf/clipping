var pg;
function initializeMainSquare() {
    pg.background("red");
    pg.ellipse(0, 0, pg.width);
}
function drawMainSquare(centerX, centerY, rotation) {
    angleMode(DEGREES);
    imageMode(CENTER);
    push();
    translate(centerX, centerY);
    rotate(rotation);
    image(pg, 0, 0);
    pop();
}
function draw() {
    initializeMainSquare();
    drawMainSquare(width * 0.25, height * 0.25, 90);
    drawMainSquare(width * 0.75, height * 0.25, 180);
    drawMainSquare(width * 0.75, height * 0.75, 270);
    drawMainSquare(width * 0.25, height * 0.75, 0);
}
function setup() {
    p6_CreateCanvas();
    pg = createGraphics(width / 2, height / 2);
}
function windowResized() {
    p6_ResizeCanvas();
    pg.resizeCanvas(width / 2, height / 2);
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map
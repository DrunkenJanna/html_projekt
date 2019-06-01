let startingMouseX,
    body,
    startingPoint,
    columns,
    swipeRange;

function setup() {
    startingMouseX = 1;
    body = select('body');
    columns = selectAll(".column");
    swipeRange = 500;
}

function draw() {
    body.touchStarted(newStartingMouseX);
    body.mousePressed(newStartingMouseX);
}

function newStartingMouseX() {
    startingMouseX = mouseX;
}


function mouseDragged() {
    if (startingMouseX - mouseX < -swipeRange) {
        startingMouseX = mouseX;
        moveColumns("right");
    }
    if (mouseX - startingMouseX < -swipeRange) {
        startingMouseX = mouseX;
        moveColumns("left");

    }
}



function touchMoved() {

    if (startingMouseX - mouseX < -swipeRange) {
        startingMouseX = mouseX;
        moveColumns("right");
    }
    if (mouseX - startingMouseX < -swipeRange) {
        startingMouseX = mouseX;
        moveColumns("left");

    }
}


function moveColumns(direction) {
    if (direction == "right") {
        for (let j = 0; j < columns.length; j++) {

    } else if (direction == "left") {

    } else console.log("Wrong direction");
}

let startingMouseX,
    body,
    startingTouchX,
    columns,
    swipeRange,
    columnVariation,
    leftArrow,
    rightArrow,
    columnContainer;

function setup() {
    body = select('body');
    columns = selectAll(".column");
    swipeRange = 100;
    columnVariation = 0;
    leftArrow = select("#left_arrow");
    rightArrow = select("#right_arrow");
    columnContainer = select("#column_container")
}

function draw() {
    displayColumns();
    body.mousePressed(newStartingMouseX);
    //body.touchStarted(newStartingTouchX);
}

function newStartingMouseX() {
    startingMouseX = mouseX;
}

function touchStarted() {
    startingTouchX = touches[0].x;
    return false;

}

function displayColumns() {
    if (innerWidth < 450) {
        leftArrow.style("display", "block");
        rightArrow.style("display", "block");
        switch (columnVariation) {
            case 0:
                columns[0].style("display", "block");
                columns[1].style("display", "none");
                columns[2].style("display", "none");
                break;
            case 1:
                columns[0].style("display", "none");
                columns[1].style("display", "block");
                columns[2].style("display", "none");
                break;
            case 2:
                columns[0].style("display", "none");
                columns[1].style("display", "none");
                columns[2].style("display", "block");
                break;
        }
    } else if (innerWidth < 750) {
        leftArrow.style("display", "block");
        rightArrow.style("display", "block");
        switch (columnVariation) {
            case 0:
                columns[0].style("display", "block");
                columns[1].style("display", "block");
                columns[2].style("display", "none");
                columns[0].style("order", "1");
                columns[2].style("order", "3");
                break;
            case 1:
                columns[0].style("display", "none");
                columns[1].style("display", "block");
                columns[2].style("display", "block");
                columns[0].style("order", "1");
                columns[2].style("order", "3");
                break;
            case 2:
                columns[0].style("display", "block");
                columns[1].style("display", "none");
                columns[2].style("display", "block");
                columns[0].style("order", "3");
                columns[2].style("order", "1");
                break;
        }
    } else {
        for (let i = 0; i < columns.length; i++) {
            columns[i].style("display", "block");
        }
        leftArrow.style("display", "none");
        rightArrow.style("display", "none");
        columnContainer.style("width", "100%");

    }

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

    if (startingTouchX - mouseX < -swipeRange) {
        startingTouchX = mouseX;
        moveColumns("right");
    }
    if (mouseX - startingTouchX < -swipeRange) {
        startingTouchX = mouseX;
        moveColumns("left");
    }
}

function moveColumns(direction) {
    if (direction == "left") {
        if (columnVariation != columns.length - 1) columnVariation++;
        else columnVariation = 0;
    } else {
        if (columnVariation != 0) columnVariation--;
        else columnVariation = columns.length - 1;
    }
}

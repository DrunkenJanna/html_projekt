let startingMouseX,
    body,
    startingTouchX,
    columns,
    swipeRange,
    columnVariation,
    leftArrow,
    rightArrow,
    columnContainer,
    contentContainer,
    startingTouchY;

function setup() {
    columnVariation = 0;
    body = select('body');
    columns = selectAll(".column");
    contentContainer = select("#content_container");
    leftArrow = select("#left_arrow");
    rightArrow = select("#right_arrow");
    columnContainer = select("#column_container")
}

function draw() {
    swipeRange = innerWidth * 0.4;
    displayColumns();
    body.mousePressed(newStartingMouseX);
    //body.touchStarted(newStartingTouchX);
    leftArrow.mousePressed(() => moveColumns("left"));
    rightArrow.mousePressed(() => moveColumns("right"));    
    leftArrow.touchStarted(() => moveColumns("left"));
    rightArrow.touchStarted(() => moveColumns("right"));
}

//start swiping
function newStartingMouseX() {
    startingMouseX = mouseX;
}

function touchStarted() {
    if (touches.length > 0) {
        startingTouchX = touches[0].winX;
        startingTouchY = touches[0].winY;
    }
}

//checking if swiped
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
    if (abs(startingTouchX - touches[0].winX) > swipeRange * 0.25) {
        if (startingTouchX - touches[0].winX < -swipeRange) {
            startingTouchX = touches[0].winX;
            moveColumns("right");
        }
        if (touches[0].winX - startingTouchX < -swipeRange) {
            startingTouchX = touches[0].winX;
            moveColumns("left");
        }
    }
}

//displaying right columns
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

//moving columns
function moveColumns(direction) {
    if (direction == "left") {
        if (columnVariation != columns.length - 1) columnVariation++;
        else columnVariation = 0; //zmiana kolumn
    } else {
        if (columnVariation != 0) columnVariation--;
        else columnVariation = columns.length - 1;
    }
}

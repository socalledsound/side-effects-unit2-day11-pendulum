const scale = 100;
const offset = 200;
let x = 200, y = 200, ballR = 50;
let theta = 0;

function setup(){
    // everything in this function will stay the same, it runs once.
    //create a canvas to put our drawing on
    createCanvas(600, 600);
    //this is the width of the outline of the circle
    strokeWeight(6);
    //this is the color of the outline
    stroke(140,40,140);
    //this is the fill color of the circle
    fill(200,60,120);

    
}

function draw(){
    //we'll redraw the background white every frame
    background(255);
    // calculate a new x value using the function below
    x = calcX();
    //keep y the same
    y = 500;
    //draw a circle at x and y coordinates with a size of ballR
    ellipse(x, y, ballR);
    //increment this value, theta, every time through the loop
    theta+=0.05
}

// this function calculates x as the sin of theta times a scaling value plus and offset (above)
//Math.sin of theta will always be between -1 and 1
//this will keep our ball on the screen.
const calcX = () => Math.sin(theta) * scale + offset;

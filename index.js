
const gravity = 0.8;
const myPendulum = new Pendulum(400, 400, 50, gravity);

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(220, 220, 250);
    myPendulum.update();
    myPendulum.display();
}
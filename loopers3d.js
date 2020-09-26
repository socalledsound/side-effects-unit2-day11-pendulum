let angle = 0;
let bigAngle = 0;
let r = 40;
let loopers = [];
let inc = 50;

let cols = 40, rows = 40;

let img;

function preload(){

//   img = loadImage('sky.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(HSB);

    loopers = make2darray(cols, rows);
  
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      
      
      //let angle = i/width + j/height;
      //let angle = i+j*width;
      
      const xangle = map(mouseX, 0, width, -TWO_PI, TWO_PI);
      const yangle = map(mouseY, 0, height, -TWO_PI, TWO_PI);
      
      angle = (xangle * (i / width)) + (yangle * (j / height));
      
      //console.log(angle);
      c = map(angle, -2, 2, 0, 50); 
      
  
      loopers[i][j] = new Looper(i* (width/cols) - cols, j * (height/rows) - rows, angle, c);
  
    }
  }
  

}

function draw() {
  background(155,50);
   // push()
  
  // translate(-200,-200);
  // scale(10);
  // texture(img);
  // plane()
  // pop()
  
  translate(-width/2,-height/2, - height);
  scale(1.2);
  
  
 
  
  translate(width/2, height/2)
  rotateX(-90);
  rotateZ(30);
  translate(-width/2, -height/2);
  
  
  for(let i =0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        loopers[i][j].display();
  
      }
    }
bigAngle+=0.01
}


function Looper(bigX, bigY, angle, h){
  this.bigX = bigX
  this.bigY = bigY;
  this.angle = angle;
  this.waveAngle = this.angle;
  this.h = h;
  this.r = 0.5 - cos(this.h*17.0) * 255;
  this.g = 0.5- cos(this.h*13.0) * 255;
  this.b = 0.5-cos(this.h*23.0) * 255;
  
    
  
  this.display = function(){
      this.r = 0.5 - cos(this.h*17.0) * 255;
  this.g = 0.5- cos(this.h*13.0) * 255;
  this.b = 0.5-cos(this.h*23.0) * 255;
    
    
      let x = cos(this.angle * TWO_PI) * r;
      let y = sin(this.angle * TWO_PI) * r;
      
      noStroke();
     // fill(this.hue, 220,190,50);
      fill(this.r, this.g, this.b, 100);
      ellipse(this.bigX+x, this.bigY+ y, r * sin(this.waveAngle));

      noFill();
   // noStroke()
      ellipse(this.bigX, this.bigY, r*2);

     this.angle+=0.01;
      this.h+=0.005;
    this.waveAngle+=0.01;
      
    
  } 
}


function make2darray(cols, rows){

  let array = new Array(cols);
  
  for(let i=0; i < array.length; i++){
  
    array[i] = new Array(rows);
  
  }
  return array
}


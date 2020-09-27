class Pendulum {
    //the constructor method takes in the values that we pass in when we call new Pendulum()
    constructor(originX, frequency, ballRadius, gravity, index){
        //the starting point for the line, which will be 
        this.originX = originX;
        this.originY = 0;
        this.ballX = originX + frequency;
        this.ballY = this.originY + frequency;
        this.ballRadius = ballRadius;
        this.gravity = gravity;
        //frequency is controlled by the length of the line
        this.frequency = frequency;
        //the starting angle for our pendulum
        this.angle = Math.PI/2;
        this.angleVelocity = 0.0;
        this.angleAcceleration = 0.0;
        this.damping = 0.999;
        this.strokeColor = [140,40,140];
        this.strokeWeight = 6;
        this.fillColor = [200,60,120];
        //we'll set these to null to start with but supply the values in our setup function
        //and then update them in our update loop
        this.sound = null;
        this.ampMultiplier = index/100;
        this.lfo = null;
        // console.log(this.angle);
    }

    //the pendulum math is really all about the first line of this function which updates the angle acceleration
    updateAngle(){
        this.angleAcceleration = (-1 * gravity / this.frequency) * sin(this.angle);  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
        this.angleVelocity += this.angleAcceleration;                            // Increment velocity
        this.angleVelocity *= this.damping;                                  // Arbitrary damping
        this.angle += this.angleVelocity;    
    }

    updatePosition(){
        //these are the formulas we were using before to make a circle
        //but our angleAcceleration calculation keeps 
        this.ballX = Math.sin(this.angle) * this.frequency + this.originX;
        this.ballY = Math.cos(this.angle) * this.frequency; 
    }



    updateSound(){
        // console.log(this.sound);
        this.amp = Math.abs(Math.sin(Math.pow(4, this.angle)));
         console.log(this.amp);
        this.sound.amp(this.amp * this.ampMultiplier);
        this.sound.freq(this.lfo);
    }

    //I call this meta update function in the main draw loop and it calls the other update functions
    update(){
        this.updateAngle();
        this.updatePosition();
        this.updateSound();
    }

    display(){
        // console.log(this.ballX, this.ballY);
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);
        fill(this.fillColor);
        line(this.originX, this.originY, this.ballX, this.ballY);
        ellipse(this.ballX, this.ballY, this.ballRadius * 2);

    }

}

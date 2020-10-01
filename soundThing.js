
let sound, lfo;

let theta = 0;

function setup(){
    createCanvas(600, 600);
    lfo = new p5.Oscillator('sine');
    lfo.amp(1);
    lfo.freq(5000);

    sound = new p5.Oscillator('sine');
    sound.amp(0);
    sound.freq(lfo);
    sound.start();

}

function draw(){
   sound.freq(lfo);
    sound.amp(Math.sin(theta));
    theta+= 0.5;
}

const numPendulums = 4;
const gravity = 0.8;
// const myPendulum = new Pendulum(400, 400, 50, gravity);

//make an array of four pendulums
const pendulums = Array.from({ length: numPendulums },(e, i)=> {
    return new Pendulum(400, (i+1)*100, (i+1)*30, gravity, i)
});

//i made these values as I was playing with values to get more interesting sounds
const reversePendulums = pendulums.reverse();
const lfos = [500,1000,5000,10000];


function setup(){
    createCanvas(800, 800);

    //make a new sound for each pendulum
pendulums.forEach((pendulum, i) => {


  //here the new keyword is making a new Oscillator object of type 'sine' -- check p5.sound reference for more info
  const sound = new p5.Oscillator('sine');
  //start the sound
  sound.start();
  //make another new oscillator to use as an lfo, also of type sine
  const lfo = new p5.Oscillator('sine');
  //set the amplitude of the lfor from the array of values above -- notice the amplitude is really big
  lfo.amp(lfos[i]);
  //set the freqency from the lengths of the penudulm strings, but in reverse
  lfo.freq(reversePendulums[i].frequency * 1.4);
  //start the lfo but disconnect its output
  lfo.start();
  lfo.disconnect();
  //set the frequence of the sound to whatever the current frequency of the lfo is
  sound.freq(lfo);

  //assign this sound (and its lfo to a property on the current pendulum), which we can then use inside the pedulum object!
  pendulums[i].sound = sound;
  pendulums[i].lfo = lfo;

})
  


}

//notice how small and easy to read out draw loop is.  should we rewrite our setup function to be cleaner?  probably.  can you?
function draw(){
  //redraw the background
    background(220, 220, 250);

    //update and display the array of pendulums
    pendulums.forEach(pendulum => {
        pendulum.update();
        pendulum.display();
    })

}
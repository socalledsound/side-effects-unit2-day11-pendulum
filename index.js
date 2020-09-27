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


  const sound = new p5.Oscillator('sine');
//   sound.amp(0.8);
//   sound.freq(reversePendulums[i].frequency * 1.5);
//   sound.freq(600);
  sound.start();
 

  const lfo = new p5.Oscillator('sine');
  lfo.amp(lfos[i]);
  lfo.freq(reversePendulums[i].frequency * 1.4);
  lfo.start();
  lfo.disconnect();
  sound.freq(lfo);


  pendulums[i].sound = sound;
  pendulums[i].lfo = lfo;

})
  


}

function draw(){
    background(220, 220, 250);

    //update and display the array of pendulums
    pendulums.forEach(pendulum => {
        pendulum.update();
        pendulum.display();
    })

}
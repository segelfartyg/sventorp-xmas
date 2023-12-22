let firstDiceValue = 1
let secondDiceValue = 1

let firstDiceImageSrc = document.getElementById("firstDice");
let secondDiceImageSrc = document.getElementById("secondDice");



function throwTwo(){

    var audio = new Audio('./sounds/diceroll.mp3');
    audio.play();
    scrambleDice();

    let scrambleInterval = setInterval(() => {
            scrambleDice();
    }, 50);

    setTimeout(() => {

        launchOrdinaryGrafitti()
        let firstDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        firstDiceImageSrc.src = `./images/1dice${firstDiceValue}.png`
        
       
    
        let secondDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        secondDiceImageSrc.src = `./images/1dice${secondDiceValue}.png`

        clearInterval(scrambleInterval);
    
        if(firstDiceValue == 6 || secondDiceValue == 6){
    
            var audio = new Audio('./sounds/airhorn.mp3');
            audio.play();
            launchStarsGrafitti();
            showMessage("Ta ett paketjävel!!!!! SNURRA HÖGER");
        }

        if(firstDiceValue == secondDiceValue){
            showMessage("SNURRA VÄNNER");
            var audio = new Audio('./sounds/omgsound.mp3');
            audio.play();
        }
        
    }, 500);
   

}

function scrambleDice(){
        let firstDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        firstDiceImageSrc.src = `./images/1dice${firstDiceValue}.png`
        
        let secondDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        secondDiceImageSrc.src = `./images/1dice${secondDiceValue}.png`

}

function showMessage(message){
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);
    let popup = document.getElementById("popup");
    popup.innerHTML = message;
}


// CONFETTI STUFF
function launchOrdinaryGrafitti(){

const end = Date.now() + 2 * 1000;
const colors = ["#bb0000", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

}


function launchStarsGrafitti(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}
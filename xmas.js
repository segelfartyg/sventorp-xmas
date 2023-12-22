let firstDiceValue = 1
let secondDiceValue = 1

let firstDiceImageSrc = document.getElementById("firstDice");
let secondDiceImageSrc = document.getElementById("secondDice");

function throwTwo(){

    changeGIFs();
    var audio = new Audio('./sounds/diceroll.mp3');
    audio.play();
    scrambleDice();
    firstDiceImageSrc.style.animation = "shakeDice 0.15s infinite";
    
    secondDiceImageSrc.style.animation = "shakeDice 0.15s infinite";
    let scrambleInterval = setInterval(() => {

            scrambleDice();
    }, 50);

    setTimeout(() => {

       
        let firstDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        firstDiceImageSrc.src = `./images/1dice${firstDiceValue}.png`
        
       
    
        let secondDiceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        secondDiceImageSrc.src = `./images/1dice${secondDiceValue}.png`

        
    firstDiceImageSrc.style.animation = "none";
    
    secondDiceImageSrc.style.animation = "none";
        clearInterval(scrambleInterval);
    
        if(firstDiceValue == 6 || secondDiceValue == 6){
    
            var audio = new Audio('./sounds/airhorn.mp3');
            audio.play();
            launchStarsGrafitti();
            launchOrdinaryGrafitti()
            showMessage("SEXAAAAAAA!!!");
        }

        if(firstDiceValue == 1 || secondDiceValue == 1){
    
            var audio = new Audio('./sounds/airhorn.mp3');
            audio.play();
            launchStarsGrafitti();
            launchOrdinaryGrafitti()
            showMessage("ETTTTAAAAAAAAAA!!!");
        }

        if(firstDiceValue == secondDiceValue){
            showMessage("SAMMA PÅ BÅDA!!!");
            launchOrdinaryGrafitti()
            launchStarsGrafitti();
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

function changeGIFs(){
    let leftGIF = document.getElementById("leftGIF");
    let rightGIF = document.getElementById("rightGIF");

    let firstGIFValue = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    let secondGIFValue = Math.floor(Math.random() * (9 - 1 + 1) + 1);

    leftGIF.src = `./images/gif${firstGIFValue}.gif`
    
    rightGIF.src = `./images/gif${secondGIFValue}.gif`
}

function showMessage(message){
    let overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 2000);
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


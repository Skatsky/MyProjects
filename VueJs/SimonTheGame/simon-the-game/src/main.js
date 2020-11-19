import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')

let order = [];
let playerOrder = [];
let flash;
let turn;
let isCorrect;
let compTurn;
let intervalId;
let noise = true;
let isWin = true;
let cdTime;
let mode;

let audioOne = new Audio(require('./assets/sounds/1.mp3'));
let audioTwo = new Audio(require('./assets/sounds/2.mp3'));
let audioThree = new Audio(require('./assets/sounds/3.mp3'));
let audioFour = new Audio(require('./assets/sounds/4.mp3'));

const roundText = document.querySelector('#round-text');
const turnCounter = document.querySelector('#round-number');
const topRight = document.querySelector('.top-right-color');
const topLeft = document.querySelector('.top-left-color');
const bottomRight = document.querySelector('.bottom-right-color');
const bottomLeft = document.querySelector('.bottom-left-color');
const easyLevel = document.querySelector('#easy');
const normalLevel  = document.querySelector('#normal');
const hardLevel = document.querySelector('#hard');
const startBtn = document.querySelector('#startBtn');

mode = function () {
  if (easyLevel.checked) {
    cdTime = 1500;
    console.log('easy')
  } else if (normalLevel.checked) {
    cdTime = 1000;
    console.log('normal')
  } else if (hardLevel.checked) {
    cdTime = 800;
    console.log('hard') }
};

startBtn.addEventListener('click', (e) => {
  mode();
  if (isWin) {
    play();
  }
});

let turnn = function() {
  turnCounter.innerHTML = turn;
};

let play = function () {
  isWin = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnn();
  isCorrect = true;
  for (let i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4 ) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, cdTime);
};

function gameTurn() {

  if ( flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++
    }, 200)
  }
}

let one = function() {
  if (noise) {
    audioOne.play()
  }
  noise = true;
  topLeft.style.backgroundColor = 'lightgreen';
}

let two = function() {
  if (noise) {
    audioTwo.play()
  }
  noise = true;
  topRight.style.backgroundColor = 'gold';
}

let three = function() {
  if (noise) {
    audioThree.play()
  }
  noise = true;
  bottomLeft.style.backgroundColor = 'tomato';
}

let four = function() {
  if (noise) {
    audioFour.play()
  }
  noise = true;
  bottomRight.style.backgroundColor = 'dodgerblue';
}

let clearColor = function () {
  topLeft.style.backgroundColor = 'green';
  topRight.style.backgroundColor = 'yellow';
  bottomLeft.style.backgroundColor = 'red';
  bottomRight.style.backgroundColor = 'blue';
};

let flashColor = function () {
  topLeft.style.backgroundColor = 'lightgreen';
  topRight.style.backgroundColor = 'gold';
  bottomLeft.style.backgroundColor = 'tomato';
  bottomRight.style.backgroundColor = 'dodgerblue';
};

topLeft.addEventListener('click', (e) => {
    playerOrder.push(1);
    check();
    one();
    if(!isWin) {
      setTimeout(() => {
        clearColor()
      }, 300);
    }
})

topRight.addEventListener('click', (e) => {
    playerOrder.push(2);
    check();
    two();
    if(!isWin) {
      setTimeout(() => {
        clearColor()
      }, 300);
    }
})

bottomLeft.addEventListener('click', (e) => {
    playerOrder.push(3);
    check();
    three();
    if(!isWin) {
      setTimeout(() => {
        clearColor()
      }, 300);
    }
})

bottomRight.addEventListener('click', (e) => {
    playerOrder.push(4);
    check();
    four();
    if(!isWin) {
      setTimeout(() => {
        clearColor()
      }, 300);
    }
})

let check = function() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
  isCorrect = false;

  if (playerOrder.length == 20 && isCorrect) {
    winGame();
  }

  if (isCorrect != true) {
    flashColor();
    roundText.innerHTML = 'НЕВЕРНО!';
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
      play();
    }, 800);
    setTimeout(() => {
      roundText.innerHTML = 'ROUND';
    }, 800)
    noise = false;
  }

  if (turn == playerOrder.length && isCorrect && !isWin) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800)
  }
}

let winGame = function () {
  flashColor();
  turnCounter.innerHTML('WIN!');
  isWin = true;
}
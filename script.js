const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const startBtn = document.getElementById('start');
const takeBonusBtn = document.getElementById('takeBonus');
const controlBox = document.querySelector('.control');

document.addEventListener('keydown', function(event) {
    jump();
})

document.addEventListener('touchstart', function(event) {
    if (!event.target.closest('#takeBonus') && !event.target.closest('#start')) {
        jump();
        event.preventDefault();
    }
})

function startGame() {
    count = 0;
    document.getElementById('bonus').textContent = count;
    cactus.classList.add('start')
    controlBox.style.display = 'none'
    scoredForThisCactus = false;
}

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300);
}


let count = 0;
let lastCactusPosition = 0;
let scoredForThisCactus = false; 

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop < 140 && !scoredForThisCactus) {
        count += 1;
        document.getElementById('bonus').textContent = count;
        scoredForThisCactus = true;
    }

    if (cactusLeft <= 0) {
        scoredForThisCactus = false;
    }

    lastCactusPosition = cactusLeft;

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        cactus.classList.remove('start');
        controlBox.style.display = 'flex';
        takeBonusBtn.innerText = `Забрать ${count}`;
        takeBonusBtn.style.display = 'block';
        startBtn.innerText = 'Сыграть еще раз';
    }
}, 10);
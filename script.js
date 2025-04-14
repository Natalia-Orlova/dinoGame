const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const startBtn = document.getElementById('start');
const messageBox = document.querySelector('.popup');
const controlBox = document.querySelector('.control');

document.addEventListener('keydown', function(event) {
    jump();
})

function startGame() {
    cactus.classList.add('start')
    controlBox.style.display = 'none'
}

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300);
}

// let isAlive = setInterval(function() {
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
//     let count = 0;

//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         cactus.classList.remove('start')
//         controlBox.style.display = 'flex'
//         messageBox.innerHTML = `
//             <p>Забрать ${count}</p>
//         `
//         startBtn.innerText = 'Сыграть еще раз'
//     }
//     count += 1;
//     document.getElementById('bonus').textContent = count;
// }, 10)

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
        messageBox.innerHTML = `<p>Забрать ${count}</p>`;
        startBtn.innerText = 'Сыграть еще раз';
    }
}, 10);
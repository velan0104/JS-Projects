window.onload = open();
let player = "";
let isSelected = false;
const setPlayer = (e) =>{
    player = e.innerText;
    isSelected = true;
}

const items = document.getElementsByClassName('grid-items');
let isWon = false;

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', (e) =>{
        console.log(e);
        if(!e.target.classList.contains("occupied")) {
            e.target.innerHTML = player;
            e.target.classList.add("occupied");
            checkWin();
            player = (player === 'X') ? '0' : 'X';
        }
        
    })
}


function checkWin(){
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach( e =>{

        if((items[e[0]].innerText == items[e[1]].innerText) && (items[e[1]].innerText == items[e[2]].innerText) && (items[e[0]].innerText != "")){
            playAudio("audio/win.mp3");
            const win = document.getElementById('win');
            win.classList.add('win');
            win.innerHTML = ` <img src = "images/congrats.png">
            <div> ${player} won the game!! </div>
            <button class = "button" onclick = "restart()"> Restart </button>
            `
        }else{
            if(checkTie()){
                const win = document.getElementById('win');
                win.classList.add('win');
                win.innerHTML = ` <img src = "images/Tie.png">
                <div> Match Tie!! </div>
                <button class = "button" onclick = "restart()"> Restart </button>
                `
            }
            playAudio("audio/start.wav");
        }
    })
}
function open(){
    const open = document.getElementById('start');
    open.classList.add('start');
    open.innerHTML = `Select One
    <div class = "contain">
        <button class = "choose" onclick = "setPlayer(this)">X</button>
        <button class = "choose" onclick = "setPlayer(this)">0</button>
    </div>
    <button onclick = "start()"> Start </button>
    `;

}

function checkTie(){
    for(let i = 0; i < items.length; i++){
        if(!items[i].classList.contains('occupied')){
            return false;
        }
    }
    return true;
}

const start = () =>{
    if(isSelected){
        const open = document.getElementById('start');
        const start = document.getElementById('start');
        start.classList.remove('start');
        open.innerHTML = "";
        playAudio("audio/start.wav");
    }else{
        playAudio("audio/wrong.mp3");
    }

}
const restart = () =>{
    location.reload();
}

function playAudio(audioName){
    const audio = document.getElementById('myAudio');
    console.log(audioName)
    const source = document.getElementById('audioID');
    let audioPath = audioName;
    source.src = audioPath;
    audio.load();
    audio.play();
}
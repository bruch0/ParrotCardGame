let clock = 0;
let qty = 0;
let div = '';
let slide = ['.container', '.title', '.preview'];
let selectedCards = [];
const cards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
let playerMoves = 0;
let rankingName = '';
let rankingCards = '';
let rankingTime = '';
let rankingScore = '';
let player = '';
let idClock;


function startGame() {
    let previewEnabled = document.querySelector('.preview') !== null;
    if (previewEnabled) {
        document.querySelector('.preview').remove();
    }
    while (qty < 4 || qty > 15 || qty % 2 !== 0) {
        qty = parseInt(prompt("Com quantas cartas você quer jogar?"))
    }

    let sorted_cards = cards.sort(comparador).slice(0, qty / 2);
    sorted_cards = sorted_cards.concat(sorted_cards);

    let game_cards = sorted_cards.sort(comparador);

    for (let i = 0; i < qty; i++) {
        div += `<button onclick="virarCarta(this)">
                    <div class="front-face">
                        <img src="assets/front.png" alt="Imagem de um papagaio">
                    </div>
                    <div class="back-face">
                        <img id="parrot-gif" src="assets/${game_cards[i]}parrot.gif" alt="GIF de um papagaio">
                    </div>
                </button>`
    }
    
    document.querySelector(".container").innerHTML = div;
    idClock = setInterval(clockUpdate, 1000)
    document.querySelector('.ranking-button').style.display = 'none';
}

function virarCarta(element) {
    if(selectedCards.length === 2 || element.className === "selected") {
        return;
    }

    element.classList.add('selected');
    selectedCards.push(element);
    playerMoves ++;
    if (selectedCards.length === 2) {
        cardCheck();
        setTimeout(endGame, 1000)
    }

}

function cardCheck() {
    isEqual = selectedCards[0].querySelector('#parrot-gif').src === selectedCards[1].querySelector('#parrot-gif').src;
    if (isEqual) {
        selectedCards[0].setAttribute("onclick", 'null');
        selectedCards[1].setAttribute("onclick", 'null');
        selectedCards = [];
    }
    else {
        setTimeout(resetSelectedCards, 500);
    }
}

function resetSelectedCards() {
    selectedCards[0].classList.remove('selected');
    selectedCards[1].classList.remove('selected');
    selectedCards = [];
}

function comparador() { 
	return Math.random() - 0.5; 
}

function endGame() {
    allSelected = document.querySelectorAll('.selected').length === qty

    if(allSelected) {
        alert(`Você ganhou em ${playerMoves} jogadas!`);
        regameManager();
    }
}

function regameManager () {
    let choice;
    while (choice !== 'sim' && choice !== 'nao') {
        choice = prompt("Deseja salvar seu score no ranking?(sim / nao)");
    }
    if (choice === 'sim') {
        user = prompt("Como é seu nome?!");
    }
    
    let playAgain;
        while (playAgain !== 'sim' && playAgain !== 'nao') {
            playAgain = prompt("Quer jogar de novo?(sim / nao)");
        }
        
        if (playAgain === 'sim') {
            clock = 0;
            qty = 0;
            div = '';
            selectedCards = [];
            playerMoves = 0;
            startGame()
        }
        else {
            alert("Ok! Te vejo depois!");
            clearInterval(idClock);
        }
}

function clockUpdate () {
    clock ++;
    let timer = intToTime(clock);
    document.querySelector('.clock').innerHTML = timer;
}

function intToTime (time) {
    let minutes = parseInt(time / 60)
    let seconds = time - (minutes * 60)
    let hours = parseInt(minutes / 60)
    minutes -= hours * 60
    return `${hours <= 9 ? "0"+hours : hours}:${minutes<= 9 ? "0"+minutes : minutes}:${seconds <= 9 ? "0"+seconds : seconds}`
}


function rankingScreen() {
    let clockEnabled = document.querySelector('.clock') !== null && idClock !== undefined;
    if (clockEnabled) {
        document.querySelector('.clock').remove();
        clearInterval(idClock);
    }
    for (let i = 0; i < slide.length; i++) {
        document.querySelector(slide[i]).classList.add('slide-left');
        setTimeout(function () {
            document.querySelector(slide[i]).remove();
        }, 800) ;
    }

    rankingLoader()
    document.querySelector('.ranking-button').style.display = 'none';
    setTimeout (function (){
        document.querySelector('.initial-screen-button').style.display = 'initial';
    }, 1000);
}

function rankingLoader() {
    for (let i = 0 ; i < ranking.length ; i ++) {
        rankingName += `<li class="list-info">${ranking[i]['name']}</li>`;
        rankingCards += `<li class="list-info">${ranking[i]['cards']}</li>`;
        rankingTime += `<li class="list-info">${ranking[i]['time']}</li>`;
        rankingScore += `<li class="list-info">${ranking[i]['score']}</li>`;
    }

    setTimeout(function() {
        document.querySelector('.ranking').innerHTML = `<div class="title">
                                                            RANKING
                                                        </div> 
                                                        <div class="container">
                                                            <div class="name">
                                                            <ul>
                                                                <li class="info">NOME</li>
                                                                ${rankingName}
                                                            </ul>
                                                            </div>
                                                            <div class="cads">
                                                            <ul>
                                                                <li class="info">CARTAS</li>
                                                                ${rankingCards}
                                                            </ul>
                                                            </div>
                                                            <div class="time">
                                                            <ul>
                                                                <li class="info">TEMPO</li>
                                                                ${rankingTime}
                                                            </ul>
                                                            </div>
                                                            <div class="score">
                                                            <ul>
                                                                <li class="info">PONTUAÇÃO</li>
                                                                ${rankingScore}
                                                            </ul>
                                                            </div>
                                                        </div>`
                                                    }, 1000)
}

function initialScreen () {
    document.querySelector('.ranking').classList.add('slide-right');
    setTimeout(function () {
        document.querySelector('.ranking').remove()
    }, 800);

    document.querySelector('.initial-screen-button').style.display = 'none';
    setTimeout (function (){
        document.querySelector('.ranking-button').style.display = 'initial';
    }, 1000);

    setTimeout(initialScreenLoader, 700);
}

function initialScreenLoader() {
    document.querySelector('body').innerHTML = `<div class="title">
                                                    PARROT CARD GAME
                                                </div>
                                                <div class="clock">
                                                    
                                                </div>
                                                <div class="container">  
                                                    <button class="start-game" onclick="startGame()">Iniciar Jogo!</button>
                                                </div>

                                                <img class="preview" src="assets/gamepreview.gif" alt="Preview do jogo">

                                                <button class="ranking-button" title="ranking" onclick="rankingScreen()">
                                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                                </button>   

                                                <button class="initial-screen-button" title="initial screen" onclick="initialScreen()">
                                                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                                </button>   

                                                <div class="ranking">
                                                </div>

                                                <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
                                                <script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>`
}

initialScreenLoader();
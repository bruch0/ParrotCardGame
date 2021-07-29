let clock = 0;
let qty = 0;
let div = '';
let selectedCards = [];
const cards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
let playerMoves = 0;

function startGame() {
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
            alert("Ok! Te vejo depois!")
        }
}

function clockUpdate () {
    clock ++;
    let timer = intToTime(clock);
    document.querySelector('.clock').innerHTML = timer;
}

function intToTime (time) {
    let minutes = parseInt(time / 60)
    console.log(minutes)
    let seconds = time - (minutes * 60)
    console.log(seconds)
    let hours = parseInt(minutes / 60)
    console.log(hours)
    minutes -= hours * 60
    console.log(minutes)
    return `${hours <= 9 ? "0"+hours : hours}:${minutes<= 9 ? "0"+minutes : minutes}:${seconds <= 9 ? "0"+seconds : seconds}`
}

startGame();
setInterval(clockUpdate, 1000)
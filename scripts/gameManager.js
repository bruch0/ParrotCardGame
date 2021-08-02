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
    
    document.querySelector("main").innerHTML = div;
    document.querySelector('footer').style.display = 'none';
    if (beatStatus === false) {
        idClock = setInterval(clockUpdate, 1000)
    }
    else {
        idClock = setInterval(clockBeat, 1000)
    }
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

function endGame() {
    let allSelected = document.querySelectorAll('.selected').length === qty;

    if(allSelected) {
        alert(`Você ganhou em ${playerMoves} jogadas!`);
        regame();
    }
}

function regame () {
    let choice;

    if (beatStatus === true) {
        choice = 'nao';
    }

    while (choice !== 'sim' && choice !== 'nao') {
        choice = prompt("Deseja salvar seu score no ranking?(sim / nao)");
    }
    if (choice === 'sim') {
        player = prompt("Como é seu nome?!");
        addRank();
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
        clearInterval(idClock);
        startGame()
    }
    else {
        alert("Ok! Te vejo depois!");
        clearInterval(idClock);
        document.querySelector('footer').style.display = 'flex';
        document.querySelector('footer button').innerHTML = '<ion-icon name="home-outline"></ion-icon>';
        document.querySelector('footer button').setAttribute('onclick', 'initialScreenLoader()')
        clock = 0;
        qty = 0;
        div = '';
        selectedCards = [];
        playerMoves = 0;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCartaDemo(element) {
    element.classList.toggle('selected');
}
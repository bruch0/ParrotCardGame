let selected;
let previous;
let qty = 0;
let div = ''
const cards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']

function startGame() {
    while (qty < 4 || qty > 15 || qty % 2 !== 0) {
        qty = parseInt(prompt("Com quantas cartas você quer jogar?"))
    }

    let sorted_cards = cards.sort(comparador).slice(0, qty / 2);
    sorted_cards = sorted_cards.concat(sorted_cards);

    let game_cards = sorted_cards.sort(comparador);

    for (let i = 0; i < qty; i++) {
        div += `<button onclick="virarCarta(this)" id="teste">
                    <div class="front-face">
                        <img src="assets/front.png" alt="Imagem de um papagaio">
                    </div>
                    <div class="back-face">
                        <img src="assets/${game_cards[i]}parrot.gif" alt="GIF de um papagaio">
                    </div>
                </button>`
    }
    
    document.querySelector(".container").innerHTML = div;
}

function virarCarta(element) {
    element.classList.add('selected');
    if (previous === undefined) {
        previous = element
    }
    else {
        selected = element
    }
    console.log(element)
    console.log(document.getElementsByClassName('selected').src)
}

function comparador() { 
	return Math.random() - 0.5; 
}

startGame()
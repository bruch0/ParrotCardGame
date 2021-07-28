let selected;
let previous;
let qty = 0;
let div = ''
const cards = []

function startGame() {
    while (qty < 1 || qty > 15 || qty % 2 !== 0) {
        qty = parseInt(prompt("Com quantas cartas você quer jogar?"))
    }

    for (let i = 0; i < qty; i++) {
        div += `<button onclick="virarCarta(this)">
                    <img src="assets/front.png" alt="Imagem de um papagaio">
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
}

function check (element1, element2) {
    console.log('teste');
}

startGame()
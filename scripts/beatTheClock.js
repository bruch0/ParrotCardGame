function setScreen() {
    document.querySelector('header').classList.add('remove');
    document.querySelector('footer').classList.add('remove');
    document.querySelector('.start').classList.add('remove');
    document.querySelector('.start-beat').classList.add('remove');

    setTimeout(function (){
        document.querySelector('header').classList.add('not-display');
        document.querySelector('div').classList.remove('not-display');
        document.querySelector('div').classList.remove('remove');

        document.querySelector('.start').innerHTML = 'Começar';
        document.querySelector('.start').classList.remove('remove');
        document.querySelector('.start').setAttribute('onclick', 'beatTheClock()')

        document.querySelector('.start-beat').innerHTML = 'Voltar';
        document.querySelector('.start-beat').classList.remove('remove');
        document.querySelector('.start-beat').setAttribute('onclick','unsetScreen()');
    },1000)

    beatStatus = true;
}

function beatTheClock() {
    checkImpossible();
    document.querySelector('main').innerHTML = `<div class="title">
                                                    Escolha a dificuldade
                                                </div>
                                                
                                                <button class="start" onclick="chooseDificult(6, 10)" title="Fácil">Fácil</button>

                                                <button class="start" onclick="chooseDificult(10, 15)" title="Médio">Médio</button>

                                                <button class="start" onclick="chooseDificult(14, 20)" title="Difícil">Difícil</button>

                                                <button class="start remove not-display" onclick="chooseDificult(14, 16)" title="Impossível">Impossível</button>`;
}

function checkImpossible() {
    if (hard === true) {
        document.querySelector('.start.remove.not-display').classList.remove('not-display')
        document.querySelector('.start.remove').classList.remove('remove')
    }
}

function chooseDificult(cards, time) {
    qty = cards;
    clock = time;

    startGame();
}

function homeBeat() {
    initialScreenLoader();
    setScreen();
}

function unsetScreen() {
    clock = 0;
    beatStatus = false;

    document.querySelector('div').classList.add('remove');
    document.querySelector('footer').classList.remove('remove');
    document.querySelector('.start').classList.add('remove');
    document.querySelector('.start-beat').classList.add('remove');

    setTimeout(function (){
        document.querySelector('header').classList.remove('not-display');
        document.querySelector('div').classList.add('not-display');
        document.querySelector('header').classList.remove('remove');

        document.querySelector('.start').innerHTML = 'Iniciar Jogo!';
        document.querySelector('.start').classList.remove('remove');
        document.querySelector('.start').setAttribute('onclick', 'startGame()')

        document.querySelector('.start-beat').innerHTML = 'Beat the clock';
        document.querySelector('.start-beat').classList.remove('remove');
        document.querySelector('.start-beat').setAttribute('onclick', 'setScreen()')
    },1000)
}
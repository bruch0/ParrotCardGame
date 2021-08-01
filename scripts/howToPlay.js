function howToPlayScreen() {
    let clockEnabled = document.querySelector('.clock') !== null && idClock !== undefined;
    if (clockEnabled) {
        document.querySelector('.clock').remove();
        clearInterval(idClock);
    }
    for (let i = 0; i < slide.length; i++) {
        document.querySelector(slide[i]).classList.add('slide-up');
        setTimeout(function () {
            document.querySelector(slide[i]).remove();
        }, 800) ;
    }
    setTimeout(howToPlay, 800);
}

function howToPlay() {
    setTimeout(function() {
        document.querySelector('.ranking-button').style.display = 'none';
    },1)
    document.querySelector('.next-screen').innerHTML = `<div class="title">
                                                    COMO JOGAR
                                                </div>
                                                <div class="clock">
                                                    
                                                </div>
                                                <div class="container how-to-play">  
                                                    <p class="help">Parrot Card Game é um jogo de memória, você deve clicar em duas cartas e elas devem ser as mesmas, quando todas forem combinadas com a sua igual, o jogo acaba!</p>
                                                    <p class="help">Sinta-se à vontade para inserir sua pontuação no ranking após terminar o jogo!</p>
                                                    <button class="options" onclick="initialScreen('bottom')">Voltar</button>
                                                </div>

                                                <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
                                                <script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>`
}

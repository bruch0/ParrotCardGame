function initialScreen (side) {
    document.querySelector('.next-screen').classList.add(`slide-${side}`);
    setTimeout(function () {
        document.querySelector('.next-screen').remove()
    }, 700);

    document.querySelector('.initial-screen-button').style.display = 'none';
    setTimeout (function (){
        document.querySelector('.ranking-button').style.display = 'initial';
    }, 700);

    setTimeout(initialScreenLoader, 700);
}

function initialScreenLoader() {
    document.querySelector('body').innerHTML = `<div class="title">
                                                    PARROT CARD GAME
                                                </div>
                                                <div class="clock">
                                                    
                                                </div>
                                                <div class="container">  
                                                    <button class="options" onclick="startGame()">Iniciar Jogo!</button>

                                                    <button class="options" onclick="howToPlayScreen()">Como jogar?</button>
                                                </div>

                                                <button class="ranking-button" title="ranking" onclick="rankingScreen()">
                                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                                </button>   

                                                <button class="initial-screen-button" title="initial screen" onclick="initialScreen('right')">
                                                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                                                </button>   

                                                <div class="next-screen">
                                                </div>

                                                <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
                                                <script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>`
}
function initialScreenLoader() {
    document.querySelector('body').innerHTML = `<header class="title" title="Parrot card game">
                                                    PARROT CARD GAME
                                                </header>

                                                <div class="clock"> 
                                                </div>

                                                <main>  
                                                    <button class="options" onclick="startGame()" title="Iniciar jogo">Iniciar Jogo!</button>

                                                    <button class="options" onclick="howToPlayScreen()"  title="Beat the clock">Beat the clock</button>
                                                </main>
                                                <footer>
                                                    <button onclick="helpOpenner()" title="ajuda">
                                                    <ion-icon name="help-circle-outline"></ion-icon>
                                                    </button>
                                                    <button onclick="rankingOpenner()" title="ranking">
                                                    <ion-icon name="earth-outline"></ion-icon>
                                                    </button>
                                                </footer>

                                                <aside class="help">
                                                    <div class="aside-title">
                                                        COMO JOGAR
                                                    </div>

                                                    <div class="container">  
                                                        <p>Parrot Card Game é um jogo de memória, você deve clicar em duas cartas e elas devem ser as mesmas, quando todas forem combinadas com a sua igual, o jogo acaba!</p>

                                                        <p>Sinta-se à vontade para inserir sua pontuação no ranking após terminar o jogo!</p>

                                                        <p>Teste o funcionamento das cartas clicando nelas aqui em baixo!!</p>

                                                        <div>
                                                        <button onclick="virarCartaDemo(this)">
                                                            <div class="front-face">
                                                                <img src="assets/front.png" alt="Imagem de um papagaio">
                                                            </div>
                                                            <div class="back-face">
                                                                <img id="parrot-gif" src="assets/metalparrot.gif" alt="GIF de um papagaio">
                                                            </div>
                                                        </button>

                                                        <button onclick="virarCartaDemo(this)">
                                                            <div class="front-face">
                                                                <img src="assets/front.png" alt="Imagem de um papagaio">
                                                            </div>
                                                            <div class="back-face">
                                                                <img id="parrot-gif" src="assets/unicornparrot.gif" alt="GIF de um papagaio">
                                                            </div>
                                                        </button>

                                                        <button onclick="virarCartaDemo(this)">
                                                            <div class="front-face">
                                                                <img src="assets/front.png" alt="Imagem de um papagaio">
                                                            </div>
                                                            <div class="back-face">
                                                                <img id="parrot-gif" src="assets/tripletsparrot.gif" alt="GIF de um papagaio">
                                                            </div>
                                                        </button>
                                                        </div>

                                                        <button class="close" onclick="helpCloser()" title="fechar">
                                                        <ion-icon name="close-outline"></ion-icon>
                                                        </button>
                                                    </div>
                                                </aside>

                                                <aside class="ranking">
                                                    <div class="aside-title">
                                                        RANKING
                                                    </div> 

                                                    <div class="container">
                                                        <div class="name">
                                                        <ul>
                                                            <li class="info">NOME</li>
                                                            ${rankingName}
                                                        </ul>
                                                        </div>
                                                        <div class="cards">
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

                                                        <button class="close" onclick="rankingCloser()" title="fechar">
                                                        <ion-icon name="close-outline"></ion-icon>
                                                        </button>
                                                    </div>
                                                </aside>

                                                <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
                                                <script nomodule="" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"></script>`
}
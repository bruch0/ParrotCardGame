let clock = 0;
let qty = 0;
let div = '';
let slide = ['.container', '.title', '.preview'];
let selectedCards = [];
const cards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
let playerMoves = 0;
let ranking = [];
let rankingName = '';
let rankingCards = '';
let rankingTime = '';
let rankingScore = '';
let player = '';
let idClock;
let mainScreenButton = `<button class="main-screen" onclick="initialScreenLoader()">
                        <ion-icon name="home-outline"></ion-icon>
                        </button>`

initialScreenLoader();
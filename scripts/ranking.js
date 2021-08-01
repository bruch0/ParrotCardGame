function addRank() {
    let score = parseInt((qty * 15) - (clock * (qty / 2)));
    if (score < 0){
        score = 0;
    }
    
    ranking.push ({"name": player, "cards": qty, "time": clock, "score": score});
    rankingPosition();
    rankingUpdater();
}

function rankingPosition () {
    ranking.sort(function(a, b){
        if(a.score > b.score) return -1;
        if(a.score < b.score) return 1;
        return 0;
    });
}

function rankingUpdater () {
    rankingName = '';
    rankingCards = '';
    rankingTime = '';
    rankingScore = '';
    for (let i = 0 ; i < ranking.length ; i ++) {
        rankingName += `<li class="list-info">${ranking[i]['name']}</li>`;
        rankingCards += `<li class="list-info">${ranking[i]['cards']}</li>`;
        rankingTime += `<li class="list-info">${ranking[i]['time']}</li>`;
        rankingScore += `<li class="list-info">${ranking[i]['score']}</li>`;
    }
}

function rankingLoader() {
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

    rankingLoader();
    document.querySelector('.ranking-button').style.display = 'none';
    setTimeout (function (){
        document.querySelector('.initial-screen-button').style.display = 'initial';
    }, 1000);
}
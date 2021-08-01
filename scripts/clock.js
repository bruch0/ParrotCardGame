function clockUpdate () {
    clock ++;
    let timer = intToTime(clock);
    document.querySelector('.clock').innerHTML = timer;
}

function intToTime (time) {
    let minutes = parseInt(time / 60)
    let seconds = time - (minutes * 60)
    let hours = parseInt(minutes / 60)
    minutes -= hours * 60
    return `${hours <= 9 ? "0"+hours : hours}:${minutes<= 9 ? "0"+minutes : minutes}:${seconds <= 9 ? "0"+seconds : seconds}`
}

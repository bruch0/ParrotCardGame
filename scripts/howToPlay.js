function helpOpenner() {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.help').style.display = 'initial';
}

function helpCloser() {
    document.querySelector('footer').style.display = 'flex';
    document.querySelector('.help').style.display = 'none';
}

function turnOn() {
    document.getElementById('bulbImg').src = './assets/bulb-on.png';
    document.body.style.backgroundColor = '#fffeb7';
    document.querySelector('.heading h1').style.color = 'black';
    document.querySelector('.heading h2').style.color = 'black';
}

function turnOff() {
    document.getElementById('bulbImg').src = './assets/bulb-off.png';
    document.body.style.backgroundColor = 'black';
    document.querySelector('.heading h1').style.color = '#ffee00';
    document.querySelector('.heading h2').style.color = 'white';
}

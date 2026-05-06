function changeRed() {
    document.body.style.backgroundColor = 'red';
}

function changeWhite() {
    document.body.style.backgroundColor = 'white';
}

document.getElementById('color-change').addEventListener('mouseenter', changeRed);
document.getElementById('color-change').addEventListener('mouseleave', changeWhite);

function changePurple() {
    document.body.style.backgroundColor = 'purple';
}

document.getElementById('color-purple').addEventListener('mouseenter', changePurple);
document.getElementById('color-purple').addEventListener('mouseleave', changeWhite);

function changeBlue() {
    document.body.style.backgroundColor = 'blue';
}

document.getElementById('color-blue').addEventListener('mouseenter', changeBlue);
document.getElementById('color-blue').addEventListener('mouseleave', changeWhite);

function changeGreen() {
    document.body.style.backgroundColor = 'green';
}

document.getElementById('color-green').addEventListener('mouseenter', changeGreen);
document.getElementById('color-green').addEventListener('mouseleave', changeWhite);

function changeOrange() {
    document.body.style.backgroundColor = 'orange';
}

document.getElementById('color-orange').addEventListener('mouseenter', changeOrange);
document.getElementById('color-orange').addEventListener('mouseleave', changeWhite);
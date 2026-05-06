function moveRight (){
    document.getElementById("move").style.marginLeft = "100px";
}

function reset() {
    document.getElementById("move").style.marginLeft = "10px";
}

document.getElementById("move").addEventListener("click", moveRight);
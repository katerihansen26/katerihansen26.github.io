var count = 0
var count_text = document.getElementById("count-text")

function plusOne(){
    count = count + 1;
    document.getElementById("count-text").innerHTML = count;
}

function minusOne(){
    count = count - 1;
    document.getElementById("count-text").innerHTML = count;
}

document.getElementById("plus-one").addEventListener("click". plusOne);
document.getElementById("minus-one").addEventListener("click". minusOne);
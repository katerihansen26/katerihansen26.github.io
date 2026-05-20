var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var result = document.getElementById("result");
var submit_button = document.getElementById("submit_button");


var score_broke = 0;
var score_middleclass = 0;
var score_rich = 0;
var score_crazyrich = 0;

function check_q1(){

    if (q1a3.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q1a2.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q1a4.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q1a1.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q1!";
    }

    check_q2();
}

function check_q2(){

    if (q2a4.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q2a2.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q2a1.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q2a3.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q2!";
    }
    check_q3();
}

function check_q3() {

    if (q3a1.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q3a2.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q3a3.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q3a4.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q3!";
    }
    check_q4();
}

function check_q4() {

    if (q4a3.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q4a4.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q4a2.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q4a1.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q4!";
    }
    check_q5();
}

function check_q5() {

    if (q5a3.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q5a2.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q5a1.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q5a4.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q5!";
    }
    check_q6();
}

function check_q6() {

    if (q6a2.checked == true){
        score_broke = score_broke + 1;
    }
    else if (q6a1.checked == true){
        score_middleclass = score_middleclass + 1;
    }
    else if (q6a4.checked == true){
        score_rich = score_rich + 1;
    }
    else if (q6a3.checked == true){
        score_crazyrich = score_crazyrich + 1;
    }
    else{
        result.innerHTML = "You didn't choose anything on q6!";
    }
    calculate_result();
}


function calculate_result(){
    if (score_crazyrich >= score_broke && score_crazyrich >= score_middleclass && score_crazyrich >= score_rich){
        result.innerHTML = "You're destined to be crazy rich :)!"
    }

    else if (score_rich >= score_crazyrich && score_rich >= score_middleclass && score_rich >= score_broke){
        result.innerHTML = "You're destined to be rich!"
    }

    else if (score_middleclass >= score_crazyrich && score_middleclass >= score_rich && score_middleclass >= score_broke){
        result.innerHTML = "You're destined to be middleclass!"
    }

    else if (score_broke >= score_crazyrich && score_broke >= score_rich && score_broke >= score_middleclass){
        result.innerHTML = "You're destined to be broke :(!"
    }

    else {
        result.innerHTML = "Something went wrong"
    }

}

submit_button.addEventListener("click", check_q1);
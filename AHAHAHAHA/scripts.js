var cookie = document.getElementById("cookie");
var cookieCount =document.getElementById("cookieCount");
var numCookiers = 0;
var cookiePerClick = 1;

cookieCount.innerHTML = "0 cookies";

function clickCookie(){
    numCookiers = numCookiers + cookiePerClick;
    cookieCount.innerHTML = numCookiers.toString() + " cookies";
}

cookie.addEventListener("click", clickCookie);
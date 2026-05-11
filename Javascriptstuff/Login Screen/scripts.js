var password = document.getElementById("Password");
var error = document.getElementById("Error");

function Password(){
    if(password.value == "password") {
        error.innerHTML = "Access Yes";
        
    }

    else{
        error.innerHTML = "Access No";
    }
}

document.getElementById("submit").addEventListener("click", Password);
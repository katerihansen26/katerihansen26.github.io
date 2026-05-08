var password = document.getElementById("Password");
var error = document.getElementById ("Error");

function Password (){
    if(password.value == "password") {
        error.innerhtml = "Access Yes";
        
    }

    else{
        error.innerhtml = "Access No";
    }
}

document.getElementById("submit").addEventListener("click", Password);

function validateInput(username){
    var username = document.getElementById('username').value;
    if(username == '' || username == null){
        return false;
    } else{
        return true;
    }
}

function isPasswordValid(password){
    let validity = true;
    if(password == '' || password == null){
        validity = false;
        alert("Please enter a password");
    }
    if(password.length < 8){
        validity = false;
    }
    if(password.search(/[0-9]/) === -1){
        validity = false;
    }
    if(password.search(/[a-z]/) === -1){
        validity = false;
    }
    if(password.search(/[A-Z]/) === -1){
        validity = false;
    }
    if(password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) === -1){
        validity = false;
    }

    return validity;
}

function isPasswordStrong(password, username){
    var count = 0;
    var charArray = username.split("");
    var x;

    for(let i = 0; i < username.length; i++){
        var char = charArray[i]
        if(password.includes(char) == true){
            count++;
        }
    }

    if(count >= 3){
        return false;
    } else{
        return true;
    }
}

function main(){
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    
    validateInput(username);
    if(isPasswordValid(password) === false){
        document.getElementById("notify").innerHTML = "Password is invalid";
    } else if(isPasswordStrong(password, username) === false){
        document.getElementById("notify").innerHTML = "Password can't contain more than 3 characters from the username";
    } else{
        document.getElementById("notify").innerHTML = "Validated";
    }
}
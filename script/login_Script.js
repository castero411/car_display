
var valid = false;

function val() {
    var user = document.getElementById("username");
    var flag = 0;
    


    if (user.value === ""){
        flag = 2;
    }else{
        flag = 0;
    }

    var pass = document.getElementById("password");

    if(pass.value === ""){
        flag+=1;
    }
    switch(flag){
        case 0:
            valid = true;
            window.location.href = "index.html";
            break;
        
        case 1 :
            pass.style = "border-color:var(--red-pantone);";
            pass.placeholder = "insert password";
            break;
        case 2:
            user.style = "border-color:var(--red-pantone);";
            user.placeholder = "insert a username";
            break;
        case 3:
            user.style = "border-color:var(--red-pantone);";
            user.placeholder = "insert a username";
            pass.style = "border-color:var(--red-pantone);";
            pass.placeholder = "insert password";
            break;
    }
    if (valid === true){
        window.alert("password is valid");
        window.location.href = "index.html";
    }
    
    return valid;
    
}




function val2() {

    var mail = document.getElementById("email");
    var flag = 0;
    
    if (mail.value === ""){
        mail.style = "border-color:var(--red-pantone);";
    }
    else{}

    var user = document.getElementById("username");
    var flag = 0;
    
    if (user.value === ""){
        flag = 2;
    }else{
        flag = 0;
    }

    var pass = document.getElementById("password");

    if(pass.value === ""){
        flag+=1;
    }
    switch(flag){
        case 0:
            valid = true;
            window.location.href = "index.html";
            break;
        
        case 1 :
            pass.style = "border-color:var(--red-pantone);";
            pass.placeholder = "insert password";
            break;
        case 2:
            user.style = "border-color:var(--red-pantone);";
            user.placeholder = "insert a username";
            break;
        case 3:
            user.style = "border-color:var(--red-pantone);";
            user.placeholder = "insert a username";
            pass.style = "border-color:var(--red-pantone);";
            pass.placeholder = "insert password";
            break;
    }
    if (valid === true){
        window.alert("password is valid");
        window.location.href = "index.html";
    }
    
    return valid;
    
}

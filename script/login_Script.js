
function val() {
    var user = document.getElementById("username");
    var flag = 0;
    var valid = false;


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
    return valid;
}

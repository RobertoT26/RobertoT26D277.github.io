function emailValidation(){
    let x = document.getElementById("email").value;
    let y = document.getElementById("emailVer").value;

    if(x != y){
        alert("Emails do not match")
        return false;
    }else{
        alert("thank you for signing up")
    }


}
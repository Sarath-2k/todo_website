let user = document.getElementById("inputUser");
let pass = document.getElementById("inputPassword");
if (pass != null){
    pass=pass.value
}else{
    console.log("NULL")
}
let cuser="admin"

function loginvalid(redirect) {
    console.log("Started")
    let cpass="12345"
    if(cuser==user.value){
        if(cpass==pass){
            redirect()
            return true
        }
        else{return false}
    }else{return false}
}

function usercheck(){
    if(cuser==user.value){
        user.style.color = "green";
        return true
    }else{
        user.style.color="red";
        return false
    }
}
function redirect(){
    location.href("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage")
}
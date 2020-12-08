$(document).ready(function(){
    function uservalid(redirect){
        let username = $('#inputUser').val();
        console.log("Username")
        if(username=="admin"){
            console.log("Password")
            if($('$inputPassword').val()=="12345"){
                console.log("Redirect")
                redirect();
            }
        }
    }

    function redirect(){        
    location.href("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage")
    }

    $("#submitbtn").click(function(){
        
    })
})
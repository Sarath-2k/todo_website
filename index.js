$(document).ready(function(){
    $("button").click(function(){
        var user = $("#username").val();
        console.log(user);
        var pass = $("#password").val();
        console.log(pass);
        if(user == "admin" && pass=="12345"){
            window.location.replace("home.html");
            return false;
        }else{
            alert("Please check your credentials");
        }
    });
});
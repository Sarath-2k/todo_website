// $(document).ready(function(){
//     $("button").click(function(){
//         var user = $("#username").val();
//         console.log(user);
//         var pass = $("#password").val();
//         console.log(pass);
//         if(user == "admin" && pass=="12345"){
//             window.location.replace("home.html");
//             return false;
//         }else{
//             alert("Please check your credentials");
//         }
//     });
// });


//navigation set aavanilla


function input(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    formvalidation(user,pass,callback)
}

function formvalidation(user,pass,callback){
    
    console.log(user);
    if(user=="admin" && pass=="12345"){
        console.log(pass);
        callback()
        return false;
    }else {
        alert("Invalid credentials")
    }
}

function callback(){
    console.log("callack")
    var nav=document.getElementById("loginform");
    nav.setAttribute("action","home.html")
    // window.location.replace("home.html");
    return false;
}
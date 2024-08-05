function login() {
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;

    var real_username= "gloria08";
    var real_password= "glorsss";

if(username === "" || password === "") {
    document.getElementById("error").innerHTML = "All textboxes is required"
}

if(username === real_username && password === real_password) {
    document.getElementById("error").innerHTML = "Welcome" + username;
}
else {
    document.getElementById("error").innerHTML = "Welcome" + username;

}


:ion forgot() {
    alert("You can clicked forgot password");
}
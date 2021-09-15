function displayUsername(){
    var username = localStorage.getItem("User name");
    document.getElementById("displayUsername").innerHTML = username;
}
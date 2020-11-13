function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("h1-login").innerHTML = "Login";
    document.getElementsByClassName("pass")[0].style.display = "block";
    document.getElementsByClassName("pass")[1].style.display = "block";
    document.getElementsByClassName("lost")[0].style.display = "none";
    document.getElementById("reset").style.display = "block";
}

function lostForm() {
    document.getElementById("login").style.display = "none";
    document.getElementById("h1-login").innerHTML = "Lost Password";
    document.getElementsByClassName("pass")[0].style.display = "none";
    document.getElementsByClassName("pass")[1].style.display = "none";
    document.getElementsByClassName("lost")[0].style.display = "none";
    document.getElementById("reset").style.display = "block";
}
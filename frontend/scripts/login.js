document.getElementById("popup").onclick = function() {myFunction()};

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
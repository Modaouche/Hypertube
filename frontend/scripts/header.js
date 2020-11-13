// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var elementStyle = document.getElementById("search-container").style;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "60px";
    elementStyle.top = "150px";
  } else {
    document.getElementById("header").style.fontSize = "150px";
    elementStyle.top = "250px";
  }
}
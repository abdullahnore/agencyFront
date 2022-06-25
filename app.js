//Get the button
let mybutton = document.getElementById("myBtn");
let nav = document.getElementById("topnav");

//  show the button afte20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// movbile
function myFunction() {
  nav.classList.toggle("hide");
}

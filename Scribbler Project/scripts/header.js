// Get the modal
var signupmodal = document.getElementById("signupmodal");
var signinmodal = document.getElementById("signinmodal");

// Get the button that opens the modal
var signup = document.getElementById("signup");
var signin=document.getElementById("signin");

// Get the <span> element that closes the modal
var closesignup = document.getElementById('closesignup');
var closesignin = document.getElementById('closesignin');
var signuplink=document.getElementById('signuplink');

// When the user clicks the  Signup button, open the modal 
signup.onclick = function() {
  signupmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closesignup.onclick = function() {
  signupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
}

// When the user clicks the  Signin button, open the modal 
signin.onclick = function() {
  signinmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closesignin.onclick = function() {
  signinmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
}

// when the user clicls on signup by a link in sign in modal
signuplink.onclick=function(){
    signinmodal.style.display="none";
    signupmodal.style.display="block";
}
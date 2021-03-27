// Get the modal
var createmodal = document.getElementById("createmodal");

// Get the button that opens the modal
var createpost = document.getElementById('createpost');

// Get the <span> element that closes the modal
var closecreate= document.getElementById('closecreate');

// When the user clicks the  Signup button, open the modal 
createpost.onclick = function() {
  createmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closecreate.onclick = function() {
  createmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createmodal) {
    createmodal.style.display = "none";
  }
}
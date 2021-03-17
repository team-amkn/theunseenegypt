//Slideshow Variables
var slideIndex = 1;
var timer = null; /*There is no timer initially*/
var slides = document.getElementsByClassName("slideshow"); /*HTMLCollection of Slides*/

// Slideshow Next & previous controls
function plusSlides(n) {
  clearTimeout(timer); /*Built-in function that restarts ANY activated timers*/
  showSlides(slideIndex += n);
}

/*
NOTE:
slides.length -----> number of slides = 3
*/

//The function that shows the slides
function showSlides(n) {
  if (n === undefined) { n = ++slideIndex } /*For the automatic slideshow*/
  if (n > slides.length) { slideIndex = 1 } /*Tests whether to restart slideshow or not*/
  if (n < 1) { slideIndex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    /*Add CSS Property to hide all slides*/
  }
  slides[slideIndex - 1].style.display = "block"; /*Add CSS Preperty to show slide on turn*/
  timer = setTimeout(showSlides, 5000); /*time unit is milliseconds*/
  /*
  Note:
  In showSlides:
    •There is no parenthesis because we are using a reference to be able to use the
    function multiple times when the event is triggered.
    •We didn't send the slideIndex as a parameter, so n is undefined.
  
  SetTimeout is a built-in function
  */
}

//Checks if slides exist to activate slideshow
if (slides.length > 0) {
  showSlides(slideIndex);
}



//-------------------------------PLACES HOVER EFFECT VARS AND FUNCTIONS------------------------------------//
//Places on-hover effect variables
var placeGridItems = document.getElementsByClassName("place-grid-item"); /*HTMLCollection*/
var placeGridItemsArr = Array.from(placeGridItems); /*Converting the HTMLCollection into an Array to be able to use methods*/
var leftContainer = document.getElementById("left-container"); /*Notice it's an object, not an HTMLCollection*/
var navBar = document.getElementsByClassName("navbar")[0]; /*Storing an element of an HTMLCollection into an object*/
var footer = document.getElementsByTagName("footer")[0]; /*Storing an element of an HTMLCollection into an object*/

//Places on-hover-effect functions
function addFocusEffect() {
  leftContainer.classList.add("jsHover");
  navBar.classList.add("jsHover");
  footer.classList.add("jsHover");
  placeGridItemsArr.forEach(element => { /*For each element do the following code*/
    element.classList.add("jsHover");
  })
}

function removeFocusEffect() {
  leftContainer.classList.remove("jsHover");
  navBar.classList.remove("jsHover");
  footer.classList.remove("jsHover");
  placeGridItemsArr.forEach(element => { /*For each element do the following code*/
    element.classList.remove("jsHover");
    element.removeAttribute("id");
  })
}

function activateFocus() {
  placeGridItemsArr.forEach(element => { /*For each element, do the following code*/
    element.onmouseover = function (event) {
      addFocusEffect();
      var target = event.currentTarget; /*currentTarget captures the element of the event ONLY*/
      target.setAttribute("id", "jsFocus"); /*The ID has a priority over the class, so the effect of the ID will take place instead of the class*/
    }
    element.addEventListener("mouseout", removeFocusEffect);
    /*Notice there is no parenthesis because we are using a reference to be able to use the
    function multiple times when the event is triggered*/
  })
}

//Checks if grid-items exist to activate the effect
//Makes sure we don't activate the effect on mobile view
if (placeGridItems.length > 0) {
  if (window.innerWidth > 768) {
    activateFocus();
  }
}
//---------------------------------------------------------------------------------------------------------//
//-------------------------------HOTELS HOVER EFFECT VARS AND FUNCTIONS------------------------------------//
//Hotels Grid on-hover effect variables
var hotelGridItems = document.getElementsByClassName("hotel-grid-item"); /*HTMLCollection*/
var hotelGridItemsArr = Array.from(hotelGridItems); /*Converting the HTMLCollection into an Array to be able to use methods*/
var navBar = document.getElementsByClassName("navbar")[0]; /*Storing an element of an HTMLCollection into an object*/
var footer = document.getElementsByTagName("footer")[0]; /*Storing an element of an HTMLCollection into an object*/

//Hotel-Grid on-hover-effect functions
function addFocusEffect2() {
  navBar.classList.add("jsHover");
  footer.classList.add("jsHover");
  hotelGridItemsArr.forEach(element => { /*For each element do the following code*/
    element.classList.add("jsHover");
  })
}

function removeFocusEffect2() {
  navBar.classList.remove("jsHover");
  footer.classList.remove("jsHover");
  hotelGridItemsArr.forEach(element => { /*For each element do the following code*/
    element.classList.remove("jsHover");
    element.removeAttribute("id");
  })
}

function activateFocus2() {
  hotelGridItemsArr.forEach(element => { /*For each element, do the following code*/
    element.onmouseover = function (event) {
      addFocusEffect2();
      var target = event.currentTarget; /*currentTarget captures the element of the event ONLY*/
      target.setAttribute("id", "jsFocus"); /*The ID has a priority over the class, so the effect of the ID will take place instead of the class*/
    }
    element.addEventListener("mouseout", removeFocusEffect2);
    /*Notice there is no parenthesis because we are using a reference to be able to use the
    function multiple times when the event is triggered*/
  })
}

//Checks if hotel-grid-items exist to activate the effect
//Makes sure we don't activate the effect on mobile view
if (hotelGridItems.length > 0) {
  if (window.innerWidth > 768) {
    activateFocus2();
  }
}

//Form and newsletter submission logic.

//Form input variables.
var emailField = document.getElementById("subscribeEmail");
var firstName = document.getElementsByName("FName")[0];
var middleName = document.getElementsByName("LName")[0];
var lastName = document.getElementsByName("LName")[0];
var contactEmail = document.getElementsByName("contactEmail")[0];
var messageLabel = document.getElementsByName("messagelabel")[0];


//Checks if form data is correct.
function informSubmission() {
  if (firstName.value !== "" && middleName.value !== "" && lastName.value !== "" && validateEmail(contactEmail.value) && messageLabel.value !== "")
    alert("Your data has been submitted!");
}

//Check if Newsletter email format is correct.
function informSubscription() {
  if (validateEmail(emailField.value))
    alert("Thanks for subscribing to our newsletter! Now we will keep you updated.");
}

//Check if any email passed as an argument is in a correct format or not.
function validateEmail(email) {
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (email = "" || atpos < 1 || (dotpos - atpos < 2)) {
    alert("Please enter a correct e-mail address...");
    document.contact.Email.focus();
    return false;
  }
  return true;
}
"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/** @@@@@@@@@@@@@ MY CODES START FROM HERE@@@@@@@@@@@@@@@@@@ **/






// SEARCH BAR 

function searchList() {
  // Get the search term and convert to lowercase
  var input = document.getElementById("mySearch");
  var filter = input.value.toLowerCase();

  // Get the list and list items
  var ul = document.getElementById("myList");
  var li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those that don't match the search query
  for (var i = 0; i < li.length; i++) {
    var text = li[i].textContent.toLowerCase();
    if (text.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Add event listener to the search input
document.getElementById("mySearch").addEventListener("keyup", searchList);


// ONCLICK SERVICE NAME ENTER IN ORDER FORM 



// Get all the li elements
const listItems = document.querySelectorAll('li');

// Attach a click event listener to each li
listItems.forEach((li) => {
  li.addEventListener('click', () => {
    // Get the text of the clicked li
    const liText = li.innerText;
    
    // Update the text of the service_type div with the li text
    const output = document.getElementById('service_type');
    output.value = liText;
    console.log("yes")
  });
});



// ONCLICK  ORDER FORM POPUP

function fn(){
  let FullBox = document.getElementById("FullBox");
  let popup = document.getElementById("Order");
  var Service = document.getElementById("Service");

  if (FullBox.style.display === "flex") {
    setTimeout(function() {
      popup.style.display = "block";
      FullBox.style.display = "none";
      popup.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); //scroll kore popup div e niye jabe
      Service.style.backgroundColor = "var(--bright-navy-blue)";
    }, 10); // 2-second delay
  }
}


// POPUP CLOSE FUNCTION 

function Closefn(){
  let FullBox = document.getElementById("FullBox");
  let popup = document.getElementById("Order");

  if (popup.style.display === "block") {
    popup.style.display = "none";
    FullBox.style.display = "flex";
    Service.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); //scroll kore popup div e niye jabe
    Service.style.backgroundColor = "white";
}
}



// If offline 

var isOnline = navigator.onLine;

function checkInternet() {
  var myDiv = document.getElementById('slider');

  if (navigator.onLine) {
    if (!isOnline) {
      window.location.reload();
    }
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
  
  isOnline = navigator.onLine;
}

checkInternet();

window.addEventListener('online', checkInternet);
window.addEventListener('offline', checkInternet);




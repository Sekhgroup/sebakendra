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


// TYPING PLACE HOLDER 

var sbar = document.getElementById("mySearch");
var placeholder = sbar.getAttribute("placeholder");
var i = 0;
setInterval(function() {
  if (i < placeholder.length) {
    sbar.setAttribute("placeholder", placeholder.slice(0, i) + " |");
    i++;
  } else {
    sbar.setAttribute("placeholder", placeholder.slice(0, i));
    i = 0;
  }
}, 200);


/* added colours for li links 
const lis = document.querySelectorAll('#myList li');
const colors = ['#f5f5f5', '#e3f2fd', '#fce4ec', '#f3e5f5', '#e0f7fa', '#fff8e1', '#e8eaf6', '#f1f8e9', '#ffebee', '#fff3e0'];

for(let i = 0; i < lis.length; i++) {
  lis[i].style.backgroundColor = colors[i % colors.length];
}*/

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Expand/Collapse Experience Details JS Code
document.querySelectorAll('.expander').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      button.textContent = 'Collapse'; // Change button text to "Collapse"
    } else {
      details.style.display = 'none';
      button.textContent = 'Expand'; // Change button text to "Expand"
    }
  });
});

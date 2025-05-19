// Initialize Animation on Scroll library
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Sticky Navigation Menu JS Code
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.parentElement.classList.add("show");
    } else {
      nav.classList.remove("sticky");
      scrollBtn.parentElement.classList.remove("show");
    }
    
    // Add reveal animations while scrolling
    revealElements();
  };

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
  };

  cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  };

  // Close menu when clicking on nav links
  document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', () => {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      body.style.overflow = "auto";
      scrollBtn.style.pointerEvents = "auto";
    });
  });

  // Expand/Collapse Experience Details JS Code
  document.querySelectorAll('.expander').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;
      if (details.style.maxHeight) {
        details.style.maxHeight = null;
        button.textContent = 'Expand';
        details.style.opacity = '0';
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        button.textContent = 'Collapse';
        details.style.opacity = '1';
      }
    });
  });

  // Initialize typed.js for the rotating text animation
  var typed = new Typed('#typed-text', {
    strings: [
      "Gen AI Engineer",
      "LLM Engineer",
      "Data Scientist",
      "MLOps Engineer",
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
    showCursor: true,
    cursorChar: '|',
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation to skill boxes
  const skillBoxes = document.querySelectorAll('.skills .box');
  skillBoxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.1}s`;
    box.classList.add('animate-box');
  });

  // Add animation to tools grid items
  const toolItems = document.querySelectorAll('.tool-item');
  toolItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
    item.classList.add('animate-tool');
  });

  // Add active class to navigation menu based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu li a');

  function highlightNavigation() {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Reveal elements as they come into view
  function revealElements() {
    const elements = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < elements.length; i++) {
      const elementTop = elements[i].getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 50) {
        elements[i].classList.add('active');
      }
    }
  }

  // Add reveal class to elements for scroll animations
  document.querySelectorAll('.experience-item, .why-hire-details, .tool-item, .box').forEach(item => {
    item.classList.add('reveal');
  });

  // Apply parallax effect to home section background
  const homeSection = document.querySelector('.home');
  window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    homeSection.style.backgroundPositionY = offset * 0.5 + 'px';
  });
  
  // Run these functions on page load
  highlightNavigation();
  revealElements();

  // Run on scroll
  window.addEventListener('scroll', highlightNavigation);
});
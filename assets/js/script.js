'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * NAVBAR
 * navbar toggle for mobile
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * slide with [shift + mouse wheel]
   */

  currentSlider.addEventListener("wheel", function (event) {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });

  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }
const textArray = ["  Mahasiswa", " Programmer", " Pecinta Kopi"];
    let textIndex = 0;
    let charIndex = 0;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 2000;
    let dynamicText = document.getElementById("dynamic-text");

    function type() {
      if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex++;
        if (textIndex >= textArray.length) {
          textIndex = 0;
        }
        setTimeout(type, typingDelay);
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(type, newTextDelay);
    });

    // Select element logo
const logo = document.querySelector('.logo');

// Function to change text color when scrolled
function changeColorOnScroll() {
  if (window.scrollY > 0) {
    // Change text color to rgb(0, 255, 170) when scrolled
    logo.style.color = 'black';
  } else {
    // Change text color back to original when not scrolled
    logo.style.color = 'rgb(0, 255, 170)';
  }
}


// Add event listener for scroll event
window.addEventListener('scroll', changeColorOnScroll);

function downloadCV() {
  // Replace the URL with the actual path to your CV file
  var cvUrl = 'https://drive.google.com/file/d/1QLv7nH4mIrU1_Ln4nqnuMv8GdwngggLh/view';

  // Create a temporary link element
  var link = document.createElement('a');

  // Set the href attribute to the CV file URL
  link.href = cvUrl;

  // Specify that it should be downloaded and set the file name
  link.setAttribute('download', 'your_cv_filename.pdf');

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger a click event to start the download
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
  const servicesLink = document.querySelector(".navbar-link[href='#services']");
  const sectionSubtitleSection = document.getElementById("section-subtitle");

  servicesLink.addEventListener("click", function(event) {
    event.preventDefault();
    sectionSubtitleSection.scrollIntoView({ behavior: "smooth" });
  });
});

const quotes = [{
  quote: `"You only live once, but if you do it right, once is enough."`,
  writer: `– Mae West`
}, {
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
  writer: `– Albert Einstein`
}, {
  quote: `"Never let the fear of striking out keep you from playing the game."`,
  writer: `– Babe Ruth`
}, {
  quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
  writer: `– Steve Jobs`
}, {
  quote: `"In order to write about life first you must live it."`,
  writer: `– Ernest Hemingway`
}, {
  quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
  writer: `– Soren Kierkegaard`
}, {
  quote: `"The unexamined life is not worth living."`,
  writer: `– Socrates`
}, {
  quote: `"Turn your wounds into wisdom."`,
  writer: `– Oprah Winfrey`
}, {
  quote: `"The purpose of our lives is to be happy."`,
  writer: `- Dalai Lama`
}, {
  quote: `"Live for each second without hesitation."`,
  writer: `- Elton John`
}, ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  
  
  quote.innerHTML = quotes[random].quote;

  
  writer.innerHTML = quotes[random].writer;
})

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('container');
  const circles = []; // Array to store circle elements

  function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle-element');

    // Set fixed size for each circle
    circle.style.width = "100px";
    circle.style.height = "100px";

    container.appendChild(circle);
    circles.push(circle); // Add circle to array

    setTimeout(() => {
      circle.style.transition = "transform 2s ease-out, opacity 2s ease-out";
      circle.style.transform = "scale(0)";
      circle.style.opacity = "0";
      setTimeout(() => {
        container.removeChild(circle);
        circles.splice(circles.indexOf(circle), 1); // Remove circle from array
        if (circles.length === 0 && window.scrollY > 100) {
          container.style.height = "0"; // Set container height to 0 if no circles left and scrolled past a certain point
        }
      }, 2000);
    }, 1000);
  }

  function generateRows() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 13; j++) {
        createCircle();
      }
    }
  }

  // Generate initial rows
  generateRows();

  // Repeat every 3 seconds
  const interval = setInterval(generateRows, 3000);

  // Function to remove circles when scrolling
  function removeCirclesOnScroll() {
    if (window.scrollY > 100 && circles.length > 0) { // Adjust the scroll threshold as needed
      clearInterval(interval); // Stop generating circles
      circles.forEach(circle => {
        container.removeChild(circle); // Remove circles from container
      });
      circles.length = 0; // Empty the array
      container.style.height = "0"; // Set container height to 0
      window.removeEventListener('scroll', removeCirclesOnScroll); // Remove the scroll event listener
    }
  }

  window.addEventListener('scroll', removeCirclesOnScroll);
});






//logo hover anim
const logoLink = document.querySelector('.wrapper .logo a');
const texts = ["Growing around grief", "Denial", "Anger", "Bargaining", "Depression", "Acceptance"];
let currentIndex = 0; // Initialize currentIndex to 0
let intervalId; // Declare intervalId variable

// Function to change text on hover
function changeText() {
  currentIndex = (currentIndex + 1) % texts.length;
  logoLink.textContent = texts[currentIndex];
}

// Add event listeners for mouseenter and mouseleave
logoLink.addEventListener('mouseenter', () => {
  intervalId = setInterval(changeText, 150); // Change text every 1000 milliseconds (1 second)
});

logoLink.addEventListener('mouseleave', () => {
  clearInterval(intervalId);
  logoLink.textContent = texts[0]; // Reset text to "Growing around grief"
});

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const galleryWrapper = document.querySelector(".gallery-wrapper");
const polaroidImages = document.querySelectorAll(".polaroid");

// Handle "Yes" button click to show the gallery page
yesBtn.addEventListener("click", () => {
  // Hide the initial page
  wrapper.style.display = "none";  // Directly hide the wrapper

  // Show the gallery page
  galleryWrapper.style.display = "block";  // Show the gallery
  
  // Add random animation delays to each polaroid image
  polaroidImages.forEach((polaroid) => {
    // Generate a random delay between 0s and 2s (you can adjust the range as needed)
    const randomDelay = Math.random() * 2; 
    polaroid.style.animationDelay = `${randomDelay}s`; // Apply delay to each polaroid image
  });
});

// Handle "No" button hover (as before)
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

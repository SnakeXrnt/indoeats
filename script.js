document.addEventListener('DOMContentLoaded', () => {
    const recommendations = [
        "Search for a restaurant near you",
        "Search for pizza",
        "Discover new recipes",
        "Find the best coffee shops",
        // Add more recommendations as needed
    ];
    
    function updatePlaceholder() {
        const input = document.querySelector('input[type="text"]');
        const placeholderFade = document.querySelector('.placeholder-fade');
        let index = 0;
    
        setInterval(() => {
            placeholderFade.style.opacity = 0; // Fade out
            setTimeout(() => {
                input.placeholder = recommendations[index];
                placeholderFade.style.opacity = 1; // Fade in
                index = (index + 1) % recommendations.length;
            }, 500); // Wait for 500 milliseconds (half a second) before fading in
        }, 3000); // Change the text every 3 seconds
    }
    
    // Call the function to start changing the placeholder text with fade-in/fade-out effect
    updatePlaceholder();

    const scrollButton = document.getElementById('scroll-button');
    const nextSection = document.getElementById('next-section');

    // Add a click event listener to the button
    scrollButton.addEventListener('click', () => {
        // Scroll to the next section smoothly
        nextSection.scrollIntoView({ behavior: 'smooth' });
});
    
    
});

function scrollContent(direction) {
    const content = document.getElementById('next-section');
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const widthPercentage = 33.33333; // Adjust this percentage as needed
    const isAtLeftLimit = content.scrollLeft === 0;
    const isAtRightLimit = content.scrollLeft + content.clientWidth === content.scrollWidth;
    const scrollAmount = (viewportWidth * widthPercentage) / 100;
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
  
    if (direction === 'left') {
      content.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      content.scrollLeft += scrollAmount;
    }

    if (isAtLeftLimit) {
        leftButton.style.backgroundColor = 'red'; // Change to the desired color
      } else {
        leftButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reset to the default color
      }
    
      if (isAtRightLimit) {
        rightButton.style.backgroundColor = 'red'; // Change to the desired color
      } else {
        rightButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reset to the default color
      }
  }
  
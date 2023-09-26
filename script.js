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

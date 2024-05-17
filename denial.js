function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('random-circle');
    const diameter = Math.floor(Math.random() * 100) + 50;
    const lineWidth = diameter * 1.2; // Length of line is set to be 1.5 times the diameter of the circle
    const radius = diameter / 2;
    const centerX = Math.random() * (window.innerWidth - diameter);
    const centerY = Math.random() * (window.innerHeight - diameter);
    const lineLeftOffset = (lineWidth - diameter) / 2; // Calculate the offset to center the line above the circle

    circle.style.width = `${diameter}px`;
    circle.style.height = circle.style.width;
    circle.style.top = `${centerY}px`;
    circle.style.left = `${centerX}px`;
    document.body.appendChild(circle);

    setTimeout(() => {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.width = `${lineWidth}px`;
        line.style.height = '1px';

        line.style.opacity = '0'; // Initially set opacity to 0
        line.style.transition = 'opacity 0.5s'; // Apply transition effect for opacity change
        line.style.top = `${centerY + radius}px`; // Position line at the center of the circle
        line.style.left = `${centerX - lineLeftOffset}px`; // Adjust line position to center it horizontally
        document.body.appendChild(line);

        // Triggering reflow to apply transition
        line.offsetHeight;

        // Gradually change opacity to fade in the line
        line.style.opacity = '1';

        // Remove line and circle together after a slight delay
        setTimeout(() => {
            line.remove();
            circle.remove();
        }, 500); // Remove after 1.5 seconds
    }, 500); // Add a slight delay of 0.5 seconds before showing the line
}

// Create circles at random intervals
setInterval(createCircle, 50);

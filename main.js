const wheel = document.getElementById('wheel');
const btn = document.getElementById('spinBtn');

// We store the current rotation so we don't reset to 0 every time
let currentRotation = 0;

btn.addEventListener('click', () => {
    // 1. Generate a random degree (between 2000 and 5000 degrees for a long spin)
    const randomDegree = Math.floor(Math.random() * 3000) + 2000;
    
    // 2. Add this to the current rotation
    currentRotation += randomDegree;

    // 3. Apply the CSS transform
    wheel.style.transform = `rotate(${currentRotation}deg)`;
});

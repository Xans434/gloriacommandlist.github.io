// Snowfall Effect for Gloria Bot Website (Viewport Relative)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snowflakes');
    const maxSnowflakes = 60; // Total snowflakes on screen at once

    function createSnowflake() {
        // Ensure we don't exceed the max limit
        if (container.children.length >= maxSnowflakes) return;

        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.textContent = '❄';

        // Randomize visual properties
        const size = Math.random() * 12 + 8; // 8px to 20px
        const left = Math.random() * 100; // 0vw to 100vw
        const duration = Math.random() * 7 + 8; // 8s to 15s fall time
        const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8 opacity

        flake.style.fontSize = `${size}px`;
        flake.style.left = `${left}vw`;
        flake.style.animationDuration = `${duration}s`;
        flake.style.opacity = opacity;

        // When the snowflake finishes falling across the viewport, remove it and spawn a new one
        flake.addEventListener('animationend', () => {
            flake.remove();
            createSnowflake();
        });

        container.appendChild(flake);
    }

    // Initial spawn with staggered delays so they don't all fall at once
    for (let i = 0; i < maxSnowflakes; i++) {
        setTimeout(createSnowflake, Math.random() * 15000);
    }
});
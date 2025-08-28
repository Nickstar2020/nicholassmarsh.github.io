document.addEventListener('DOMContentLoaded', function() {
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    document.body.prepend(starfield);

    // Create stars
    const numStars = 200;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random twinkle delay
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starfield.appendChild(star);
        stars.push({ element: star, x, y });
    }

    // Parallax effect on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                stars.forEach(star => {
                    // Different parallax speeds based on star size
                    const speed = parseFloat(star.element.style.width) * 0.1;
                    const yPos = star.y + (scrolled * speed * 0.01);
                    star.element.style.transform = `translateY(${-scrolled * speed * 0.01}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });
});

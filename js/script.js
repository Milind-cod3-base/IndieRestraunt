const banner = document.getElementById('banner');
const collage = document.getElementById('collage');
const collageImages = document.querySelectorAll('.collage-image');

let lastScrollTop = 0;
let collageLocked = false;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const collageOffset = collage.offsetTop;

    // Banner shrink effect
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        banner.classList.add('shrink'); // Add class to shrink the banner
        banner.style.overflow = 'hidden'; // Hide overflow
    } else {
        // Scrolling up
        banner.classList.remove('shrink'); // Remove class to expand the banner
        banner.style.overflow = 'visible'; // Show overflow
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // Collage animation
    if (scrollTop + window.innerHeight > collageOffset && !collageLocked) {
        // When the collage section is in view
        collage.classList.add('locked');
        collageImages.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '1'; // Fade in images
                img.style.transform = 'translate(0)'; // Reset transform
            }, index * 100); // Stagger the animation
        });
        collageLocked = true; // Prevent re-triggering
    } else if (scrollTop + window.innerHeight < collageOffset && collageLocked) {
        // When scrolling up
        collage.classList.remove('locked');
        collage.classList.add('scattered');
        collageImages.forEach((img) => {
            img.style.opacity = '0'; // Fade out images
            img.style.transform = 'translate(calc(-50% + 50vw), calc(-50% + 50vh))'; // Scatter effect
        });
        collageLocked = false; // Allow re-triggering
    }
});

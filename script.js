const banner = document.getElementById('banner');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

});
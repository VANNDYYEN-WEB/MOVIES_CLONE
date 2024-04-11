document.addEventListener('DOMContentLoaded', function()
{
    const slider = document.querySelector('.content-img');
    const slides = document.querySelectorAll('.slide-img');
    
    if (slides.length > 0) {
        const slideWidth = slides[0].clientWidth;

        let counter = 0;

        function nextSlide() {
            counter++;
            if (counter < slides.length) {
                slider.style.transform = `translateX(${-counter * slideWidth}px)`;
            } else {
                // If counter exceeds the number of slides, transition to the first slide smoothly from right to left
                slider.style.transition = 'none';
                slider.style.transform = `translateX(${slideWidth}px)`;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.9s ease';
                    slider.style.transform = 'translateX(0)';
                }, 50);
                counter = 0; // Reset counter to 0
            }
        }

        setInterval(nextSlide, 2000); // Change slide every 3 seconds
    } else {
        console.error('No slides found.');
    }
});
// end of slide top img

// window.addEventListener('scroll', function() {
//     var navBar = document.querySelector('.top-page');
//     var scrollPosition = window.scrollY;

//     if (scrollPosition > 10) { // Adjust this value according to when you want the nav bar to become fixed
//         navBar.classList.add('fixed');
//     } else {
//         navBar.classList.remove('fixed');
//     }
// });



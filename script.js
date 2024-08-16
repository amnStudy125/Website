
    document.addEventListener('DOMContentLoaded', function () {
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        const scrollDuration = 5000; // Time in milliseconds for auto-scroll

        if (carouselItems.length === 0) {
            console.error('No carousel items found');
            return;
        }

        function scrollToNextItem() {
            const itemHeight = carouselItems[0].offsetHeight;
            const containerHeight = carouselContainer.offsetHeight;
            const scrollHeight = itemHeight * (currentIndex + 1);

            if (scrollHeight < containerHeight) {
                carouselContainer.scrollTop = scrollHeight;
            } else {
                carouselContainer.scrollTop = 0;
            }

            currentIndex = (currentIndex + 1) % carouselItems.length;
        }

        setInterval(scrollToNextItem, scrollDuration);
    });


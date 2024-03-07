const imageWithTextCarousel = document.querySelectorAll(".image-with-text-slider.splide");
if (imageWithTextCarousel.length > 0) {
    imageWithTextCarousel.forEach(element => {
        const splide = new Splide(element, {
            type: 'slide',
            perPage: 1,
            rewind: false,
            autoplay: false,
            pagination: false,
            arrows: true,
            breakpoints: {
                750: {
                    perPage: 1,
                    pagination: false,
                    autoplay: false
                }
            }
        });
        splide.mount();
    });
}

const trendForecastElement = document.querySelectorAll(".trend-forecast-container");
if (trendForecastElement.length > 0) {
    trendForecastElement.forEach(element => {
        const splide = new Splide(element, {
            type: 'slide',
            perPage: 4,
            rewind: false,
            autoplay: false,
            pagination: false,
            arrows: false,
            breakpoints: {
                749: {
                    perPage: 1,
                    pagination: true,
                    arrows: true,
                    freeScroll: true,
                    freeDrag: true,
                    autoplay: false,
                    speed: 2000
                }
            }
        });
        splide.mount();
    });
}

const mainElement = document.querySelectorAll(".main-style-feed-slider");
const thumbnailCarousel = document.querySelectorAll(".main-style-feed-thumbnail-slider");
if (mainElement.length > 0 && thumbnailCarousel.length > 0) {
    mainElement.forEach((element, index) => {
        const mainThumbnailSlider = new Splide(element, {
            type: 'slide',
            pagination: false,
            arrows: false,
            cover: true,
            lazyLoad: 'sequential',
            breakpoints: {}
        }).mount();

        const thumbnailSlider = new Splide(thumbnailCarousel[index], {
            fixedWidth: 223,
            fixedHeight: 150,
            isNavigation: true,
            gap: 10,
            focus: 'left',
            cover: true,
            lazyLoad: 'sequential',
            pagination: true,
            arrows: true,
            breakpoints: {
                750: {
                    fixedWidth: 103,
                    fixedHeight: 100,
                    pagination: true,
                    arrows: true
                },
            }
        }).mount();
        mainThumbnailSlider.sync(thumbnailSlider);
        mainThumbnailSlider.mount();
        thumbnailSlider.mount();
    });
}
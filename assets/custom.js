const mainCarouselElement = document.querySelector(".trend-forecast-container.splide")
if(mainCarouselElement){
    const splide = new Splide(mainCarouselElement, {
        type: 'slide',
        perPage: 4,
        rewind: false,
        autoplay: true,
        pagination: false,
        arrows: false,
        breakpoints: {
            750: {
                perPage: 1.1,
                pagination: true,
            }
        }
    });
    splide.mount();
}

const mainElement = document.querySelector(".main-style-feed-slider")
const thumbnailCarousel = document.querySelector(".main-style-feed-thumbnail-slider")
    if(mainElement && thumbnailCarousel){
        const mainSlider = new Splide(mainElement, {
            type: 'fade',
            pagination: false,
            arrows: false,
            cover: true,
            lazyLoad: 'sequential',
            breakpoints: {},
        }).mount();
        const thumbnailSlider = new Splide(thumbnailCarousel, {
            fixedWidth: 223,
            fixedHeight: 150,
            isNavigation: true,
            gap: 10,
            focus: 'left',
            pagination: false,
            breakpoints: {
                750: {
                    fixedWidth: 103,
                    fixedHeight: 100,
                },
            },
            cover: true,
            lazyLoad: 'sequential'
        }).mount();

        thumbnailSlider.on('click', function (slide) {
            mainSlider.go(slide.index);
          });
    }

const imageWithTextCarousel = document.querySelector(".image-with-text-slider.splide")
if(imageWithTextCarousel){
    const splide = new Splide(imageWithTextCarousel, {
        type: 'slide',
        perPage: 1,
        rewind: false,
        autoplay: true,
        pagination: false,
        arrows: true,
        breakpoints: {
            750: {
                perPage: 1,
                pagination: true,
            }
        }
    });
    splide.mount();
}
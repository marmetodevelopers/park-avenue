class MySplide extends HTMLElement {
    constructor() {
        super();
        this.initializeSlide();
    }

    initializeSlide() {
        this.id = this.getAttribute('id');
        this.arrows = this.dataset.arrows;
        this.pagination = this.dataset.pagination;
        this.fixedHeight = this.dataset.fixedHeight;
		
        this.slider = new Splide('#' + this.id, {
            type: 'loop',
            perPage: 1,
            drag:'true',
            perMove: 1,
            arrows: this.arrows === "false" ? false : true, // Set arrows to false if this.arrows is "0", true otherwise
            pagination: this.pagination,
            focus: 'center',
            fixedHeight: this.fixedHeight,
            autoplay: true,
            loop: true,
            interval: 3000,
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                750: {
                    perPage: 1,
                },
            },
        });
        this.slider.mount();
    }
}

customElements.define('my-splide', MySplide);
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
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
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
            fixedHeight: 150,
            isNavigation: true,
            gap: 20,
            focus: 'left',
            cover: true,
            lazyLoad: 'sequential',
            pagination: false,
            arrows: true,
            perPage:5,
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                750: {
                    fixedHeight: 100,
                    pagination: true,
                    arrows: true,
                    gap:10,
                    perPage:3
                },
            }
        }).mount();
        mainThumbnailSlider.sync(thumbnailSlider);
        mainThumbnailSlider.mount();
        thumbnailSlider.mount();
    });
}

class VideoContainer extends HTMLElement {
    connectedCallback() {
      const videoContainer = this.querySelector(".video-items-container");
      const playButtons = this.querySelectorAll(".play-button button");
      playButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.play(button);
        });
      });
    }
  
    play(button) {
      const video = button.closest(".video-wrapper").querySelector("video");
      const playButton = button.parentElement;
      
      video.controls = true; // Show video controls
      video.play(); // Play video
      playButton.style.display = 'none'; // Hide play button
  
      // Add event listener to hide play button when video is playing
      video.addEventListener('play', () => {
        video.controls = true
        playButton.style.display = 'none';
      });
  
      // Add event listener to show play button when video is paused
      video.addEventListener('pause', () => {
        video.controls = false
        playButton.style.display = 'block';
      });
    }
  
    pause() {
      const video = this.querySelector("video");
      const playButton = this.querySelector(".play-button");
      
      video.pause(); // Pause video
      playButton.style.display = 'block'; // Show play button
    }
  }
  
  customElements.define('video-container', VideoContainer);  
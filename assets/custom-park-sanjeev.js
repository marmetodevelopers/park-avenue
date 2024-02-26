// Image text carousel script

class ImageTextCarousel extends HTMLElement {
    constructor() {
        super();

        new Splide(`#${this.dataset.sectionId}`, {
            type: 'slide',
            rewind: true,
            rewindSpeed: 1000,
            start: 1,
            perPage: 2.2,
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                749: {
                    perPage: 1.2,
                },
            },
            gap: '20px',
            arrows: true,
        }).mount();

    }

}

customElements.define('image-text-carousel', ImageTextCarousel);

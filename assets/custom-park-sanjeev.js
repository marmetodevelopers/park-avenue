// Image text carousel script

class ImageTextCarousel extends HTMLElement {
    constructor() {
        super();

        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPagination;
        this.perpageMobile = this.dataset.mobilePagination;
        this.gapValue = this.dataset.gap;
        this.arrowDesktop = this.dataset.desktopArrow;
        this.arrowMobile = this.dataset.mobileArrow;

        document.addEventListener('DOMContentLoaded', () => {
            new Splide(`#${this.id}`, {
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
        })

    }

}

customElements.define('image-text-carousel', ImageTextCarousel);

// Park latest collections script

class ParkLatestCollections extends HTMLElement {
    constructor() {
        super();

        this.id = this.getAttribute('id');

        document.addEventListener('DOMContentLoaded', () => {
            new Splide(`#${this.id}`, {
                type: 'slide',
                rewind: true,
                rewindSpeed: 1000,
                start: 1,
                perPage: 3,
                classes: {
                    pagination: 'splide__pagination ibc_pagination',
                    page: 'splide__pagination__page ibc_page',
                },
                pagination: true,
                breakpoints: {
                    749: {
                        perPage: 1,
                    },
                },
                gap: '29px',
            }).mount();
        });

    }

}

customElements.define('park-latest-collections', ParkLatestCollections);

class ParkTrendingCarousel extends HTMLElement {
    constructor() {
        super();

        this.id = this.getAttribute('id');

        document.addEventListener('DOMContentLoaded', () => {
            new Splide(`#${this.id}`, {
                type: 'slide',
                rewind: true,
                rewindSpeed: 1000,
                start: 1,
                perPage: 3,
                classes: {
                    pagination: 'splide__pagination ibc_pagination',
                    page: 'splide__pagination__page ibc_page',
                },
                breakpoints: {
                    749: {
                        perPage: 1,
                        arrows: true,
                        pagination: true
                    },
                },
                gap: '79px',
                arrows: false,
                pagination: false
            }).mount();
        });

    }

}

customElements.define('park-trending-carousel', ParkTrendingCarousel);

class SplideCarousel extends HTMLElement {
    constructor() {
        super();

        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPagination;
        this.perpageMobile = this.dataset.mobilePagination;
        this.gapValue = this.dataset.gap;
        this.arrowDesktop = this.dataset.desktopArrow;
        this.arrowMobile = this.dataset.mobileArrow;

    }

    connectedCallback() {
        new Splide(`#${this.id}`, {
            type: 'slide',
            rewind: true,
            rewindSpeed: 1000,
            start: 1,
            perPage: this.perPageDesktop,
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                749: {
                    perPage: this.perpageMobile,
                },
            },
            gap: this.gapValue + 'px',
            arrows: `${this.arrowDesktop}`,
        }).mount();
    }

}

customElements.define('splide-carousel', SplideCarousel);

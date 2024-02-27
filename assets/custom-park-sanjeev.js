

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
        debugger
        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPerPage;
        this.perpageMobile = this.dataset.mobilePerPage;
        this.gapValue = this.dataset.gap;
        this.arrowDesktop = Boolean(this.dataset.desktopArrow);
        this.arrowMobile = Boolean(this.dataset.mobileArrow);
        this.paginationDesktop = Boolean(this.dataset.desktopPagination);
        this.paginationMobile = Boolean(this.dataset.mobilePagination);

        console.log(typeof(this.paginationDesktop), typeof(this.paginationMobile), typeof(this.arrowDesktop), typeof(this.arrowMobile), this.gapValue)

    }
    connectedCallback() {
        new Splide(`#${this.id}`, {
            type: 'slide',
            rewind: true,
            rewindSpeed: 1000,
            start: 1,
            perPage: this.perPageDesktop,
            gap: `${this.gapValue}px`,
            arrows: Boolean(this.arrowDesktop),
            pagination: Boolean(this.paginationDesktop),
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                749: {
                    perPage: this.perpageMobile,
                    arrows: this.arrowMobile,
                    pagination: this.paginationMobile
                },
            }
        }).mount();
    }

}

customElements.define('splide-carousel', SplideCarousel);

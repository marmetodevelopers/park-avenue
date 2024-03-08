class SplideCarousel extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPerPage;
        this.perpageMobile = this.dataset.mobilePerPage;
        this.gapValue = this.dataset.gap;
        this.tabGap = this.dataset.gaptab;
        this.arrowDesktop = Boolean(this.dataset.desktopArrow);
        this.arrowMobile = Boolean(this.dataset.mobileArrow);
        this.paginationDesktop = Boolean(this.dataset.desktopPagination);
        this.paginationMobile = Boolean(this.dataset.mobilePagination);
        
        
    }
    connectedCallback() {
        new Splide(`#${this.id}`, {
            type: 'slide',
            rewind: true,
            rewindSpeed: 1000,
            start: 1,
            perMove:1,
            perPage: this.perPageDesktop,
            gap: `${this.gapValue}px`,
            arrows: this.arrowDesktop,
            pagination: this.paginationDesktop,
            autoplay: true,
            interval: 3000,
            classes: {
                pagination: 'splide__pagination ibc_pagination',
                page: 'splide__pagination__page ibc_page',
            },
            breakpoints: {
                749: {
                    perPage: this.perpageMobile,
                    arrows: this.arrowMobile,
                    pagination: this.paginationMobile,
                    gap:'15px',
                },
               
               
            }
        }).mount();
    }
}

customElements.define('splide-carousel', SplideCarousel);

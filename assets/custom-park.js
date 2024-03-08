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
        this.mobilePaddingLeft = this.dataset.mobilepaddingleft;
        this.mobilePaddingRight = this.dataset.mobilepaddingright;
        this.desktopPaddingLeft = this.dataset.desktoppaddingleft;
        this.desktopPaddingRight = this.dataset.desktoppaddingright;
        this.autoplay = this.dataset.autoplay  === 'true' || false;
        
        
    }
    connectedCallback() {
        new Splide(`#${this.id}`, {
            type: 'loop',
            rewind: true,
            rewindSpeed: 1000,
            start: 1,
            perMove:1,
            perPage: this.perPageDesktop,
            gap: `${this.gapValue}px`,
            arrows: this.arrowDesktop,
            pagination: this.paginationDesktop,
            autoplay: 'true',
            interval: 3000,
            padding: { left: this.desktopPaddingLeft, right: this.desktopPaddingRight },
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
                    padding: { left: this.desktopPaddingLeft, right: this.desktopPaddingRight },
                },
               
               
            }
        }).mount();
    }
}

customElements.define('splide-carousel', SplideCarousel);

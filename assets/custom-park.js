class SplideCarousel extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPerPage;
        this.perpageMobile = this.dataset.mobilePerPage;
        this.gapValue = this.dataset.gap;
        this.tabGap = this.dataset.gaptab;
        this.arrowDesktop = this.dataset.desktopArrow  === 'true' || false;
        this.arrowMobile = this.dataset.mobileArrow  === 'true' || false;
        this.paginationDesktop = this.dataset.desktopPagination  === 'true' || false;
        this.paginationMobile = this.dataset.mobilePagination  === 'true' || false;
        this.mobilePaddingLeft = this.dataset.mobilepaddingleft;
        this.mobilePaddingRight = this.dataset.mobilepaddingright;
        this.desktopPaddingLeft = this.dataset.desktoppaddingleft;
        this.desktopPaddingRight = this.dataset.desktoppaddingright;
        this.mobileAutoplay = this.dataset.mobileAutoplay  === 'true' || false;
        this.desktopAutoplay  = this.dataset.desktopAutoplay  === 'true' || false;
    }
    connectedCallback() {
        new Splide(`#${this.id}`, {
            type: 'loop',
            rewind: true,
            rewindSpeed: 1000,
            perMove:1,
            drag: true,
            perPage: this.perPageDesktop,
            gap: `${this.gapValue}px`,
            arrows: this.arrowDesktop,
            pagination: this.paginationDesktop,
            autoplay: this.autoplay,
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

document.addEventListener('DOMContentLoaded', () => {
    const allCircles = document.querySelectorAll('.hotspot_circle');
    allCircles.forEach((element) => {
        element.nextElementSibling.style.display = 'none';
        element.nextElementSibling.nextElementSibling.style.display = 'none';

        element.addEventListener('mouseover', (event) => {
            let target = event.currentTarget;
            if (target.nextElementSibling && target.nextElementSibling.nextElementSibling) {
                target.nextElementSibling.style.display = 'block';
                target.nextElementSibling.nextElementSibling.style.display = 'block';
            }
        });

        element.addEventListener('mouseleave', (event) => {
            event.currentTarget.nextElementSibling.style.display = 'none';
            event.currentTarget.nextElementSibling.nextElementSibling.style.display = 'none';
        });
    });
});

class SplideCarousel extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('id');
        this.perPageDesktop = this.dataset.desktopPerPage;
        this.perpageMobile = this.dataset.mobilePerPage;
        this.gapValue = this.dataset.gap;
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
            autoplay: true,
            perPage: this.perPageDesktop,
            gap: `${this.gapValue}px`,
            arrows: this.arrowDesktop,
            pagination: this.paginationDesktop,
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

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
            type: 'fade',
            perPage: 1,
            perMove: 1,
            arrows: this.arrows === "false" ? false : true, // Set arrows to false if this.arrows is "0", true otherwise
            pagination: this.pagination,
            focus: 'left',
            fixedHeight: this.fixedHeight,
            autoplay: 'pause', 
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

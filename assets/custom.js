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

		console.log(this.id);
		document.addEventListener('DOMContentLoaded', () => {
			this.slider = new Splide('#' + this.id, {
				type: 'fade',
				perPage: 1,
				perMove: 1,
				arrows: this.arrows,
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
			slider.mount();
		});
	}
}

customElements.define('my-splide', MySplide);

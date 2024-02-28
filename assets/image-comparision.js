class ImageComparison extends HTMLElement {
    constructor() {
      super();
  
      this.active = false;
      this.button = this.querySelector('button');
      this.horizontal = this.dataset.layout === 'horizontal';
      this.bodyStyleOverflowY = document.body.style.overflowY;
      this.init();
    }
  
    animate() {
      this.setAttribute('animate', '');
      this.classList.add('animating');
      setTimeout(() => {
        this.classList.remove('animating');
      }, 1e3);
    }
  
    init() {
      this.button.addEventListener('touchstart', this.startHandler.bind(this));
      document.body.addEventListener('touchend', this.endHandler.bind(this));
      document.body.addEventListener('touchmove', this.onHandler.bind(this));
      
      this.button.addEventListener('mousedown', this.startHandler.bind(this));
      document.body.addEventListener('mouseup', this.endHandler.bind(this));
      document.body.addEventListener('mousemove', this.onHandler.bind(this));
    }
  
    startHandler() {
      if(window.innerWidth <= 750) {
        document.body.style.overflowY = 'hidden';
      }
  
      this.active = true;
      this.classList.add('scrolling');
    }
  
    endHandler() {
      this.active = false;
      this.classList.remove('scrolling');
      document.body.style.overflowY = this.bodyStyleOverflowY;
    }
  
    onHandler(e) {
      if (!this.active) return;
      
      const event = (e.touches && e.touches[0]) || e;
      const x = this.horizontal
                  ? event.pageX - this.offsetLeft
                  : event.pageY - this.offsetTop;
  
      this.scrollIt(x);
    }
  
    scrollIt(x) {
      const distance = this.horizontal ? this.clientWidth : this.clientHeight;
      
      const max = distance - 20;
      const min = 20;
      const mouseX = Math.max(min, (Math.min(x, max)));
      const mousePercent = (mouseX * 100) / distance;
      this.style.setProperty('--percent', mousePercent + '%');
    }
  }
  customElements.define('image-comparison', ImageComparison);
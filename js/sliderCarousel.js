'use sttrict';


class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev, 
    position = 0,
    slidesToShow = 3
  }){
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = { 
      position,
      widthSlide: Math.floor(100 / this.slidesToShow)
    };      
  }

  init() {
    this.addMyClass();
    this.addStyle();

    if(this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
  }

  addMyClass() {
    this.main.classList.add('my-slider');
    this.wrap.classList.add('my-slider__wrap');
    for ( const item of this.slides) {
      item.classList.add('my-slider__item');
    }
  }

  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
      .my-slider {
        overflow: hidden;
      }
      .my-slider__wrap {
        display: flex;
        transition: transform 0.5s;
        will-change: transform;
      }
      .my-slider__item {
        flex: 0 0 ${this.options.widthSlide}%;
        margin: auto 0;
      }
    `;

    document.head.appendChild(style);
  }

    controlSlider(){
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider(){
    --this.options.position;
    console.log(this.options.position);
    this.wrap.style.transform = `translateX(${this.options.position * this.options.widthSlide}%)`;
  }

  nextSlider(){
    ++this.options.position;
    console.log(this.options.position);
    this.wrap.style.transform = `translateX(${this.options.position * this.options.widthSlide}%)`;
  }


    addArrow(){

    }
}
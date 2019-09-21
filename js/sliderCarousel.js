'use sttrict';


class SliderCarousel {
  constructor({
    main,
    wrap,
    btn,
    next,
    prev, 
    infinity = false,
    position = 0,
    slidesToShow = 3
  }){
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.btn = document.querySelector(btn);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = { 
      position,
      infinity,
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
        display: flex;
        flex: 0 0 ${this.options.widthSlide}%;
        margin: auto 0;
      }
      .my-slider__prev,
      .my-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
        cursor: pointer;
      }
      .my-slider__prev {
        border-right-color: #4bb2ff;
      }
      .my-slider__next {
        border-left-color: #4bb2ff;
      }
      .my-slider__prev:hover {
        border-right-color: #19b5aa;
      }
      .my-slider__next:hover {
        border-left-color: #19b5aa;
      }
      .my-slider__prev:focus {
        background: transparent;
        outline: transparent;
      }
      .my-slider__next:focus {
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.appendChild(style);
  }

    controlSlider(){
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider(){
    if(this.options.infinity || this.options.position > 0){
      --this.options.position;
      console.log(this.options.position);
      if(this.options.position < 0){
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }    
  }

  nextSlider(){
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
      ++this.options.position;
      console.log(this.options.position);
      if (this.options.position > this.slides.length - this.slidesToShow){
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }    
  }


    addArrow(){
      this.prev = document.createElement('button');
      this.next = document.createElement('button');

      this.prev.className = 'my-slider__prev';
      this.next.className = 'my-slider__next';

      this.btn.appendChild(this.prev);
      this.btn.appendChild(this.next);
    }
}
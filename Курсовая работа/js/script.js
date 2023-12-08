let slides = document.getElementsByClassName('second_slider__img');
  let currentSlide = 0;

  let buttons = document.getElementsByClassName('cats__item');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      slideSwitch(buttons[i].dataset.name)
    });
  }

  function slideSwitch(slideNumber) {
    if (typeof slideNumber === 'number') {
      for (let i = 0; i < slides.length; i++) {
        if (i != slideNumber) {
          slides[i].classList.remove('second_slider__img_active');
        } else {
          slides[i].classList.add('second_slider__img_active');
        }
      }
    } else {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].dataset.name != slideNumber) {
          slides[i].classList.remove('second_slider__img_active');
        } else {
          slides[i].classList.add('second_slider__img_active');
        }
      }
    }
  }

  function validSlideNumberCheck(slideNumber) {
    let validNumber = slideNumber;

    if (slideNumber < 0) {
      validNumber = slides.length - 1;
    } else if (slideNumber > slides.length - 1) {
      validNumber = 0;
    }

    currentSlide = validNumber;

    return currentSlide;
  }
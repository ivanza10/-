var navButton = document.getElementById('nav-button');
var pagePanel = document.getElementById('page-panel');

navButton.addEventListener('click', function (event) {
    event.stopPropagation(); 
    pagePanel.classList.toggle('active');
    document.querySelectorAll('.bar').forEach(bar => {
        bar.classList.toggle('opened');
    });
});

document.addEventListener('click', function () {
    if (pagePanel.classList.contains('active')) {
        pagePanel.classList.remove('active');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.remove('opened');
        });
    }
});

pagePanel.addEventListener('click', function (event) {
    event.stopPropagation(); 
});


document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape' && pagePanel.classList.contains('active')) {
        pagePanel.classList.remove('active');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.remove('opened');
        });
    }
});

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);


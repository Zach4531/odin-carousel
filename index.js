const imageContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.image-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const circles = document.querySelectorAll('span');
let counter = 0;
const MAX_COUNT = images.length - 1;

prevButton.addEventListener('click', () => {
  if (counter == 0) {
    counter = 0;
    return false;
  }
  counter--;
  imageContainer.style.left = `-${counter * 600}px`;
});

nextButton.addEventListener('click', () => {
  if (counter == MAX_COUNT) {
    counter = MAX_COUNT;
    return false;
  }
  counter++;
  imageContainer.style.left = `-${counter * 600}px`;
});

circles.forEach((circle, i) => {
  circle.addEventListener('click', ({ currentTarget }) => {
    currentTarget.classList.add('show');
    counter = i;
    imageContainer.style.left = `-${i * 600}px`;
  });
});

const autoCarousel = setInterval(() => {
  if (counter == MAX_COUNT + 1) {
    counter = 0;
  }
  imageContainer.style.left = `-${counter * 600}px`;
  counter++;
}, 2000);

imageContainer.addEventListener('mouseover', () => {
  clearInterval(autoCarousel);
});

imageContainer.addEventListener('mouseleave', () => {});

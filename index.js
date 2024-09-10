const imageContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.image-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
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

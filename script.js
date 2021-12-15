const images = document.querySelectorAll('.img-12-min');
let count = 0, max = document.querySelector('.img-12-max');
const next = document.querySelector('.next');
next.onclick = nextFunction;
const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
const reset = document.querySelector('.reset');
reset.onclick = resetFunction;
max.onclick = highRes;

for (i = 0; i <= 5; i++) {
  document.querySelector(`#i${i}`).onclick = choose;
}
function choose() {
  images[count].classList.remove('active-img');
  let a = this.id;
  a.split('');
  count = +a[1];
  images[count].classList.add('active-img');
  max.setAttribute("src", `img/${count + 1}.jpg`);
}
function nextFunction() {
  images[count].classList.remove('active-img');
  count++;
  if (count > 5) {
    count = 0;
  }
  images[count].classList.add('active-img');
  max.setAttribute("src", `img/${count + 1}.jpg`);
}
function prevFunction() {
  images[count].classList.remove('active-img');
  count--;
  if (count < 0) {
    count = 5;
  }
  images[count].classList.add('active-img');
  max.setAttribute("src", `img/${count + 1}.jpg`);
}
function resetFunction() {
  images[count].classList.remove('active-img');
  count = 0;
  images[count].classList.add('active-img');
  max.setAttribute("src", `img/${count + 1}.jpg`);
}
function highRes() {
  if (this.style.width === 300 + 'px') {
    this.style.width = 500 + 'px';
    this.style.cursor = 'zoom-out';
  } else {
    this.style.width = 300 + 'px';
    this.style.cursor = 'zoom-in';
  }
}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let x = 50;
let y = 50;

let dx = 2;
let dy = 2;

let dvd_width = 100;
const dvd_height = 50;
let dvd_fill = 'pink';
const dvd_colours = ['pink', 'red', 'orange', 'blue', 'yellow', 'green'];

//Loops through each colour on click
let index = 0;
const h1 = document.querySelector('body h1');
h1.addEventListener('click', () => {
  h1.style.transform.rotate = '1.5turn';
  h1.style.color = dvd_colours[index];
  index++;

  if (index >= dvd_colours.length) {
    index = 0;
  }
});

//Adds width the dvd on each keystroke
const input_field = document.querySelector("input[type='text']");
input_field.addEventListener('keyup', () => {
  dvd_width = ctx.measureText(input_field.value).width;
});

//Makes the dvd move depending on the mouse move but its a but random... 😢
document.addEventListener('mousemove', (e) => {
  if (e.clientX > x && x + dvd_width > e.clientX) {
    dx = -dx;
  }

  if (e.clientY > y && y + dvd_height > e.clientY) {
    dy = -dy;
  }
});

const dvd_text = function () {
  ctx.font = '40px Arial';
  ctx.fillText(input_field.value, x, y);
  ctx.fillStyle = dvd_fill;
};

const draw_dvd = function () {
  ctx.beginPath();
  ctx.rect(x, y, dvd_width, dvd_height);
  ctx.fill();
  ctx.closePath;
};

console.log(ctx.measureText(input_field.value).width);

const dvd_change_color = function () {
  let color = dvd_colours[Math.floor(Math.random() * dvd_colours.length)];
  dvd_fill = color;
};

const dvd_direction = function () {
  return (Math.floor(Math.random() * (200 - 150)) + 150) / 100;
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dvd_text();
  draw_dvd();

  if (0 > x || ctx.canvas.width < x + dvd_width) {
    dx = -dvd_direction();

    if (0 > x) {
      dx = dvd_direction();
      dvd_change_color();
    }
    dvd_change_color();
  }

  if (0 > y || ctx.canvas.height < y + dvd_height) {
    dy = -dvd_direction();
    if (0 > y) {
      dy = dvd_direction();
      dvd_change_color();
    }

    dvd_change_color();
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);

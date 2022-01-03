const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let x = 50;
let y = 50;

let dx = 2;
let dy = 2;

const dvd_width = 100;
const dvd_height = 100;
let dvd_fill = 'pink';
const dvd_colours = ['pink', 'red', 'orange', 'blue', 'yellow', 'green'];

const draw_dvd = function () {
  ctx.beginPath();
  ctx.rect(x, y, dvd_width, dvd_height);
  ctx.fillStyle = dvd_fill;
  ctx.fill();
  ctx.closePath;
};

const dvd_change_color = function () {
  let color = dvd_colours[Math.floor(Math.random() * dvd_colours.length)];
  dvd_fill = color;
};

const dvd_direction = function () {
  return (Math.floor(Math.random() * (200 - 150)) + 150) / 100;
  // if (dx < 0) {
  //   dx = -dx;
  // }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw_dvd();
  if (0 > x || ctx.canvas.width < x + dvd_width) {
    console.log('direction: ' + dvd_direction());
    dx = -dvd_direction();
    console.log('dx: ' + dx);

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

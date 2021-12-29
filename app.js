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

const draw_dvd = function () {
  ctx.beginPath();
  ctx.rect(x, y, dvd_width, dvd_height);
  ctx.fillStyle = 'pink';
  ctx.fill();
  ctx.closePath;
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw_dvd();

  if (0 > x || ctx.canvas.width < x + dvd_width) {
    dx = -dx;
  }

  if (0 > y || ctx.canvas.height < y + dvd_height) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);

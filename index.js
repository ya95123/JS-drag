const circle = document.getElementById("circle")

let startX = 0;
let startY = 0;

circle.addEventListener('mousedown', dragStart);

function dragStart(e) {
  e.preventDefault();
  //記錄點擊相對被點擊物件的座標
  startX = e.clientX - circle.offsetLeft;
  startY = e.clientY - circle.offsetTop;
  circle.addEventListener('mousemove', move);
  circle.addEventListener('mouseup', stop);
}
function move(e) {
  //計算出拖曳物件最左上角座標
  x = e.clientX - startX;
  y = e.clientY - startY;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
}

function stop() {
  circle.removeEventListener('mousemove', move);
  circle.removeEventListener('mouseup', stop)
}
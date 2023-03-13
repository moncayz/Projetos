const myObject = document.getElementById('myObject');

let isDragging = false;
let dragOffset = { x: 0, y: 0 };

myObject.addEventListener('mousedown', e => {
  isDragging = true;
  dragOffset.x = e.offsetX;
  dragOffset.y = e.offsetY;
});

document.addEventListener('mousemove', e => {
  if (isDragging) {
    myObject.style.left = `${e.pageX - dragOffset.x}px`;
    myObject.style.top = `${e.pageY - dragOffset.y}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

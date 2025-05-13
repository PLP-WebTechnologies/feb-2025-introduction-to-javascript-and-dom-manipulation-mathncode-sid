function changeText() {
  const intro = document.getElementById('intro');
  intro.textContent = 'The text has been dynamically changed using JavaScript!';
}

function changeStyle() {
  const title = document.getElementById('main-title');
  title.style.color = 'blue';
  title.style.fontSize = '2.5rem';
  title.style.textTransform = 'uppercase';
}

function addElement() {
  const container = document.getElementById('element-container');
  if (!document.getElementById('new-item')) {
    const newElement = document.createElement('p');
    newElement.id = 'new-item';
    newElement.textContent = 'This is a new element added to the DOM!';
    container.appendChild(newElement);
  }
}

function removeElement() {
  const item = document.getElementById('new-item');
  if (item) {
    item.remove();
  }
}

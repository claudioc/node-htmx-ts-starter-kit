import something from './tools.js';

const button = document.getElementById('updateTimeBtn');
const currentTime = document.getElementById('currentTime');

updateCurrentTime();

if (button) {
  button.addEventListener('click', updateCurrentTime);
}

function updateCurrentTime() {
  console.log(something());
  if (currentTime) {
    currentTime.innerHTML = new Date().toISOString();
  }
}

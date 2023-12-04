import { nowToISOString } from './tools.js';

const button = document.getElementById('updateTimeBtn');
const currentTime = document.getElementById('currentTime');

updateCurrentTime();

if (button) {
  button.addEventListener('click', updateCurrentTime);
}

function updateCurrentTime() {
  if (currentTime) {
    currentTime.innerHTML = nowToISOString();
  }
}

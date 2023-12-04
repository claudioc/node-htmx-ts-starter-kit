import { nowToISOString } from './lib/tools.js';

const button = document.getElementById('updateTimeBtn');
const currentTime = document.getElementById('currentTime');

function updateCurrentTime() {
  if (currentTime) {
    currentTime.innerHTML = nowToISOString();
  }
}

updateCurrentTime();

if (button) {
  button.addEventListener('click', updateCurrentTime);
}

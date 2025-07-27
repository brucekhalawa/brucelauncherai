const socket = io();

function loginSpotify() {
  window.location.href = '/login';
}

function sendVoice() {
  const input = document.getElementById('voiceInput').value;
  socket.emit('ai-question', input);
}

socket.on('ai-response', (msg) => {
  document.getElementById('response').innerText = msg;
});

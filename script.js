

  function hovermicin() {
    const recordAudiotext = document.getElementById('recordAudiotext');
    recordAudiotext.style.display= 'flex';
  }

  function hovermicout() {
    const recordAudiotext = document.getElementById('recordAudiotext');
    recordAudiotext.style.display= 'none';
  }

 function hoveruploadin() {
    const createMagictext = document.getElementById('createMagictext');
    createMagictext.style.display= 'flex';
  }

  function hoveruploadout() {
    const createMagictext = document.getElementById('createMagictext');
    createMagictext.style.display= 'none';
  }

 

function getProin() {
  const star = document.getElementById('star');
  star.classList.add('staranimein');
  star.classList.remove('staranimeout');
}

function getProout() {
  const star = document.getElementById('star');
  star.classList.remove('staranimein');
  star.classList.add('staranimeout');
}

function mic() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  startBtn.style.display = 'none';
  stopBtn.style.display = 'flex';
}

function stop() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  startBtn.style.display = 'flex';
  stopBtn.style.display = 'none';
}

let mediaRecorder;
let audioChunks = [];
let timerInterval;
let secondElapsed = 0;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const downloadLink = document.getElementById('downloadLink');

// start recording
startBtn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true})
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    startBtn.disabled = true;
    stopBtn.disabled = false;

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, {type: "audio/webm"});
      const audioUrl = URL.createObjectURL(audioBlob);
      downloadLink.href = audioUrl;
      downloadLink.download = "recording.webm";
      downloadLink.textContent = "Download Audio";
      startBtn.disabled = false;
      stopBtn.disabled =true;
      stopTimer();
    };

    mediaRecorder.start();
    startTimer();

} catch (error) {
  console.error("Error accessing microphone:", error);
  alert('Microphone access is required for recording.');
}
});
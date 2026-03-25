

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
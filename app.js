const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const playerArtist = document.getElementById('player__artist');
const playerSong = document.getElementById('player__song');
const albumImage = document.getElementById('albumImage');

let currentSongIndex = 0; 

const playList = [
  {
    title: 'No me soya la playa',
    artist: "Oblivion's Mighty Trash",
    img: './images/noMeSoyaLaPlaya.jpg',
    song: './music/no_me_soya_la_playa.mp3'
  },
  {
    title: 'Chaito',
    artist: "Oblivion's Mighty Trash",
    img: './images/chaitoImg.jpg',
    song: './music/chaito.mp3'
  },
  {
    title: 'Bumbá',
    artist: "Oblivion's Mighty Trash",
    img: './images/noMeAcuerdoAlbum.jpg',
    song: './music/bumba.mp3'
  },
  {
    title: 'Pausa Pa Fumar',
    artist: "Oblivion's Mighty Trash",
    img: './images/noMeAcuerdoAlbum.jpg',
    song: './music/pausa_pa_fumar.mp3'
  },
  {
    title: 'Provlemas ',
    artist: "Oblivion's Mighty Trash",
    img: './images/noMeAcuerdoAlbum.jpg',
    song: './music/provlemas.mp3'
  }
];


function loadSong(songIndex) {
  const song = playList[songIndex];
  audio.src = song.song;
  playerArtist.textContent = song.artist;
  playerSong.textContent = song.title;
  albumImage.src = song.img;
}


function playSong() {
  audio.play();
}





function pauseSong() {
  audio.pause();
  
}


function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}


function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
  loadSong(currentSongIndex);
  playSong();
}

loadSong(currentSongIndex);


play.addEventListener('click', playSong);
pause.addEventListener('click', pauseSong);
stop.addEventListener('click', stopSong);
forward.addEventListener('click', nextSong);
rewind.addEventListener('click', previousSong);

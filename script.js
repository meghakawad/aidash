document.getElementById('playSong').addEventListener('click', function() {
  // Replace the placeholder with the URL of your cheerful song
  const songUrl = 'https://wynk.in/u/zeB3GKX21';
  
  // Create an audio element and play the song
  const audio = new Audio(songUrl);
  audio.play();
});

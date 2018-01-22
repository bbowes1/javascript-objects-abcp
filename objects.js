var playlist = { 
  Slowdive:'Alison', 
  'MY Bloody Valentine':'Sometimes'
  
};

function updateplaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
  
}
function removeFromPlaylist (playlist,artistName ){
  delete playlist{Slowdive}
  return playlist
}
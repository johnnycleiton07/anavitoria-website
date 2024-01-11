function highlightAlbum(albumElement) {
    albumElement.classList.add('highlighted-album');
    albumElement.style.transform = 'scale(1.05)'; // Aplica a transformação de escala para aumentar em 5%
  }
  
  function removeHighlightAlbum(albumElement) {
    albumElement.classList.remove('highlighted-album');
    albumElement.style.transform = 'scale(1)'; // Volta à escala original (sem transformação)
  }
  
  const albumItems = document.querySelectorAll('.music-albums-item');
  
  albumItems.forEach((album) => {
    album.addEventListener('mouseover', () => highlightAlbum(album));
  });
  
  albumItems.forEach((album) => {
    album.addEventListener('mouseout', () => removeHighlightAlbum(album));
  });
  
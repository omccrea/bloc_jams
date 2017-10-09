var collectionItemTemplate =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/01.png"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="album.html"> The Colors </a>'
  + '      <br/>'
  + '      <a href="album.html"> Pablo Picasso </a>'
  + '      <br/>'
  + '      X songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;

  window.onload = function() {
    // #1 select the first element with album-covers class name. Assign this element to variable named collectionContainer
    var collectionContainer = document.getElementsByClassName('album-covers')[0];
    // #2 Assign empty string to collectionContainer's inner HTML property to clear its content.
    collectionContainer.innerHTML = '';

    // #3 create "for" loop that inserts 12 albums.
    for (var i = 0; i < 12; i++) {
        collectionContainer.innerHTML += collectionItemTemplate;
    }
}

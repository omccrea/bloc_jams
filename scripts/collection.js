// When naming action-oriented functions, use convention of starting the function name with a verb.
var buildCollectionItemTemplate = function() {
    var template =
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
 //wrap template in a jQuery object to future-proof it.
  return $(template);
};

$(window).load(function() {
    var $collectionContainer = $('.album-covers');
    //empty() method replaces innerHTML - literally empties or removes any text or elements from the element(s) it's called on.
    $collectionContainer.empty();

    // #3 create "for" loop that inserts 12 albums.
    for (var i = 0; i < 12; i++) {
        var $newThumbnail = buildCollectionItemTemplate();
        $collectionContainer.append($newThumbnail);
    }
});

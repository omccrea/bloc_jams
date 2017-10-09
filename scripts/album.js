// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Second Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

// Assignment (third) Example Album
var albumAltj = {
    title: 'An Awesome Wave',
    artist: 'Alt-J',
    label: 'Atlantic',
    year: '2012',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Matilda', duration: '3:48' },
        { title: 'Something Good', duration: '5:01' },
        { title: 'Breezeblocks', duration: '3:21'},
        { title: 'Dissolve Me', duration: '3:14' },
        { title: 'Taro', duration: '2:15'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    return template;
};

// #1 select all of the HTML elements required on album page. Populated by assigning corresponding object values to HTML elements.
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

//Function = setCurrentAlbum. Takes album objects as arguments, injects that object's stored information into the template.
var setCurrentAlbum = function(album) {
    // #2  firstChild property identifies first child node of element, nodoeValue returns/sets that value.
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    // #3 clear the alubm song list HTML to make sure there are no interfering elements.
    // Value set to an empty string.
    albumSongList.innerHTML = '';

    // #4 goes through all of the songs from the specified album object
    // inserts them into the HTML using innerHTML property.
    //createSongRow functino called at each loop and passes in arguments from album object.
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);

// Make array - easy access with index
    var albums = [albumPicasso, albumMarconi, albumAltj];
//starting value for index, assigned
// declared outside otherwise every time the user would click, it would return to starting value. Basically, the index is remembered.
// start at index 1 (not zero) so that when the user clicks on the album, it'll do something (move forward) instead of looking like nothing happened.
    var index = 1;
    albumImage.addEventListener("click", function(event)
        setCurrentAlbum(album[index]);
        index++;
        if (index == album.length) {
          index = 0;
        }
    ));
};

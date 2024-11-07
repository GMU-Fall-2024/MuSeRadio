function playlist_song_card(song)
{
    return `
    <span class="song" id = "${song.songid}">
       <span class="song_art">
          <img src="${song.cover}" alt="${song.title}">
       </span>
       <span class="song_info">
          <span class="song_title">${song.title}</span>
          <span class="song_artist">${song.artist}</span>
          <span class="song_details">
             <span class="runtime">
                <i class="fa-solid fa-stopwatch"></i>
                <span>${song.runtime}</span>
             </span>
             <span class="release_year">
                <i class="fa-regular fa-calendar"></i>
                <span>${song.release_year}</span>
             </span>
             <span class="album">
                <i class="fa-solid fa-record-vinyl"></i>
                <span>${song.album}</span>
             </span>
          </span>
       </span>
       <span class="song_controls">
          <span class="control_group">
             <button><i class="fa-solid fa-1"></i></button>
          </span>
          <span class="control_group">
             <button><i class="fa-solid fa-headphones-simple"></i></button>
          </span>
          <span class="control_group">
             <button><i class="fa-solid fa-2"></i></button>
          </span>
       </span>
    </span>
 `;
}
import song from "./SongInstances.js";

export class playlist
{
    playlist_id;
    description;
    creator;
    songs;
    title;

    constructor(playlist_id, description, creator, songs, title)
    {
        this.playlist_id = playlist_id;
        this.description = description;
        this.creator = creator;
        this.songs = songs;
        this.title = title;
    }
}

// Instances

export const playlist_1 = new playlist(
    "playlist_1",
    "this is my first playlist",
    "main producer",
    [song.song_1, song.song_2, song.song_3, song.song_4, song.song_5],
    "my first playlist"
)
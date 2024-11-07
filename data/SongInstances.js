export class song
{
    songid;
    title;
    artist;
    album;
    release_year;
    runtime;
    description;
    source;
    cover;
    
    constructor(songid, title, artist, album, release_year, runtime, source, description, cover)
    {
        this.songid = songid;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.release_year = release_year;
        this.runtime = runtime;
        this.source = source;
        this.description = description;
        this.cover = cover;
    }
}

// Instances

export const song_1 = new song(
    "song_1", 
    "tell me the truth", 
    "denys brodovskyi", 
    "unknown", 
    "2022", 
    "03:08", 
    "./assets/audio/songs/tell_me_the_truth.mp3", 
    "no description available",
    "./assets/images/covers/sample1.jpg"
);

export const song_2 = new song(
    "song_2",
    "last flight home",
    "marc burt",
    "unknown",
    "2021",
    "06:10",
    "./assets/audio/songs/last_flight_home.mp3",
    "Last Flight Home is a haunting progressive house track with lush pads, a classic guitar hook and bouncing synth patterns.",
    "./assets/images/covers/sample2.jpg"
);

export const song_3 = new song(
    "song_3",
    "let's get it started",
    "BoDleasons",
    "legacy volume 1",
    "2024",
    "01:55",
    "./assets/audio/songs/lets_get_it_started.mp3",
    "no description available",
    "./assets/images/covers/sample3.jpg"
);

export const song_4 = new song(

);

export const song_5 = new song(
    
);

export const allsongs = [song_1, song_2, song_3, song_4, song_5];


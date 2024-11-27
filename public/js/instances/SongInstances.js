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
    "song_4",
    "magnetostriction",
    "Silicon Transmitter",
    "amplitude",
    "2024",
    "03:55",
    "./assets/audio/songs/magnetostriction.mp3",
    "no description available",
    "./assets/images/covers/sample4.jpg"
);

export const song_5 = new song(
    "song_5",
    "la prima neve",
    "emilio robot",
    "le transizioni ep",
    "2024",
    "03:59",
    "./assets/audio/songs/la_prima_neve.mp3",
    `
    Part of the EP "Le Transizioni", to be released on January 10, 2025

    -----
    01. Abituarsi
    02. La Prima Neve
    03. Outro
    -----

    Emilio Robot is the toy that back in the 90s I always wanted but never got.
    A solo project by Jacopo Grande from Lake Como (Italy) mixing instrumental post-rock with layers of dark ambient and electronic textures. The sound shifts between energetic tracks with epic crescendos and calmer atmospheric compositions.

    Inspired by the sonic landscapes of influential post-rock bands, it aims to create music that feels cinematic, emotional, and immersive, blending haunting atmospheres with evolving soundscapes.
    `,
    "./assets/images/covers/la_prima_neve.jpg"
);

export const song_6 = new song(
    "song_6",
    "one day, backbone",
    "Geb",
    "doubleplus unhate",
    "2024",
    "02:47",
    "./assets/audio/songs/one_day_backbone.mp3",
    `
    It's how you stand up to bullies.
    This uses a single Cardinal patch based on Ouros by CV funk, with additional effects and improvised and composed strings added in Bitwig 5.2.1. 
    The voice that led to this title just emerged from some of the effects.
    `,
    "./assets/images/covers/one_day_backbone.jpg"
);

export const song_7 = new song(
    "song_7",
    "cool down",
    "triple5 here",
    "mellow fellow",
    "2024",
    "03:14",
    "./assets/audio/songs/cool_down.mp3",
    "I think this type of music should be called Slow Tunes.",
    "./assets/images/covers/cool_down.jpg"
);

export const song_8 = new song(
    "song_8",
    "i stayed home",
    "ethan persoff",
    "single",
    "2008",
    "10:41",
    "./assets/audio/songs/i_stayed_home.mp3",
    "no description available",
    "./assets/images/covers/i_stayed_home.jpg"
);

export const song_9 = new song(
    "song_9",
    "lost",
    "mudboy",
    "this is folk music",
    "2008",
    "08:11",
    "./assets/audio/songs/lost.mp3",
    "no description available",
    "./assets/images/covers/lost.jpg"
);

export const song_10 = new song(
    "song_10",
    "cunca",
    "rainbro",
    "endless joy split EP",
    "2008",
    "03:30",
    "./assets/audio/songs/cunca.mp3",
    "no description available",
    "./assets/images/covers/cunca.jpg"
);

export const song_11 = new song(
    "song_11",
    "sunset",
    "TRG banks",
    "The life and times of joshua harris",
    "2021",
    "01:50",
    "./assets/audio/songs/sunset.mp3",
    "no description available",
    "./assets/images/covers/sunset.jpg"
);

export const song_12 = new song(
    "song_12",
    "the road",
    "Min-Y-Lan",
    "regulate condition",
    "2010",
    "05:12",
    "./assets/audio/songs/the_road.mp3",
    "no description available",
    "./assets/images/covers/the_road.jpg"
);

export const song_13 = new song(
    "song_13",
    "a difficult subject",
    "the insider",
    "all's fair in love of wax",
    "2010",
    "04:48",
    "./assets/audio/songs/a_difficult_subject.mp3",
    "no description available",
    "./assets/images/covers/a_difficult_subject.jpg"
);

export const song_14 = new song(
    "song_14",
    "with violence",
    "catholic witches",
    "the bone leg",
    "2014",
    "08:44",
    "./assets/audio/songs/with_violence.mp3",
    "no description available",
    "./assets/images/covers/with_violence.jpg"
);

export const song_15 = new song(
    "song_15",
    "potato potato",
    "windom earle",
    "a series of minor personal tragedies",
    "2011",
    "04:20",
    "./assets/audio/songs/potato_potato.mp3",
    "no description available",
    "./assets/images/covers/potato_potato.jpg"
);

export const song_16 = new song(
    "song_16",
    "ace of bananas",
    "azureflux",
    "pocket boy",
    "2015",
    "02:10",
    "./assets/audio/songs/ace_of_bananas.mp3",
    "no description available",
    "./assets/images/covers/ace_of_bananas.jpg"
);

export const song_17 = new song(
    "song_17",
    "crabs ashore",
    "vespero",
    "liventure#21",
    "2010",
    "09:38",
    "./assets/audio/songs/crabs_ashore.mp3",
    "no description available",
    "./assets/images/covers/crabs_ashore.jpg"
);

export const song_18 = new song(
    "song_18",
    "arkansas",
    "eggs over easy",
    "Live at WFMU for Surface Noise with Joe McGasko, 6/6/2016",
    "2017",
    "03:58",
    "./assets/audio/songs/arkansas.mp3",
    "no description available",
    "./assets/images/covers/arkansas.jpg"
);

export const song_19 = new song(
    "song_19",
    "outer east",
    "horse lords",
    "Live on WFMU's Transpacific Sound Paradise: Sat, Jan 31st",
    "2015",
    "10:40",
    "./assets/audio/songs/outer_east.mp3",
    "no description available",
    "./assets/images/covers/outer_east.jpg"
);

export const song_20 = new song(
    "song_20",
    "fire me",
    "the planes",
    "little yellow letters",
    "2013",
    "02:19",
    "./assets/audio/songs/fire_me.mp3",
    "no description available",
    "./assets/images/covers/fire_me.jpg"
);

export const allsongs = [song_1, song_2, song_3, song_4, song_5, song_6, song_7, song_8, song_9, song_10, song_11, song_12, song_13, song_14, song_15, song_16, song_17, song_18, song_19, song_20];

export const songid_to_instance = {
    "song_1": song_1,
    "song_2": song_2,
    "song_3": song_3,
    "song_4": song_4,
    "song_5": song_5,
    "song_6": song_6,
    "song_7": song_7,
    "song_8": song_8,
    "song_9": song_9,
    "song_10": song_10,
    "song_11": song_11,
    "song_12": song_12,
    "song_13": song_13,
    "song_14": song_14,
    "song_15": song_15,
    "song_16": song_16,
    "song_17": song_17,
    "song_18": song_18,
    "song_19": song_19,
    "song_20": song_20
};
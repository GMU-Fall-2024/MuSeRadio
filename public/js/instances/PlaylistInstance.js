import { name_to_user } from "./ProfileTypes.js";

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
    "Lo-Fi Chill for Late Nights",
    name_to_user["Sarah Taylor"],
    ["song_19", "song_20", "song_1", "song_5", "song_9", "song_7", "song_16"],
    "Late Night Lo-Fi"
);

export const playlist_2 = new playlist(
    "playlist_2",
    "A mix of soulful tracks to relax and unwind.",
    name_to_user["Michael Brooks"],
    ["song_11", "song_12", "song_9", "song_14", "song_1", "song_3", "song_17", "song_7", "song_13", "song_5"],
    "Soulful Vibes"
);

export const playlist_3 = new playlist(
    "playlist_3",
    "Uplifting beats to energize your day.",
    name_to_user["Tim Jones"],
    ["song_17", "song_2", "song_19", "song_6", "song_1", "song_20", "song_14", "song_4"],
    "Morning Boost"
);

export const playlist_4 = new playlist(
    "playlist_4",
    "A journey through deep house and electronic sounds.",
    name_to_user["Sarah Taylor"],
    ["song_20", "song_16", "song_10", "song_9", "song_11", "song_14", "song_13"],
    "Deep House Essentials"
);

export const playlist_5 = new playlist(
    "playlist_5",
    "Perfect tracks for a late-night drive.",
    name_to_user["Michael Brooks"],
    ["song_12", "song_18", "song_3", "song_13", "song_6", "song_4", "song_19", "song_1", "song_15", "song_2"],
    "Midnight Drive"
);

export const playlist_6 = new playlist(
    "playlist_6",
    "A curated selection of indie hits to discover.",
    name_to_user["Tim Jones"],
    ["song_6", "song_1", "song_2", "song_14", "song_9", "song_11", "song_20", "song_12"],
    "Indie Discoveries"
);

export const playlist_7 = new playlist(
    "playlist_7",
    "Feel-good tracks for a summer afternoon.",
    name_to_user["Sarah Taylor"],
    ["song_5", "song_4", "song_20", "song_15", "song_17", "song_2", "song_16"],
    "Summer Chill"
);

export const playlist_8 = new playlist(
    "playlist_8",
    "An eclectic mix of jazz-infused beats.",
    name_to_user["Michael Brooks"],
    ["song_16", "song_19", "song_12", "song_17", "song_5", "song_9", "song_18", "song_14"],
    "Jazz & Beats"
);

export const playlist_9 = new playlist(
    "playlist_9",
    "A selection of classic rock anthems.",
    name_to_user["Tim Jones"],
    ["song_2", "song_5", "song_4", "song_20", "song_19", "song_3", "song_11", "song_13"],
    "Rock Classics"
);

export const playlist_10 = new playlist(
    "playlist_10",
    "Relaxing acoustic tracks for a cozy evening.",
    name_to_user["Sarah Taylor"],
    ["song_4", "song_7", "song_15", "song_18", "song_16", "song_12", "song_11"],
    "Acoustic Evening"
);

export const playlistid_to_instance = {
    "playlist_1": playlist_1,
    "playlist_2": playlist_2,
    "playlist_3": playlist_3,
    "playlist_4": playlist_4,
    "playlist_5": playlist_5,
    "playlist_6": playlist_6,
    "playlist_7": playlist_7,
    "playlist_8": playlist_8,
    "playlist_9": playlist_9,
    "playlist_10": playlist_10
};
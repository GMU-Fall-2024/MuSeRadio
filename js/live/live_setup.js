import { songid_to_instance } from "../../data/SongInstances.js";
import { eventid_to_instance } from "../../data/EventInstance.js";
import { playlist_song_card } from "./htmlinjection.js";

window.onload = function() {
    const drum_button = document.getElementById("drums_effect_button");
    const guitar_button = document.getElementById("guitar_effect_button");
    const applause_button = document.getElementById("applause_effect_button");
    const explosion_button = document.getElementById("explosion_effect_button");
    const djline_button = document.getElementById("djline_effect_button");

    // Event Listener Approach for sound effects
    drum_button.addEventListener("click", () => {
        let audio = document.getElementById("drums_effect");
        audio.play();
        let effect_length = audio.duration * 1000;
        drum_button.style.backgroundColor = "#2dccb9";
        drum_button.style.color = "white";
        setTimeout(() => {
            drum_button.style.backgroundColor = "white";
            drum_button.style.color = "black";
        }, effect_length);
    });

    guitar_button.addEventListener("click", () => {
        let audio = document.getElementById("guitar_effect");
        audio.play();
        let effect_length = audio.duration * 1000;
        guitar_button.style.backgroundColor = "#2dccb9";
        guitar_button.style.color = "white";
        setTimeout(() => {
            guitar_button.style.backgroundColor = "white";
            guitar_button.style.color = "black";
        }, effect_length);
    });

    applause_button.addEventListener("click", () => {
        let audio = document.getElementById("applause_effect");
        audio.play();
        let effect_length = audio.duration * 1000;
        applause_button.style.backgroundColor = "#2dccb9";
        applause_button.style.color = "white";
        setTimeout(() => {
            applause_button.style.backgroundColor = "white";
            applause_button.style.color = "black";
        }, effect_length);
    });

    explosion_button.addEventListener("click", () => {
        let audio = document.getElementById("explosion_effect");
        audio.play();
        let effect_length = audio.duration * 1000;
        explosion_button.style.backgroundColor = "#2dccb9";
        explosion_button.style.color = "white";
        setTimeout(() => {
            explosion_button.style.backgroundColor = "white";
            explosion_button.style.color = "black";
        }, effect_length);
    });

    djline_button.addEventListener("click", () => {
        let audio = document.getElementById("djline_effect");
        audio.play();
        let effect_length = audio.duration * 1000;
        djline_button.style.backgroundColor = "#2dccb9";
        djline_button.style.color = "white";
        setTimeout(() => {
            djline_button.style.backgroundColor = "white";
            djline_button.style.color = "black";
        }, effect_length);
    });

    // populate audio elements
    const live_event_id = window.location.href.split("=")[1];
    //loop through all events prior to today and add to html
    let audio_container = document.getElementById("discovered_songs");
    let audio_markups = [];
    let current_markup = "";
    Object.entries(eventid_to_instance).forEach(event => {
        // console.log(event[1].event_date <= new Date());
        if (event[1].event_date <= new Date()) {
            // console.log(event[1].event_playlist);
            for(let i = 0; i < event[1].event_playlist.songs.length; i++) {
                // console.log(event[1].event_playlist.songs[i]);
                let song_instance = songid_to_instance[event[1].event_playlist.songs[i]];
                current_markup = `<audio src="${song_instance.source}" id="${song_instance.songid}"></audio>`;
                if(!audio_markups.includes(current_markup)) {
                    audio_markups.push(current_markup);
                }
            }
        }
    });
    audio_container.innerHTML = audio_markups.join("\n");
    // build audio cards
    let playlist_songs_container = document.getElementById("playlist_songs_container");
    let current_event_instance = eventid_to_instance[live_event_id];
    let current_event_playlist = current_event_instance.event_playlist;
    let current_event_songs = current_event_playlist.songs;
    let current_event_songs_markup = [];
    for (let i = 0; i < current_event_songs.length; i++) {
        let song_instance = songid_to_instance[current_event_songs[i]];
        current_event_songs_markup.push(playlist_song_card(song_instance));
    }
    playlist_songs_container.innerHTML = current_event_songs_markup.join("\n");
    // update playlist title in DOM

    // let avatar_source = current_event_playlist.creator.Avatar;
    // let avatar_element = document.getElementById("creator_avatar_image"); //fixme: avatar not rendering??
    // avatar_element.setAttribute("src", avatar_source);
    // let playlist_creator_avatar = document.getElementById("creator_avatar_image");

    let playlist_title_element = document.getElementsByClassName("playlist_title")[0];
    playlist_title_element.innerText = current_event_playlist.title; 
    let playlist_creator_element = document.getElementsByClassName("playlist_creator")[0];
    playlist_creator_element.innerText = current_event_playlist.creator.FirstName + " " + current_event_playlist.creator.LastName;

    // add event listeners to solo listener buttons
    let solo_listeners = document.getElementsByClassName("play_internal");
    for (let i = 0; i < solo_listeners.length; i++) {
        solo_listeners[i].addEventListener("click", () => {
            console.log(solo_listeners[i].classList);
            play_audio(solo_listeners[i].classList[1]);
        });
    }

    let deck_1_loaders = document.getElementsByClassName("deck_1_load");
    for (let i = 0; i < deck_1_loaders.length; i++) {
        deck_1_loaders[i].addEventListener("click", () => {
            load_to_deck(deck_1_loaders[i].classList[1], 1);
            if(state === "loaded")
            {
                // deck_2_loaders[i].style.display = "flex";
                state = "not loaded";
            }
            else
            {
                // deck_2_loaders[i].style.display = "none";
                state = "loaded";
            }
        });
    }
    let deck_2_loaders = document.getElementsByClassName("deck_2_load");
    for (let i = 0; i < deck_2_loaders.length; i++) {
        deck_2_loaders[i].addEventListener("click", () => {
            let state = "not loaded";
            load_to_deck(deck_2_loaders[i].classList[1], 2);
            if(state === "loaded")
            {
                // deck_2_loaders[i].style.display = "flex";
                state = "not loaded";
            }
            else
            {
                // deck_2_loaders[i].style.display = "none";
                state = "loaded";
            }
        });
    }
    // listeners for deck players
    let play_deck_1 = document.getElementById("deck_1_play");
    play_deck_1.addEventListener("click", () => {
        
    })
    let play_deck_2 = document.getElementById("deck_2_play"); 
}

export function play_audio(songid) 
{
    let audio_element = document.getElementById(songid);
    console.log(audio_element);
    document.getElementById(songid).play();
}

export function load_to_deck(songid, deck)
{
    let audio_element = document.getElementById(songid);
    let audio_instance = songid_to_instance[songid];
    console.log(audio_instance);
    let deck_container = null
    let deck_art = null;
    let deck_title = null;
    let deck_artist = null;
    let deck_description = null;
    let deck_runtime = null;
    let deck_release_year = null;
    let deck_album = null;
    let deck_runtime_end = null;
    if(deck == 1) {
        deck_container = document.getElementById("deck_1");
        deck_art = document.getElementById("deck_1_art");
        deck_art.setAttribute("src", audio_instance.cover);
        deck_title = document.getElementById("deck_1_title");
        deck_title.innerText = audio_instance.title;
        deck_artist = document.getElementById("deck_1_artist");
        deck_artist.innerText = audio_instance.artist;
        deck_description = document.getElementById("deck_1_description");
        deck_description.innerText = audio_instance.description;
        deck_runtime = document.getElementById("deck_1_runtime");
        deck_runtime.innerText = audio_instance.duration;
        deck_release_year = document.getElementById("deck_1_release_year");
        deck_release_year.innerText = audio_instance.release_year;
        deck_album = document.getElementById("deck_1_album");
        deck_album.innerText = audio_instance.album;
        deck_runtime_end = document.getElementById("deck_1_progress_end");
        deck_runtime_end.innerText = audio_instance.runtime;
    }
    else if (deck == 2) {
        deck_container = document.getElementById("deck_2");
        deck_art = document.getElementById("deck_2_art");
        deck_art.setAttribute("src", audio_instance.cover);
        deck_title = document.getElementById("deck_2_title");
        deck_title.innerText = audio_instance.title;
        deck_artist = document.getElementById("deck_2_artist");
        deck_artist.innerText = audio_instance.artist;
        deck_description = document.getElementById("deck_2_description");
        deck_description.innerText = audio_instance.description;
        deck_runtime = document.getElementById("deck_2_runtime");
        deck_runtime.innerText = audio_instance.duration;
        deck_release_year = document.getElementById("deck_2_release_year");
        deck_release_year.innerText = audio_instance.release_year;
        deck_album = document.getElementById("deck_2_album");
        deck_album.innerText = audio_instance.album;
        deck_runtime_end = document.getElementById("deck_2_progress_end");
        deck_runtime_end.innerText = audio_instance.runtime;
    }
}

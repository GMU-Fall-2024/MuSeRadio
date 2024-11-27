window.onload = async function() {
    const drum_button = document.getElementById("drums_effect_button");
    const guitar_button = document.getElementById("guitar_effect_button");
    const applause_button = document.getElementById("applause_effect_button");
    const explosion_button = document.getElementById("explosion_effect_button");
    const djline_button = document.getElementById("djline_effect_button");
    const all_songs = await getAllSongs();

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
            load_to_deck(deck_1_loaders[i].classList[1], 1, all_songs);
            let state = "not loaded";
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
            load_to_deck(deck_2_loaders[i].classList[1], 2, all_songs);
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
        let deck1_loads = document.getElementById("deck_1").classList;
        console.log(deck1_loads);
        console.log(deck1_loads[deck1_loads.length - 1])
        play_audio(deck1_loads[deck1_loads.length - 1]);
    });

    let play_deck_2 = document.getElementById("deck_2_play"); 
    play_deck_2.addEventListener("click", () => {
        let deck2_loads = document.getElementById("deck_2").classList;
        console.log(deck2_loads);
        console.log(deck2_loads[deck2_loads.length - 1])
        play_audio(deck2_loads[deck2_loads.length - 1]);
    })

    let pause_deck_1 = document.getElementById("deck_1_pause");
    pause_deck_1.addEventListener("click", () => {
        let deck1_loads = document.getElementById("deck_1").classList;
        console.log(deck1_loads);
        console.log(deck1_loads[deck1_loads.length - 1])
        pause_audio(deck1_loads[deck1_loads.length - 1]);
    })

    let pause_deck_2 = document.getElementById("deck_2_pause"); 
    pause_deck_2.addEventListener("click", () => {
        let deck2_loads = document.getElementById("deck_2").classList;
        console.log(deck2_loads);
        console.log(deck2_loads[deck2_loads.length - 1])
        pause_audio(deck2_loads[deck2_loads.length - 1]);
    });

    console.log(all_songs["song_1"]);
}

export function play_audio(songid) 
{
    let audio_element = document.getElementById(songid);
    // console.log(audio_element);
    document.getElementById(songid).play();
}

export function pause_audio(songid)
{
    let audio_element = document.getElementById(songid);
    audio_element.pause();
}

async function getAllSongs() {
    try {
        // Define the API endpoint for the allsongs route
        const endpoint = '/allsongs';

        // Make a GET request to the API
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('All songs:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch all songs:', error);
        return null;
    }
}

export function load_to_deck(songid, deck, all_songs)
{
    let audio_element = document.getElementById(songid);
    let audio_instance = all_songs[songid];
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
    deck_container.classList.add(songid);
}
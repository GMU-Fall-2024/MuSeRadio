window.onload = function() {
    const drum_button = document.getElementById("drums_effect_button");
    const guitar_button = document.getElementById("guitar_effect_button");
    const applause_button = document.getElementById("applause_effect_button");
    const explosion_button = document.getElementById("explosion_effect_button");
    const djline_button = document.getElementById("djline_effect_button");

    // Event Listener Approach
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
}


window.onload = function() {
    const drum_button = document.getElementById("drums_effect_button");
    const guitar_button = document.getElementById("guitar_effect_button");
    const applause_button = document.getElementById("applause_effect_button");
    const 

    // Event Listener Approach
    drum_button.addEventListener("click", () => {
        let audio = document.getElementById("drums_effect");
        audio.play();
    });

    guitar_button.addEventListener("click", () => {
        let audio = document.getElementById("guitar_effect");
        audio.play();
    });

    applause_button.addEventListener("click", () => {
        let audio = document.getElementById("applause_effect");
        audio.play();
    });
}


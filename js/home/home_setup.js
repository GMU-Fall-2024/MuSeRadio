import { DJ_MollyRocks } from "../../data/ProfileTypes.js";
import { all_alerts } from "../../data/AlertInstance.js";
import { profile_markup, alert_markup, event_card_markup } from "./htmlinjection.js";
import { month_to_events } from "../../data/EventInstance.js";

window.onload = function() {
    // setup profile card
    let profile_content = profile_markup(DJ_MollyRocks);
    let profile_section = document.getElementById("profile_info");
    profile_section.innerHTML = profile_content;

    // setup alerts
    let alerts_markup = [];

    for (let i = 0; i < all_alerts.length; i++) {
        alerts_markup.push(alert_markup(all_alerts[i]));
    }

    let alerts_section = document.getElementById("alerts_container");
    alerts_section.innerHTML = alerts_markup.join("\n");

    // setup schedule card
    let schedule_section = document.getElementById("user_schedule");
    let schedule_markup = []
    Object.keys(month_to_events).forEach(key => {
        let month_schedule = month_to_events[key];
        schedule_markup.push(`<span class="month">${key}</span>`);
        let month_markup = []
        for (let i = 0; i < month_schedule.length; i++) {
            month_markup.push(event_card_markup(month_schedule[i]));
        }
        schedule_markup.push(month_markup.join("\n"));
        console.log(schedule_markup);
        schedule_section.innerHTML = schedule_markup.join("\n");
    });
    
}
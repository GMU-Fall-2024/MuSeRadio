import { DJ_MollyRocks } from "../../data/ProfileTypes.js";
import { all_alerts } from "../../data/AlertInstance.js";
import { profile_markup, alert_markup, event_card_markup } from "./htmlinjection.js";
import { month_to_events } from "../../data/EventInstance.js";
import { clear_alert } from "./alert_management.js";
import { eventid_to_instance } from "../../data/EventInstance.js";

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
        schedule_section.innerHTML = schedule_markup.join("\n");
    });

    // register event listeners for alert controls
    let read_buttons = document.getElementsByClassName("read_alert");
    let ignore_buttons = document.getElementsByClassName("ignore_alert");
    for (let i = 0; i < read_buttons.length; i++) {
        read_buttons[i].addEventListener("click", () => {
            clear_alert(read_buttons[i], "read");
        });
    }
    for (let i = 0; i < ignore_buttons.length; i++) {
        ignore_buttons[i].addEventListener("click", () => {
            clear_alert(ignore_buttons[i], "ignored");
        });
    }

    // event listeners for cancelling event
    // event listeners for viewing event
    // event listeners for going live
    let go_live_buttons = document.getElementsByClassName("go_live");
    let current_point = null;
    let event_instance = null;
    let button =null;
    let scheduleview = document.getElementById("user_schedule");
    let currentdate = new Date();
    let live_link = null
    for (let i = 0; i < go_live_buttons.length; i++) {
        button = go_live_buttons[i];
        current_point = button;
        // disable past events
        while(current_point.className !== "event" || current_point.tagName.toLowerCase() !== "span" && current_point.id == undefined) 
        {
            current_point = current_point.parentElement;
        }
        event_instance = eventid_to_instance[current_point.id];
        if(event_instance != undefined) {
            console.log("event instance", event_instance.event_name);
            console.log("date",event_instance.event_date.getDate(), currentdate.getDate())
            console.log("month", event_instance.event_date.getMonth(), currentdate.getMonth());
            if (event_instance.event_date.getDate() == currentdate.getDate() && event_instance.event_date.getMonth() == currentdate.getMonth() && event_instance.event_date.getFullYear() == currentdate.getFullYear()) {
                button.style.opacity = 1;
                button.setAttribute("onclick", "window.location.href = '../../MuSe_DJ_Live.html?event_id=" + event_instance.eventid + "';");
                button.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                // console.log("button", button);
            }
            else if (event_instance.event_date < Date.now()) {
                button.style.opacity = 0.25;
                button.setAttribute("onclick", "alert(`Event past current date\nCannot go live`)");
            }
            else if (event_instance.event_date > Date.now()) {
                button.style.opacity = 0.25;
                button.setAttribute("onclick", "alert(`Event scheduled for later day\nCannot go live`)");
                //modify go live button
                // document.getElementById("go_live").setAttribute("onclick", "window.location.href = '../../MuSe_DJ_Live.html?event_id=" + event_instance.event_id + "';");
            }
        }
    }
    document.getElementById("live").setAttribute("onclick", live_link);
}
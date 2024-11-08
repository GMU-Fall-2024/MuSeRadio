import { alert_type_to_color } from "../../data/AlertInstance.js";

function profile_markup(profile)
{
    return `
        <span class="welcome_text">play the world something!</span>
        <span class="profile">
            <span class="avatar">
                <span class="profile_image"><img src=${profile.Avatar} alt=""></span>
                <span class="status">${profile.DJStatus}</span>
            </span>
            <span class="summary">
                <span class = "dj_info">
                    <span class = "dj_name">${profile.StageName}</span>
                    <span>Action</span>
                </span>
                <span class="other_info">
                    <span class = "dj_stat">
                    <span class = "number">${profile.PastEvents.length.toString().padStart(2, '0')}</span><span>events hosted</span>
                    </span>
                    <span class = "dj_stat">
                    <span class = "number">${profile.Schedule.length.toString().padStart(2, '0')}</span><span>upcoming events</span>
                    </span>
                    <span class = "dj_stat">
                    <span class="number">${profile.DiscoveredSongs.length.toString().padStart(2, '0')}</span><span>songs played</span>
                    </span>
                    <span class = "dj_stat">
                    <span class = "number">${profile.Subscribers.length.toString().padStart(2, '0')}</span><span>subscribers</span>
                    </span>
                </span>
            </span>
        </span>
    `
}

function alert_markup(alert)
{
    return `
        <span class="alert">
            <span class = "alert_icon" style = "background-color: ${alert_type_to_color[alert.alert_type]};">
                <i class="${alert.alert_icon}" style = "color: #ebeff0;"></i>
            </span>
            <span class = "alert_info">
                <span class="alert_header">${alert.alert_header}</span>
                <span class="alert_description">${alert.alert_description}</span>
            </span>
            <span class = "alert_controls">
                <span class="control_group">
                    <button id = "${alert.alert_id}" class = "${alert.alert_id}">
                        <i class="fa-regular fa-circle-check"></i>
                    </button>
                    <label for="view">view</label>
                </span>
                <span class="control_group">
                    <button id = "clear" class = "${alert.alert_id}">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <label for="clear">clear</label>
                </span>
            </span>
        </span>
    `
}

function event_card_markup(event)
{
    let event_guests = event.event_guests;
    for (let i = 0; i < event_guests.length; i++) {
        event_guests[i] = `<li><img src="${event_guests[i].Avatar}" alt="${event_guests[i].FirstName}"></li>`;
    }
    let guests_markup = event_guests.join("\n");

    return `
            <span class="event">
            <span class="date">
                <span class="day">${event.day_of_week}</span>
                <span class="date">${event.event_date.getDate().toString().padStart(2, '0')}</span>
            </span>
            <span class = "about_event">
                <span class="event_name">${event.event_name}</span>
                <span class = "event_info">
                <span class="time_channel">
                    <span class="time">
                        <i class="fa-regular fa-clock"></i>
                        <span>${event.event_start_time} - ${event.event_end_time}</span>
                    </span>
                    <span class="channel">
                        <i class="fa-solid fa-tower-broadcast"></i>
                        <span>${event.event_location}</span>
                    </span>
                </span>

                <span class="other_info">
                    <span class="description">some description goes here it would just provide a short description of the event</span>
                    <span class="guests">
                        <ul>
                            ${guests_markup}
                        </ul>
                    </span>
                </span>
                </span>
            </span>
            <span class="controls">
                <span class="control_group">
                <button>
                    <i class="fa-solid fa-eye"></i>
                </button>
                <label>view</label>
                </span>
                <span class="control_group">
                <button>
                    <i class="fa-solid fa-podcast"></i>
                </button>
                <label>live</label>
                </span>
                <span class="control_group">
                <button>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <label>cancel</label>
                </span>
            </span>
        </span>
    `
}

export { profile_markup, alert_markup, event_card_markup }
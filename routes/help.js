const express = require('express');
const router = express.Router();
const getDatabase = require('../app');

router.get('/help', async (req, res) => {
    const database_object = await getDatabase();
    let dj_profile = await database_object.collection('dj_profiles').findOne({});
    let dj_schedule = await database_object.collection('event_calendar').find({"event_dj": `${dj_profile.FirstName} ${dj_profile.LastName}`}).toArray();
    dj_schedule.sort((a, b) => {
        const dateA = new Date(a.event_date);
        const dateB = new Date(b.event_date);
        return dateA - dateB;
    });
    
    const now = new Date();
    let hosted_events = [];
    let discovered_songs = [];
    let next_event = null;
    for (let event of dj_schedule) {
        const eventDate = new Date(event.event_date);
        const [hours, minutes] = event.event_start_time
            .split(/[: ]/)
            .map((v, i) => (i === 2 && v === 'PM' ? 12 : 0) + parseInt(v));
    
        eventDate.setHours(hours, minutes, 0, 0);
        let event_month = eventDate.toLocaleString('default', { month: 'long' });
        let event_year = eventDate.getFullYear();

        let event_playlist = await database_object.collection('event_playlists').findOne({"playlist_id": event.event_playlist});
        for(let i = 0; i < event_playlist.songs.length; i++)
        {
            if(discovered_songs.indexOf(event_playlist.songs[i]) === -1)
            {
                discovered_songs.push(event_playlist.songs[i]);
            }
        }
        // Compute the status
        if (eventDate < now && eventDate.toDateString() !== now.toDateString()) {
            event.status = "ended";
            hosted_events.push(event);
        } else if (eventDate.getDate() === now.getDate() && eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear()) {
            event.status = "unstarted";
            if(next_event === null)
            {
                next_event = event;
            }
        } else {
            event.status = "upcoming";
        }
        event.month_string = event_month;
        event.year_string = event_year;
    }
    dj_profile.PastEvents = hosted_events;
    dj_profile.Schedule = dj_schedule;
    dj_profile.DiscoveredSongs = discovered_songs;

    let event_guests = await database_object.collection('event_guests').find({}).toArray();
    let event_guests_name_map = {};
    for (let i = 0; i < event_guests.length; i++) {
        event_guests_name_map[`${event_guests[i].FirstName} ${event_guests[i].LastName}`] = event_guests[i];
    }
    // alerts
    let dj_alerts = await database_object.collection('notification_messages').find({"alert_recipient" : `${dj_profile.userid}`, "alert_status" : "unread"}).toArray();
    dj_profile.alerts = dj_alerts;
    dj_profile.next_event = next_event;
    let alert_to_color = {
        "normal alert": "rgb(163, 199, 204)",
        "comment update": "rgb(0, 102, 204)",
        "event update": "rgb(34, 139, 34)",
        "system alert": "rgb(255, 165, 0)",
        "warning alert": "rgb(255, 0, 0)"
    }
    res.render('pages/help', {
        page_title: "MuSe | Help",
        stylesheets: [
            '/css/help/main.css',
        ],
        scripts: [
            '/js/help/api_interactions.js',
        ],
        modules: [
            '/js/help/validation.js',
        ],
        dj: dj_profile
    });
});

router.post('/help', async (req, res) => {
    const database_object = await getDatabase();
    const { name, email, phone, subject, urgency, message } = req.body; 

    try {
        const result = await database_object.collection('help_requests').insertOne({
            name,
            email,
            phone,
            subject,
            urgency,
            message,
            created_at: new Date(),
        });

        if (result.acknowledged) {
            res.status(201).json({ message: 'Your request has been submitted successfully.' });
        } else {
            res.status(500).json({ message: 'Failed to submit your request. Please try again later.' });
        }
    } catch (error) {
        console.error('Error submitting help request:', error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
});

module.exports = router;
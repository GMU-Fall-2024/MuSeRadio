const express = require('express');
const router = express.Router();
const getDatabase = require('../app');
const { console } = require('inspector');

router.get('/profile/:id?', async (req, res) => {
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
    res.render('pages/profile', {
        page_title: "MuSe | Profile",
        stylesheets: [
            '/css/profile/main.css',
        ],
        scripts: [
            '/js/profile/api_interactions.js',
        ],
        modules: [
            '/js/profile/htmlinjection.js',
        ],
        dj: dj_profile,
    })
});

router.put('/profile/:id', async (req, res) => {
    const database_object = await getDatabase();
    const profileId = req.params.id; // Get the profile ID from the request parameters
    const updatedData = req.body; // Get the updated data from the request body

    try {
        // Update the profile with the provided data
        const result = await database_object
            .collection('dj_profiles')
            .updateOne({ userid: profileId }, { $set: updatedData });

        if (result.matchedCount === 1) {
            res.status(200).json({ message: 'Profile successfully updated.' });
        } else {
            res.status(404).json({ message: 'Profile not found.' });
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Internal Server Error. Could not update profile.' });
    }
});

router.delete('/profile/:id', async (req, res) => {
    const database_object = await getDatabase();
    const profileId = req.params.id; // Get the profile ID from the request parameters

    try {
        // Delete the profile by ID
        const result = await database_object.collection('dj_profiles').deleteOne({ userid: profileId });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Profile successfully deleted.' });
        } else {
            res.status(404).json({ message: 'Profile not found.' });
        }
    } catch (error) {
        console.error('Error deleting profile:', error);
        res.status(500).json({ message: 'Internal Server Error. Could not delete profile.' });
    }
});

module.exports = router;
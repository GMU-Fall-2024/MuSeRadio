const express = require('express');
const router = express.Router();
const getDatabase = require('../app');
const e = require('express');

router.get('/broadcast/:eventid?', async (req, res) => {
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

    let event_to_broadcast = await database_object.collection('event_calendar').findOne({"eventid": req.params.eventid});
    let event_producer = await database_object.collection('producer_profiles').findOne({ "$expr": { "$eq": [{ "$concat": ["$FirstName", " ", "$LastName"] }, `${event_to_broadcast.event_producer}`] } });
    
    let event_playlist = await database_object.collection('event_playlists').findOne({"playlist_id": event_to_broadcast.event_playlist});
    
    let all_songs = await database_object.collection('song_library').find({}).toArray();
    let song_map = {};
    for(let i = 0; i < all_songs.length; i++)
    {
        song_map[all_songs[i].songid] = all_songs[i];
    }

    let playlist_creator = await database_object.collection('producer_profiles').findOne({ "$expr": { "$eq": [{ "$concat": ["$FirstName", " ", "$LastName"] }, `${event_playlist.creator}`] } });
    event_playlist.playlist_creator = playlist_creator;
    res.render('../views/pages/live', {
        page_title: "MuSe | Live Broadcast",
        stylesheets: [
            '/css/live/main.css',
        ],
        scripts: [

        ],
        modules: [
            // '/js/home/home_setup.js', //not needed replaced with ejs templating
            '/js/live/htmlinjection.js',
            '/js/live/play_music.js',
            '/js/live/play_effects.js',
            '/js/live/live.js',
        ], 
        dj: dj_profile,
        event: event_to_broadcast,
        producer: event_producer,
        playlist: event_playlist,
        song_map: song_map
    });
});

router.get('/allsongs', async (req, res) => {
    //songs only?
    const database_object = await getDatabase();
    let all_songs = await database_object.collection('song_library').find({}).toArray();
    let song_map = {};
    for(let i = 0; i < all_songs.length; i++)
    {
        song_map[all_songs[i].songid] = all_songs[i];
    }
    res.send(song_map);
});

module.exports = router;
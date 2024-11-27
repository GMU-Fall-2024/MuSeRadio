
require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5858;

const mongoose = require('mongoose');
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log(`Connected to MongoDB\npath: ${process.env.DATABASE_URL}\nuser: ${process.env.DB_USERNAME}`))
    .catch((err) => 
        {
            console.log(`ERROR: Could not connect to MongoDB cluster\n\t${process.env.DATABASE_URL}`);
            mongoose
                .connect(process.env.LOCAL_URL)
                .then(() => console.log(`Connected to Local MongoDB\npath: ${process.env.LOCAL_URL}`))
                .catch((err) => console.log('Could not connect to MongoDB locally:', err));
        });

const { MongoClient } = require('mongodb');
const local_client = new MongoClient(process.env.LOCAL_URL);
const cluster_client = new MongoClient(process.env.DATABASE_URL);
let database_object;
async function connectToMongoDB(client) 
{
    try 
    {
        await client.connect();
        console.log('Connected to MongoDB');
        database_object = client.db(process.env.DB_NAME);
        return database_object;
    } 
    catch (error) 
    {
        console.error('Failed to connect to MongoDB', error);
    }
}
(async () => {
    await connectToMongoDB(cluster_client);
})();

module.exports = () => {
    if (!database_object) {
        throw new Error('Database object is not initialized. Ensure MongoDB connection is established.');
    }
    return database_object;
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

const broadcast_router = require('./routes/broadcast');
app.use('/', broadcast_router);

const profile_router = require('./routes/profile');
app.use('/', profile_router);

const help_router = require('./routes/help');
app.use('/', help_router);

// Home Route - The only route we keep in server.js
app.get('/', async (req, res) => {
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
    res.render('pages/home',
        {
            page_title: "MuSe | DJ Home",
            stylesheets: [
                '/css/home/main.css',
                '/css/home/overlay.css',
            ],
            scripts: [

            ],
            modules: [
                // '/js/home/home_setup.js', //not needed replaced with ejs templating
                '/js/home/htmlinjection.js',
                '/js/home/alert_management.js',
            ], 
            dj: dj_profile,
            schedule: dj_schedule,
            event_guests: event_guests_name_map,
            alert_color : alert_to_color
        }
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
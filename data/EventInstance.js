import { name_to_user } from "./ProfileTypes.js";

export class event
{
    eventid;
    event_name;
    event_producer;
    event_dj;
    event_date;
    event_start_time;
    event_duration;
    event_end_time;
    event_guests;
    event_description;
    event_location;
    day_of_week;

    constructor(eventid, event_name, event_producer, event_dj, day_of_week, event_date, event_start_time, event_duration, event_end_time, event_guests, event_description, event_location)
    {
        this.eventid = eventid;
        this.event_name = event_name;
        this.event_producer = event_producer;
        this.event_dj = event_dj;
        this.day_of_week = day_of_week;
        this.event_date = event_date;
        this.event_start_time = event_start_time;
        this.event_duration = event_duration;
        this.event_end_time = event_end_time;
        this.event_guests = event_guests;
        this.event_description = event_description;
        this.event_location = event_location;
    }

    set_event_name(event_name)
    {
        this.event_name = event_name;
    }

    set_event_producer(event_producer)
    {
        this.event_producer = event_producer;
    }

    set_event_dj(event_dj)
    {
        this.event_dj = event_dj;
    }

    set_event_date(event_date)
    {
        this.event_date = event_date;
    }

    set_event_start_time(event_start_time)
    {
        this.event_start_time = event_start_time;
    }

    set_event_duration(event_duration)
    {
        this.event_duration = event_duration;
    }

    set_event_end_time(event_end_time)
    {
        this.event_end_time = event_end_time;
    }

    set_event_guests(event_guests)
    {
        this.event_guests = event_guests;
    }

    set_event_description(event_description)
    {
        this.event_description = event_description;
    }

    set_event_location(event_location)
    {
        this.event_location = event_location;
    }
}

export class broadcast extends event
{
    listeners;
    runtime;
    likes;
    comments;

    constructor(listeners, runtime, likes, comments)
    {
        super();
        this.listeners = listeners;
        this.runtime = runtime;
        this.likes = likes;
        this.comments = comments;
    }
}

export const jan_event_1 = new event(
    "event_1",
    "Early Bird Catchup",
    name_to_user["Melody Blinks"],
    name_to_user["Jennifer Summers"],
    "Mon",
    new Date("2024-01-01"),
    "10:00 AM",
    "01:00",
    "11:00 AM",
    [name_to_user["Franklin Benson"], name_to_user["Jane Lesley"]],
    "Cruise into the start of your day with nothing but good music and a word from the most knowledgeable professionals in town!", 
    "Channel 6 Studios"
);

export const jan_event_2 = new event(
    "event_2",
    "New Year Networking",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Wed",
    new Date("2024-01-03"),
    "9:00 AM",
    "02:00",
    "11:00 AM",
    [name_to_user["Emily Davis"], name_to_user["Ryan Cole"]],
    "Kickstart the new year by networking with industry professionals and sharing creative goals for 2024.",
    "Downtown Conference Center"
);

export const jan_event_3 = new event(
    "event_3",
    "Winter Sound Workshop",
    name_to_user["Melody Blinks"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-01-12"),
    "2:00 PM",
    "03:00",
    "5:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Jennifer Summers"]],
    "Dive into an interactive workshop on crafting unique soundscapes and mixing techniques with industry veterans.",
    "Studio 54"
);

export const jan_event_4 = new event(
    "event_4",
    "Artist Spotlight",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Sat",
    new Date("2024-01-20"),
    "6:00 PM",
    "02:00",
    "8:00 PM",
    [name_to_user["Franklin Benson"], name_to_user["Jane Lesley"], name_to_user["Ryan Cole"]],
    "An evening dedicated to celebrating emerging artists and introducing fresh talent to the community.",
    "ArtHouse Theater"
);

export const jan_event_5 = new event(
    "event_5",
    "January Jam Session",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Sun",
    new Date("2024-01-28"),
    "4:00 PM",
    "02:30",
    "6:30 PM",
    [name_to_user["Emily Davis"], name_to_user["Sophia Nguyen"]],
    "Join our January jam session, where artists and producers collaborate in a laid-back setting.",
    "Harmony Studios"
);

export const feb_event_1 = new event(
    "event_6",
    "Music Business Breakfast",
    name_to_user["Rebecca Stone"],
    name_to_user["Jennifer Summers"],
    "Thu",
    new Date("2024-02-01"),
    "8:00 AM",
    "01:30",
    "9:30 AM",
    [name_to_user["Jennifer Summers"], name_to_user["Ryan Cole"]],
    "Start your February with insights from industry managers over breakfast and networking.",
    "Bluebird Café"
);

export const feb_event_2 = new event(
    "event_7",
    "Producer’s Roundtable",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Tue",
    new Date("2024-02-06"),
    "3:00 PM",
    "02:00",
    "5:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Emily Davis"]],
    "An open forum for producers to discuss industry trends, challenges, and innovations.",
    "The Sound Lounge"
);

export const feb_event_3 = new event(
    "event_8",
    "Indie Artists Showcase",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-02-16"),
    "7:00 PM",
    "03:00",
    "10:00 PM",
    [name_to_user["Franklin Benson"], name_to_user["Jane Lesley"]],
    "A vibrant night celebrating independent artists, featuring live performances and artist panels.",
    "Local Stage Theater"
);

export const feb_event_4 = new event(
    "event_9",
    "Mid-February Mixer",
    name_to_user["James Evans"],
    name_to_user["Jennifer Summers"],
    "Wed",
    new Date("2024-02-21"),
    "6:00 PM",
    "02:00",
    "8:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Emily Davis"]],
    "An evening of casual networking for industry professionals and newcomers alike.",
    "Downtown Social Club"
);

export const feb_event_5 = new event(
    "event_10",
    "Soulful Sunday",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Sun",
    new Date("2024-02-25"),
    "4:00 PM",
    "03:00",
    "7:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Jennifer Summers"]],
    "Wind down the month with soulful performances, chill vibes, and great company.",
    "Harmony Studios"
);

export const mar_event_1 = new event(
    "event_11",
    "Spring Sound Kickoff",
    name_to_user["Melody Blinks"],
    name_to_user["Sarah Taylor"],
    "Sat",
    new Date("2024-03-02"),
    "5:00 PM",
    "03:00",
    "8:00 PM",
    [name_to_user["Franklin Benson"], name_to_user["Emily Davis"]],
    "Celebrate the beginning of spring with live music and networking among creatives and fans alike.",
    "Open Air Amphitheater"
);

export const mar_event_2 = new event(
    "event_12",
    "Producer Insight Workshop",
    name_to_user["Michael Brooks"],
    name_to_user["Tim Jones"],
    "Tue",
    new Date("2024-03-05"),
    "10:00 AM",
    "02:00",
    "12:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Ryan Cole"]],
    "An in-depth workshop for producers, focusing on the latest tools and techniques in music production.",
    "SoundLab Studios"
);

export const mar_event_3 = new event(
    "event_13",
    "Artist Spotlight: Emerging Voices",
    name_to_user["Lily Martinez"],
    name_to_user["James Evans"],
    "Fri",
    new Date("2024-03-15"),
    "6:30 PM",
    "02:30",
    "9:00 PM",
    [name_to_user["Jane Lesley"], name_to_user["Franklin Benson"]],
    "An evening dedicated to showcasing new voices in the indie and pop scenes.",
    "Downtown Performance Hall"
);

export const mar_event_4 = new event(
    "event_14",
    "March Madness Mixer",
    name_to_user["Rebecca Stone"],
    name_to_user["Jennifer Summers"],
    "Mon",
    new Date("2024-03-18"),
    "5:00 PM",
    "02:00",
    "7:00 PM",
    [name_to_user["Emily Davis"], name_to_user["Sophia Nguyen"]],
    "Join a lively mixer to connect with other music industry professionals over drinks and bites.",
    "City Loft Bar"
);

export const mar_event_5 = new event(
    "event_15",
    "Women in Music Panel",
    name_to_user["Melody Blinks"],
    name_to_user["Sarah Taylor"],
    "Wed",
    new Date("2024-03-27"),
    "3:00 PM",
    "02:30",
    "5:30 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Emily Davis"], name_to_user["Ryan Cole"]],
    "A panel discussion celebrating women’s contributions to music, followed by a Q&A session.",
    "Harmony Studios"
);

export const mar_event_6 = new event(
    "event_16",
    "Studio Showcase",
    name_to_user["Tim Jones"],
    name_to_user["Michael Brooks"],
    "Fri",
    new Date("2024-03-29"),
    "2:00 PM",
    "03:00",
    "5:00 PM",
    [name_to_user["Franklin Benson"], name_to_user["Jane Lesley"]],
    "A showcase of new projects and behind-the-scenes insights from top producers and artists.",
    "Channel 6 Studios"
);

export const month_to_events = {
    "january 2024": [
        jan_event_1,
        jan_event_2,
        jan_event_3,
        jan_event_4,
        jan_event_5
    ],
    "february 2024": [
        feb_event_1,
        feb_event_2,
        feb_event_3,
        feb_event_4,
        feb_event_5
    ],
    "march 2024": [
        mar_event_1,
        mar_event_2,
        mar_event_3,
        mar_event_4,
        mar_event_5,
        mar_event_6
    ],
    "april 2024": []
};
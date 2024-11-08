import { name_to_user } from "./ProfileTypes.js";
import { playlistid_to_instance } from "./PlaylistInstance.js";

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
    event_playlist;


    constructor(eventid, event_name, event_producer, event_dj, day_of_week, event_date, event_start_time, event_duration, event_end_time, event_guests, event_description, event_location, event_playlist)
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
        this.event_playlist = event_playlist;
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
    "Channel 6 Studios",
    playlistid_to_instance["playlist_1"]
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
    "Downtown Conference Center",
    playlistid_to_instance["playlist_2"]
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
    "Studio 54",
    playlistid_to_instance["playlist_3"]
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
    "ArtHouse Theater",
    playlistid_to_instance["playlist_4"]
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
    "Harmony Studios",
    playlistid_to_instance["playlist_5"]
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
    "Bluebird Café",
    playlistid_to_instance["playlist_6"]
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
    "The Sound Lounge",
    playlistid_to_instance["playlist_7"]
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
    "Local Stage Theater",
    playlistid_to_instance["playlist_8"]
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
    "Downtown Social Club",
    playlistid_to_instance["playlist_9"]
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
    "Harmony Studios",
    playlistid_to_instance["playlist_10"]
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
    "Open Air Amphitheater",
    playlistid_to_instance["playlist_1"]
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
    "SoundLab Studios",
    playlistid_to_instance["playlist_2"]
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
    "Downtown Performance Hall",
    playlistid_to_instance["playlist_3"]
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
    "City Loft Bar",
    playlistid_to_instance["playlist_4"]
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
    "Harmony Studios",
    playlistid_to_instance["playlist_5"]
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
    "Channel 6 Studios",
    playlistid_to_instance["playlist_6"]
);

export const apr_event_1 = new event(
    "event_17",
    "April Fools' Music Fest",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Mon",
    new Date("2024-04-01"),
    "5:00 PM",
    "03:00",
    "8:00 PM",
    [name_to_user["Emily Davis"], name_to_user["Sophia Nguyen"]],
    "Celebrate April Fools' Day with a fun-filled music festival featuring surprise performances and guest DJs.",
    "Green Park Amphitheater",
    playlistid_to_instance["playlist_7"]
);

export const apr_event_2 = new event(
    "event_18",
    "Spring Beats Workshop",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Thu",
    new Date("2024-04-04"),
    "10:00 AM",
    "02:00",
    "12:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Franklin Benson"]],
    "A hands-on workshop focused on creating fresh beats for the spring season, perfect for budding producers.",
    "Studio One Labs",
    playlistid_to_instance["playlist_8"]
);

export const apr_event_3 = new event(
    "event_19",
    "Jazz Night Live",
    name_to_user["Melody Blinks"],
    name_to_user["Jennifer Summers"],
    "Sat",
    new Date("2024-04-13"),
    "7:00 PM",
    "03:00",
    "10:00 PM",
    [name_to_user["Jane Lesley"], name_to_user["Ryan Cole"]],
    "An evening of smooth jazz performances by local artists and special guests.",
    "Downtown Jazz Club",
    playlistid_to_instance["playlist_9"]
);

export const apr_event_4 = new event(
    "event_20",
    "Women in Music Networking",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Tue",
    new Date("2024-04-16"),
    "4:00 PM",
    "02:30",
    "6:30 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Emily Davis"], name_to_user["Jane Lesley"]],
    "A networking event celebrating women in the music industry, featuring panel discussions and guest speakers.",
    "City Hall Auditorium",
    playlistid_to_instance["playlist_10"]
);

export const apr_event_5 = new event(
    "event_21",
    "Electronic Groove Session",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-04-19"),
    "8:00 PM",
    "02:30",
    "10:30 PM",
    [name_to_user["Franklin Benson"], name_to_user["Ryan Cole"]],
    "A night dedicated to electronic music, with live sets from top producers and DJs.",
    "The Warehouse",
    playlistid_to_instance["playlist_1"]
);

export const apr_event_6 = new event(
    "event_22",
    "April Acoustic Evening",
    name_to_user["Lily Martinez"],
    name_to_user["Jennifer Summers"],
    "Sun",
    new Date("2024-04-28"),
    "6:00 PM",
    "02:00",
    "8:00 PM",
    [name_to_user["Jennifer Summers"], name_to_user["Sophia Nguyen"]],
    "Relax and unwind with an evening of acoustic performances in a cozy, intimate setting.",
    "Harmony Studios",
    playlistid_to_instance["playlist_2"]
);

export const may_event_1 = new event(
    "event_23",
    "Summer Beats Kickoff",
    name_to_user["Rebecca Stone"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-05-03"),
    "6:00 PM",
    "03:00",
    "9:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Emily Davis"]],
    "Kick off the summer with an outdoor music festival featuring the hottest new artists.",
    "Riverside Park",
    playlistid_to_instance["playlist_3"]
);

export const may_event_2 = new event(
    "event_24",
    "Indie Music Expo",
    name_to_user["James Evans"],
    name_to_user["Jennifer Summers"],
    "Wed",
    new Date("2024-05-15"),
    "10:00 AM",
    "04:00",
    "2:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Jane Lesley"]],
    "An expo showcasing indie musicians, with opportunities for networking and live demos.",
    "Convention Center",
    playlistid_to_instance["playlist_4"]
);

export const jun_event_1 = new event(
    "event_25",
    "Tech & Tunes Conference",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Tue",
    new Date("2024-06-11"),
    "9:00 AM",
    "06:00",
    "3:00 PM",
    [name_to_user["Franklin Benson"], name_to_user["Emily Davis"]],
    "A conference exploring the intersection of technology and music, with expert speakers and demos.",
    "Innovation Hub",
    playlistid_to_instance["playlist_5"]
);

export const jun_event_2 = new event(
    "event_26",
    "Acoustic Sunset",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Sat",
    new Date("2024-06-29"),
    "7:00 PM",
    "02:30",
    "9:30 PM",
    [name_to_user["Ryan Cole"], name_to_user["Sophia Nguyen"]],
    "Enjoy a laid-back evening with acoustic performances by emerging artists.",
    "Lakeside Pavilion",
    playlistid_to_instance["playlist_6"]
);

export const jul_event_1 = new event(
    "event_27",
    "Electronic Nights",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-07-12"),
    "8:00 PM",
    "03:00",
    "11:00 PM",
    [name_to_user["Jane Lesley"], name_to_user["Franklin Benson"]],
    "An electrifying night featuring the best in electronic dance music.",
    "Warehouse Club",
    playlistid_to_instance["playlist_7"]
);

export const jul_event_2 = new event(
    "event_28",
    "Summer Industry Mixer",
    name_to_user["Rebecca Stone"],
    name_to_user["Jennifer Summers"],
    "Wed",
    new Date("2024-07-24"),
    "6:00 PM",
    "02:00",
    "8:00 PM",
    [name_to_user["Emily Davis"], name_to_user["Sophia Nguyen"]],
    "Network with industry professionals over cocktails and music.",
    "Downtown Social Club",
    playlistid_to_instance["playlist_8"]
);

export const aug_event_1 = new event(
    "event_29",
    "Producers' Bootcamp",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Mon",
    new Date("2024-08-05"),
    "9:00 AM",
    "04:00",
    "1:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Franklin Benson"]],
    "An intensive bootcamp for aspiring music producers.",
    "Studio One Labs",
    playlistid_to_instance["playlist_9"]
);

export const aug_event_2 = new event(
    "event_30",
    "End of Summer Jam",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Sat",
    new Date("2024-08-31"),
    "5:00 PM",
    "03:00",
    "8:00 PM",
    [name_to_user["Jane Lesley"], name_to_user["Sophia Nguyen"]],
    "A summer-ending celebration with live music and performances.",
    "Open Air Stage",
    playlistid_to_instance["playlist_10"]
);

export const sep_event_1 = new event(
    "event_31",
    "Autumn Music Fest",
    name_to_user["Melody Blinks"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-09-13"),
    "6:00 PM",
    "04:00",
    "10:00 PM",
    [name_to_user["Emily Davis"], name_to_user["Ryan Cole"]],
    "Welcome autumn with an eclectic mix of music and performances.",
    "Central Park",
    playlistid_to_instance["playlist_1"]
);

export const oct_event_1 = new event(
    "event_32",
    "Halloween Bash",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Thu",
    new Date("2024-10-31"),
    "7:00 PM",
    "04:00",
    "11:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Franklin Benson"]],
    "A spooky night filled with great music and Halloween fun.",
    "The Haunted Hall",
    playlistid_to_instance["playlist_2"]
);

export const nov_event_1 = new event(
    "event_33",
    "Thanksgiving Groove",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Wed",
    new Date("2024-11-27"),
    "5:00 PM",
    "03:00",
    "8:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Jane Lesley"]],
    "Celebrate Thanksgiving Eve with music, food, and good vibes.",
    "City Loft Bar",
    playlistid_to_instance["playlist_3"]
);

export const nov_event_2 = new event(
    "event_35",
    "November Industry Meetup",
    name_to_user["Sarah Taylor"],
    name_to_user["Jennifer Summers"],
    "Fri",
    new Date("2024-11-09"),
    "6:00 PM",
    "02:00",
    "8:00 PM",
    [name_to_user["Ryan Cole"], name_to_user["Emily Davis"]],
    "A casual meetup for professionals in the music industry to connect and share ideas.",
    "City Loft Bar",
    playlistid_to_instance["playlist_4"]
);

export const nov_event_3 = new event(
    "event_36",
    "Autumn Acoustic Night",
    name_to_user["Michael Brooks"],
    name_to_user["Jennifer Summers"],
    "Sun",
    new Date("2024-11-10"),
    "7:00 PM",
    "03:00",
    "10:00 PM",
    [name_to_user["Sophia Nguyen"], name_to_user["Franklin Benson"]],
    "An evening of relaxing acoustic performances to celebrate the autumn season.",
    "Harmony Studios",
    playlistid_to_instance["playlist_5"]
);

export const nov_event_4 = new event(
    "event_37",
    "Music Marketing Workshop",
    name_to_user["Tim Jones"],
    name_to_user["Jennifer Summers"],
    "Tue",
    new Date("2024-11-12"),
    "10:00 AM",
    "04:00",
    "2:00 PM",
    [name_to_user["Jane Lesley"], name_to_user["Emily Davis"]],
    "A hands-on workshop focusing on strategies for promoting music in the digital age.",
    "Downtown Conference Center",
    playlistid_to_instance["playlist_6"]
);

export const nov_event_5 = new event(
    "event_38",
    "November Networking Lunch",
    name_to_user["Rebecca Stone"],
    name_to_user["Jennifer Summers"],
    "Thu",
    new Date("2024-11-14"),
    "12:00 PM",
    "01:30",
    "1:30 PM",
    [name_to_user["Ryan Cole"], name_to_user["Sophia Nguyen"]],
    "A networking lunch to connect with fellow industry professionals.",
    "Bluebird Café",
    playlistid_to_instance["playlist_7"]
);

export const dec_event_1 = new event(
    "event_34",
    "Year-End Gala",
    name_to_user["Melody Blinks"],
    name_to_user["Jennifer Summers"],
    "Sun",
    new Date("2024-12-29"),
    "7:00 PM",
    "05:00",
    "12:00 AM",
    [name_to_user["Sophia Nguyen"], name_to_user["Emily Davis"]],
    "Ring in the new year with a grand celebration of music and networking.",
    "Grand Hotel Ballroom",
    playlistid_to_instance["playlist_8"]
);

export const month_to_events = {
    "january 2024": [
        jan_event_2,
        jan_event_3,
        jan_event_4,
        jan_event_5
    ],
    "february 2024": [
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
    "april 2024": [
        apr_event_2,
        apr_event_3,
        apr_event_4,
        apr_event_5,
        apr_event_6
    ],
    "may 2024": [
        may_event_1,
        may_event_2
    ],
    "june 2024": [
        jun_event_1,
        jun_event_2
    ],
    "july 2024": [
        jul_event_1,
        jul_event_2
    ],
    "august 2024": [
        aug_event_1,
        aug_event_2
    ],
    "september 2024": [
        sep_event_1
    ],
    "october 2024": [
        oct_event_1
    ],
    "november 2024": [
        nov_event_2,
        nov_event_3,
        nov_event_4,
        nov_event_5,
        nov_event_1
    ],
    "december 2024": [
        dec_event_1
    ]
};

export const eventid_to_instance = {
    "event_1": jan_event_1,
    "event_2": jan_event_2,
    "event_3": jan_event_3,
    "event_4": jan_event_4,
    "event_5": jan_event_5,
    
    "event_6": feb_event_1,
    "event_7": feb_event_2,
    "event_8": feb_event_3,
    "event_9": feb_event_4,
    "event_10": feb_event_5,
    
    "event_11": mar_event_1,
    "event_12": mar_event_2,
    "event_13": mar_event_3,
    "event_14": mar_event_4,
    "event_15": mar_event_5,
    "event_16": mar_event_6,
    
    "event_17": apr_event_1,
    "event_18": apr_event_2,
    "event_19": apr_event_3,
    "event_20": apr_event_4,
    "event_21": apr_event_5,
    "event_22": apr_event_6,
    
    "event_23": may_event_1,
    "event_24": may_event_2,
    
    "event_25": jun_event_1,
    "event_26": jun_event_2,
    
    "event_27": jul_event_1,
    "event_28": jul_event_2,
    
    "event_29": aug_event_1,
    "event_30": aug_event_2,
    
    "event_31": sep_event_1,
    
    "event_32": oct_event_1,
    
    "event_33": nov_event_1,
    "event_35": nov_event_2,
    "event_36": nov_event_3,
    "event_37": nov_event_4,
    "event_38": nov_event_5,
    
    "event_34": dec_event_1
};
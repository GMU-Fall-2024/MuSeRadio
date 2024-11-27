export class UserProfile
{
    FirstName;
    LastName;
    Email; 
    Phone;
    DateOfBirth;
    Bio;
    Avatar;

    constructor(FirstName, LastName, Email, Phone, DateOfBirth, Bio, Avatar)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Phone = Phone;
        this.DateOfBirth = DateOfBirth;
        this.Bio = Bio;
        this.Avatar = Avatar;
    }

    setFirstName(FirstName)
    {
        this.FirstName = FirstName;
    }

    setLastName(LastName)
    {
        this.LastName = LastName;
    }

    setEmail(Email)
    {
        this.Email = Email;
    }

    setPhone(Phone)
    {
        this.Phone = Phone;
    }

    setDateOfBirth(DateOfBirth)
    {
        this.DateOfBirth = DateOfBirth;
    }

    setBio(Bio)
    {
        this.Bio = Bio;
    }

    setAvatar(Avatar)
    {
        this.Avatar = Avatar;
    }
}

export class DJ extends UserProfile
{
    StageName;                  /* name of dj */
    Schedule;                  /* array of event ids or objects? */
    DJStatus;                 /*  online or offline or unknown */ 
    Subscribers;             /*   array of user ids or a counter */
    DiscoveredSongs;        /*    array of song ids */
    PastEvents;             /*    array of event ids */

    constructor(FirstName, LastName, Email, Phone, DateOfBirth, Bio, Avatar, StageName, Schedule, DJStatus, Subscribers, DiscoveredSongs, PastEvents)
    {
        super(FirstName, LastName, Email, Phone, DateOfBirth, Bio, Avatar);
        this.StageName = StageName;
        this.Schedule = Schedule;
        this.DJStatus = DJStatus;
        this.Subscribers = Subscribers;
        this.DiscoveredSongs = DiscoveredSongs;
        this.PastEvents = PastEvents;
    }

    setStageName(StageName)
    {
        this.StageName = StageName;
    }

    setSchedule(Schedule)
    {
        this.Schedule = Schedule;
    }

    setDJStatus(DJStatus)
    {
        this.DJStatus = DJStatus;
    }

    setSubscribers(Subscribers)
    {
        this.Subscribers = Subscribers;
    }

    setDiscoveredSongs(DiscoveredSongs)
    {
        this.DiscoveredSongs = DiscoveredSongs;
    }
}

/** Instances */
export const DJ_MollyRocks = new DJ(
    "Jennifer",
    "Summers",
    "djmolly@muse.radio",
    "555-555-5555",
    new Date("2000-01-01"),
    "I'm a dj trying to make it to music school",
    "./assets/images/avatars/MollyRocks.jpg",
    "MollyRocks",
    ["event_1", "event_2", "event_3"],
    "online",
    ["user_1", "user_2", "user_3", "user_4", "user_5", "user_6", "user_7", "user_8", "user_9", "user_10"],
    ["song_1", "song_2", "song_3"],
    ["event_4", "event_5"]
);

export const event_guest1 = new UserProfile(
    "Franklin",
    "Benson",
    "fbenson@muse.radio",
    "1234567890",
    new Date("2004-03-01"),
    "Expert in all things biology and chemistry",
    "./assets/images/avatars/FranklinBenson.jpg",
);

export const event_guest2 = new UserProfile(
    "Jane",
    "Lesley",
    "jlesley@muse.radio",
    "0256983325",
    new Date("2004-03-01"),
    "Expert in all things politics and sociocultural development",
    "./assets/images/avatars/JaneLesley.jpg",
);

export const producer_1 = new UserProfile(
    "Tim",
    "Jones",
    "tjones@muse.radio",
    "5218963327",
    new Date("1987-03-05"),
    "Homegrown producer with nearly 15 years of practice in the music industry",
    "./assets/images/avatars/Tim.jpg",
);

export const manager_1 = new UserProfile(
    "Melody",
    "Blinks",
    "mblinks@muse.radio",
    "02987411586",
    new Date("1987-03-05"),
    "Versatile manager with nearly 15 years of practice in the music industry and experience in event management",
    "./assets/images/avatars/Melody.jpg",
);

export const producer_2 = new UserProfile(
    "Sarah",
    "Taylor",
    "staylor@muse.radio",
    "5409876543",
    new Date("1990-05-22"),
    "Creative music producer known for innovative beats and a knack for artist development in the hip-hop scene.",
    "./assets/images/avatars/SarahTaylor.jpg"
);

export const producer_3 = new UserProfile(
    "Michael",
    "Brooks",
    "mbrooks@muse.radio",
    "4123459876",
    new Date("1983-12-15"),
    "Veteran producer with expertise in electronic and ambient music, bringing over 20 years of experience.",
    "./assets/images/avatars/Michael.jpg"
);

export const manager_2 = new UserProfile(
    "Rebecca",
    "Stone",
    "rstone@muse.radio",
    "3034567890",
    new Date("1989-09-10"),
    "Resourceful manager with experience in talent scouting and project management across the music industry.",
    "./assets/images/avatars/RebeccaStone.jpg"
);

export const manager_3 = new UserProfile(
    "James",
    "Evans",
    "jevans@muse.radio",
    "6209988776",
    new Date("1986-01-30"),
    "Experienced manager specializing in artist branding and tour management with a strong industry network.",
    "./assets/images/avatars/JamesEvans.jpg"
);

export const event_guest3 = new UserProfile(
    "Emily",
    "Davis",
    "edavis@muse.radio",
    "5213379821",
    new Date("1995-06-14"),
    "Enthusiastic event guest and music lover with a deep interest in indie and alternative genres.",
    "./assets/images/avatars/EmilyDavis.jpg"
);

export const event_guest4 = new UserProfile(
    "Ryan",
    "Cole",
    "rcole@muse.radio",
    "4172398475",
    new Date("1993-08-25"),
    "Avid event attendee with a background in music journalism and a passion for discovering new talent.",
    "./assets/images/avatars/RyanCole.jpg"
);

export const event_guest5 = new UserProfile(
    "Sophia",
    "Nguyen",
    "snguyen@muse.radio",
    "3987456210",
    new Date("1997-02-11"),
    "Frequent event guest and social media influencer focused on music and pop culture.",
    "./assets/images/avatars/SophiaNguyen.jpg"
);

export default DJ_MollyRocks;

export const name_to_user = {
    "Jennifer Summers": DJ_MollyRocks,
    "Franklin Benson": event_guest1,
    "Jane Lesley": event_guest2,
    "Tim Jones": producer_1,
    "Melody Blinks": manager_1,
    "Sarah Taylor": producer_2,
    "Michael Brooks": producer_3,
    "Rebecca Stone": manager_2,
    "James Evans": manager_3,
    "Emily Davis": event_guest3,
    "Ryan Cole": event_guest4,
    "Sophia Nguyen": event_guest5
};
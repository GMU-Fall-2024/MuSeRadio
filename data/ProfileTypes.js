export class UserProfile
{
    FirstName;
    LastName;
    Email; 
    Phone;
    DateOfBirth;
    Bio;

    constructor(FirstName, LastName, Email, Phone, DateOfBirth, Bio)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Phone = Phone;
        this.DateOfBirth = DateOfBirth;
        this.Bio = Bio;
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
}

export class DJ extends UserProfile
{
    StageName;                  /* name of dj */
    Schedule;                  /* array of event ids or objects? */
    DJStatus;                 /*  online or offline or unknown */ 
    Subscribers;             /*   array of user ids or a counter */
    DiscoveredSongs;        /*    array of song ids */

    constructor(FirstName, LastName, Email, Phone, DateOfBirth, Bio, StageName, Schedule, DJStatus, Subscribers, DiscoveredSongs)
    {
        super(FirstName, LastName, Email, Phone, DateOfBirth, Bio);
        this.StageName = StageName;
        this.Schedule = Schedule;
        this.DJStatus = DJStatus;
        this.Subscribers = Subscribers;
        this.DiscoveredSongs = DiscoveredSongs;
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
const DJ_MollyRocks = new DJ(
    "Jennifer",
    "Summers",
    "djmolly@muse.radio",
    "555-555-5555",
    new Date("2000-01-01"),
    "I'm a dj trying to make it to music school",
    "MollyRocks",
    ["event_1", "event_2"],
    "online",
    ["user_1", "user_2"],
    ["song_1", "song_2", "song_3"]
);

export default DJ_MollyRocks;
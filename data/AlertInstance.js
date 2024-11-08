export class muse_alert
{
    alertid;
    alert_recipient;
    alert_type;
    alert_icon;
    alert_header;
    alert_description;
    alert_status;
    alert_timestamp;

    constructor(alertid, alert_recipient, alert_type, alert_icon, alert_header, alert_description, alert_status, alert_timestamp)
    {
        this.alertid = alertid;
        this.alert_recipient = alert_recipient;
        this.alert_type = alert_type;
        this.alert_icon = alert_icon;
        this.alert_header = alert_header;
        this.alert_description = alert_description;
        this.alert_status = alert_status;
        this.alert_timestamp = alert_timestamp;
    }
}

export const alert_type_to_color = {
    "normal alert": "rgb(163, 199, 204)",
    "comment update": "rgb(0, 102, 204)",
    "event update": "rgb(34, 139, 34)",
    "system alert": "rgb(255, 165, 0)",
    "warning alert": "rgb(255, 0, 0)"
}

// Alert Instances
export const alert_1 = new muse_alert(
    "alert_1",
    "user_1",
    "normal alert",
    "fa-solid fa-bell",
    "new alert",
    "You have unread alerts please check them out.",
    "unread",
    new Date("2024-01-01, 5:00:00")
);

export const alert_2 = new muse_alert(
    "alert_2",
    "user_2",
    "comment update",
    "fa-solid fa-comments",
    "new comment",
    "Comment received on your show from last week from a listener.",
    "unread",
    new Date("2023-01-01, 0:12:00")
);

export const alert_3 = new muse_alert(
    "alert_3",
    "user_3",
    "event update",
    "fa-solid fa-calendar-days",
    "event scheduled",
    "New event scheduled for 01/02/2024. At 10:00PM (EST).",
    "unread",
    new Date("2023-01-01, 5:00:00")
);

export const alert_4 = new muse_alert(
    "alert_4",
    "user_4",
    "system alert",
    "fa-solid fa-users-gear",
    "system updates",
    "System updates scheduled for 01/01/2024. At 10:00PM (EST). Expect system wide glitches.",
    "unread",
    new Date("2023-01-01, 7:12:00")
);

export const alert_5 = new muse_alert(
    "alert_5",
    "user_5",
    "warning alert",
    "fa-solid fa-triangle-exclamation",
    "Profile Vulnerability",
    "Your profile is at risk of being deleted. Please update your profile or change your password.",
    "unread",
    new Date("2023-01-01, 10:14:00")
);

export const alert_6 = new muse_alert(
    "alert_6",
    "user_1",
    "event update",
    "fa-solid fa-calendar-days",
    "event scheduled",
    "New event scheduled for 03/02/2024. At 10:00PM (EST).",
    "unread",
    new Date("2023-05-01, 9:00:00")
);

export const all_alerts = [
    alert_1, 
    alert_2, 
    alert_3, 
    alert_4, 
    alert_5, 
    alert_6
];

export const alert_to_id = {
    "alert_1": alert_1,
    "alert_2": alert_2,
    "alert_3": alert_3,
    "alert_4": alert_4,
    "alert_5": alert_5,
    "alert_6": alert_6
};
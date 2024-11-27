import { alert_to_id } from "../instances/AlertInstance.js"

export function clear_alert(triggerbutton, status)
{
    let alertid = triggerbutton.id
    let currentelement = triggerbutton;
    while(currentelement.className !== "alert") {
        currentelement = currentelement.parentElement;
    }
    console.log("current element", alertid,currentelement);
    let alert = alert_to_id[alertid];
    currentelement.remove();
    console.log("modify alert instance", alert);
    alert.alert_status = status;
    console.log("alert instance modified", alert);
}
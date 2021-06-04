import axios from "./Instance";
// const pathName = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=0WCp1ZUorQSt9VPWxG9WBFYjLWeERwQL`;

import { Urlservices } from "./UrlServices";

export const getEventContent = async () => {
    const response = await fetch("http://localhost:3333/_embedded");
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data.events;
}


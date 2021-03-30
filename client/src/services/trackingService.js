import { serverUrl, endpoints } from './api.js';
const addUrl = serverUrl + endpoints.ADD_SHOW;


function trackingServices(show) {
    // let found = show.find((x) => x?.username.toLowerCase() === name.toLowerCase());
    // if (found) 
    console.log(show);
    return fetch(addUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            show
        )
    })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export default trackingServices;
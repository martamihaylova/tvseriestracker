import { serverUrl, endpoints } from './api.js';
const addUrl = serverUrl + endpoints.ADD_SHOW;


function trackingServices(userId, show) {
   
    console.log(userId);
    return fetch(addUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            show
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export default trackingServices;
import { serverUrl, endpoints } from './api.js';
const addUrl = serverUrl + endpoints.ADD_SHOW;

function trackingServices(userId, currentShowId, currentShowName) {
        return fetch(addUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                show: {
                    name: currentShowName,
                    id: currentShowId
                }
            })
        })
            .then((res) => res.json())
            .catch((err) => console.log(err.message));     
}

export default trackingServices;
import { serverUrl, endpoints } from './api.js';

function untrackServices(userId, currentShow) {
 
    const addUrl = serverUrl + endpoints.SHOW + userId;
        return fetch(addUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                show: currentShow
            })
        })
            .then((res) => res)
            .catch((err) => console.log(err.message));     
}

export default untrackServices;
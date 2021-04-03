import { serverUrl, endpoints } from './api.js';
const userUrl = serverUrl + endpoints.USER;

const getUser = (userId) => {
    return fetch(userUrl + userId)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export default getUser;
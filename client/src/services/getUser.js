import { serverUrl, endpoints } from './api.js';
const userUrl = serverUrl + endpoints.USER;

const getUser = (userId) => {

    return fetch(userUrl + userId)
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
}

export default getUser;
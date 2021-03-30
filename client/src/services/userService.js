import { serverUrl, endpoints } from './api.js';
const regUrl = serverUrl + endpoints.REGISTER;
const logUrl = serverUrl + endpoints.LOGIN;
const logoutUrl = serverUrl + endpoints.LOGOUT;

export const register = function (username, email, password, rePassword) {
    return fetch(regUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password,
            rePassword
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export const login = function (username, password) {
    return fetch(logUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export const logout = function () {
    localStorage.clear();
    fetch(logoutUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err))
}

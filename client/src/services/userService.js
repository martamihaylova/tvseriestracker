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
    });
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
    });
}
export const logout = function () {
    console.log('logout');
    return fetch(logoutUrl);
}

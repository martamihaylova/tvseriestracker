const baseSeriesUrl = 'https://api.tvmaze.com/shows/';
const searchUrl = 'https://api.tvmaze.com/search/shows?q=';
const serverUrl = 'https://tvseries-server.herokuapp.com/';

const endpoints = {
    REGISTER: 'auth/register',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    SHOW: 'show/',
    USER: 'account/'
}

export { baseSeriesUrl, serverUrl, searchUrl, endpoints };
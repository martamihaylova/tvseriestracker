const baseSeriesUrl = 'http://api.tvmaze.com/shows/';
const searchUrl = 'http://api.tvmaze.com/search/shows?q=';
const serverUrl = 'http://localhost:5001';

const endpoints = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',

}

export { baseSeriesUrl, serverUrl, searchUrl, endpoints };
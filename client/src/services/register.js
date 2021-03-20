import { serverUrl } from './api.js'

const register = function (e) {
    console.log(e);
    let result = fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'Pesho',
            password: '1'
        })
    }).json();
    console.log(result);
  
}
export default register;
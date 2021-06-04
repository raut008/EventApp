import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default instance;
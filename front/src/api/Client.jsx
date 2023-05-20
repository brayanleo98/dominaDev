import axios from 'axios';
let AUTH_TOKEN = '';
export const client = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        common: ["Authorization", AUTH_TOKEN]
    }

});

export const setToken = (token) => {
    AUTH_TOKEN = token;
}
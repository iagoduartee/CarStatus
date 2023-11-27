import axios from 'axios';

export const https = ( url = '' ) => {
    const instance = axios.create({
        baseURL: `http://localhost:8080${url}`
    });
    return instance;
}
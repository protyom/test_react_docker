import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
});

export default instance
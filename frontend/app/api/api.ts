import axios from "axios";

const URL = 'http://127.0.0.1:3003/'

const api = axios.create({
    baseURL: `${URL}`,
});
export default api;
import axios from "axios";

const instance = axios.create({
    baseURL: `http://52.79.145.74:8081`,
});

export default instance;
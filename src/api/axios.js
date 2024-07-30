import axios from "axios";

const instance = axios.create({
    baseURL: `http://52.79.145.74:8080`,
});

export default instance;
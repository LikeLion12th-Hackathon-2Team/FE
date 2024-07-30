import axios from "axios";

const instance = axios.create({
    baseURL: `http://54.180.217.161:8081`,
});

export default instance;
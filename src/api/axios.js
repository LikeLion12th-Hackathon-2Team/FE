import axios from "axios";

const instance = axios.create({
    baseURL: `https://hyunwoo9930.store`,
});

export default instance;
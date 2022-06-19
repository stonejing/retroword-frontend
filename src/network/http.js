import axios from "axios";

const url = "http://127.0.0.1:5000"

axios.defaults.timeout = 100000;
axios.defaults.baseURL = url;

export const http = axios;
import axios from "axios";

const api = axios.create({
    baseURL:
        "https://price-alert-app-1.onrender.com/api"
});

export default api;
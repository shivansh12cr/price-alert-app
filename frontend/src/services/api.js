import axios from "axios";

const api = axios.create({
    baseURL: "https://price-alert-app-t3br.onrender.com/"
});

export default api;
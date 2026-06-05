import { io } from "socket.io-client";

const socket = io(
    "https://price-alert-app-1.onrender.com"
);

export default socket;
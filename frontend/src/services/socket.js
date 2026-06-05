import { io } from "socket.io-client";

const socket = io("https://price-alert-app-t3br.onrender.com/");

export default socket;
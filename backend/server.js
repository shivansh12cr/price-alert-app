require("dotenv").config();

const http = require("http");

const app = require("./src/app");

const connectDB = require("./src/config/db");

require("./src/cron/alertChecker");

const { initSocket } =
require("./src/sockets/socketHandler");

connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});
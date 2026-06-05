let io;

const initSocket = (server) => {
    io = require("socket.io")(server, {
        cors: {
            origin: "*"
        }
    });
};

const getIO = () => io;

module.exports = {
    initSocket,
    getIO
};
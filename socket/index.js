const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) &&
        users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId != socketId);
}

const getUser = (userId) => {
    return users.find(user => user.userId == userId);
}

io.on("connection", (socket) => {
    //when connected
    console.log("a user connected");
    //after every conn take userId, socketId
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", async ({ senderId, receiverId, text }) => {
        const user = await getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text
        });
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("someone got disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});
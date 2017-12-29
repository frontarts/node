var Chat = function(socket) {
    this.socket = socket;
}

Chat.prototype.sendMessage = function(room, text) {
    var message = {
        room: room,
        text: text
    };
    this.socket.emit('message', message);
}
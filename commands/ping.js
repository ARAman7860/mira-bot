module.exports = {
  name: "ping",

  execute(senderId, sendMessage) {
    sendMessage(senderId, "Pong 🏓");
  }
};

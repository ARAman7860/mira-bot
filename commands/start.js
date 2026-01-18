module.exports = {
  execute(senderId, sendMessage) {
    sendMessage(
      senderId,
      "👋 Welcome!\nMain ek simple Messenger bot hoon.\nCommands dekhne ke liye 'help' likho."
    );
  }
};

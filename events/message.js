const ping = require("../commands/ping");
const help = require("../commands/help");

module.exports = (senderId, text, sendMessage) => {
  // agar message text hi nahi hai
  if (!text) return;

  const message = text.toLowerCase().trim();

  // ping command
  if (message === "ping") {
    return ping.execute(senderId, sendMessage);
  }

  // help command
  if (message === "help") {
    return help.execute(senderId, sendMessage);
  }

  // default reply
  sendMessage(senderId, "❓ Command samajh nahi aaya. 'help' likho.");
};

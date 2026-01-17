module.exports = {
  name: "help",
  run({ api, message }) {
    api.sendMessage(
      "🤖 Mira Bot Commands:\n\n!help → commands list\n!ping → test",
      message.threadID
    );
  }
};

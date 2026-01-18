module.exports = {
  execute(senderId, sendMessage, args) {
    if (!args || args.length === 0) {
      return sendMessage(senderId, "❌ Kuch likho jise main repeat kar saku.");
    }
    sendMessage(senderId, args.join(" "));
  }
};

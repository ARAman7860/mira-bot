const fs = require("fs");
const login = require("fb-chat-api");
const config = require("./config.json");

login(
  {
    email: config.email,
    password: config.password,
    appState: config.appState || null
  },
  (err, api) => {
    if (err) {
      console.log("❌ Login Error:", err);
      return;
    }

    console.log("✅ Mira Bot Online");

    api.setOptions({
      listenEvents: true,
      selfListen: false
    });

    const commands = new Map();

    // load commands
    fs.readdirSync("./commands").forEach(file => {
      if (file.endsWith(".js")) {
        const cmd = require(`./commands/${file}`);
        commands.set(cmd.name, cmd);
      }
    });

    api.listenMqtt((err, message) => {
      if (err) return;

      if (!message.body) return;
      if (!message.body.startsWith(config.prefix)) return;

      const args = message.body
        .slice(config.prefix.length)
        .trim()
        .split(/ +/);

      const cmdName = args.shift().toLowerCase();
      const cmd = commands.get(cmdName);

      if (!cmd) return;

      try {
        cmd.run({ api, message, args });
      } catch (e) {
        api.sendMessage("❌ Error command me", message.threadID);
      }
    });
  }
);

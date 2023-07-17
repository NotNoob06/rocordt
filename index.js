const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: "t.",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    guildOnly: false,
    respondToBots: true,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

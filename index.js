const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🤖 Bot aktif!\n\nSelamat datang di bot pembayaran."
  );
});

console.log("Bot sedang berjalan...");

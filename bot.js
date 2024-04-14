const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

const token = '7156714710:AAEBG2fBbZ490ug6J1ho4G-oCG5plid2IAQ';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.username;
    
    bot.sendMessage(chatId, 'Bienvenue dans la bibliothèque des applications hack!', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Télécharger l'apk ⬇️", callback_data: 'download_apk' }]
            ]
        }
    });

    // Notify admin about user's start
    const adminChatId = '814566054'; // Replace with your admin's chat ID
    bot.sendMessage(adminChatId, `New user started the bot.\nUser ID: ${msg.from.id}\nUsername: @${username}`);
});

bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (callbackQuery.data === 'download_apk') {
        bot.sendMessage(chatId, 'Pour obtenir l\'application, veuillez créer un compte 1xbet authentique en utilisant le code promo Free221. Une fois que c\'est fait, cliquez sur le bouton suivant ➡️', {
            reply_markup: { inline_keyboard: [[{ text: 'Suivant ➡️', callback_data: 'next' }]] }
        });
    }

    if (callbackQuery.data === 'next') {
        bot.sendMessage(chatId, 'Veuillez entrer votre ID pour vous connecter à l\'application.');
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.text;

    if (userId === '/start') {
        // Do nothing, only send welcome message
    } else if (/^\d{9}$/.test(userId)) { // Check if the ID is exactly 9 digits
        bot.sendMessage(chatId, 'ID accepté. Voici le lien de téléchargement : Apple of fortune https://t.me/c/1923341484/8248 Lien de téléchargement crash : https://t.me/c/1923341484/8319 ', {
            reply_markup: { inline_keyboard: [[{ text: 'Contact admin', url: 'https://t.me/Medatt00' }]] }
        });
    } else {
        bot.sendMessage(chatId, 'Veuillez entrer un ID valide en créant un nouveau compte avec le code promo *Free221* ✅️.');
    }
});

// Créez un serveur HTTP simple qui renvoie "I'm alive" lorsque vous accédez à son URL
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I'm alive");
    res.end();
});

// Écoutez le port 8080
server.listen(8080, () => {
    console.log("Keep alive server is running on port 8080");
});

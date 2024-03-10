const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const token = '6837924024:AAHYKYDukRPamhb-Wj8P6b_i3nnmVO-OPTA';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bienvenue dans la bibliothèque des applications hack!', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Télécharger l'apk ⬇️", callback_data: 'download_apk' }
                ]
            ]
        }
    });
});

bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (callbackQuery.data === 'download_apk') {
        bot.sendMessage(chatId, 'Pour obtenir l\'application, veuillez créer un compte 1xbet authentique en utilisant le code promo Free221. Une fois que c\'est fait, cliquez sur le bouton suivant ➡️', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Suivant ➡️', callback_data: 'next' }
                    ]
                ]
            }
        });
    }

    if (callbackQuery.data === 'next') {
        bot.sendMessage(chatId, 'Veuillez entrer votre ID pour vous connecter à l\'application.');
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.text;

    if (!isNaN(userId) && parseInt(userId) >= 700000000 && parseInt(userId) <= 999999999) {
        bot.sendMessage(chatId, 'ID accepté. Voici le lien de téléchargement : https://t.me/SOLKAH00/5679', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Contact admin', url: 'https://t.me/Medatt00' }
                    ]
                ]
            }
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


const CryptoJS = require("crypto-js");

export function Encrypt(message) {
    const encrypted = CryptoJS.AES.encrypt(
        message.toString(),
        process.env.REACT_APP_PREMIUM_SECRET_PHRASE
    );

    return encrypted
}

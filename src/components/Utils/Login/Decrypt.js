const CryptoJS = require("crypto-js");

export function Decrypt(message) {
    const decrypted = CryptoJS.AES.decrypt(
        message,
        process.env.REACT_APP_PREMIUM_SECRET_PHRASE
    ).toString(CryptoJS.enc.Utf8);

    return decrypted
}

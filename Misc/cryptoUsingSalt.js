require('dotenv').config();
// const Buffer = require('node:buffer');
const { scryptSync , createDecipheriv , createCipheriv}  = require('node:crypto');

const password = process.env.password;
const key  = scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);


function encryptData (data) {
    let cipher = createCipheriv('aes-192-cbc',key,iv);
    let encryptedData = cipher.update(data,'utf8','hex');
    encryptedData +=cipher.update('hex');
    return encryptedData;
}

function decryptData (da) {
    let decipher = createDecipheriv('aes-192-cbc',key,iv);
    let decryptedData = decipher.update(da,'hex','utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}

const data = "Hello World....."
const enc  = encryptData(data);

console.log("Encrypted Data =",enc);

const dec  = decryptData(enc);

// console.log("Decrypted Data =",dec);
require('dotenv').config();
const crypto = require('crypto');
const mySecretKey = process.env.mySecretKey;
// const iv = crypto.randomBytes(16); // Generate a secure secret key
const iv = Buffer.alloc(16);


function encryptData(data) {
  const cipher = crypto.createCipheriv('aes-256-cbc', mySecretKey, iv);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

function decryptData(encryptedData) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', mySecretKey, iv);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

const originalData = {
    name:"Kaushal Dhakal",
    age: 25
};
const stringData = JSON.stringify(originalData);
const encryptedData = encryptData(stringData);
console.log('Encrypted Data:===>', encryptedData);
const decryptedData = decryptData(encryptedData);
console.log('Decrypted Data:====>', decryptedData);

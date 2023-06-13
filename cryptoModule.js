const crypto = require('crypto');

const secretKey = crypto.randomBytes(32); // Generate a secure secret key

function encryptData(data) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

function decryptData(encryptedData) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
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
console.log('Encrypted Data:', encryptedData);
const decryptedData = decryptData(encryptedData);
console.log('Decrypted Data:', decryptedData);

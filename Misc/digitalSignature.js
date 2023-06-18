const crypto = require('crypto');

// Generate RSA keys
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

function signData(data, privateKey) {
  const sign = crypto.createSign('SHA256');
  sign.write(data);
  sign.end();
  const signature = sign.sign(privateKey, 'hex');
  return signature;
}

function verifySignature(data, signature, publicKey) {
  const verify = crypto.createVerify('SHA256');
  verify.write(data);
  verify.end();
  const isValid = verify.verify(publicKey, signature, 'hex');
  return isValid;
}

const originalData = 'Message to be signed';
const signature = signData(originalData, privateKey);
console.log('Signature:', signature);
const isValidSignature = verifySignature(originalData, signature, publicKey);
console.log('Valid Signature:', isValidSignature);

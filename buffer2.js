const fs = require('fs');
const crypto = require('crypto');


const randomBuffer = crypto.randomBytes(20);
const base64String = randomBuffer.toString('base64');
const newBuffer = Buffer.from(base64String,'base64');

console.log(randomBuffer);
console.log(newBuffer);

console.log(randomBuffer.toString('base64'));
console.log(newBuffer.toString('base64'));

console.log(randomBuffer == newBuffer); //false
console.log(randomBuffer.equals(newBuffer)); // true
console.log(randomBuffer.toString() === newBuffer.toString());//trye


// console.log(newBuffer.toString('base64'));



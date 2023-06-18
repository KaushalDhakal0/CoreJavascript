const fs = require('fs');
const crypto = require('crypto');
//Creates buffer from given string.
// const buffer = Buffer.from('[{id:1,name:"Kaushal Dhakal"},{id:1,name:"Kaushal Dhakal"},{id:1,name:"Kaushal Dhakal"}]', 'utf8');
// console.log("======Buffer====>",buffer.toString());
const readStream  = fs.createReadStream('dta.txt');
const writeStream = fs.createWriteStream('copy.txt');
let buffer = Buffer.allocUnsafe(0);
// console.log(buffer.length);

readStream.on('data', (chunk) => {
    // console.log("Chunk-->",chunk);
    writeStream.write(buffer,(err) => {
        // console.log("chunnnnnn");
        if(err){
            console.log("Error while writing a file");
        }
    })
    // buffer += chunk ==> this will automatically convert buffer to String.
    // buffer += chunk;
    // Buffer.concat([buffer, chunk]) ==> concatenates on buffer not on string. So we have to convert it into string after opeation has been completrd.

    buffer = Buffer.concat([buffer, chunk]);
})
readStream.on('end', ()=>{
    // console.log('Result ', buffer.toString());
    writeStream.emit('finish');
})
readStream.on('error', (error) => {
    console.log("Error ==>", error);
})
writeStream.on('finish',() => {
    console.log("COPY Completed.....");
})




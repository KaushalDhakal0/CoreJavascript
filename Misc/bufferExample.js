const fs = require('fs');
const { error } = require('console');
const readStream  = fs.createReadStream('dta.txt');
const writeStream = fs.createWriteStream('copy.txt',{ flags: 'a' });
let buffer = Buffer.allocUnsafe(0);
// console.log(buffer.length);

readStream.on('data', (chunk) => {
    // console.log("Chunk-->",chunk.length);
    buffer = Buffer.concat([buffer, chunk]);
    // buffer += chunk ==> this will automatically convert buffer to String.
    // buffer += chunk;
    // writeStream.write(buffer.toString(),(err) => {
    //     if(err){
    //         console.log("Error while writing a file");
    //     }
    // })
    writeStream.write(buffer,(error) => {
        if(error){
            // console.log("---->>>>>",\);
        }
        console.log("Copied Successfully");
    });
    // console.log("sdpp0--------sa",buffer);
    // Buffer.concat([buffer, chunk]) ==> concatenates on buffer not on string. So we have to convert it into string after opeation has been completrd.

    
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




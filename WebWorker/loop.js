// for (let index = 0; index < 20; index++) {
//     setTimeout(()=>{
//         console.log(index);
//     },index * 1000)
// }

async function delay(i){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(i);
            resolve();
        },i*1000)
    })
}

for (let index = 0; index < 10; index++) {
    delay(index).then(()=> {
        // console.log("Hy");
    });
    delay(index);
    console.log("==");
}
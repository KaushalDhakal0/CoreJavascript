// for (let index = 0; index < 20; index++) {
//     setTimeout(()=>{
//         console.log(index);
//     },index * 1000)
// }

// async function delay(i){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log(i);
//             resolve();
//         },i*1000)
//     })
// }

// for (let index = 0; index < 10; index++) {
//     delay(index).then(()=> {
//         // console.log("Hy");
//     });
//     delay(index);
//     console.log("==");
// }

//Blocking main thread

// function block(){
//     let start = Date.now();
//     let i = 0;
//     while ((Date.now() - start) < 1000) {
//         console.log("Hy");
//         i+=1
//     }
// }

// block();

// console.log("Hello");

//Async Approach to unblock main thread

 async function block(){
    let start = Date.now();
    let i = 0;
    return new Promise(resolve => {
        console.log("HYYYY");
        resolve();
    })
}

// async function run(){
//     await block();
// }
block();
console.log("Hy");
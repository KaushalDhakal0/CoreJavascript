const handleTask = (txt) => {
    return new Promise((resolve,reject) => {
        console.log("=-=-=-=");
        if(txt.length > 10){
            resolve(txt);
        }
        reject(txt);
    })
}

// handleTask("Aphjghjgjhe").then(dta => {
//     console.log("Run successfully");
// }).catch(err =>{
//     console.log("Err= ====");
// });
// handleTask("jsdghasdhasvdhj")


async function rom(){
    console.log("ghvhgvs");
   const data = await handleTask("dasdasdasdghsdgh");
   console.log("====",data);
   
}
rom()
console.log("ABCDEFGH");
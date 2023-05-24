// let str = 'Hello, World!';
// let start = performance.now();
// let reversed1 = reverseString1(str);
// let end = performance.now();
// console.log(`Execution time for reverseString1: ${(end - start)/1000} seconds`);

// start = performance.now();
// let reversed2 = reverseString2(str);
// end = performance.now();
// console.log(`Execution time for reverseString2: ${(end - start)/1000} seconds`);



// function reverseString1(str){
//     var a = [];
//     for (let index = 0; index < 10000; index++) {
//         for(let j = 0 ; j < 10000; j++){
//             a.push(index);
//         }
//     }
//     console.log(a);
// }


// function reverseString2(str){
//     let reversed =  "";
//     for (let i = str.length - 1 ; i >=0; i--) {
//         reversed +=str[i];
//     }
//     return reversed
// };


// async function delay(ms) {
//     await new Promise((resolve) => {
//       setTimeout(()=>{
//         console.log("Hello");
//         // return 10;
//       }, ms);
      
//     });
//   }
  
// async function main() {
//     console.log('Start');
//     const y = await delay(5000);
//     console.log(y);
//     console.log('End');
// }
// main();

// const obj = {
//     name: 'John',
//     age: 30,
//     job: 'developer',
//     skills: ['JavaScript', 'Node.js', 'React']
// };
    
// const jsonString = JSON.stringify(obj, (key, value) => {
// if (key === 'age') {
//     return value + 10;
// }
// return value;
// }, " ");    
// console.log(jsonString);
// In this example, `JSON.stringify()` is called with 
// three arguments: the object to be stringified, a replacer function that 
// increments the `age` property by 10, and a string of two spaces to be used for indentation.
// The resulting JSON string includes the modified `age` property and is formatted with indentation for readability.

// You can also omit the `replacer` and `space` arguments if you
//  do not need to modify the values in the object or add white space to the output string. For example:
//  const jsonString = JSON.stringify(obj);
//  console.log(jsonString);
 
 /* Output:
 {"name":"John","age":30,"job":"developer","skills":["JavaScript","Node.js","React"]}
 */
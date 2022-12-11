// Given number 30 return the arrays of all the possibility from 1-30 with last digit number must be 2 whose sum ==30.

// result :[
//     [
//       2, 2, 2, 2, 2, 2,
//       2, 2, 2, 2, 2, 2,   ===>SUM = 30 with each data ending with two;
//       2, 2, 2
//     ],
//     [
//       2, 2, 2, 2, 2, 2,
//       2, 2, 2, 2, 2, 2,===>SUM = 30
//       2, 2, 2
//     ],
//     [
//       2, 2, 2, 2,  2,
//       2, 2, 2, 2, 12 ===>SUM = 30
//     ],
//     [ 2, 2, 2, 12, 12 ] ===>SUM = 30
//   ]
const n = 30;
const val = 2;

const result = function solution (n,val){
    const num =  n;
    let result = [];
    for (let i = 0; i < num; i++) {
        let x = i.toString();
        let sum = 0;
        if(x[x.length - 1] == val){
            while (sum <= 30) {
                sum = sum + i ;
                result.push(i);
            }
        }
    }
    console.log("==POSSIBLE ARRAY===",result);
    let finalAns = [];
    function calculate(result,num){
        for (let i = 0; i < result.length; i++) {
            let ans = [];
            let sum = result[i]; //4
            ans.push(result[i]); //ans = [4]
            if(sum == num){
                console.log(`${i}`,ans);
                finalAns.push([...ans]);
                // return; 
            }
        for (let j = i + 1;  j <result.length; j++) {
            sum = sum + result[j]; // 8
            ans.push(result[j]); //[4,4]
            if(sum == num){
                console.log(`${i}`,ans);
                finalAns.push([...ans]);
                // return;
            }
        }
        }
    }
    const res = calculate(result,num);
    return finalAns;

}(n, val.toString());

console.log(result);
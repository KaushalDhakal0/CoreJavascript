// function mergeSortedArrays(list1, list2) {
//     return list1.concat(list2).sort();
// }
// console.log(mergeSortedArrays([1, 2, 4], [1, 3, 4]));

// write a poolyfill for Array.sort();

const customSort = arr =>{
if(arr.length < 2) return arr;
    let sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        const currentNumber = arr[i];
        while(sortedArray[j] < currentNumber){
            j++;
        }
        sortedArray.splice(j,0,currentNumber);
    }
    return sortedArray;
}



console.log(customSort([4,5,6,2,3,1]));

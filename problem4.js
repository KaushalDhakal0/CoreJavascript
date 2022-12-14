//Longest Common Prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function(strs) {
    if(strs.length < 0 ) "";

    let commonPrefix = "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    // console.log(first,last);
    for(let i = 0; i < first.length ; i++){
        if(first[i] === last[i]){
            commonPrefix += first[i];
        }else{
            break;
        }
        
    }
    return commonPrefix;
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
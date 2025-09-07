//1.
let arr = ['baby', 3, 'you', '&', 'ME'];
//2.
console.log(arr.length);
// 3.
console.log(arr[0]);
// 4.
console.log(arr[arr.length-1]);
// 5.
let arr2 = arr.push("name", "pleum")
console.log(arr);
//7. shrink array with any operations
arr.pop()
console.log(arr.length);
//8. apply spread on string variable
let str = "My freind";
const strch=[...str]
console.log(strch);
// 9
function Test(x){
    return x
}
function Test2(x){
    return x + 50
}
console.log(Test(Test2)(50))
// 10
function sumNumber(...a){
    let result = 0
    for(i = 0; i < arguments.length; i++){
        result = result + a[i]
    }
    return result
}
console.log(sumNumber(1,3,5,7,8,));
// 11.
function dosom(greet = 'hibaby',someone='babe',firstsent){
    return `${greet},${someone},${firstsent}`
}
console.log()
console.log('abc')
console.log('abc','edf')
console.log('abc','edf','eiei')
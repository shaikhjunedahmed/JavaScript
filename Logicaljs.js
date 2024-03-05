// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         console.log("i......",i)
//         for (let j = 0; j < n - i - 1; j++) {
//             console.log("n......",n)
//             // Swap if the element found is greater than the next element
//             if (arr[j] > arr[j + 1]) {
//                 // Swap arr[j] and arr[j+1]
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// console.log("Original array:", numbers);
// console.log("Sorted array (using bubble sort):", bubbleSort(numbers));




// capitalize the first latter of each string
// let str="hello juned how are you"
//  function capitalize(str) {
//     let res=str.split(" ")
//     let x=[]
//     for(let i=0;i<res.length;i++){
//         x[i]=res[i].charAt(0).toUpperCase() +res[i].slice(1)
//     }
//     return x
// }
// console.log(capitalize(str))
// function capitalize(str){
// let res =str.split(" ").map((ele,index)=>{
//   return ele.charAt(0).toUpperCase() + ele.slice(1)
// })
// return res
// }
// function capitalize(str){
// let output=str.split(" ")
// for(let i=0; i<output.length;i++){
//     output[i]=output[i].charAt(0).toUpperCase()+output[i].slice(1)
// }
// return output
// }

// console.log(capitalize(str))

let number=[1,2,3,4,2,3,2,6,7,1,7]

// function duplicate(num){
//     let dup=[]
//    num.map((ele,index,arr)=>{
//    if (arr.indexOf(ele)==index){
//     dup.push(ele)
//    }
//    })
//    return dup
// }
// function duplicate(num){
//     let uniqe=[]
//     duplicate=[]
// for(let i=0;i<num.length;i++){
//     if(num.indexOf(num[i])==i){
//   uniqe.push(num[i])
//     }
//         else if(num.indexOf(num[i])!==i){
//             if(!duplicate.includes(num[i])){
//                 duplicate.push(num[i])
//             }
              
//     }
// }
// return {
//     uniqe ,duplicate
// }
// }
// function duplicate(num){
//     let uniqe=[]
//     let duplicate=[]
// for(i=0;i<num.length;i++){
//     if(num.indexOf(num[i])==i){
// uniqe.push(num[i])
//     }
//     else if(num.indexOf(num[i])!==i){
//         if(!duplicate.includes(num[i])){
//             duplicate.push(num[i])
//         }
//     }
// }
// return {uniqe,duplicate}
// }
// console.log(duplicate(number))
// let ans=duplicate(number)
// console.log(ans.duplicate)
// let str="hello juned how are you"
// function capitalize(str){
//     let output=[]
//     // let output
// let res=str.split(" ")
// for(i=0;i<res.length;i++){
//   output.push(res[i].charAt(0).toUpperCase() + res[i].slice(1))
// // res[i]=res[i].charAt(0).toUpperCase() + res[i].slice(1)
// }
// return output
// }
// console.log(capitalize(str))

//.......................... Occurance of Character...number........................
// let str="hello juned how are you"
// function Occurance(str){
// let occ={}
// let strToarr=str.split("")
// for(i=0;i<str.length;i++){
//     if (strToarr[i] === " ") {
//         continue;
//     }

// if(occ[strToarr[i]]){
//     occ[strToarr[i]]=occ[strToarr[i]]+1
// }
// else{
//     occ[strToarr[i]]=1
// }
// }
// return occ
// }
// // console.log(Occurance(str))


// Write a function that takes an array of objects and a key, and returns 
// a new array sorted based on the values of that key in ascending order.
// const arrayOfObjects = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
// ];
// function arrSorted(arrayOfObjects){
//     allkeys=[]
//     arrayOfObjects.forEach((element) => {
//         Object.keys(element).forEach((k)=>{
//             // console.log("k",k)
//             allkeys.push(k)
//         })

        
//         arrayOfObjects.sort((a,b)=>{
//             return  a.age-b.age    
//         });
//     })
//    return arrayOfObjects
// }
// console.log(arrSorted(arrayOfObjects))
// Write a JavaScript program to find the largest element in a nested array.

// const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9, [10, 11, 12]]];

// function largest_element(nestedArray){
//     let largest=0
//     for(i=0;i<nestedArray.length;i++){
//         arr(nestedArray[i])
//         }
//    function arr(res){
//    res.forEach((element,index) => {
//     if(element>largest){
//         largest=element
//         x=largest
//     }
//     if(Array.isArray(element)){
//         element.forEach((ele)=>{
//             if(ele>largest){
//                 largest=ele
//             }
//         })
//     }
//    });
//    }
//    return largest
// }
// console.log(largest_element(nestedArray))

// Write a recursive function to calculate the factorial of a given number.

// let num=5
// function recursive(n){
//     console.log(n,"...n")
// if(n==1 ||n==0){
//     return 1
// }
//     return n*recursive(n-1)


// }
// console.log(recursive(num))

// Write a function that checks if a given string is a palindrome,
//  considering only alphanumeric characters and ignoring case.

// let str="madam"
// function isPalindrom(str){
// let res=str.split("").reverse().join("")
// return res
// }
// function isPalindrom(str){
//     let reverse=""
// for(let i=str.length-1;i>=0;i--){
//     console.log("kk",str[i])
//      reverse =reverse+str[i]
// }
// if(str===reverse){
//     return `${str} is palindrom`
// }
// else{
//     return `${str} is not a palindrom`
// }
// }
// console.log(isPalindrom(str))

// Implement a function that flattens a nested array in JavaScript,
//  converting it into a single-level array.

// const nestedArray = [1, [2, [3, 4], 5], 6];
// function flattens(nestedArray){
//     arr=[]
//     nestedArray.forEach(element => {
//         if (!Array.isArray(element)){
//          arr.push(element)
//         }
//         else if (Array.isArray(element)){
//             arr=arr.concat(flattens(element))
//         }
//     })
//     return arr
// }
// console.log(flattens(nestedArray))


// Write a function that determines 
// if two strings are anagrams of each other

// const string1 = "listen";
// const string2 = "silent";

// function anagrams(str1,str2){
// let string1=str1.split("").sort().join("")
// let string2=str2.split("").sort().join("")
// if(string1===string2){
//     return `${str1} is anagrams of  ${str2}`
// }
// else{
//     return `${str1} is not anagrams of ${str2}`
// }
// }
// console.log(anagrams(string1,string2))

// Given an array of numbers, write a function to
//  find the largest and smallest numbers in the array.

// let arr=[5,8,4,9,3,8,2,16,12,1]

// function largest_smallest(arr){
//     let smallest
//     let largest
// let sort=arr.sort((a,b)=>{
//     return a-b
// })
// smallest=sort[0]
// largest=sort[arr.length-1]
// return {
//     smallest,largest
// }
// }
// function largest_smallest(arr){
//     let largest=0
//     let smallest=arr[0]
// for(let i=0;i<arr.length;i++){
// if(arr[i]>largest){
//     largest=arr[i]
// }
// else if(arr[i]<smallest){
//     smallest=arr[i]
// }
// }
// return {largest,smallest}
// }

// console.log(largest_smallest(arr))

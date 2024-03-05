// let multiply=function (x){
//     return function(z,y){
//   return (x*y*z)
//     }
// }
// const multyply3=multiply(5)
// console.log(multyply3(3,3))

// ........................// Recursion Function // ........................//


// function Recursion (num){
//   let count=num
//   console.log(count)
//   if(num>0){
// count=num-1
// return Recursion(count)
//   }
// }
// Recursion(5)

// function factor(num){
//   if(num===1 ){
//     return 1
//   }
//   else if(num===0){
//     return 0
//   }
//   else{
//     return(num*factor(num-1))
//   }
// }
// let num=0
// console.log(factor(num))

// ........................// fabinicia// ........................//

function outer(num){
function fabinicia(n){
if(n===1 | n===2){
  return 1
}
else{
  return (fabinicia(n-2)+fabinicia(n-1))
}
}
let result
for(i=0;i<num;num--){
  console.log(fabinicia(num))
 return result=fabinicia(num)
}
}
// console.log(fabinicia(num))
console.log(outer(3))
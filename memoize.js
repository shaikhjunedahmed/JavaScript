// function calculteSum(num){
// let sum=0
// for(let i=0;i<=num;i++){
//      sum=sum+i
// }
// return sum
// }
// console.log(calculteSum(5))


// function memoize(func){
//    cache={}
// return function(...arg){
//     let x=arg[0]
//   if(x in cache){
//     return cache[x]
//   }
//   else{
//     let result=func(x)
//     cache[x]=result
//     return result
//   }
// }
// }
// let cal=memoize(calculteSum)
// console.time()
// console.log(cal(5,5))
// console.timeEnd()
////////////////////set Interval Clear Interval//////////////////////////
// let counts=(num)=>{
// let count=0
// let x=setInterval(()=>{  
//     if(count<num){
//         count=count+1
//         console.log(count)
//     }
//     else{
//         clearInterval(x)
//     }
// })
// }
// counts(5)
// let obj1={name:"juned"}
// let {name}=obj1
// console(name)
// let obj2=Object.assign({},obj1)
//  obj2={name:"suf"}
// console.log(obj1,obj2)
// var a=12
this.a=10
let a=20;
let obj={
    a:15,
    method:function(){
         function x(){
            console.log(this.a)
        }
        x()
    }
}
obj.method()


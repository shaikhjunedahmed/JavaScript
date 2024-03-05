// let p1= new Promise((res,rej)=>{
// setTimeout(()=>rej("fail"),2000)
// })
// let p2= new Promise((res,rej)=>{
//     setTimeout(()=>res("p2 success"),3000)
//     })
// let p3= new Promise((res,rej)=>{
//     setTimeout(()=>res("p3 success"),4000)
//     })
// //    Promise.all all api should be sucessfull
//     Promise.all([p1,p2,p3])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))

let p1=new Promise((resolve,reject)=>{
    let error=false
    if(!error){
        setTimeout(()=>{
            resolve("P1 Resolved")
        },3000)
       
    }
    else{
        reject("Error in P1")
    }
})
let p2=new Promise((resolve,reject)=>{
    let error=false
    if(!error){
        setTimeout(()=>{
            resolve("P2 Resolved")
        },2000)
    }
    else{
        reject("Error in P2")
    }
})
let p3=new Promise((resolve,reject)=>{
    let error=true
    if(!error){
        resolve("P3 Resolved")
    }
    else{
        reject("Error in P3")
    }
})
Promise.any([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
// const data=fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// console.log(data)
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))


// let count =false
// let countvalue=new Promise((resolve,reject)=>{
//     if (count){
//         resolve("successfull")
//     }
//     else{
//         reject("somthing went wrong")
//     }
// })
// console.log(countvalue)
// countvalue.then((res)=>console.log(res)).catch((err)=>console.log(err))

// function api1(){
//     const api1 =new Promise((resolve,rej)=>{
//         let data={name:"abc",id:12}
//         if (data){
//           resolve("api1 data ")
//         }
//         else{
//             rej("went wromg api1")
//         }
//     })
//     return api1
// }
// function api2(a){
//     const api2 =new Promise((res,rej)=>{
//         data2={name:"qq",id:11}
//         if (data2){
//             return res("api2")
//         }
//         else{
//            return rej("somthing went ap2i2")
//         }
//     })
//     return api2
// }
// api1().then((res)=>{
//    console.log(res)
// }).then(api2().then((res)=>{
//     console.log(res)
// })).catch((err)=>{
//     console.log(err)
// })


function api1(){
    let promise =new Promise((resolve,rej)=>{
        let data ={name:"juned",id:12}
        if (data){
        return setTimeout(()=>resolve(data.name),5000) 
        }
        else{
            return rej("somthing went wrong api1")
        }
    }) 
    return promise
}
function api2(){
    let promise=new Promise((resolve,rej)=>{
        let data ={name:"ahmed",id:12}
        if (data){
            return resolve(data.name)
        }
        else{
            return rej("somthing went wrong api2")
        }
    })
    return promise
   
}

api1().then((res)=>console.log(res)).catch((err)=>console.log(err))
.then(()=>api2()
.then((resp)=>console.log(resp)))
.catch((err)=>console.log(err))

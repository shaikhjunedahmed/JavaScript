// function registor(cb){
//     setTimeout(() => {
//         console.log("registor")
//         cb()
//     }, 5000);
// }
// function sendEmail(cb){
//     setTimeout(()=>{
//         console.log("send Email")
//         cb()
//     },2000)
// }
// function login(cb){
//     setTimeout(()=>{
//         console.log("Login")
//         cb()
//     },4000)
// }
// function setUserData(cb){
//     setTimeout(() => {
//         console.log("Set User Data")
//         cb()
//     }, 3000);
// }
// function showUserData(cb){
//     setTimeout(() => {
//         console.log("Show data")
//         // cb()
//     }, 1000);
// }
// registor(function(){
//     sendEmail(function(){
//         login(function(){
//             setUserData(function(){
//                 showUserData()
//             })
//         })
//     })
// })


// ..................Promises............................//

// function registor(){
//    let registor =false
//     let promise =new Promise ((resolve,rej)=>{
//         if (registor){
//         setTimeout(()=>{
//             return resolve("registor successfull")
//         },3000)
//         }
//         else{
//             return rej("somthing went wrong")
//         }
//     })
//     return promise
// }
// function sendEmail(){
//     let promise =new Promise((resolve,rej)=>{
//         let varifiedEmail=false
//         if(varifiedEmail){
//             return resolve("email varified sucessfully ")
//         }
//         else {
//             return rej ("somthing went wrong ")
//         }
//     })
//     return promise
// }

// function login (){
//     let promise= new Promise((resolve,rej)=>{
//         let x=false
//         if (x){
//       resolve("login")
//         }
//         else{
//             rej("xxxxx")
//         }
//     })
//     return promise
// }
//  registor().then((res)=>console.log(res))
//  .then(()=>sendEmail().then((res)=>console.log(res)))
//  .catch((err)=>console.log(err))
// registor()
// .then((res)=>console.log(res))
// .then(sendEmail)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// async function authenticate(){
// try {
//     const response=await registor(); 
//     console.log("response",response)
//     const res2=await sendEmail();
//     console.log("respons2",res2)
//     const res3=await login()
//     console.log("respons3",res3)
// } catch (error) {
//     console.log("err",error)
// }
// }
// authenticate()

function registor(){
   let promise= new Promise((resolve,reject)=>{
        let error=false
        if (!error){
            setTimeout(()=>{
                resolve("registor successfully")
            },1000)
        }
        else{
            reject( "something went wrong")
        }
    })
    return promise
}
function sendEmail(){
   let promise= new Promise((resolve,reject)=>{
        let error=true
        if (!error){
            setTimeout(()=>{
                resolve("Email successfully")
            },3000)
        }
        else{
            reject("something went wrong")
        }
    })
    return promise
}
function Login(){
   let promise= new Promise((resolve,reject)=>{
        let error=false
        if (!error){
            setTimeout(()=>{
                resolve("Login successfully")
            },1000)
        }
        else{
            reject(("something went wrong"))
        }
    })
    return promise
}

// registor()
// .then((res)=>console.log(res))
// .then((res)=>sendEmail(res))
// .then((res)=>console.log(res))
// .then(Login)
// .then((res)=> console.log(res))

 async function authenticat(){
  try {
    const res= await registor()
    console.log(res)
    const res2= await sendEmail()
    console.log(res2)
    const res3= await Login()
    console.log(res3)
  } catch (error) {
    console.log(error)
  }
}
authenticat()
console.log("4")
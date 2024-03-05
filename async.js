const URL='https://jsonplaceholder.typicode.com/users'

// async function myFunction(){
//     let fetchData= await fetch(URL).then((res)=>{
//         res.json().then((resl)=>console.log(resl))
//     })
// }

async function myFunction(){
    let fetchData=await fetch(URL)
    let data=await fetchData.json()
    console.log(data)
}

myFunction()
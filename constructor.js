// In JavaScript, a ConstructorFunc function is used to create objects.
// To create an object from a Constructor function, we use the new keyword.
// Objects of the same type are created by calling the ConstructorFunc function with the new keyword:

//   function constructorFunc (firstName, lastName,age)  {
//     this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age;
// }

// we can set prototype in above function

// Since JavaScript functions are objects, they can have properties.
// A particularly important property that each function has is called prototype.
// prototype, which is itself an object, inherits from its parent's prototype, 
// which inherits from its parent's prototype, and and so on.

// constructorFunc.prototype.about=function() { 
//     return (`${this.firstName},${this.lastName}`)
// }

// let person1=new constructorFunc("juned ","ahmed","25")
// let person2=new constructorFunc("sam ","parker","22")
// person1.about()
// console.log(person2)

function bankAccount(fname,lname,balance=0){
this.name=fname
this.lname=lname
this.balance=balance
this.about= function(){
  console.log(this.name,this.lname,this.balance)
}
}
let piter=new bankAccount("piter","parker",1000)
let juned=new bankAccount("juned","ahmed",3000)
// console.log(piter.lname)
// piter.about()


/////////////////////////////////ProtoType/////////////////////////////////////


bankAccount.prototype.deposit=function(amout){
  this.balance=this.balance+amout
  return this.balance
}
console.log(piter.deposit(300))
console.log(juned.deposit(300))

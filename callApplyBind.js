function fullName(HomeTown){
console.log(`${this.fname} ${this.lName} ${HomeTown}`)
}
let person1={
    fname:"juned",
    lName:"shaikh"
}
let person2={
    fname:"sam",
    lName:"starc"
}
// fullName.call(person1,"hingoli")
// fullName.call(person2,"nanded")
// fullName.apply(person1,["hingoli"])
// fullName.apply(person2,["mumbai"])
let x=fullName.bind(person1,"hydrabad")
x()
console.log("3")
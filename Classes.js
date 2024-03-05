// clasess
// class BankAccount {

//   #balance;
//   constructor(accNo, holderName, balance) {
//     this.accNo = accNo;
//     this.holderName = holderName;
//     this.#balance = balance;
//   }
//  deposit(amount) {
//     this.#balance += amount
// }
// widrow(amount){
// if (amount<=this.#balance){
//     this.#balance -= amount
// }
// else{
//     console.log("incaficiant balance")
// }
// }
// }

// const juned =new BankAccount("1234","shaikh juned",10000)
// juned.deposit(1000)
// console.log(juned)
// juned.widrow(2000)
// juned.holderName="kkk"
// console.log(juned)


// ...............



// function BankAccount(accountNumber, accountHolderName, balance) {
//     let _accountNumber = accountNumber;
//     let _accountHolderName = accountHolderName;
//     let _balance = balance;

//     function showAccountDetails() {
//         console.log(`Account Number: ${_accountNumber}`);
//         console.log(`Account Holder Name: ${_accountHolderName}`);
//         console.log(`Balance: ${_balance}`);
//     }

//     function deposit(amount) {
//         _balance += amount;
//         showAccountDetails();
//     }

//     function withdraw(amount) {
//         if (_balance >= amount) {
//             _balance -= amount;
//             showAccountDetails();
//         } else {
//             console.log("Insufficient Balance");
//         }
//     }

//     return {
//         deposit: deposit,
//         withdraw: withdraw
//     };
// }

// let myBankAccount = BankAccount("123456", "John Doe", 1000);

// myBankAccount.deposit(500);
// // Output: Account Number: 123456 Account Holder Name:
// //John Doe Balance: 1500

// myBankAccount.withdraw(2000); // Output: Insufficient Balance



// class BankAccount{
//     constructor(fname,balance){
// this.name=fname
// this.balance=balance
//     }
//     witdrow(amount){
//         console.log(this.balance=this.balance-amount)
//     }
//     deposit(amount){
//         console.log(this.balance=this.balance+amount)
//     }
// }

// person1=new BankAccount("jhon",2000)
// person1.witdrow(100)
// person2=new BankAccount("tony",2000)
// person2.deposit(1000)
// class PersnalAcoount extends BankAccount{
//     constructor(fname,balance){
//         super(fname,balance)

//     }
    
// }
// const juned=new PersnalAcoount("juned",5000)
// juned.witdrow(1000)



// function BankAccount(name,balance){
//     this.name=name;
//     this.balance=balance
// }

// let person1= new BankAccount("juned",4000)
// BankAccount.prototype.about=function(){
//     console.log(this.name,this.balance)
// }
// person1.about()

// class student {
//     constructor(name,age,id){
//         this.fname=name;
//         this.age=age;
//         this.id=id
//         this.about=function(){
//             console.log(this.fname, this.age,this.id)
//                 }
//     }
//     about(){
// console.log(`student name  ${this.fname},and age is ${this.age},and id ${this.id}`)
//     }
// }
// const mahesh=new student("mahesh",16,1)
// console.log(mahesh.fname)
// mahesh.about()

function Students(name,age,id){
    this.name=name
    this.age=age
    this.id=id
}
Students.prototype.about=function (){
    console.log(this.name,this.age,this.id)
}
const student1=new Students("juned",20,1)
// console.log(student1)
student1.about()
// console.log("2")
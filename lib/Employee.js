// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports=Employee

// name
// id
// email
// geName
// getId()
// getEmail()
// getRole() // Returns 'Employee'

//es6 -constructor emcScript 6 which is javascript 6
// class Animal{
//     constructor(name,haircolor){
//         this.name=name
//         this.haircolor=haircolor
//     }
// }
//es5 constuctor- emcaScript 5 which is javacript 5
// function Animal(name,haircolor){
//     this.name=name
//     this.haircolor=haircolor
// }



// var dog= new Animal("wolfy","brown")
// var cat= new Animal("meow","black")


// var dog={
//     name:"wolfy",
//     haircolor:"brown"
// }

// var cat={
//     name:"meow",
//     haircolor:"black"
// }


// var snake={
//     name:"meow",
//     haircolor:"black"
// }



// var lion={
//     name:"meow",
//     haircolor:"black"
// }
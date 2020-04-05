class Parent{
    constructor(){
        this.fatherName = "Rehman"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}


const baby = new Child("safik");
const baby2 = new Child("Mew");

console.log(baby.getFullName());
console.log(baby2.getFullName());
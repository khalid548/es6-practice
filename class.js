class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school"
    }
}

const student1 = new student(12, "shahed");
const student2 = new student(10, "jerin");
console.log(student1, student2);
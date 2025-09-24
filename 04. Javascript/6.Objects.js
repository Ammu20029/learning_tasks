let student = {
    firstname: "Sam",
    lastname: "Reddy",
    age: 16,
    course: "Mechanics",

    fullname: function() {
        return this.firstname + " " + this.lastname;
    },

    
    changeCourse: function(newCourse) {
        this.course = newCourse;
        console.log(`Course updated to: ${this.course}`);
    },

    
    updateAge: function(newAge) {
        this.age = newAge;
        console.log(`Age updated to: ${this.age}`);
    }
};

console.log(student.course);
console.log(student["age"]);  

student.place = "Vizag";
console.log(student);

student.updateAge(24);  
console.log(student);

student.changeCourse("Robotics");

delete student.place;
console.log(student);

console.log(student.fullname());  

const { firstname, lastname, age } = student;
console.log(firstname, lastname, age);  


const student2 = {
    firstname: "Anamika",
    lastname: "Mehtha",
};


Object.assign(student, student2);
console.log(student);

const keys_ex = Object.keys(student);
console.log(keys_ex);  

let values_ex = Object.values(student);
console.log(values_ex);  

const fruits = { Bananas: 300, Oranges: 500, Apples: 800 };
const entries_ex = new Map(Object.entries(fruits));
console.log(entries_ex);  

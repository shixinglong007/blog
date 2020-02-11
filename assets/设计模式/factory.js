
class Teacher {
    sayHi(){
        console.log("hello i'm Teacher");
    }
}

class Principal {
    sayHi() {
        console.log("Hello i'm Principal");
    }
}

class Student {
    sayHi() {
        console.log("Hello i'm Student");
    }
}


const userFactory = (duty, ...params) => {
    if (duty === "Principal") {
        return new Principal(...params);
    }
    if (duty === "Teacher") {
        return new Teacher(...params);
    }
    if (duty === "Student") {
        return new Student(...params);
    }
}

let principal = userFactory("Principal");
let teacher = userFactory("Teacher");
let student = userFactory("Student");

principal.sayHi();
// hello i'm Principal
teacher.sayHi();
// hello i'm Techer
student.sayHi();
// hello i'm Student
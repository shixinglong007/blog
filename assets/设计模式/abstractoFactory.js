// 先准备好实体类
class Teacher {
    sayHi() {
        console.log("hello i'm Teacher");
    }
}
class Student {
    sayHi() {
        console.log("hello i'm Student");
    }
}
class Cat {
    sayHi() {
        console.log("Meow")
    }
}
class Dog {
    sayHi() {
        console.log("汪汪")
    }
}

// 抽象工厂
class AbstractoFactory{
    getPersion() {
        throw new Error("子类请求实现接口")
    }
    getAnimal() {
        throw new Error("子类请求实现接口")
    }
}
// 接下来实现抽象工厂

class PersionFactory {
    getPersion(duty, ...params) {
        duty = duty.toLocaleLowerCase();
        if (duty === "teacher") {
            return new Teacher(...params);
        }
        if (duty === "student") {
            return new Student(...params);
        }
    }
    getAnimal() {
        return null;
    }
}
// 小动物
class AnimalFactory {
    getPersion() {
        return null;
    }
    getAnimal(type, ...params) {
        type = type.toLocaleLowserCase();
        switch(type) {
            case "cat":
                return new Cat();
            case "dog":
                return new Dog();
        }
    }
}

// 超级工厂

class BigFactory {
    constructor(choice) {
        choice = choice.toLocaleLowerCase();
        switch(choice) {
            case "persion": 
                return new PersionFactory();
            case "animal":
                return new AnimalFactory();
        }
    }
}

// 测试一把 --------------

// 创建 “人类” 工厂
const persionFactory = new BigFactory("persion");
const teacher = persionFactory.getPerson("teacher");
const student = persionFactory.getPerson("student");

// 输出测试
teacher.sayHi();
// hello i'm Teacher
student.sayHi();
// hello i'm Student


// 创建 小动物工厂
const animalFactory = new BigFactory("animal");
const cat = animalFactory.getAnimal("cat");
const dog = animalFactory.getAnimal("dog");

// 输出测试
cat.sayHi();
// Meow
dog.sayHi();
// 汪汪
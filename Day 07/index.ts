// 🧱 1. Basic Class Structure
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const user1 = new Person("Waqar", 24);
user1.greet(); // Hi, my name is Waqar


// 🔐 2. Access Modifiers 

// Modifier	                Meaning
// public	                Can be accessed anywhere (default)
// private	                Only inside the class
// protected	            Inside the class and subclasses

class Car {
    brand: string;  //khi sy be acces kr skta hu
    private speed: number; // only inside the class
    protected fuel: number; // inside the class and subclasses

    // constructor is a special method for creating and initializing an object
    constructor(brand: string, speed: number, fuel: number) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }

    showSpeed() {
        console.log(`Speed: ${this.speed}`);
    }
}

// 🔁 Summary Table:

// Modifier	Access from Object	Access from Class Method	Access from Subclass
// public	✅ Yes	✅ Yes	✅ Yes
// private	❌ No	✅ Yes	❌ No
// protected	❌ No	✅ Yes	✅ Yes

// 🧬 3. Inheritance (extends)

class Animal {
    move() {
        console.log("Animal is moving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking 🐶");
    }
}

const myDog = new Dog();
myDog.move();  // Inherited
myDog.bark();  // Own method


// 🔁 4. readonly and static

class AppConfig {
    readonly appName: string = "Creative Brain";
    static version: string = "1.0.0";

    getAppInfo() {
        return `${this.appName} v${AppConfig.version}`;
    }
}

// readonly: can't change after initialization

// static: shared by all instances (like Math.random())

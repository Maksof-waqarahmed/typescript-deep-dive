// Class & Object

// Class: Blueprint
// Object: Real instance

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p1 = new Person("Waqar", 25, "Karachi");
p1.greet(); // Hello, my name is Waqar

//  There are Main Four Pillar of OOP.

// ✅ 1. Encapsulation

// Properties ko hide ya control karna using private, public, protected

// Modifier	Accessible from...
// public	            Everywhere (default)
// private	            Within same class only
// protected	        Class + subclasses only

class BankAccount {
    private balance: number = 1000;
    public accountNumber: string = "1234567890"; //default public
    protected accountHolderName: string = "Waqar Ahmed"; //default public

    getBalance(): number {
        return this.balance;
    }

    deposite(amount: number): void {
        this.balance += amount;
    }

}

class AccountUser extends BankAccount {
    getAccountHolderName(): string {
        return this.accountHolderName; // Accessing protected property
    }
}

const acc = new BankAccount();
console.log(acc.getBalance()); // 1000
// console.log(acc.balance);   // ❌ Error: private property
acc.deposite(500);
console.log(acc.getBalance()); // 1500

const user = new AccountUser();
console.log(user.getAccountHolderName()); // Waqar Ahmed
// console.log(user.balance); // ❌ Error: private property
// console.log(user.accountHolderName); // ❌ Error: protected property

// ✅ 2. Abstraction
// Sirf zaroori details dikhana, implementation chhupana
// abstract class ya interface ka use

abstract class Shape {
    abstract area(): number; // Abstract method
    abstract perimeter(): number; // Abstract method
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const c = new Circle(5);
console.log(c.area()); // Output: 78.54...
console.log(c.perimeter()); // Output: 31.42...

// ✅ 3. Inheritance
// Ek class doosri se properties/methods inherit karti hai

class Animal {
    move() {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const d = new Dog();
d.move(); // ✅ Inherited
d.bark(); // ✅ Own method

// ✅ 5. Polymorphism
// Same method, different behavior
// (Overriding ya Overloading)

// a) Method Overriding:

class Parent {
    speak() {
        console.log("Parent speaks");
    }
}

class Child extends Parent {
    speak() {
        console.log("Child speaks");
    }
}

const child = new Child();
child.speak(); // Output: Child speaks

// b) Method Overloading 

class MathUtils {
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        if (c === undefined) {
            return a + b;
        }
        return a + b + c;
    }
}


// ✅ 8. Static vs Instance
// static: Class-level (shared)

// Normal: Instance-level (per object)

class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }

    static getCount() {
        return Counter.count;
    }
}

new Counter();
new Counter();
console.log(Counter.getCount()); // 2



  

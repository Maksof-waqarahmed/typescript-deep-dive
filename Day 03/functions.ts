/*
🧪 Challenge (Day 3)
Create a file called functions.ts and:

Write a function divide(a, b) that returns a number. Add type checks.

Create a function printUser(name, email, age?) that prints user info. age is optional.

Create an arrow function square(n) that returns the square of a number.

Make a default parameter example: greetUser(name = "Guest")
*/

const divide = (a: number, b: number): number => a / b;
console.log(divide(10, 2)); //5

const printUser = (name: string, email: string, age?: number): void => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
};

const square = (a: number): number => a * a;

const greetUser = (name: "Guest"): void => console.log(`User is ${name}`);


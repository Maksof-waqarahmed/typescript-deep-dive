// 🧠 1. Basic Function with Types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Waqar"));

// 🔁 2. Function with Multiple Parameters
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 10)); // 15


//   ❓ 3. Optional Parameters
// Use ? to make a parameter optional.
function welcome(name: string, age?: number): string {
    return age
        ? `Welcome, ${name}. Age: ${age}`
        : `Welcome, ${name}`;
}

console.log(welcome("Ali"));
console.log(welcome("Ali", 20));


// 🛠️ 4. Default Parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15

// ⚡ 5. Arrow Functions with Types
const subtract = (a: number, b: number): number => {
    return a - b;
};

console.log(subtract(10, 3));

// You can also write it shorter:
const double = (x: number): number => x * 2;

// 🔍 6. Anonymous Function
const show = function (message: string): void {
    console.log("Message:", message);
};

show("TypeScript is cool!");



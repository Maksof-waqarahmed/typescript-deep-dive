// 🟨 1. String, Number, Boolean
let username: string = "Waqar";
let age: number = 24;
let isLoggedIn: boolean = true;

console.log(`Hello ${username}, Age: ${age}, Logged In: ${isLoggedIn}`);

// 🟦 2. Array
let fruits: string[] = ["apple", "banana", "mango"];
let scores: number[] = [90, 85, 100];
let isPassed: boolean[] = [true, false, true];
let mixedArray: (string | number)[] = ["apple", 1, "banana", 2, 3, "mango"];

// ✅ Alternate way:
let colors: Array<string> = ["red", "green"];

// 🟩 3. Tuple
// Fixed number of values with fixed types and order.
let person: [string, number] = ["Waqar", 24];
// person = [24, "Waqar"]; ❌ wrong order
// person = ["Waqar", 24, "extra"]; ❌ wrong number of values
// person = ["Waqar"]; ❌ wrong number of values

// 🔄 4. Any
// Use when you're not sure about the type. But avoid it unless needed.
let something: any = "Hello";
something = 123;
something = true;
something = ["apple", "banana"];
something = { name: "Waqar" };

// 🟪 5. Void (for functions)
// Used when function doesn’t return anything.
function greet(): void {
    console.log("Hello, TypeScript!");
}
greet(); // Output: Hello, TypeScript!
// let result: void = greet(); // ❌ Error: Type 'void' is not assignable to type 'string'.   

// ⚫ 6. Null / Undefined
// Null and undefined are subtypes of all types.
let u: undefined = undefined;
let n: null = null;

// 🔥 7. Never (just a peek)
// Used when a function never returns (infinite loop or throws error)
function throwError(message: string): never {
    throw new Error(message);
}

// 🟪 1. Union Types
// Allow a variable to have more than one type.

let value: string | number;

value = "Hello";
value = 123;

// Used a lot with function params:
function printId(id: number | string) {
    console.log("ID:", id);
}

// 🟨 2. Literal Types
// Restrict to exact string/number values.

type Status = "success" | "error" | "loading";

let state: Status = "success"; // ✅
state = "loading";             // ✅
// state = "done"; ❌ Error

// Great for buttons, states, status values, roles, etc.

// 🎯 3. Type Narrowing
// We use narrowing to check which type is being used at runtime.

// ✅ Using typeof
function showData(data: string | number) {
    if (typeof data === "string") {
        console.log("String length:", data.length);
    } else {
        console.log("Number squared:", data * data);
    }
}

// 🟦 Using in
type Admin = { role: "admin"; accessLevel: number };
type User = { role: "user"; username: string };

function checkAccess(person: Admin | User) {
    if ("accessLevel" in person) {
        console.log("Admin access:", person.accessLevel);
    } else {
        console.log("User:", person.username);
    }
}
checkAccess({ role: "admin", accessLevel: 5 })
checkAccess({ role: "user", username: "Waqar" })

// 🧱 Using instanceof
// Useful with classes:
class Car {
    drive(): void {
        console.log("Driving car...");
    }
}

class Bike {
    ride(): void {
        console.log("Riding bike...");
    }
}

function useVehicle(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

// ✨ 4. Function Overloading (Quick Peek)

function greet(person: string): string;
function greet(person: string[]): string;

function greet(person: string | string[]): string {
    if (Array.isArray(person)) {
        return `Hello ${person.join(", ")}`;
    } else {
        return `Hello ${person}`;
    }
}
greet(["Waqar", "Ali"]);
greet("Waqar");

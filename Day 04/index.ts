// 🟦 1. Object Type in TypeScript

let user: { name: string, age: number, email: string, isActive: boolean } = { name: "Waqar Ahmed", age: 22, email: "waqarahmed7861234@gmail.com", isActive: false }

// 🧱 2. Type Alias
// Use type to define a reusable shape: 

type User = {
    name: string,
    age: number,
    city: string,
    isAdmin: boolean
}

const teacher: User = {
    age: 22,
    city: "Karachi",
    isAdmin: false,
    name: "Waqar"
}

// 🧩 3. Interface 

interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

const laptop: Product = {
    title: "MacBook Pro",
    price: 2500,
    inStock: true
};

// 🔄 4. Interface vs Type

// Feature	            type	                        interface
// Extending	        ✅ Yes	                       ✅ Yes
// Unions	            ✅ Yes (`type A = B	            C`)
// Preferred for	    Complex types, unions	        Object shapes, class contracts

// 🧬 5. Extending Interfaces and Types 

// Interface Extending
interface Person {
    name: string,
    age: number,
    city: string
}

interface Employee extends Person {
    salary: number,
}

const emp: Employee = {
    name: "Waqar",
    age: 22,
    city: "Karachi",
    salary: 200000
}

// Type Alias Extending
type Car = {
    brand: string,
    model: number,
}

type ElectricCar = Car & {
    battery: number
}

const tesla: ElectricCar = {
    brand: "Tesla",
    battery: 100,
    model: 1996
};
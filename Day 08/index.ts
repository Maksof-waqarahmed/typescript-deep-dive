// 🔄 1. What are Generics?
// Generics = making your code flexible and type-safe.
// Instead of hardcoding types:
function identity<T>(value: T): T {
    return value;
}

identity<string>("Hello");  // returns "Hello"
identity<number>(123);      // returns 123
// The <T> is a placeholder (like a variable for a type).

// 📦 2. Generic Arrays & Functions
function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}

const nums = getFirstItem<number>([1, 2, 3]);   // 1
const names = getFirstItem<string>(["Ali", "Rana"]); // "Ali"
// Type-safe and reusable!


// 🏗️ 3. Generic Interfaces / Types
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const response1: ApiResponse<string> = {
    data: "Login successful",
    success: true,
};

const response2: ApiResponse<number[]> = {
    data: [10, 20, 30],
    success: true,
};
// Now your response type is totally flexible! 🔧

// 🚧 4. Generic Constraints (extends)
// Let’s allow only types that have certain properties:
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("Hello");     // ✅
getLength([1, 2, 3]);    // ✅
// getLength(123); ❌ Error - number doesn’t have length


//   You can also use multiple generic params:
function merge<A, B>(a: A, b: B): A & B {
    return { ...a, ...b };
}

// ⚙️ 5. Default Types in Generics
type Api<T = string> = {
    data: T;
    status: number;
};

const apiCall: Api = {
    data: "OK",
    status: 200,
};
//   If no type is passed, it defaults to string.
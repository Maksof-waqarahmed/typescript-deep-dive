/*
🧪 Challenge (Day 5)
Create a file called unions.ts and:

Create a function formatValue(val: number | string) that:

If number → squares it

If string → returns it in uppercase

Define a type Role with values "admin" | "editor" | "viewer" and assign one.

Create a function that accepts a User or Admin and uses in to print different data.
*/

const formatvalue = (val: number | string): string | number => {
    return typeof val === 'number' ? val * val : val.toUpperCase();
}

type Role = "admin" | "editor" | "viewer";

// const myRole: Role = "admin";

type User = {
    name: string;
    age: number;
}

type Admin = {
    name: string;
    age: number;
    accessLevel: number;
}

const printUserData = (person: User | Admin) => {
    if ("adminLevel" in person) {
        console.log(`Admin: ${person.name}, Level: ${person.adminLevel}`);
    } else {
        console.log(`User: ${person.name}`);
    }
};

printUserData({ age: 22, name: "Waqar" });
printUserData({ age: 22, name: "Waqar", accessLevel: 1 });
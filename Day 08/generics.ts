/*
🧪 Challenge (Day 8)
Create a file generics.ts and:

Write a generic function wrapInArray<T>(item: T): T[]

Create a generic interface Box<T> with fields item: T and quantity: number

Use extends to make a function logName<T extends { name: string }>(obj: T) that logs the name
*/

function wrapInArray<T>(item: T): T[] {
    return [item];
}

interface Box<T> {
    item: T;
    quantity: number;
}

function LogName<T extends { name: string }>(obj: T): void {
    console.log(obj.name);
}
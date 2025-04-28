/*
🧪 Your Challenge (Day 2)
Create a file types.ts and do the following:
Create a tuple student with name (string) and age (number).
Create an array languages that stores string values.
Write a function showDetails() that accepts a name and logged-in status, and logs them.
Use any type for a variable and assign a number, then a string to it.
*/

let student: [string, number] = ["Waqar", 24];

const languages: string[] = ["JavaScript", "TypeScript", "Python"];

const showDetails = (name: string, loggedIN: boolean): void => {
    console.log(`Name: ${name}, Logged In: ${loggedIN}`);
}

let anyType: any = 1;
anyType = "Hello";
anyType = true;

/*
🧪 Challenge (Day 4)
Create a file objects.ts and:

Create a type alias Student with name, age, enrolled(boolean).

Create an interface Course with title, duration, and instructor.

Create one object from each and log them.

Extend Student to add rollNumber and use it in a new object.
*/

type Student = {
    name: string,
    age: number,
    enrolled: boolean
}
type Univeristy_student = Student & {
    batch: string,
    std_id: string
}
const std: Univeristy_student = {
    age: 22,
    batch: "22F",
    enrolled: true,
    name: "Waqar",
    std_id: "***-22F-***"
}

interface Course {
    title: string,
    duration: number,
}

interface Instructor extends Course {
    name: string,
    age: number,
    salary: number,
    total_batches: number
}

const mentor: Instructor = {
    age: 22,
    duration: 4,
    name: "Waqar",
    salary: 200000,
    title: "Computer Science",
    total_batches: 6
}


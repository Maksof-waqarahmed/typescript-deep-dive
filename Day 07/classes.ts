/*
🧪 Challenge (Day 7)
Create a file classes.ts and:

Create a class Employee with name, role, and a method introduce().

Add access modifiers to role (private) and a getter method for it.

Create a subclass Manager that extends Employee, and add a method manageTeam().

Use readonly for employee ID and static for total employees.
*/

class Employee {
    name: string;
    private role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name} and I'm a ${this.role}`);
    }

    getRole(): string {
        return this.role;
    }
}

class Manager extends Employee {
    readonly employeeId: number;
    static totalEmployees: number = 0;
    constructor(name: string, role: string, employeeId: number) {
        super(name, role);
        this.employeeId = employeeId;
        Manager.totalEmployees++;
    }
    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }
}
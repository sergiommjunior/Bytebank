import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, salary, ssn) {
        super(name, salary, ssn)
        this._bonus = 1.1;
    }
}
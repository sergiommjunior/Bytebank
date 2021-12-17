import { Employee } from "./Employee.js";

export class Director extends Employee {
    constructor(name, salary, ssn) {
        super(name, salary, ssn)
        this._bonus = 2;
    }
}
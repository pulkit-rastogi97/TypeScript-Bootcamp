"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(sname, sage, smarks) {
        this.sname = sname;
        this.sage = sage;
        this.smarks = smarks;
    }
    getMarks() {
        return this.smarks;
    }
    getAge() {
        return this.sage;
    }
    getName() {
        return this.sname;
    }
}
exports.Student = Student;

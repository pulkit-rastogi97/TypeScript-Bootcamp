"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
var stu = new student_1.Student("Kiran", 22, 98);
console.log("name is " + stu.getName());
console.log("age is " + stu.getAge());
console.log("marks is " + stu.getMarks());
var stuarr = new Array();
var stu1 = new student_1.Student("Kiran1", 221, 198);
var stu2 = new student_1.Student("Kiran2", 221, 198);
var stu3 = new student_1.Student("Kiran3", 221, 198);
var stu4 = new student_1.Student("Kiran4", 221, 198);
var stu5 = new student_1.Student("Kiran5", 221, 198);
var stu6 = new student_1.Student("Kiran6", 221, 198);
var stu7 = new student_1.Student("Kiran7", 221, 198);
stuarr.push(stu1);
stuarr.push(stu2);
stuarr.push(stu3);
stuarr.push(stu4);
stuarr.push(stu5);
stuarr.push(stu6);
stuarr.push(stu7);
for (var stu of stuarr) {
    console.log(stu);
}

import{ Student } from './student';

var stu = new Student("Kiran",22,98);
console.log("name is "+stu.getName());
console.log("age is "+stu.getAge());
console.log("marks is "+stu.getMarks());

var stuarr : Student[] = new Array<Student>();
var stu1 = new Student("Kiran1",221,198);
var stu2 = new Student("Kiran2",221,198);
var stu3 = new Student("Kiran3",221,198);
var stu4 = new Student("Kiran4",221,198);
var stu5 = new Student("Kiran5",221,198);
var stu6 = new Student("Kiran6",221,198);
var stu7 = new Student("Kiran7",221,198);
stuarr.push(stu1);
stuarr.push(stu2);
stuarr.push(stu3);
stuarr.push(stu4);
stuarr.push(stu5);
stuarr.push(stu6);
stuarr.push(stu7);

for(var stu of stuarr)
{
    console.log(stu);
}
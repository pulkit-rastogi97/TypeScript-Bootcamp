"use strict";
var obj1 = {
    pname: "Riya",
    page: 22,
    getName() {
        return this.pname;
    },
    getAge() {
        return this.page;
    }
};
console.log(" name is = " + obj1.getName());
console.log("age is " + obj1.getAge());

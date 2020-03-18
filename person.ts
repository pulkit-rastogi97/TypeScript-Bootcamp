interface person {
    
    pname : string;
    page : number;

    getName(): string;
    getAge() : number;
}

var obj1 : person = {

    pname : "Riya",
    page : 22,

    getName() : string
    {
        return this.pname;
    },

    getAge() : number
    {
        return this.page;
    }

}

console.log(" name is = "+obj1.getName());
console.log("age is "+obj1.getAge());
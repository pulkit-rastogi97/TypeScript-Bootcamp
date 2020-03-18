class Employee
{
    empId : number;
    empName : string;
    empSal : number;

    constructor(empId : number, empName : string, empSal: number)
    {
        this.empId=empId;
        this.empName=empName;
        this.empSal=empSal;
    }

    display() : void
    {
        console.log(this);
    }
}

class Manager extends Employee
{
    designation : string;

    constructor(empId : number, empName : string, empSal: number, designation: string)
    {
        super(empId, empName, empSal);
        this.designation=designation;

    }               
}

var mgr = new Manager(12,"Pulkit",1000000000,"MALIK");
mgr.display();
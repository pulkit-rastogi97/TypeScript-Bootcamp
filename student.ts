export class Student
{
    sname : string;
    sage : number;
    smarks : number;

    constructor(sname: string, sage: number, smarks:number)
    {
        this.sname=sname;
        this.sage=sage;
        this.smarks=smarks;
    }

    getMarks():number
    {
        return this.smarks;
    }

    getAge(): number
    {
        return this.sage;
    }

    getName(): string
    {
        return this.sname;
    }
}
class Hello
{
    message : string;

    constructor(msg : string)
    {
        this.message=msg;
    }

    getMessage() : String
    {
        return this.message;
    }
}

var obj = new Hello("Welcome");
console.log("Hi All "+obj.getMessage());

//transpile - converting ts to js
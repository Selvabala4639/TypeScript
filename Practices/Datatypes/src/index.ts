let sales: number = 20000;
let name1:String = new String("Selva")
//arrays
let arr:number[] =[1,2,3];
let mixedArray = ["Selva",22];
mixedArray.push("Male");
mixedArray.push(9025);
console.log("Printing elements in array");
for(let i =0; i<mixedArray.length; i++)
    {
        console.log(mixedArray[i]);
    }

console.log(sales);

const enum Size {One=1, Two = 2, Three= 3};
let number:Size = Size.Two;
console.log(number);
let age = ReturnAge(18) 
function ReturnAge(age: number):number
{
    return age;
}
console.log(age); 
console.log(name1);

 //Type alias
type Employee = {

    readonly  id: number,
     name:string, 
     dob:(date: Date) => void
}

let employee1: Employee = {
    id:1,
    name:"Selva",
    dob:(date:Date) => {
        console.log(date);
    }
};

let employee2 :Employee ={
    id:2,
    name:"Avi",
    dob:(date : Date)  => {
        console.log(date);
    }
}

//union
console.log(employee2.name);
let eid :string | number;
let eidNumber :string | number;

eidNumber =10;
eid ="Sf2892"; 
EmpId(eid);
EmpId(eidNumber);
function EmpId(eid:string|number )
{
    console.log(eid);
}

//Literal
type Quantity = 50| 100;
let quantity : Quantity = 100;
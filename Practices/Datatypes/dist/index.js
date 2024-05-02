"use strict";
let sales = 20000;
let name1 = new String("Selva");
let arr = [1, 2, 3];
let mixedArray = ["Selva", 22];
mixedArray.push("Male");
mixedArray.push(9025);
console.log("Printing elements in array");
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
console.log(sales);
;
let number = 2;
console.log(number);
let age = ReturnAge(18);
function ReturnAge(age) {
    return age;
}
console.log(age);
console.log(name1);
let employee1 = {
    id: 1,
    name: "Selva",
    dob: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: "Avi",
    dob: (date) => {
        console.log(date);
    }
};
console.log(employee2.name);
let eid;
let eidNumber;
eidNumber = 10;
eid = "Sf2892";
EmpId(eid);
EmpId(eidNumber);
function EmpId(eid) {
    console.log(eid);
}
let quantity = 100;
//# sourceMappingURL=index.js.map
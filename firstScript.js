"use strict" // https://www.w3schools.com/js/js_strict.asp

let myFirstVariable = null;
console.log(myFirstVariable);
myFirstVariable = 3.3;
console.log(myFirstVariable);
myFirstVariable = false; 

let operand1 = 7
let operand2 = 3

operand1 ++; // +, -, *, /, **, %, ++, -- https://www.w3schools.com/js/js_arithmetic.asp
console.log(operand1);

 // https://www.w3schools.com/js/js_assignment.asp

 operand1 += operand2;

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " +  lastName + operand1 + operand2)

console.log((firstName + lastName).length);

console.log( 3 === '3'); //https://www.w3schools.com/js/js_comparisons.asp

let age = 7
if(age >= 18){
    console.log("adult");
    console.log("hej");
}
else if (age < 18 && age > 0){
    console.log("child");
}
else{
    console.log("incorect value");
}

let number = 33;
let divider = 3

if(number % divider === 0 )
{
    console.log(":-)");
}

let sum = 1;

for(let i = 10; i > 0; i--){
    sum *= i;
}

console.log(sum);

let array = [ -6.6, 5 ,7];
console.log(array.length, array[3]);

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log(sum);
sum = 0;
for(let element of array){
    console.log(element);
    sum+=element
}
console.log(sum);
array.push(55);


let book = {title: "my book", author:"A.S.", yearOfPublishment: 1999};

console.log(book.author, book["author"]);

book.pages = 55;
book["pages"] = 66

for(let property in book){
    console.log(property, book[property]);
}

let workers = [
    {name: "Jan Kowalski", position: "manager", salary: 12000},
    {name: "Anna Nowak", position: "manager", salary: 12000},
    {name: "Andrzej Socha", position: "IT specialist", salary: 8000},
    {name: "Tomasz Bąk", position: "marketer", salary: 8500 },
    {name: "Andrzej Kralicki", position: "marketer", salary: 7000}
]

sum = 0;

for(let worker of workers){
    if(worker.position === "manager"){
        worker.salary = worker.salary *1.2
        console.log(worker.salary)
    }
/*     for(let property in worker){
        console.log(worker[property]);
    } */
}

console.log(sum);
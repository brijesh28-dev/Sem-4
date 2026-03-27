//  Write a script of JSON array containing objects and display the same 
// in console.

const data = [
  { Name: "Brijesh", Class: "C6" },
  { Name: "Shubham", Class: "C6" },
  { Name: "Aryan", Class: "C6" }
];


console.log(data);


const jsonString = JSON.stringify(data);
console.log(jsonString);

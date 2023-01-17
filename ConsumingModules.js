const myModule = require("./CustomModule.js");
const alias = myModule.simpleFunc;
const mathTable = myModule.mathTable;
const empClass = myModule.employee;

myModule.simpleFunc();

mathTable(10);

const empObj = new empClass(7081, "Pavan R", "Bangalore");
empObj.display();
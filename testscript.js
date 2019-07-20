'use strict'; 


let money = prompt("Your monthly budget?", "10"),
    time = prompt("enter current date in format YYYY-MM-DD", "2019-07-21");


var appData = {
    budget: money,
    timeData: time,
    expenses: {a,b},
    optionalExpenses: {},
    arrIncome: {},
    savings: false
    };

let c = prompt("Enter a mandatory expense item for this month.", ""),
    d = prompt("How much will it cost?", "0");

appData.expenses.a = c;
appData.expenses.b = d;



alert(appData.budget/30);



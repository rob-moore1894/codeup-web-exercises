// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";

var reportContentsArray = [];
reportContents.split("\n").forEach(function(content) {
    if (content) {
        reportContentsArray.push(content.split(", "));
    }
});

console.log(reportContentsArray);

// Adding Bob to the array
reportContentsArray.splice(7, 0, ["2", "Bob", "Boberson", "5"]);


// Total Number of Employees - because our employee list starts at the 6th Element of the outer array, we can assume that the number of employees is 6 less than the entire length of the array

var totalEmployees =  ((reportContentsArray.length) - 6);

console.log("Employee Total = " + totalEmployees);

// Total Amount of Sales counts the numbers in each inner array's 3rd Element starting at the 6th Element of the outer array

var salesTotal = 0;

for (var i = 6; i <= reportContentsArray.length - 1; i++) {
    for (var x = 3; x <= reportContentsArray[i].length - 1; x++){
    salesTotal += parseFloat(reportContentsArray[i][x]);
    }
}

console.log("Sales Total = " + salesTotal);

// Average Units = sum of all sales divided by the number of employees

var averageUnit = salesTotal / totalEmployees;

console.log("Average units sold = " + averageUnit);


// Sorting by highest sales number

function sortArray (a, b){
    return b[3]-a[3];
}
reportContentsArray.sort(sortArray);
var employeeList = "";
var employeePick = [];
for (var k = 6; k < reportContentsArray.length; k++){
    employeePick = reportContentsArray.slice(k, k + 1).toString();
    employeeList += employeePick+ '\n';
}
console.log('The list of employees, sorted by number of sales is:\n' + employeeList);

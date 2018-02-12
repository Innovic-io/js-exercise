/*What is an Array?
An array is a special variable, which can hold more than one value at a time.
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!
An array can hold many values under a single name, and you can access the values by referring to an index number.*/




var cars = ['VW', 'BMW', 'Saab'];

//or

var cars=
[
    'VW',
    'BMW',
    'Saab'  
];
//You refer to an array element by referring to the index number.

//This statement accesses the value of the first element in cars:   

var name = cars[0];
console.log(name);




var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "  " + fruits[i] + "  ";
}

fruits[5]="Lemon";
var h  = text;
console.log(h);

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;         // person.length will return 3
var y = person[0];             // person[0] will return "John"

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
var y = person[0];             // person[0] will return undefined


var fruits = ["Banana", "Orange", "Apple", "Mango"];

var m=fruits.length;    
console.log(m);

// for a given array
var matrix = [
 [1, 2, 3, 4],
 [21, 345, 11, 33],
 [91, 22, 13, 34],
];

// Tasks
// 1. multiply each element by 2
// 2. decrese each element by 10
// 3. Filter out all elements less than 40
// 4. Create function which will locate element in matix.


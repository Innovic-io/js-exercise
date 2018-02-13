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
//console.log(name);




var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "  " + fruits[i] + "  ";
}

fruits[5]="Lemon";
var h  = text;
//console.log(h);

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
//console.log(m);



// Tasks
// 1. multiply each element by 2
// 2. decrese each element by 10
// 3. Filter out all elements less than 40
// 4. Create function which will locate element in matix.

// for a given array



function multiplyMatrix()
{

    var matrixA = [
        [1, 2, 3, 4],
        [21, 345, 11, 33],
        [91, 22, 13, 34],
       ]; 
    var newMatrix= matrixA;
    
       for (var i =0; i < matrixA.length; i++)
        {
            for (var j =0; j < matrixA[i].length; j++)
                {
                   

                    newMatrix[i][j]=matrixA[i][j]*2;
                     // return  matrixA[i][j] +2;
                    }
        }

        return newMatrix;

}
var tt = multiplyMatrix()
console.log(tt);

function decreseMatirix()
{

    var matrixA = [
        [1, 2, 3, 4],
        [21, 345, 11, 33],
        [91, 22, 13, 34],
       ]; 
    var newMatrix= matrixA;
    
       for (var i =0; i < matrixA.length; i++)
        {
            for (var j =0; j < matrixA[i].length; j++)
                {
                    newMatrix[i][j]=matrixA[i][j]-10;
                    
                    }
        }

        return newMatrix;

}
var pp = decreseMatirix()
console.log(pp);

console.log('-- filterOut --')

function filterOut()
{ 
    var matrixA = [
        [1, 2, 3, 4],
        [21, 345, 11, 33],
        [91, 22, 13, 34],
    ];

    var newMatrix = [];
    
    for (var i =0; i < matrixA.length; i++)
    {
        newMatrix[i] = [];

        for (var j = 0; j < matrixA[i].length; j++)
        {
            if (matrixA[i][j] >= 40) {
                
                newMatrix[i].push(matrixA[i][j])

            }
                    
        }
                
    }
    return newMatrix.filter((item) => item.length);      
}

        
var jj = filterOut()
console.log(jj);

console.log("-------FINDE THE  LOCATION OF ELEMENT------ ")


var matrixA = [
    [1, 2, 3, 4],
    [21, 345, 11, 33],
    [91, 22, 13, 34],
];


function getIndexOf(matrix, element)
{
    for( var i = 0; i < matrix.length; i++)
  {
    var index =matrix[i].indexOf(element);
    if(index > -1){
        
        return[i, index];

    }
  }
}


var element = 11;

var result = getIndexOf(matrixA,element);

console.log('The value #' +element + ' is locate at row: ['+ result[0]+ '] kolumn: ['+ result[1] + '].');


console.log("Example for 'array.from()'")

var s = Array.from('foo');
console.log(s);


// Using an arrow function as the map function to
// manipulate the elements
var r = Array.from([3,4,5], x => x+1 );
console.log(r);



// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
var ff = Array.from({length: 3}, (v,i)=> i);
console.log(ff);


console.log("Example for 'array.isArray()'")

var test1 = Array.isArray([2,3,4]);
console.log(test1);

var test2 = Array.isArray( {foo : 324});
console.log(test2);

var test3 = Array.isArray('4567');
console.log(test3);


var test4 = Array.isArray([]);
console.log(test4);

console.log("Example for 'array.of()'")

var t1= Array.of(54);
console.log(t1);

var t2 = Array.of('d,f,e,ew,ada,a');
console.log(t2);

console.log("Example for 'array.concat()'")

var z1= [1,64,23,'s,k'];
var z2=['j,o,v,a,n,a',7429,];
var newarray= z1.concat(z2);
console.log(newarray);

var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

    var num4= num1.concat(num2,num3);
    console.log(num4);

var alpha =['a','b','c'];

 
var alpha1=alpha.concat(1,[2,3]);
console.log(alpha1);


console.log("Example for 'array.copyWithin()'")

var r1= ['a','b','c','d','e'].copyWithin(2,1);
console.log(r1);

var r2= [1,2,3,4,5,6,7,8,9].copyWithin(0,4).copyWithin(4,-6);
console.log(r2);
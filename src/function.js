 var x  = myFunction(3,4);

function myFunction(a,b){
    return a*b;
}


console.log(x);
 
//Convert Fahrenheit to Celsius

function toCelsius(fahrenheit)
{
    return (5/9)*(fahrenheit-32);

}


var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";

console.log(text);


function square  (number)
{
    return number * number;

}
var h = square(4);
console.log(h);

 function fac(n){
    return n < 2 ? 1 : n*fac(n-1);
 };
 var factoriel =fac(3);
 console.log(factoriel);

 function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
        return result;
  }
 var f= function(x){
     return x*x*x;
 }
 var numbers =[0, 1, 2, 5, 10];
 var cub = map(f, numbers);
 console.log(cub);

 function factoriell(n)
 {
     if (( n == 0 ) || (n == 1))
     return 1;
     else
     return (n* factoriell(n-1));
 }
var q= factoriell(3);
console.log(q);


var num1 = 20;
var num2 = 3;
var name = "Stevo";

function multiply(){
    return num1*num2;

}

var w= multiply();
console.log(w);

function getScore ()
{
    var num1 = 2,
        num2 = 3;
  function add (){
      return name + ' Scoreed '+ (num1+num2);

  }
return add();

}
 var f = getScore();
 console.log(f);
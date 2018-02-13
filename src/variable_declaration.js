var x = 3;
var y = 4;

var u = "Jovana";
var r = "Stevanovic";

var t = u + ' ' + r;
var z = x + y;

var person = {
    name: " Helena " ,
    last_name: " Visnjic ",
    age: "44",

    address: {
        street:" Alekse Santica 3 " ,
        city: " Pale "
    }
};

var car ={
    name: "Fiat",
    type: "500",
    year: "2016",

};

console.log(car.name,car.type);
console.log(z);
console.log(t);
console.log(person.address.street);

// Tasks:
// Write function which capitalize first letter of given variable
// jovana -> capitalize('jovana') -> Jovana
// Write function that reverse your name: Jovana -> anavoJ
// Write function that replace character a with *: Jovana -> Jov*n*




function capitalize(string){


    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();

}



var g = capitalize('jovana');
console.log(g);



var n= capitalize('kUCA je Mala');
console.log(n);

var t =capitalize('rAdimo ')
console.log(t);

//2. Reverse a String With a Decrementing For Loop

function reverseString (str){

    var newString ="";
    for(var i = str.length-1; i>=0; i--)
    {
        newString += str[i];
    }
    return newString;
}

var b =reverseString('Jovana')
console.log(b);

//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.

function ReverseString3(str)
{
    var splitString =str.split("");
    var reverseArray= splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

var gt=ReverseString3('kuca')
console.log(gt);


//Chaining the three methods together:


function ReverseString2(str)
{
    return str.split("").reverse().join("");
}

var js = ReverseString2('Apokalipsa')
console.log(js);



 

function replaceStr(str, find, replace) {
    for (var i = 0; i < find.length; i++) {
        str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
    }
    return str;
}

var text = "#herea_is_thea_oane#";
var kk ="var declarations are globally scoped or function scoped while let and const are block scoped." ;

var find = ["a","_"];
var replace = ['*',' '];

text = replaceStr(text, find, replace);
kk=replaceStr(kk,find,replace)


console.log(kk);
console.log(text);
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

// global scope
var a = 1;

function one()
{
   return a;
}

var j = one();
console.log(j);

function two(a=4)
{
    return a;
}
var p = two();
console.log(p);

//local scope

function three()
{
    var a = 5;
    return a;

}

var k= three();
console.log(k);

function four()
{
    if(true){
        var a = 88;
    }
    return a;
}

var e = four();
console.log(e);

function five()
{
    if(true){
        let a=77;
    }
    return a;
}
var r  = five();
console.log(r);


var six = (function()
{
    var a =66;
    return function(){
        return a;
    };
        
})();
 var i=six();
console.log(i);



var x = 5;

(function () {
    var x;
    console.log(x);
    var x = 10;
    console.log(x); 
})();

var e = 5;
console.log(e);
try {
    throw 6;
} catch (e) {
    console.log(e);
}
console.log(e);

// Task: Write difference between let, var and cont variable declaration
var myName = 'Jovana';
const myRealName = 'Jovana';
let myRealRealName = 'Jovana';


/* var moze biti definisam unutar i van funkncije tj. mogu biti globalnog ili lokalnog "obima ", dok su const i let "block scoped"(sa njima se moze "upravljati" u dijelu kod koji je ogranicen sa {}).


var varijable mogu se ažurirati i ponovo deklarisati  unutar svog djelokruga;
let varijable se mogu azurirati ali ne i ponovo deklarisati
const varijable  ne mogu se azurirati ni redeklatisati


  var greeter = "hey hi";
    var greeter = "say Hello instead";

     var greeter = "hey hi";
    greeter = "say Hello instead";


     var greeter;
    console.log(greeter); //greeter is undefined
    greeter = "say hello"

    potrebno je prvo deklarisati da bi smo mogli "upravljati" sa njima. 


    Block je dio koda koji je ogranicen viticastim zagradama "{}".
    Sve sto je deklarisano unutar viticastih zagrada je blokirano.
    Dakle, varijabla koja je deklarisana  u bloku s LET dostupna je samo za upotrebu unutar tog bloka.


     let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defin.

   let greeting = "say Hi";
    greeting = "say Hello instead"; --> radi 

    et greeting = "say Hi";
    let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared--> ne radi zato sto su unutar istog bloka

        let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting);//"say Hi" ---> radi zato sto su let varijable istog imena ali u razlicitim blokovima su 


    njegov znači da vrijednost varijable deklarirane sa const ostaje ista u okviru svog opsega.
    Ne može se ažurirati ili ponovno proglašavati. Dakle, ako objavimo varijablu s const, ne možemo ni to učiniti :

     const greeting = "say Hi";
    greeting = "say Hello instead";//error : Assignment to constant variable. 

    ili

        const greeting = "say Hi";
    const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared

    Ali ovo mozemo uraditi

Svaka const deklaracija  mora biti inicijalizirana u vrijeme deklaracije.
Ovo je ponašanje na neki način različito kada se radi o objektima koji su deklarirani s const. 
Iako se objekt const ne može ažurirati, svojstva tih objekata mogu se ažurirati. 
Stoga, ako izjavljujemo const  objekt kao ovaj 
        const flow = {
        message : "say Hi",
        times : 4
    }
ali ovo ne mozemo 
        const greeting = {
        words : "Hello",
        number : "five"
    }//error :  Assignment to constant variable.


    mozemo  uraditi:
    greeting.message = "say Hello instead";
    */
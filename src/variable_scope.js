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
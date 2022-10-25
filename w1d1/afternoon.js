var x = [1, 2, 3, 4];
var y = [5, 6, 7, 8];

var z = [...x, ...y, 9];
// console.log(z);

function add(a, b, c){
    return a + b + c;
}

// console.log(add(44, 55));
//              a    b

function addAll(multiplyer, bonus_characer, ...numbers){
    console.log(numbers);
}

// addAll(55);



function function1(){ // standalone

}

var a = function() { // a variable holding an anonymous function

}

var b = {
    doStuff: function(){} // methods
}

var c = () => " is my name"; // arrow function
                                      // anonymous

var c = function(name){
    return name + " text";
}


function example1(numberA, numberB){
    if(numberA > numberB){
        return true;
    }else{
        return false;
    }
}

function example1(numberA, numberB){
    numberA > numberB ? true : false;
}
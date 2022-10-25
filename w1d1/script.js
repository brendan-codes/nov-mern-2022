var person = {
    name: "Brendan",
    email: "brendan@email.com",
    password: "abcpassword",
    favorite_colors: ["red", "blue"],
    favorite_number: 34
    // ...
}

const {name, email, password} = person;

const [zeroth, first] = person.favorite_colors;
//      0       1


var fruit = ["apples", "pears", "oranges"];
var alternative_fruit = [...fruit];
console.log(alternative_fruit);
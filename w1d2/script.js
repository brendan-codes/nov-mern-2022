function doubleNumbers(numbers){
    const newNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        newNumbers.push(numbers[i] * 2);
    }
    return newNumbers;
}

function tripleNumbers(numbers){
    const newNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        newNumbers.push(numbers[i] * 3);
    }
    return newNumbers;
}

function multiply(nums, multiplyer){
    const newNums = [];
    for(let i = 0; i < nums.length; i++){
        newNums.push(nums[i] * multiplyer);
    }
    return newNums;
}

console.log(tripleNumbers([2,3,4,5,6]));
console.log(multiply([1,3,9], 50))

let arr1 = [56,78,96,57,69,80];
console.log(arr1.map(unicorns => unicorns * 2));
console.log(arr1.map(function(element){
    return element * 2;
}))
console.log(arr1.map(e => e - 7));

console.log(arr1.filter(e => e % 2 == 1));


const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
console.log(pokemon.filter(element => element.id > 99).map(element => element.name));
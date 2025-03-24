const myName = require("./names.js");

// console.log(myName('Valerio', 'Di Biagio'));

const myHobbies = require("./hobbies.js");

// console.log(myHobbies('football', 'music', 'videogames'));


function personalDates() {
    return {
        fullName: myName('Valerio', 'Di Biagio'),
        hobbies: myHobbies('football', 'music', 'videogames')
    }
}

console.log(personalDates());


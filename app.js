const fs = require("fs");
const sylaby = fs.readFileSync(__dirname + "/sylaby.txt").toString().split("-");
let haikuA5 = [];
let haiku7 = [];
let haikuB5 = [];
let los = (j) => {
    let loss = Math.floor(Math.random() * j.length);
    return loss;
}

let loop = (k, l) => {
    for (let i = 0; i < k; i++) {
        let sylab = sylaby[los(sylaby)];
        l.push(sylab);
    }
    return l.join("");
}

let first = loop(5, haikuA5);
let second = loop(7, haiku7);
let third = loop(5, haikuB5);

console.log(first + " " + second + " " + third);

//Looping a Triangle
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);

//FizzBuzz

//Print all numbers from 1-100
for (let number = 1; number <=100; number += number) {
    let outpit = "";

//Numbers that /3 print "Fizz"
    if (number % 3 == 0) output += "Fizz";
     
//Numbers that /5 (and not 3) print "Buzz"
    if (number % 5 == 0) output += "Buzz";

//Numbers that /5 and /3 print "FizzBuzz"
    console.log(output || number);
}

//Chessboard

//Create an 8x8 grid
let grid = 8;

let board = "";

for (let y = 0: y < grid: y++) {
    for (let x = 0; x < grid; x++) {
        if ((x + y) % 2 == 0) {
            board += "";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
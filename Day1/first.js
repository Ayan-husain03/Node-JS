const fs = require("fs");
let a = 5;
let b = 5;
let sum = a + b;
let mul = a * b;

const result = `Sum is ${sum} \n Multiply is ${mul}`;
function writeDataInFile(fileName, data, func) {
  return fs.writeFile(fileName, data, func);
}

writeDataInFile("output.txt", "This is first text", error);
writeDataInFile("output.txt", result, error);
function error(err) {
    if (err) console.log(err);
    else console.log("file written sucessfully")
}



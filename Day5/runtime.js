function runtime() {
    // console.log(x) // This will throw a ReferenceError because x is not defined yet
    let num = 10; // Declare a variable with let
    num(); // This will throw a TypeError because num is not a function
}

module.exports = runtime;
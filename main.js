// Write a function redundantReturn that takes in a string
// a parameter named srt. This function should return another
// function that returns a message using the str variable.
// Print that message to the developer console.

function redundantReturn() {
    let srt = "This will return another function";
   
    // return function (name) {
        // return `${name}! ${greeting}`;
//    };

    function myOtherSrt() {
        console.log("Print this message with SRT:", srt);
    }
     myOtherSrt();
}

redundantReturn(); 

// Instructor helped Carlos with this...
function redundantReturn(srt) {
    return function() {
        return `This is my string${srt}`;
    }
};
const returnSomething = redundantReturn("Hello");

console.log(returnSomething);
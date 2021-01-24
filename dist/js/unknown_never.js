"use strict";
let userInput;
let userName4;
userInput = 5;
userInput = "Max";
// userName = userInput;
if (typeof userInput === "string") {
    userName4 = userInput;
    console.log(userName4);
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("An error occured!", 500);

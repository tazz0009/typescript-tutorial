let userInput: unknown;
let userName4: string;

userInput = 5;
userInput = "Max";

// userName = userInput;
if (typeof userInput === "string") {
  userName4 = userInput;
  console.log(userName4);
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code
  };
}

generateError("An error occured!", 500);

import Person from "./person.js";
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked!");
});
const person = new Person("Jack");
person.walk();

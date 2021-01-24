import Person from "./person.js";

const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("Clicked!");
});

const person = new Person("Jack");
person.walk();

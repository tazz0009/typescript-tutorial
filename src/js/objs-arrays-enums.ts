import { funtion_01, funtion_02 } from "./utils.js";
import { Role } from "./role.js";
// const ADMIN = 0;
// const READ_ONLE = 1;
// const AUTHOR = 2;

// enum Role {
//   ADMIN,
//   READ_ONLE,
//   AUTHOR
// }

interface person {
  age: number;
  name: string;
  hobbies: string[];
  job: (string | number)[];
  role: Role;
}

const person = {
  age: 50,
  name: "Nick",
  hobbies: ["Sports", "Cooking"],
  job: [2, "author"],
  role: Role.ADMIN
};

console.log(funtion_01(person.name));
console.log(funtion_02(person.name));

let persons: person[] = [];

persons.push({
  age: 50,
  name: "Nick",
  hobbies: ["Sports", "Cooking"],
  job: [2, "author"],
  role: Role.READ_ONLE
});

persons.push({
  age: 40,
  name: "Paul",
  hobbies: ["Game"],
  job: [1, "doctor"],
  role: Role.AUTHOR
});

persons.forEach((person) => {
  console.log(person);
});

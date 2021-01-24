export default class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

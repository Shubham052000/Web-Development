class Human {
  constructor() {
    this.gender = "male";
  }
  printGender(){
    console.log(`And I'm a ${this.gender}`)
  }
}

class Person extends Human {
  constructor(name, gender) {
    super();
    this.name = name ? name : "Shubham";
    super.gender = gender ? gender : this.gender;
  }
  printMyName() {
    console.log(`My name is ${this.name}`);
  }
}

const person = new Person("Yashi", "female");
person.printMyName();
person.printGender();

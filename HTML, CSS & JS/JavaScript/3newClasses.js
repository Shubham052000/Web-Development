class Human {
  gender = "male";

  printGender = () => {
    console.log(`I'm a ${this.gender}`);
  };
}

class Person extends Human {
  name = "Shubham";

  printMyName = () => {
    console.log(`My name is ${this.name}`);
  };
}

const per = new Person();
per.printMyName();
per.printGender();

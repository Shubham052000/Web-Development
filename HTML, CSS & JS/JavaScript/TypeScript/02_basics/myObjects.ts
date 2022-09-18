const User = {
  name: "Shubham",
  email: "shubham@shubham.com",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

let newUser = { name: "Satyawali", isPaid: false, email: "s@s.com" };

createUser(newUser);

const createCourse = (): { name: string; price: number } => {
  return { name: "reactjs", price: 399 };
};

type Book = {
  name: string;
  author: string;
  price: number;
  isAvailable: boolean;
};

function createBook(book: Book): Book {
  return book;
}

createBook({ name: "", author: "", price: 399, isAvailable: false });

type Human = {
  readonly _id: string;
  numLimbs: number;
  emotion: string;
  isAlive: boolean;
  isHealthy?: boolean;
};

let myHuman: Human = {
  _id: "1245",
  numLimbs: 4,
  emotion: "happy",
  isAlive: true,
};

type BMI = {
  bodyMassIndex: string;
};

type BGL = {
  bloodGlucoseLevels: string;
};

type HealthParams = BMI & BGL & { vision: string };

let humanHealth: HealthParams = {
  bodyMassIndex: "healthy range",
  bloodGlucoseLevels: "healthy range",
  vision: "10 on 10",
};

myHuman.emotion = "sad";

// myHuman._id = "345678"  cries as cannot modify readonly values

export {};

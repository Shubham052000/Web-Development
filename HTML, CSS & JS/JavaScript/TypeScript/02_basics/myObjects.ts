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

export {};

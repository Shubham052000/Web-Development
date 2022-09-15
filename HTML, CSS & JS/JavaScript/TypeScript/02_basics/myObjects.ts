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

export {};

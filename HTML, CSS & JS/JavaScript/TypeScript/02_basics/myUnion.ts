let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Shubham: User | Admin = {
  name: "Shubham",
  id: 69,
};

Shubham = {
  username: "immort4l_a55h013",
  id: 420,
};

// function getDbId(id: number | string) {
//   //making some API calls
//   console.log(`DB ID is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id.toFixed();
  }
}

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"

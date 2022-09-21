var score = 33;
score = 44;
score = "55";
var Shubham = {
    name: "Shubham",
    id: 69
};
Shubham = {
    username: "immort4l_a55h013",
    id: 420
};
// function getDbId(id: number | string) {
//   //making some API calls
//   console.log(`DB ID is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id.toFixed();
    }
}
// array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"

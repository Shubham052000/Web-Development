"use strict";
exports.__esModule = true;
var User = {
    name: "Shubham",
    email: "shubham@shubham.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var newUser = { name: "Satyawali", isPaid: false, email: "s@s.com" };
createUser(newUser);
var createCourse = function () {
    return { name: "reactjs", price: 399 };
};
function createBook(book) {
    return book;
}
createBook({ name: "", author: "", price: 399, isAvailable: false });
var myHuman = {
    _id: "1245",
    numLimbs: 4,
    emotion: "happy",
    isAlive: true
};
myHuman.emotion = "sad";

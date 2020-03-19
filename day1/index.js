const counter1 = require("./count")
const counter2 = require("./count")

console.log(counter1.add());
console.log(counter2.add());
console.log(counter2.add());

// node index
// 1 2 3
// 证明了counter.js并没有因为被require了两次而初始化两次
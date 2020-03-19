const fs = require("fs")
const path = require("path")

function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
      var pathname = path.join(dir, file);

      if (fs.statSync(pathname).isDirectory()) {
          travel(pathname, callback);
      } else {
          callback(pathname);
      }
  });
}
travel('D:/work/sevendays-nodejs/day3', function (pathname) {
  console.log(pathname);
});
// 这个require.context一直报错。在hr-vue里用的好好的。可能是webpack的功劳把
// const files = require.context("./", false, /\.js$/)
// console.log(files)
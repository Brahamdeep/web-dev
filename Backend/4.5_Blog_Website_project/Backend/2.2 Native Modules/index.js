const fs = require("fs");

fs.writeFile("example.txt", "hello world", (err) => {
  if (err) throw err;
  console.log("file was written");
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

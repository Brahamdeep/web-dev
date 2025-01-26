import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req.rawHeaders);
  //res.send("Hello World!!!!");
  res.send("<h1>Hello World!!!!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>You can contact me at brahamdeep9@gmail.com :D</h1><br><p1");
});

app.get("/about", (req, res) => {
  res.send(
    "<h2>My name is Brahamdeep Singh !!</h2><br><p>Welcome to my webpage</p>"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  //   console.log(day);
  let type = "a weekday";
  let adv = "its time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "its time to have fun !!";
  }
  res.render("index.ejs", {
    dayType: "type",
    advice: "adv",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

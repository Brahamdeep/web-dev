import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory storage for blog posts
let posts = [];

// Routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.post("/create", (req, res) => {
  const { title, content } = req.body;
  const id = Date.now().toString();
  posts.push({ id, title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  res.render("edit", { post });
});

app.post("/edit/:id", (req, res) => {
  const { title, content } = req.body;
  const index = posts.findIndex((p) => p.id === req.params.id);
  if (index !== -1) {
    posts[index] = { ...posts[index], title, content };
  }
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});

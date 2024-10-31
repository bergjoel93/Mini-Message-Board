const express = require("express");
const app = express();
const PORT = 3000;

// Sample Messages Array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Set EJS as the template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // Serves static files from public folder
app.use(express.static("public"));

// Index route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    toMilitaryTime,
  });
});

app.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
  console.log(messages);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Define the formatting function
function toMilitaryTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

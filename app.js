const express = require("express");
const app = express();
const PORT = 3000;

// Import the router
const messagesRouter = require("./routes/messagesRouter");

// Set EJS as the template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // Serves static files from public folder
app.use("/", messagesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

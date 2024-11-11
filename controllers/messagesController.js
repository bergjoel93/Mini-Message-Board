// /controllers/messagesController.js

/**
 * Handles requests from client.
 */

const messagesStorage = require("../storages/messagesStorage");

/**
 * Method called in the router which is the request handler for a specific route.
 */

/**
 *
 * @param {Template Name} req - name of the view template (without file extension)
 * @param {Data Object} res - Object that contains data to pass to the view. Props of object will be available as variables within the template.
 */

exports.messagesListGet = async (req, res) => {
  try {
    const messages = await messagesStorage.getMessages(); // Fetch messages from the database
    res.render("index", {
      title: "Mini Message Board",
      messages, // Pass the messages to the view
      toMilitaryTime, // Function to format time
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Error fetching messages");
  }
};

/**
 * Method to add a new message and redirect to the home page.
 */
exports.messagesCreatePost = async (req, res) => {
  try {
    const { text, user } = req.body;
    await messagesStorage.addMessage({ text, user, date: new Date() }); // Add new message to the database
    console.log("Message:", text, "was posted successfully!");
    res.redirect("/");
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).send("Error saving message");
  }
};

// Define the formatting function
function toMilitaryTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

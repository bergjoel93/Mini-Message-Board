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

exports.messagesListGet = (req, res) => {
  res.render("index", {
    // renders a view, index.ejs.
    title: " Mini Message Board",
    messages: messagesStorage.getMessages(),
    toMilitaryTime, // function to help format time.
  });
};

exports.messagesCreatePost = (req, res) => {
  // Extract the data from the form's body that was submitted in the post request.
  const { text, user } = req.body; // this is known as a destructuring assignment.
  // Add the new messages to the messages object.
  messagesStorage.addMessage({ text, user, date: new Date() });
  // redirect to root
  res.redirect("/");
  console.log("Message: ", text, "Was posted succesfully!");
};

// Define the formatting function
function toMilitaryTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

// storages/usersStorage.js

// messagesStorage.js

const { Pool } = require("pg");
require("dotenv").config();

// Create a new pool using the connection string from environment variables
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// Function to retrieve all messages
async function getMessages() {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY date ASC");
    return result.rows;
  } catch (error) {
    console.error("Error retrieving messages:", error);
    throw error;
  }
}

// Function to add a new message
async function addMessage({ text, user, date }) {
  try {
    const query = `INSERT INTO messages ("user", text, date) VALUES ($1, $2, $3) RETURNING *`;
    const values = [user, text, date];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
}

module.exports = {
  getMessages,
  addMessage,
};

// This is the old depcricated class we used to start with.
// // This class lets us simulate interacting with a database.

// class MessagesStorage {
//   constructor() {
//     this.storage = {};
//     this.id = 0; // initialize the id to 0.
//   }

//   addMessage({ text, user, date }) {
//     const id = this.id;
//     this.storage[id] = { id, text, user, date };
//     this.id++; // Incrememnt ID
//   }

//   getMessages() {
//     let messages = Object.values(this.storage);
//     console.log("Messages: ", messages);
//     return messages;
//   }
// }

// module.exports = new MessagesStorage(); // singleton.

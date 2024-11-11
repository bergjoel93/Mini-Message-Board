require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DB_URL, // Use the environment variable
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    "user" VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

async function createTable() {
  try {
    await client.connect();
    console.log("Connected to the database.");

    await client.query(createTableQuery);
    console.log("Messages table created successfully.");
  } catch (error) {
    console.error("Error creating messages table:", error);
  } finally {
    await client.end();
    console.log("Disconnected from the database.");
  }
}

createTable();

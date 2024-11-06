// storages/usersStorage.js

// This class lets us simulate interacting with a database.

class MessagesStorage {
  constructor() {
    this.storage = {};
    this.id = 0; // initialize the id to 0.
  }

  addMessage({ text, user, date }) {
    const id = this.id;
    this.storage[id] = { id, text, user, date };
    this.id++; // Incrememnt ID
  }

  getMessages() {
    let messages = Object.values(this.storage);
    console.log("Messages: ", messages);
    return messages;
  }
}

module.exports = new MessagesStorage(); // singleton.

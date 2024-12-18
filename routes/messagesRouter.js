// routes/messagesRouter.js

const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/", messagesController.messagesListGet);
messagesRouter.post("/new", messagesController.messagesCreatePost);

module.exports = messagesRouter;

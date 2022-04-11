const express = require("express");

const app = express();

const userRouter = require("./routes/userRoutes");

// Middlewares
app.use(express.json()); // Parses the req body
app.use("/api/users", userRouter);

module.exports = app;

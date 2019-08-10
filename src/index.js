const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(logger("dev"));

// register routes
const authRoutes = require("./api/routes/auth");
app.use("/", authRoutes);
module.exports = app;

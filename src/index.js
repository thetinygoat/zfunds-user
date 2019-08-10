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

module.exports = app;

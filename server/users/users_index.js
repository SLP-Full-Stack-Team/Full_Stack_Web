const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../db");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req body


// ROUTES

// CREATE A USER
// look at app_index.js for reference

// DELETE USER

app.listen(5001, () => {
    console.log("server has started on port 5001");
});
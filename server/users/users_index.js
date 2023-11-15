const express = require("express");
const users = express();
const cors = require("cors");
const pool = require("../db");

// MIDDLEWARE
users.use(cors());
users.use(express.json()); //req body


// ROUTES

// CREATE A USER
// look at app_index.js for reference


// GET A UPLOAD
// this is will be used to show case user info on User page
users.post("/users" , async(req,res) => {
    // await
    try{
        //get data from client side
        console.log(req.body);
        const { user_firstName, user_lastName, user_name, user_email, user_pswd } = req.body;
        const newUser = await pool.query( 
            "INSERT INTO users (user_firstName, user_lastName, user_name, user_email, user_pswd) VALUES($1, $2, $3, $4, $5) RETURNING *", 
            [user_firstName, user_lastName, user_name, user_email, user_pswd]
        );

        res.json(newUser);
    }catch (err) {
        // error handler
        console.error(err.message);
    }

}); 

// DELETE USER

users.listen(5002, () => {
    console.log("users server has started on port 5002");
});
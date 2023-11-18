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
users.post("/users" , async(req,res) => {
    // await
    try{
        //get data from client side
        console.log(req.body);
        const { user_firstName, user_lastName, user_name, user_email, user_pswd } = req.body;
        const duplicateUserName = await pool.query("SELECT user_id FROM users WHERE user_name = $1", [user_name]);
        if(duplicateUserName.rows.length > 0)
        {
            return res.status(400).json({ error: "Duplicate user_names. Choose a different one." });
        }; 

        const duplicateUserEmail = await pool.query("SELECT user_id FROM users WHERE user_email = $1", [user_email]);
        if(duplicateUserEmail.rows.length > 0)
        {
            return res.status(400).json({ error: "Duplicate Email. Choose a different one." });
        }; 
       
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
//Login
//login a users
users.post('/users/:user_name', async (req, res) => {
    try {
      const { user_name, user_pswd } = req.body;
      const loginUser = await pool.query(
        'SELECT * FROM users WHERE user_name = $1 AND user_pswd = $2',
        [user_name, user_pswd]
      );
      res.json(loginUser.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


// GET A USER

// this is will be used to show case user info on User page
users.get("/users/:id", async (req,res) => {
    try{
        console.log(req.params);
        const {id} = req.params;
        const users = await pool.query(
            "SELECT * FROM users WHERE user_id = $1", 
            [id]
        );
        res.json(users.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})

// DELETE USER

users.listen(5002, () => {
    console.log("users server has started on port 5002");
});
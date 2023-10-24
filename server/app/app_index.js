const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../db");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req body


// ROUTES

// CREATE A UPLOAD
app.post("/uploads" , async(req,res) => {
    // await
    try{
        //get data from client side
        
        console.log(req.body);
        const { upload_title, upload_description } = req.body;
        const newUpload = await pool.query( 
            "INSERT INTO uploads (upload_title, upload_description) VALUES($1, $2) RETURNING *", 
            [upload_title, upload_description]
        );

        res.json(newUpload);
    }catch (err) {
        // error handler
        console.error(err.message);
    }

}); 

// GET ALL UPLOADS
app.get("/uploads", async(req, res) => {
    try{
        const allUploads = await pool.query("SELECT * FROM uploads");
        res.json(allUploads.rows);
    }catch(err){
        console.error(err.message);
    }
});

// GET A UPLOAD
app.get("/uploads/:id", async (req,res) => {
    try{
        console.log(req.params);
        const {id} = req.params;
        const uploads = await pool.query(
            "SELECT * FROM uploads WHERE upload_id = $1", 
            [id]
        );
        res.json(uploads.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})

// UPDATE A UPLOAD
app.put("/uploads/:id", async(req,res) => {
    try {
        const  {id} = req.params;
        const { upload_title, upload_description} = req.body;
        const updateUpload = await pool.query(
            "UPDATE uploads SET (upload_title, upload_description) = ($1, $2) WHERE upload_id = $3", 
            [upload_title, upload_description, id]
        );
        res.json("Upload was updated.")
    }catch(err){
        console.error(err.message);
    }
});

// DELETE A UPLOAD
app.delete("/uploads/:id" ,async (req,res) => {
    try{
        const{ id } = req.params;
        const deleteUpload = await pool.query(
            "DELETE FROM uploads WHERE upload_id = $1",
            [id]
        );
        res.json("Upload was deleted.")
    }catch(err){
        console.log(err.message);
    }
})

app.listen(5001, () => {
    console.log("server has started on port 5001");
});

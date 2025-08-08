// const express = require("express");
// const app = express()
// require('dotenv').config();
// require('./Models/db')

// const PORT = process.env.PORT || 8080;

// app.get("/ping",(req, res)=>{
//     res.send('PONG');
// });


// app.listen(PORT, ()=>{
//     console.log(`Server  is running on ${PORT}`);
    
// })


const { connection } = require('mongoose');
const { connectDB, getDB} = require('./Models/db');
async function run() {
    await connectDB();
    const db = getDB();
    const users = db.collection('users');

    // inserting a user
    const newUser = {
        userName : 'deepali',
        email: 'deepali@example.com',
        password: 'hashed_password_here'

    };

    await users.insertOne(newUser);

    // find all users 
    const allUsers = await users.find().toArray();
    console.log("All users:" , allUsers);
    
    
}
run();


// const mongoose = require('mongoose');

// const mongo_url = process.env.MONGO_CONN;
// mongoose.connect(mongo_url)
// .then(()=>{
//     console.log('Mongoose Connected');
// }).catch(()=>{
//     console.log('MongoDB Connection Error:', err);
// })



const  {MongoClient}  = require("mongodb")
require('dotenv').config();


const client  = new MongoClient(process.env.MONGO_CONN)
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("connection established")
        
    } catch (error) {
        console.error(`failed tyo establish connection${error}`);
        process.exit(1);

        
    }
}

function getDB(){
    if(!db){
        throw new Error("DB not connected");
    }
    return db;
}

module.exports = { connectDB, getDB};
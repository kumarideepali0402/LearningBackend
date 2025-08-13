const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MOngoDB Connected');
        
    })
    .catch((err) => {
        console.log('error in db connection', err);
        
    })

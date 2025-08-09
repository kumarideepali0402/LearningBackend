const requestTime = require("./Middleware.js");
const express = require("express");
const app = express();

app.use(requestTime);
app.get('/', (req, res)=>{
    setTimeout(()=>{
        res.send("hello");
        
    }, 5000);
})
app.listen(3000);

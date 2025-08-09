const requestTime = require("./Middleware.js");
const express = require("express");
const app = express();
const zod = require("zod")

// const schema = zod.array(zod.number());
// or
const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())


})


// app.use(express()); Mandatory to be used while fetching the info from body
app.use(requestTime);
app.get('/', (req, res)=>{
    setTimeout(()=>{
        res.send("hello");
        
    }, 5000);
})

// global catches
// error handling middleware
app.use(function(err, req, res, next){
    res.json({
        msg:"sorry something is wrong with your input"
    })
})

app.listen(3000);

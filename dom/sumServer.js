const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

app.get("/sum",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(String(a + b));
})
app.listen(3000);
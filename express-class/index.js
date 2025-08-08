const express = require('express')
const app = express();


// function sum (n){
//     let ans = 0;
//     for(let i = 0; i <=n; i++) {
//         ans += i;
//     }
//     return ans;
// }


// app.get('/',(req ,res)=>{
//     const q = Number(req.query.n);
//     const sol = sum(q);
//     console.log("calculated");
    
//     res.send(sol)
// })



app.listen(3001);
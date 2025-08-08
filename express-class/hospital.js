const express=require("express");
const app = express();
const port = 3000;


var users = [{
    Pname:"Deepali",
    kidney:[{
        healthy: true
    }, 
    {
        healthy:false

    }]

}]

app.get('/', (req, res)=>{
    const name = req.query.name;
    const reqd = users.filter((user)=>user.Pname==name);
    const ans = 0;
    if(reqd.kidney[0][healthy]) ans+=1; 
    if(reqd.kidney[1][healthy]) ans+=1; 
    res.send(`no. of healthy kidney : ${reqd.kidney.length} out of which ${ans} works fine`)
})

app.post('/post', (req, res) =>{
    const name = req.query.name;
    const reqd = users.filter((user)=>user.name=="Deepali");
    reqd.kidney.append({healthy:true});
    res.send(`new kidney length is: ${reqd.kidney.length}`);

})

app.put('/put', (req, res)=>{
    const name = req.query.name;
    const kidneyNum = req.query.kidneyNum;
    const reqd = users.filter((user)=>user.name=="Deepali");
    reqd.kidney[0].kidneyNum=true;
    res.send(`${kidneyNum} is healthy now`)

})

app.delete('del', (req,res) =>{
     const name = req.query.name;
     const kidneyNum = req.query.kidneyNum;
     const reqd = users.filter((user)=>user.name=="Deepali");
     reqd.delete(kidneyNum);
     res.send("deleted successfully kidney");

    
    
    

})


app.listen(port);
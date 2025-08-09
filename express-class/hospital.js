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

app.use(express.json());

app.get('/', (req, res)=>{
    const name = req.query.name;
    const reqd = users.find((user)=>user.Pname==name);
    var ans = 0;
    for(let i = 0; i <reqd.kidney.length;i++){

        if(reqd.kidney[i].healthy) ans+=1; 
    }
     
    res.send(`no. of healthy kidney : ${reqd.kidney.length} out of which ${ans} works fine`)
})

app.post('/', (req, res) =>{
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({healthy:isHealthy})
    res.json({
        msg:"done"
    })

})

app.put('/', (req, res)=>{
    for (let i = 0; i < users[0].kidney.length;i++) {
        users[0].kidney[i].healthy = true;
        res.json({})
    }
   

})

app.delete('/', (req,res) =>{

    if(isUnhealthy()){

        const name = req.query.name;
        
        const reqd = users.find((user)=>user.Pname==name);
        
        reqd.kidney=reqd.kidney.filter((val)=>val.healthy != false);
   
        
        res.send("deleted successfully kidney");
        console.log((reqd));
        res.json({msg:"deleted successfully kidney"});
    } 
    else{
        res.json({msg:"you dont have unhealthy kidney"});
    }
     

    
    
    

})
function isUnhealthy(){
    let present = false;
    for(let i = 0; i< users[0].kidney.length; i++) {
        if(users[0].kidney.isHealthy === false) return true;

    }
    return false;
}


app.listen(port);
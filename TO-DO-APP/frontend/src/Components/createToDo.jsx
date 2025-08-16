import { useState } from "react";



function CreateToDo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div style={{ display:"flex" ,flexDirection: "column", border:"1px solid black", gap:"10px", padding:"15px"} }>
            <h1>Kuch Karle Beta!</h1>
            <input onClick={(e)=>setTitle(e.target.value)} type="text" placeholder="title" />
            <input onClick={(e)=>setDescription(e.target.value)} type="text" placeholder="description" />
            
            <button onClick={async()=>{
                const response = await fetch("http://localhost:3000/todo",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        title,
                        description,
                        completed:false
                    })

                });
                const data = await response.json();
                if(data) console.log("todo created");
                
            }}>Add a Todo</button>

        </div>  
    )
}

export default CreateToDo;
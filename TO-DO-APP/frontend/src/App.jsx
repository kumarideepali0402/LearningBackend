import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateToDo from './Components/createToDo'
import Todos from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{fetch("http://localhost:3000/todos")
      .then( (res) => res.json())
      .then((data)=>{setTodos(data.todos)})
      .catch((err)=>{console.log("error fetching todos", err);
      });
    }, [])
      
      

  return (
    <div style={{display:"flex", flexDirection:"column", border: "1px solid black" ,height:"100vh",justifyContent:"center", alignItems:"center"}}>
      <CreateToDo/>
      <Todos todos ={todos}/>
    </div>
  )
}

export default App

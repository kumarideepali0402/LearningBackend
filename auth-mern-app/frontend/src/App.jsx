import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
    
  )
}

export default App;

import React from 'react'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'

function Signup() {
    return(
        <div className='container'>
           
            <h1>SignUp</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    name="name" 
                    autoFocus 
                    placeholder='Enter Your Name'/>

                </div>
                <div>
                    <label htmlFor="email">Name</label>
                    <input type="email" 
                    name="email" 
                    placeholder='Enter Your Email'/>

                </div>
                <div>
                    <label htmlFor="password">Name</label>
                    <input type="text" 
                    name="password" 
                    placeholder='Enter Your Password'/>

                </div>
                <button>Signup</button>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>

            </form>
            <ToastContainer/>
            
        </div>
    )
}

export default Signup
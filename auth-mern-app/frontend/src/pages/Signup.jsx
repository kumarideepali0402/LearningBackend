import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils'


function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email : '',
        password : ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] =  value;
        setSignupInfo(copySignupInfo);
        

    } 
    console.log("signup Info : " ,signupInfo);

    const handleSignup= async(e) =>{
        e.preventDefault();
        const {name, email, password} = signupInfo;
        if (!name || !email || !password){
            return handleError("Please fill all details");
        }
        try {
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { msg} = result;
            if(msg){
                console.log('getting triggered');
                
                handleSuccess(msg);
                setTimeout(()=>{
                    navigate('/login')
                }, 1000);
            }
            else if(error) {
                const details = error?.details[0].msg;
                handleError(details);
            }else if(!success){
                handleError(message);
            }
            console.log(result);
            


            
        } catch (error) {
            handleError(error)
            
        }

    }
    





    return(
        <div className='container'>
           
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="name" 
                        autoFocus 
                        placeholder='Enter Your Name'/>

                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={handleChange}
                    type="email" 
                    name="email" 
                    placeholder='Enter Your Email'/>

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={handleChange}
                    type="password" 
                    name="password" 
                    placeholder='Enter Your Password'/>

                </div>
                <button>Signup</button>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>

            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                draggable
                pauseOnHover
                theme="light"
            />
            
            
        </div>
    )
}

export default Signup;
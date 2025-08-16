import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils'


function Login() {
    const [loginInfo, setLoginInfo] = useState({
        
        email : '',
        password : ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] =  value;
        setLoginInfo(copyLoginInfo);
        

    } 
    console.log("login Info : " ,loginInfo);

    const handleLogin= async(e) =>{
        e.preventDefault();
        const { email, password} = loginInfo;
        if ( !email || !password){
            return handleError("Please fill all details");
        }
        try {
            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, msg ,name,jwtToken, error} = result;
            if(success){
                console.log('getting triggered');
                
                handleSuccess(msg);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(()=>{
                    navigate('/home')
                }, 1000);
            }
            else if(error) {
                const details = error?.details[0].msg;
                handleError(details);
            }else {
                handleError(msg);
            }
            console.log(result);
            


            
        } catch (error) {
            handleError(error)
            
        }

    }
    





    return(
        <div className='container'>
           
            <h1>LogIn</h1>
            <form onSubmit={handleLogin}>
                
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
                <button>LogIn</button>
                <span>Don't have an account ?
                    <Link to="/signup">Signup</Link>
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

export default Login;
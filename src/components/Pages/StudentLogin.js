import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './StudentLogin.module.css'

const Student = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const studentHandleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  

    return(
        <div className="background">
        <h2>Login</h2>
        <form className="login-form" onSubmit={studentHandleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            
           {email && pass &&  <NavLink to='/studentDetails'><button type="submit">Log In</button></NavLink>}
        </form>
        <NavLink to="studentRegister">Don't have an account</NavLink><br></br>
        <NavLink to='studentForgot'> forgot password</NavLink>
        
       
    </div>






    
    
       
        
    
        
      
    )

}
export default Student
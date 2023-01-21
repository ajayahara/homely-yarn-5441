import React from 'react'
import { useState } from 'react'
import "./Login.css"
export const Login = () => {
    const iniUser={
        email:"abak00350@gmail.com",
        password:"Ajaya@111",
        confirm_password:"Ajaya@111",
    }
    const [user,setUser]=useState(iniUser)
    return (
        <div className='login'>
            <div className='login-header'>
                SIGN IN
            </div>
            <form className='login-form'>
                <div>
                <input type="text" placeholder='Email Address' required defaultValue={user.email} />
                </div>
                <div>
                <input type="password" placeholder='Password' required defaultValue={user.password}/>
                </div>
                <div>
                <input type="password" placeholder='Confirm Password' required defaultValue={user.confirm_password}/>
                </div>
                <div className='div-agree'>
                    <input type="checkbox" checked />
                    <label>I agree to the receive news letters from ASAV</label>
                </div>
                <div className='submit-button'>
                    <input type="submit" value={"Login"}/>
                </div>
            </form>
            <hr />
            <div className='sign-link'>
                <span>Have no account?</span><span><a href="/register">Sign up</a></span>
            </div>
        </div>
    )
}

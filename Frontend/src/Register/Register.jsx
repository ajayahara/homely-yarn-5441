import React, { useState } from 'react'
import "./Register.css"
export const Register = () => {
    const iniUser = {
        email: "abak00350@gmail.com",
        password: "Ajaya@111",
        mobile: 6370014498,
        name: "Ajaya Kumar Behera",
        type:""
    }
    const [user, setUser] = useState(iniUser)
    console.log(user)
    return (
        <div className='login'>
            <div className='login-header'>
                SIGN UP
            </div>
            <form className='register-form'>
                <div>
                    <input type="text" placeholder='Name' required defaultValue={user.name} />
                </div>
                <div>
                    <input type="text" placeholder='Email Address' required defaultValue={user.email} />
                </div>
                <div>
                    <input type="number" placeholder='Mobile' required defaultValue={user.mobile} />
                </div>
                <div>
                    <input type="password" placeholder='Password' required defaultValue={user.password} />
                </div>
                <div>
                    <select name="" id="" value={user.type} onChange={(e)=>{
                        setUser({...user,type:e.target.value})
                    }}>
                        <option value="">Select Type</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div>
                     <input type="text" placeholder='Provide Secret Key For Admin' required disabled={user.type!=="Admin"} />
                </div>
                <div className='div-agree'>
                    <input type="checkbox" defaultChecked />
                    <label>I agree to the receive news letters from ASAV</label>
                </div>
                <div className='submit-button'>
                    <input type="submit" value={"Register"} />
                </div>
            </form>
            <hr />
            <div className='sign-link'>
                <span>Have no account?</span><span><a href="/login">Sign in</a></span>
            </div>
        </div>
    )
}

import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./Register.css"
export const Register = () => {
    const iniUser = {
        email: "abak00350@gmail.com",
        password: "Ajaya@111",
        mobile: 6370014498,
        name: "Ajaya Kumar Behera",
        type: ""
    }
    const toast = useToast()
    const [user, setUser] = useState(iniUser)
    const [key, setKey] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.type === "") {
            toast({
                title: 'Registration',
                description: "Please Select A Type",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
            return;
        }
        if (user.type === "Admin" && key !== "NEM_111_PROJECT") {
            toast({
                title: 'Registration',
                description: "Incorrect Key",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            })
            return;
        }
        const payload = {
            email: user.email,
            pwd: user.password,
            name: user.name,
            type: user.type,
            mobile: user.mobile
        }
        fetch("https://cyan-splendid-kingfisher.cyclic.app/login/adddetails", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
        setUser(iniUser)
    }
    return (
        (localStorage.getItem("token"))? <Navigate to={"/"}/> :   <div className='login'>
            <div className='login-header'>
                SIGN UP
            </div>
            <form className='register-form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Name' required value={user.name} onChange={(e) => {
                        setUser({ ...user, name: e.target.value })
                    }} />
                </div>
                <div>
                    <input type="text" placeholder='Email Address' required value={user.email} onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }} />
                </div>
                <div>
                    <input type="number" placeholder='Mobile' required value={user.mobile} onChange={(e) => {
                        setUser({ ...user, mobile: e.target.value })
                    }} />
                </div>
                <div>
                    <input type="password" placeholder='Password' required value={user.password} onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }} />
                </div>
                <div>
                    <select name="" id="" value={user.type} onChange={(e) => {
                        setUser({ ...user, type: e.target.value })
                    }}>
                        <option value="">Select Type</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div>
                    <input type="password" placeholder='Provide Secret Key For Admin' required disabled={user.type !== "Admin"} onChange={(e)=>{
                        setKey(e.target.value)
                    }} />
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

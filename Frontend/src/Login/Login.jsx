import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import "./Login.css"
export const Login = () => {
    const iniUser={
        email:"abak00350@gmail.com",
        password:"Ajaya@111",
        confirm_password:"Ajaya@111",
    }
    const [user,setUser]=useState(iniUser);
    const toast=useToast()
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.password!==user.confirm_password){
            toast({
                title: 'Login',
                description: "Password And Confirm Password Are Not Same",
                status:'error',
                duration: 3000,
                isClosable: true,
                position:'top',
              })
            return;
        }
        const payload={
            email:user.email,
            pwd:user.password
        }
        fetch("",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-type':'application/json'
            }
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
        setUser(iniUser)
    }

    return (
        <div className='login'>
            <div className='login-header'>
                SIGN IN
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                <input type="text" placeholder='Email Address' required value={user.email} onChange={(e)=>{
                    setUser({...user,email:e.target.value})
                }} />
                </div>
                <div>
                <input type="password" placeholder='Password' required value={user.password} onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}/>
                </div>
                <div>
                <input type="password" placeholder='Confirm Password' required value={user.confirm_password} onChange={(e)=>{
                    setUser({...user,confirm_password:e.target.value})
                }} />
                </div>
                <div className='div-agree'>
                    <input type="checkbox" defaultChecked disabled />
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

import React, { useState } from 'react'
import styles from './signUp.module.css'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {

    const [user,setUser]=useState({
        username:"",
        phone:"",
        email:"",
        password:"",
        
    });
    const router=useNavigate();
    const changeHandler=(e)=>{

        const name=e.target.name;
        const value=e.target.value;
        setUser({
            ...user,
            [name]: value
        })

    }
    const submitHandler=async(e)=>{
        e.preventDefault();

    try {
        const data= await fetch("http://localhost:8080/api/auth/register",{
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
       if(data.ok){
        setUser({
            username:"",
            email:"",
            phone:"",
            password:"",
        });
        router("/login")

       }
    } catch (error) {
        console.log(error);
    }
        
    }
  return (
    <div className={styles.container}>
    <div className={styles.leftSide}>
    <img
    
    src='/images/1.jpg'
    />
    </div>
    <div className={styles.rightSide}>  
   
    <form onSubmit={submitHandler}>
    
    <p className={styles.title}>Sign Up</p>
    <div>
    <label htmlFor='username'>UserName :</label>
        <input
        id='username'
        type='text'
        className='username'
        name='username'
        value={user.username}
        onChange={changeHandler}
        />
    </div>
    <div>
    <label htmlFor='email'>Email :</label>
        <input
        id='email'
        type='email'
        className='email'
        name='email'
        value={user.email}
        onChange={changeHandler}
        />
    </div>
    <div>
    <label htmlFor='phone'>Phone :</label>
        <input
        id='phone'
        type='number'
        min={"11"}
        className='phone'
        name='phone'
        value={user.phone}
        onChange={changeHandler}
        />
    </div>
    <div>
    <label htmlFor='password'>Password :</label>
        <input
        id='password'
        type='password'
        className='password'
        name='password'
        value={user.password}
        onChange={changeHandler}
        />
    </div>
    <div>
        <input
        type='submit'
        name='submit'
        className='submit'
        value={"Register"}
        
        />
    </div>
</form></div>
  
    </div>
  )
}

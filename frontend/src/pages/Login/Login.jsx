import React, { useEffect, useState } from 'react'
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth.jsx';

export default function Login() {
 


    const [laoding,setLoading] = useState(false);
   
    const router=useNavigate();
   const {storeTokenInLs,print,}=useAuth();
  
    const [user,setUser]=useState({
        
        email:"",
        password:"",
        
    });
    const changeHandler=(e)=>{

        const name=e.target.name;
        const value=e.target.value;
        setUser({
            ...user,
            [name]: value
        })

    }
    
   

    const submitHandler= async (e)=>{
        e.preventDefault();

      
        
        try {
            setLoading(true);
            const data=await fetch('http://localhost:8080/api/auth/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });
       
        if(data.ok){
            const response= await data.json();
            
            setLoading(false);
            setUser({email:"",password:"" });
            storeTokenInLs(response.token);
            
            router("/");
           
            


        }
        } catch (error) {
            
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
    
    <p className={styles.title}>Sign In</p>
   
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
        value={laoding?"Loging in...":"Login"}
        
        />
    </div>
</form>

   
   

</div>
  
    </div>
  )
}

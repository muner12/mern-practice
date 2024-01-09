import React, { useState } from 'react'
import styles from "./contact.module.css";
import { useAuth } from '../../store/auth';

export default function Contact() {
  const {authUserData}=useAuth();
  console.log(authUserData);
const [contact,setContact]=useState({
  username:authUserData.username,
  email:authUserData.email,
  message:""

});


const changeHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setContact({
    ...contact,
    [name]:value
  })
}

const submitHandler=async(e)=>{

  console.log(contact);

  try {
    const response=await fetch("")
    //error
  } catch (error) {
    
  }

  e.preventDefault();
}

  return (
    <div className={styles.container}>

    <div className={styles.hero}>

    <div className={styles.heroImg}>
    <img src="/images/services.jpg"/>
    </div>

    <div className={styles.heroForm}>

    <form onSubmit={submitHandler}>
      <label htmlFor='username'>Username</label>
      <input 
      type='text'
       name='username'
       placeholder='username'
        id='username'
        value={contact.username}
        onChange={changeHandler}

        />
      <label htmlFor='email'>email</label>
      <input 
      type='text' 
      name='email' 
      placeholder='email'
       id='email'
       value={contact.email}
        onChange={changeHandler}
       />
      <label htmlFor='message'>Message</label>
      <textarea
       name='message'
        id='message'
         placeholder='message write here...' 
         rows={8} 
         cols={26}
         value={contact.message}
        onChange={changeHandler}
         ></textarea>

         <button className={styles.btn}>Submit</button>

    </form>
    
    </div>

    </div>
    
    </div>
  )
}

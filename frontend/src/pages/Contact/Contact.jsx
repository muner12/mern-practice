import React, { useState } from 'react'
import styles from "./contact.module.css";
import { useAuth } from '../../store/auth';

export default  function Contact() {



  const defaultFormData={
    username: '',
    email: '',
    message: '',
  }
  const {authUserData}=useAuth();
   const[userData,setUserData]=useState(true);
  const [contact,setContact]=useState(defaultFormData);

   if(authUserData && userData){
      setContact({
        username: authUserData.username,
        email: authUserData.email,
        message:""
      })

      setUserData(false);
   }



const changeHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setContact({
    ...contact,
    [name]:value
  })
}

const submitHandler=async(e)=>{
  e.preventDefault();


  try {
    const contact_api_url=import.meta.env.VITE_BACKEND_URL
    const response=await fetch(`${contact_api_url}/contact`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(contact)
    }
    )
    if (response.ok && response.status === 200) {
      alert('Message sent successfully');
      setContact({username:contact.username, email:contact.email,message:""});
    }
    //error
  } catch (error) {
    console.log(error);
    
  }

  
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

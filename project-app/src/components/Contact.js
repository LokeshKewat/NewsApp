import React from 'react'
import { useState } from 'react';

export default function Contact() {
  const[user,setuser]=useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  })

  const postDataOnFirebase = async (e) =>{
    
    e.preventDefault();
    const res = await fetch(
     " https://database-1e02f-default-rtdb.firebaseio.com/database.json",
     {
      method:"POST",
      header:"Contact-Type:application/json",
      body:JSON.stringify({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phone:user.phone
      })
     }
    )
    if(res) {
      setuser({
        name: "",
        lastname: "",
        email: "",
        phone: ""

      })
      alert("data stored successful!!")
    }
  }
  const getUserData = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setuser({...user,[name]: value})
  }

  return (
<div className='backpage'>
      <div className='contactdiv'>
        <h2>Contact Us</h2>
        <p>We will get back to you asap!</p><br/>
        <div>
          <form>
          <input className='lokesh' type="text" name='name' value={user.name} onChange={getUserData} placeholder='First Name' required/>
          <input className='kewat' type="text" name='lastname' value={user.lastname} onChange={getUserData} placeholder='Last Name' required /><br/>
          <input className='noriya' type="email" name='email' value={user.email} onChange={getUserData} placeholder='✉️Email' required/><br/>
          <input className='number' type="tel" name='phone' value={user.phone} onChange={getUserData} placeholder='📞Phone' required/><br/>
          <button className='sendbox' type="submit" onClick={ postDataOnFirebase} >Send</button>
          </form>
        </div>
        <p id="secound">You may also call us at 333-33-33 </p>
        
       
      </div>
      </div>
    )



  
}

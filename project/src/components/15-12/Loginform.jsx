
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Router, useNavigate } from 'react-router-dom';


const Loginform = () => {

const [logindata, stelogindata]= useState({ email:"",password:""});
console.log(logindata, "logindata")
const router = useNavigate();


 function handlechange (e){
    // console.log(e.target.value)
    stelogindata({...logindata,[e.target.name]: e.target.value})

 }
 async function handlesubmit(e){
    e.preventDefault();
    if(logindata.email && logindata.password){

        try{
            //  const response= await axios.post('http:localhost:8000/login',{ logindata})
            const response ={data: {success:true,message:"login succesfull."}}
             if(response.data.success){
                toast.success(response.data.message)
                stelogindata({email:"",password:""})
                router('/')
             }
        }catch(error){
            console.log(error)
            toast.error(error.response.data.error)
        }

    }else{
        alert("all fields are mandatory")
    }
 }




  return (
    <div>
        
        <h1>login</h1>
      <form onSubmit={handlesubmit}>
          
      <label>email</label><br/>
        <input type='email' required onChange={handlechange} name='email' value={logindata.email}/><br/>
        <label>password</label><br/>
        <input type='password' required onChange={handlechange} name='password' value={logindata.password}/><br/>
        <input type='submit' value='login'/>
      </form>
        
    </div>
  )
}

export default Loginform
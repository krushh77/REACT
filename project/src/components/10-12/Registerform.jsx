import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const Router = useNavigate();

    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmpassword: "" })
    console.log(userData, "userData")
    async function handleSubmit(e) {
        e.preventDefault();

        if (userData.name && userData.email && userData.password && userData.confirmpassword) {


            if (userData.password === userData.confirmpassword) {
                try {
                    //   const responce = await axios.post('htttp://localhost:8000/Register', {userData})
                    const responce = { data: { succes: true, message: "registration complete" } }

                    if (responce.data.succes === true) {
                        alert(responce.data.message)
                        setUserData({ name: "", email: "", password: "", confirmpassword: "" })
                        Router('/login')
                    }
                }
                catch (error) {
                    console.log(error)
                    alert(error.responce.data.messege)
                }

            } else {
                alert("password and confirm password not match")
            }

        } else {
            alert("all fields are required")
        }

    }

    function handleChange(e) {
        // console.log(e.target.value, e.target.name)
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type='text' required onChange={handleChange} name="name" value={userData.name} /><br />
                <label>Email :</label><br />
                <input type='email' required onChange={handleChange} name='email' value={userData.email} /><br />
                <label>Password</label><br />
                <input type='password' required onChange={handleChange} name='password' value={userData.password} /><br />
                <label>confirm Password</label><br />
                <input type='password' required onChange={handleChange} name='confirmpassword' value={userData.confirmpassword} /><br />
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm
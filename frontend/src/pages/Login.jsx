import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const loginCheck = async () =>{
        const URL = "http://localhost:5000/student/auth/login"
try{
  await axios.post(URL,formData).then(res => {
    console.log(res.data);
    console.log(res.status);
    window.location.href = '/homepage'
    
    return res.status
  })
}catch(error){
  alert("Invalid credentials");
}
        


        
        
      }
      const handleLogin = (e) =>{
        e.preventDefault();
        console.log(formData)

        const login = loginCheck();

        if(login == 200){
          console.log('login')
          window.location.href = 'http://localhost:5000/homepage'
        }

        

        
      }
  return (
    <div className='form'>
        <input type='email' name="email" placeholder='Email' onChange = {handleChange} />
        <input type='password' name="password" placeholder='Password' onChange = {handleChange} />
        <input onClick={handleLogin} type='submit'/>
    </div>
  )
}

export default Login